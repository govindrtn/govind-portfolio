#!/bin/sh

set -eu

PROJECT_ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
NODE_VERSION=$(tr -d '[:space:]' < "$PROJECT_ROOT/.nvmrc")
NVM_NODE="${NVM_DIR:-$HOME/.nvm}/versions/node/v$NODE_VERSION/bin/node"

if [ -x "$NVM_NODE" ]; then
  NODE_BIN=$NVM_NODE
elif command -v node >/dev/null 2>&1; then
  NODE_BIN=$(command -v node)
else
  echo "Node.js $NODE_VERSION is required. Install it with: nvm install $NODE_VERSION" >&2
  exit 1
fi

NODE_MAJOR=$("$NODE_BIN" -p "Number(process.versions.node.split('.')[0])")
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "Vite requires Node.js 18 or newer. Install the project version with: nvm install $NODE_VERSION" >&2
  exit 1
fi

exec "$NODE_BIN" "$PROJECT_ROOT/node_modules/vite/bin/vite.js" "$@"
