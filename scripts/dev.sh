#!/usr/bin/env zsh

# 创建软链接到主题目录
cd exampleSite
mkdir -p themes
ln -sf ../.. themes/hermeneutics

# 启动Hugo服务器
hugo server \
  --buildDrafts \
  --disableFastRender \
  --navigateToChanged \
  --themesDir themes \
  --theme hermeneutics \
  --tlsCertFile /Users/chlorine/Dev/assets/local-cert/localhost+2.pem \
  --tlsKeyFile //Users/chlorine/Dev/assets/local-cert/localhost+2-key.pem