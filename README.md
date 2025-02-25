# Cursor 设备ID重置工具 (Node.js Web 版本)

一个基于 Web 的实用工具，帮助管理 Cursor 编辑器的设备识别系统，通过重置存储的设备 ID 来解决账户限制问题。

## 特性

- 🌐 简单的 Web 界面进行设备 ID 重置
- 🔄 自动生成随机设备 ID
- 📦 自动备份原始配置
- 🖥️ 跨平台支持（Windows、macOS、Linux）

## 前提条件

- Node.js（14 或更高版本）
- npm（Node 包管理器）

## 安装

1. 克隆仓库
```bash
git clone https://github.com/zhangrongwu/cursor-reset.git
cd cursor-reset
```

2. 安装依赖
```bash
npm install
```

## 使用方法

1. 启动服务器
```bash
npm start
```

2. 在浏览器中打开 `http://localhost:端口号`

3. 点击 "重置设备 ID" 按钮

## 重要提示

- 在重置设备 ID 之前，请确保 Cursor 已完全关闭
- 工具会在更改之前创建配置文件的备份

## 配置文件位置

工具会根据您的操作系统自动检测配置文件：

- **Windows**: `%APPDATA%\Cursor\User\globalStorage\storage.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/storage.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/storage.json`

## 免责声明

此工具仅用于研究和教育目的。请谨慎使用。

## 许可证

[在此指定您的许可证]

## 多语言支持

- [English Documentation](README.md)
