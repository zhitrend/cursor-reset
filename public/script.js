document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('reset-btn');
    const statusMessage = document.getElementById('status-message');
    const deviceIdDisplay = document.getElementById('device-id-display');
    const backupFileDisplay = document.getElementById('backup-file-display');

    resetBtn.addEventListener('click', async () => {
        // Reset UI
        statusMessage.textContent = '正在重置设备ID...';
        statusMessage.style.color = 'blue';
        deviceIdDisplay.textContent = '';
        backupFileDisplay.textContent = '';
        resetBtn.disabled = true;

        try {
            const response = await fetch('/reset', { method: 'POST' });
            const data = await response.json();

            if (data.success) {
                statusMessage.textContent = '✅ 设备ID重置成功！';
                statusMessage.style.color = 'green';
                
                deviceIdDisplay.innerHTML = `
                    <strong>新的设备ID:</strong> 
                    <span style="word-break: break-all;">${data.newDeviceId}</span>
                `;
                
                backupFileDisplay.innerHTML = `
                    <strong>备份文件:</strong> 
                    <span style="word-break: break-all;">${data.backupFile}</span>
                `;

                // Optional: Add a copy to clipboard button for the new device ID
                const copyButton = document.createElement('button');
                copyButton.textContent = '复制设备ID';
                copyButton.style.marginLeft = '10px';
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(data.newDeviceId).then(() => {
                        copyButton.textContent = '已复制';
                        setTimeout(() => {
                            copyButton.textContent = '复制设备ID';
                        }, 2000);
                    });
                });
                deviceIdDisplay.appendChild(copyButton);

            } else {
                throw new Error(data.error || '未知错误');
            }
        } catch (error) {
            statusMessage.textContent = `❌ 重置失败: ${error.message}`;
            statusMessage.style.color = 'red';
            
            // Optional: Add more detailed error information
            deviceIdDisplay.innerHTML = `
                <strong>错误详情:</strong>
                <p style="color: red; word-break: break-all;">${error.message}</p>
            `;
        } finally {
            resetBtn.disabled = false;
        }
    });
});
