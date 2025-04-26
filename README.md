<p align="center">

[![Release](https://img.shields.io/endpoint?url=https://www.pinnumber.rr.nu/badges/release/yeongpin/cursor-free-vip)](https://github.com/canmi21/cursor/releases/latest)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Stars](https://img.shields.io/endpoint?url=https://www.pinnumber.rr.nu/badges/stars/yeongpin/cursor-free-vip)](https://github.com/canmi21/cursor/stargazers)
[![Downloads](https://img.shields.io/endpoint?url=https://www.pinnumber.rr.nu/badges/downloads/yeongpin/cursor-free-vip/total)](https://github.com/canmi21/cursor/releases/latest)

</p>

<a href="https://trendshift.io/repositories/13425" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13425" alt="yeongpin%2Fcursor-free-vip | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

 ***1.9.05版本最后的备份，切用且珍惜***

## 💻 System Support | 系統支持

| Operating System | Architecture      | Supported |
|------------------|-------------------|-----------|
| Windows          | x64, x86          | ✅         |
| macOS            | Intel, Apple Silicon | ✅      |
| Linux            | x64, x86, ARM64   | ✅         |

## 👀 How to use | 如何使用

<details open>
<summary><b>⭐ Auto Run Script | 腳本自動化運行</b></summary>

### **Linux/macOS**

```bash
curl -fsSL https://raw.githubusercontent.com/canmi21/cursor/main/scripts/install.sh -o install.sh && chmod +x install.sh && ./install.sh
```

### **Archlinux**

Install via [AUR](https://aur.archlinux.org/packages/cursor-free-vip-git)

```bash
yay -S cursor-free-vip-git

```

### **Windows**

```powershell
irm https://raw.githubusercontent.com/canmi21/cursor/main/scripts/install.ps1 | iex
```

</details>

<details>
<summary><b>⭐ Manual Reset Machine | 手動運行重置機器</b></summary>

### **Linux/macOS**

```bash
curl -fsSL https://raw.githubusercontent.com/canmi21/cursor/main/scripts/reset.sh | sudo bash
```

### **Windows**

```powershell
irm https://raw.githubusercontent.com/canmi21/cursor/main/scripts/reset.ps1 | iex
```

</details>

If you want to stop the script, please press Ctrl+C<br>要停止腳本，請按 Ctrl+C

## ❗ Note | 注意事項

📝 Config | 文件配置
`Win / Macos / Linux Path | 路徑 [Documents/.cursor-free-vip/config.ini]`
<details>
<summary><b>⭐ Config | 文件配置</b></summary>

```
[Chrome]
# Default Google Chrome Path | 默認Google Chrome 遊覽器路徑
chromepath = C:\Program Files\Google/Chrome/Application/chrome.exe

[Turnstile]
# Handle Turnstile Wait Time | 等待人機驗證時間
handle_turnstile_time = 2
# Handle Turnstile Wait Random Time (must merge 1-3 or 1,3) | 等待人機驗證隨機時間（必須是 1-3 或者 1,3 這樣的組合）
handle_turnstile_random_time = 1-3

[OSPaths]
# Storage Path | 存儲路徑
storage_path = /Users/username/Library/Application Support/Cursor/User/globalStorage/storage.json
# SQLite Path | SQLite路徑
sqlite_path = /Users/username/Library/Application Support/Cursor/User/globalStorage/state.vscdb
# Machine ID Path | 機器ID路徑
machine_id_path = /Users/username/Library/Application Support/Cursor/machineId
# For Linux users: ~/.config/cursor/machineid

[Timing]
# Min Random Time | 最小隨機時間
min_random_time = 0.1
# Max Random Time | 最大隨機時間
max_random_time = 0.8
# Page Load Wait | 頁面加載等待時間
page_load_wait = 0.1-0.8
# Input Wait | 輸入等待時間
input_wait = 0.3-0.8
# Submit Wait | 提交等待時間
submit_wait = 0.5-1.5
# Verification Code Input | 驗證碼輸入等待時間
verification_code_input = 0.1-0.3
# Verification Success Wait | 驗證成功等待時間
verification_success_wait = 2-3
# Verification Retry Wait | 驗證重試等待時間
verification_retry_wait = 2-3
# Email Check Initial Wait | 郵件檢查初始等待時間
email_check_initial_wait = 4-6
# Email Refresh Wait | 郵件刷新等待時間
email_refresh_wait = 2-4
# Settings Page Load Wait | 設置頁面加載等待時間
settings_page_load_wait = 1-2
# Failed Retry Time | 失敗重試時間
failed_retry_time = 0.5-1
# Retry Interval | 重試間隔
retry_interval = 8-12
# Max Timeout | 最大超時時間
max_timeout = 160

[Utils]
# Check Update | 檢查更新
check_update = True
# Show Account Info | 顯示賬號信息
show_account_info = True

[WindowsPaths]
storage_path = C:\Users\yeongpin\AppData\Roaming\Cursor\User\globalStorage\storage.json
sqlite_path = C:\Users\yeongpin\AppData\Roaming\Cursor\User\globalStorage\state.vscdb
machine_id_path = C:\Users\yeongpin\AppData\Roaming\Cursor\machineId
cursor_path = C:\Users\yeongpin\AppData\Local\Programs\Cursor\resources\app
updater_path = C:\Users\yeongpin\AppData\Local\cursor-updater
update_yml_path = C:\Users\yeongpin\AppData\Local\Programs\Cursor\resources\app-update.yml
product_json_path = C:\Users\yeongpin\AppData\Local\Programs\Cursor\resources\app\product.json

[Browser]
default_browser = opera
chrome_path = C:\Program Files\Google\Chrome\Application\chrome.exe
edge_path = C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
firefox_path = C:\Program Files\Mozilla Firefox\firefox.exe
brave_path = C:\Program Files\BraveSoftware/Brave-Browser/Application/brave.exe
chrome_driver_path = D:\VisualCode\cursor-free-vip-new\drivers\chromedriver.exe
edge_driver_path = D:\VisualCode\cursor-free-vip-new\drivers\msedgedriver.exe
firefox_driver_path = D:\VisualCode\cursor-free-vip-new\drivers\geckodriver.exe
brave_driver_path = D:\VisualCode\cursor-free-vip-new\drivers\chromedriver.exe
opera_path = C:\Users\yeongpin\AppData\Local\Programs\Opera\opera.exe
opera_driver_path = D:\VisualCode\cursor-free-vip-new\drivers\chromedriver.exe

[OAuth]
show_selection_alert = False
timeout = 120
max_attempts = 3
```

</details>

## 📩 Disclaimer | 免責聲明

本工具僅供學習和研究使用，使用本工具所產生的任何後果由使用者自行承擔。 <br>

This tool is only for learning and research purposes, and any consequences arising from the use of this tool are borne
by the user.

## ⭐ Star History | 星星數

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=canmi21/cursor&type=Date)](https://star-history.com/#canmi21/cursor&Date)

</div>

## 📝 License | 授權

本項目採用 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) 授權。
Please refer to the [LICENSE](LICENSE.md) file for details.