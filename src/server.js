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

// Get storage file path based on OS and editor
function getStorageFilePath(editor) {
  const platform = os.platform();
  const baseDir = editor === 'windsurf' 
    ? 'Windsurf' 
    : 'Cursor';

  switch (platform) {
    case 'win32':
      return path.join(process.env.APPDATA || '', baseDir, 'User', 'globalStorage', 'storage.json');
    case 'darwin':
      return path.join(os.homedir(), 'Library', 'Application Support', baseDir, 'User', 'globalStorage', 'storage.json');
    case 'linux':
      return path.join(os.homedir(), '.config', baseDir, 'User', 'globalStorage', 'storage.json');
    default:
      throw new Error(`不支持的操作系统: ${platform}`);
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
      return '没有找到现有文件进行备份';
    }

    const timestamp = new Date().toISOString().replace(/[:\.]/g, '_');
    const backupPath = `${filePath}.backup_${timestamp}`;
    
    await fs.copyFile(filePath, backupPath);
    return backupPath;
  } catch (error) {
    console.error('备份失败:', error);
    return `备份失败: ${error.message}`;
  }
}

// Generic reset function for different editors
async function resetDeviceId(editor) {
  const storagePath = getStorageFilePath(editor);
  
  // 检查是否有权限访问目标目录
  try {
    await fs.access(path.dirname(storagePath), fs.constants.W_OK);
  } catch (accessError) {
    throw new Error(`无法访问${editor}配置文件目录。请检查权限: ${accessError.message}`);
  }
  
  // Backup existing file
  const backupResult = await backupFile(storagePath);
  
  // Read existing data or create new
  let data = {};
  try {
    data = JSON.parse(await fs.readFile(storagePath, 'utf8'));
  } catch (readError) {
    if (readError.code !== 'ENOENT') {
      throw new Error(`读取${editor}配置文件失败: ${readError.message}`);
    }
  }
  
  // Generate new device ID
  const newDeviceId = uuidv4();
  
  // Update or add device ID
  data.deviceId = newDeviceId;
  
  // Write updated data
  try {
    await fs.writeFile(storagePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (writeError) {
    throw new Error(`写入新的${editor}设备ID失败: ${writeError.message}`);
  }
  
  return { newDeviceId, backupFile: backupResult };
}

// Reset routes for different editors
app.post('/reset-cursor', async (req, res) => {
  try {
    const result = await resetDeviceId('cursor');
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Cursor重置失败:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

app.post('/reset-windsurf', async (req, res) => {
  try {
    const result = await resetDeviceId('windsurf');
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Windsurf重置失败:', error);
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
  console.log(`编辑器重置工具正在运行于 http://localhost:${port}`);
});
