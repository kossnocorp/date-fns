#!/bin/sh

# Workaround for Windows 10, Git Bash and Yarn
# https://typicode.github.io/husky/#/?id=yarn-on-windows
if command -v winpty > /dev/null && test -t 1; then
  exec < /dev/tty
fi
