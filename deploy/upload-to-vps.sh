#!/usr/bin/env bash
set -euo pipefail

VPS_HOST="${1:?Usage: ./deploy/upload-to-vps.sh your.server.ip [user] [app_dir]}"
VPS_USER="${2:-root}"
APP_DIR="${3:-/var/www/career2day}"
SSH_TARGET="${VPS_USER}@${VPS_HOST}"

echo "Building Career2Day web app..."
npm run build --prefix apps/web

echo "Creating remote directories..."
ssh "$SSH_TARGET" "mkdir -p ${APP_DIR}/dist/apps/web ${APP_DIR}/apps/pocketbase/pb_migrations ${APP_DIR}/apps/pocketbase/pb_hooks ${APP_DIR}/apps/api"

echo "Uploading frontend build..."
scp -r dist/apps/web/* "${SSH_TARGET}:${APP_DIR}/dist/apps/web/"

echo "Uploading PocketBase migrations and hooks..."
scp -r apps/pocketbase/pb_migrations/* "${SSH_TARGET}:${APP_DIR}/apps/pocketbase/pb_migrations/"
scp -r apps/pocketbase/pb_hooks/* "${SSH_TARGET}:${APP_DIR}/apps/pocketbase/pb_hooks/"

echo "Uploading API source and package files..."
scp -r apps/api/src "${SSH_TARGET}:${APP_DIR}/apps/api/"
scp apps/api/package.json "${SSH_TARGET}:${APP_DIR}/apps/api/package.json"
if [ -f apps/api/package-lock.json ]; then
  scp apps/api/package-lock.json "${SSH_TARGET}:${APP_DIR}/apps/api/package-lock.json"
fi

echo "Installing API dependencies and restarting services..."
ssh "$SSH_TARGET" "cd ${APP_DIR}/apps/api && npm ci --omit=dev || npm install --omit=dev; cd ${APP_DIR}; pm2 restart career2day-api || true; pm2 restart career2day-pocketbase || true; nginx -t && systemctl reload nginx"

echo "Upload complete."
