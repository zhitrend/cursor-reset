document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('reset-btn');
    const statusMessage = document.getElementById('status-message');
    const deviceIdDisplay = document.getElementById('device-id-display');
    const backupFileDisplay = document.getElementById('backup-file-display');

    resetBtn.addEventListener('click', async () => {
        // Reset UI
        statusMessage.textContent = 'Resetting device ID...';
        deviceIdDisplay.textContent = '';
        backupFileDisplay.textContent = '';
        resetBtn.disabled = true;

        try {
            const response = await fetch('/reset', { method: 'POST' });
            const data = await response.json();

            if (data.success) {
                statusMessage.textContent = 'Device ID successfully reset!';
                deviceIdDisplay.textContent = `New Device ID: ${data.newDeviceId}`;
                backupFileDisplay.textContent = `Backup File: ${data.backupFile}`;
                statusMessage.style.color = 'green';
            } else {
                throw new Error(data.error || 'Unknown error occurred');
            }
        } catch (error) {
            statusMessage.textContent = `Error: ${error.message}`;
            statusMessage.style.color = 'red';
        } finally {
            resetBtn.disabled = false;
        }
    });
});
