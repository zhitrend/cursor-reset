#!/bin/bash

# 安装脚本内容
echo "安装Cursor VIP工具..."

# 下载主程序
curl -fsSL https://github.com/zhitrend/cursor-reset/raw/cursor-vip/main.py -o cursor-vip.py

# 安装依赖
pip install -r requirements.txt

echo "安装完成！"
