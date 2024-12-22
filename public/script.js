document.addEventListener('DOMContentLoaded', () => {
    // Cursor Reset Function
    function setupReset(options) {
        const { 
            buttonId, 
            statusMessageId, 
            resultContainerId, 
            resetEndpoint 
        } = options;

        const resetBtn = document.getElementById(buttonId);
        const statusMessage = document.getElementById(statusMessageId);
        const resultContainer = document.getElementById(resultContainerId);

        resetBtn.addEventListener('click', async () => {
            // Reset UI
            statusMessage.textContent = '正在重置设备ID...';
            statusMessage.style.color = 'blue';
            resultContainer.innerHTML = '';
            resetBtn.disabled = true;

            try {
                const response = await fetch(resetEndpoint, { method: 'POST' });
                const data = await response.json();

                if (data.success) {
                    statusMessage.textContent = '✅ 设备ID重置成功！';
                    statusMessage.style.color = 'green';
                    
                    const deviceIdDisplay = document.createElement('div');
                    deviceIdDisplay.innerHTML = `
                        <strong>新的设备ID:</strong> 
                        <span style="word-break: break-all;">${data.newDeviceId}</span>
                    `;
                    
                    const backupFileDisplay = document.createElement('div');
                    backupFileDisplay.innerHTML = `
                        <strong>备份文件:</strong> 
                        <span style="word-break: break-all;">${data.backupFile}</span>
                    `;

                    // Copy to clipboard button
                    const copyButton = document.createElement('button');
                    copyButton.textContent = '复制设备ID';
                    copyButton.addEventListener('click', () => {
                        navigator.clipboard.writeText(data.newDeviceId).then(() => {
                            copyButton.textContent = '已复制';
                            setTimeout(() => {
                                copyButton.textContent = '复制设备ID';
                            }, 2000);
                        });
                    });

                    resultContainer.appendChild(deviceIdDisplay);
                    resultContainer.appendChild(backupFileDisplay);
                    resultContainer.appendChild(copyButton);

                } else {
                    throw new Error(data.error || '未知错误');
                }
            } catch (error) {
                statusMessage.textContent = `❌ 重置失败: ${error.message}`;
                statusMessage.style.color = 'red';
                
                const errorDisplay = document.createElement('div');
                errorDisplay.innerHTML = `
                    <strong>错误详情:</strong>
                    <p style="color: red; word-break: break-all;">${error.message}</p>
                `;
                resultContainer.appendChild(errorDisplay);
            } finally {
                resetBtn.disabled = false;
            }
        });
    }

    // Setup Cursor Reset
    setupReset({
        buttonId: 'cursor-reset-btn',
        statusMessageId: 'cursor-status-message',
        resultContainerId: 'cursor-result-container',
        resetEndpoint: '/reset-cursor'
    });

    // Setup Windsurf Reset
    setupReset({
        buttonId: 'windsurf-reset-btn',
        statusMessageId: 'windsurf-status-message',
        resultContainerId: 'windsurf-result-container',
        resetEndpoint: '/reset-windsurf'
    });
});
