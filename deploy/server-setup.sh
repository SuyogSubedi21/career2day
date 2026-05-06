#!/usr/bin/env bash
set -euo pipefail

# Career2Day VPS bootstrap for Ubuntu 22.04/24.04.
# Run as root on the VPS:
#   bash /var/www/career2day/deploy/server-setup.sh

APP_DIR="/var/www/career2day"
DOMAIN="${DOMAIN:-career2day.com}"
PB_VERSION="${PB_VERSION:-0.36.7}"

echo "== Installing system packages =="
apt-get update -y
apt-get install -y curl git nginx ufw unzip ca-certificates

if ! command -v node >/dev/null 2>&1; then
  echo "== Installing Node.js 20 =="
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "== Installing PM2 =="
  npm install -g pm2
fi

echo "== Creating directories =="
mkdir -p "$APP_DIR/dist/apps/web"
mkdir -p "$APP_DIR/apps/api"
mkdir -p "$APP_DIR/apps/pocketbase/pb_data"
mkdir -p "$APP_DIR/apps/pocketbase/pb_migrations"
mkdir -p "$APP_DIR/apps/pocketbase/pb_hooks"

echo "== Installing PocketBase ${PB_VERSION} =="
cd "$APP_DIR/apps/pocketbase"
curl -L "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" -o pocketbase.zip
unzip -o pocketbase.zip
rm -f pocketbase.zip
chmod +x pocketbase

echo "== Writing environment template =="
cat > "$APP_DIR/.env.production.example" << 'EOF'
# Copy this file to /var/www/career2day/.env.production and fill in real values on the VPS.
# Never commit the filled file.

DOMAIN=career2day.com
FRONTEND_URL=https://career2day.com
CORS_ORIGIN=https://career2day.com

PB_URL=http://127.0.0.1:8090
PB_SUPERUSER_EMAIL=
PB_SUPERUSER_PASSWORD=

SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
SMTP_SENDER=
SMTP_SENDER_NAME=Career2Day
SMTP_TLS=false

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID_MONTHLY=
STRIPE_PRICE_ID_ANNUAL=
EOF

if [ ! -f "$APP_DIR/.env.production" ]; then
  cp "$APP_DIR/.env.production.example" "$APP_DIR/.env.production"
  chmod 600 "$APP_DIR/.env.production"
fi

echo "== Writing PM2 ecosystem =="
cat > "$APP_DIR/ecosystem.config.cjs" << EOF
require('dotenv').config({ path: '${APP_DIR}/.env.production' });

module.exports = {
  apps: [
    {
      name: 'career2day-pocketbase',
      script: '${APP_DIR}/apps/pocketbase/pocketbase',
      args: 'serve --http=127.0.0.1:8090 --dir=${APP_DIR}/apps/pocketbase/pb_data --migrationsDir=${APP_DIR}/apps/pocketbase/pb_migrations --hooksDir=${APP_DIR}/apps/pocketbase/pb_hooks',
      cwd: '${APP_DIR}/apps/pocketbase',
      restart_delay: 3000,
      env: process.env
    },
    {
      name: 'career2day-api',
      script: 'src/main.js',
      cwd: '${APP_DIR}/apps/api',
      restart_delay: 3000,
      env: {
        ...process.env,
        NODE_ENV: 'production',
        PORT: process.env.PORT || '3001'
      }
    }
  ]
};
EOF

echo "== Writing nginx config =="
cat > /etc/nginx/sites-available/career2day << EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    root ${APP_DIR}/dist/apps/web;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location /pb/ {
        proxy_pass http://127.0.0.1:8090/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3001/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
EOF

ln -sf /etc/nginx/sites-available/career2day /etc/nginx/sites-enabled/career2day
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "== Enabling firewall =="
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw --force enable

echo "== Done =="
echo "Upload the repo/build files, edit ${APP_DIR}/.env.production, then run:"
echo "  cd ${APP_DIR} && npm ci && npm ci --prefix apps/api && npm run build --prefix apps/web"
echo "  pm2 start ecosystem.config.cjs && pm2 save && pm2 startup"
