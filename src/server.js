const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 0; // Use 0 to let OS assign a free port

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Get storage file path based on OS
function getStorageFilePath() {
  const platform = os.platform();
  switch (platform) {
    case 'win32':
      return path.join(process.env.APPDATA || '', 'Cursor', 'User', 'globalStorage', 'storage.json');
    case 'darwin':
      return path.join(os.homedir(), 'Library', 'Application Support', 'Cursor', 'User', 'globalStorage', 'storage.json');
    case 'linux':
      return path.join(os.homedir(), '.config', 'Cursor', 'User', 'globalStorage', 'storage.json');
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

// Backup file with timestamp
async function backupFile(filePath) {
  try {
    // Ensure directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Check if file exists before trying to backup
    const fileExists = await fs.access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      return 'No existing file to backup';
    }

    const timestamp = new Date().toISOString().replace(/[:\.]/g, '_');
    const backupPath = `${filePath}.backup_${timestamp}`;
    
    await fs.copyFile(filePath, backupPath);
    return backupPath;
  } catch (error) {
    console.error('Backup failed:', error);
    return `Backup failed: ${error.message}`;
  }
}

// Reset Cursor device ID
app.post('/reset', async (req, res) => {
  try {
    const storagePath = getStorageFilePath();
    
    // Backup existing file
    const backupResult = await backupFile(storagePath);
    
    // Read existing data or create new
    let data = {};
    try {
      data = JSON.parse(await fs.readFile(storagePath, 'utf8'));
    } catch (readError) {
      if (readError.code !== 'ENOENT') {
        throw readError;
      }
    }
    
    // Generate new device ID
    const newDeviceId = uuidv4();
    
    // Update or add device ID
    data.deviceId = newDeviceId;
    
    // Write updated data
    await fs.writeFile(storagePath, JSON.stringify(data, null, 2), 'utf8');
    
    res.json({
      success: true,
      newDeviceId,
      backupFile: backupResult
    });
  } catch (error) {
    console.error('Reset failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Create server and listen
const server = app.listen(PORT, 'localhost', function() {
  const port = server.address().port;
  console.log(`Cursor Reset Tool running on http://localhost:${port}`);
});
