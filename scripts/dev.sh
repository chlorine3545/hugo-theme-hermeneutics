#!/usr/bin/env zsh

# 启动Hugo服务器
hugo server \
  --buildDrafts \
  --disableFastRender \
  --source=exampleSite \
  --themesDir=../.. \
  --tlsCertFile $HOME/Dev/assets/local-cert/localhost+2.pem \
  --tlsKeyFile $HOME/Dev/assets/local-cert/localhost+2-key.pem