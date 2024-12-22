# Cursor Device ID Reset Tool (Node.js Web Version)

A web-based utility tool that helps manage Cursor editor's device identification system by resetting stored device IDs to resolve account restriction issues.

## Features

- 🌐 Simple web interface for device ID reset
- 🔄 Automatic random device ID generation
- 📦 Automatic backup of original configuration
- 🖥️ Cross-platform support (Windows, macOS, Linux)

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone https://github.com/zhangrongwu/cursor-reset.git
cd cursor-reset
```

2. Install dependencies
```bash
npm install
```

## Usage

1. Start the server
```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:port`

3. Click the "Reset Device ID" button

## Important Notes

- Ensure Cursor is completely closed before resetting the device ID
- The tool creates a backup of the existing configuration file before making changes

## Configuration Location

The tool automatically detects the configuration file based on your operating system:

- **Windows**: `%APPDATA%\Cursor\User\globalStorage\storage.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/storage.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/storage.json`

## Disclaimer

This tool is developed for research and educational purposes only. Use responsibly.

## License

[Specify your license here]

## Multilingual Support

- [中文文档](README.zh-CN.md)
