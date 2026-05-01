#!/bin/bash
# Run this script on your VPS as root:
# bash <(curl -s https://raw.githubusercontent.com/YOUR_GITHUB/YOUR_REPO/main/deploy/server-setup.sh)
# OR copy-paste it directly into your SSH terminal

set -e

echo "=== Installing system dependencies ==="
apt-get update -y
apt-get install -y curl git nginx ufw

echo "=== Installing Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "=== Installing PM2 ==="
npm install -g pm2

echo "=== Creating app directory ==="
mkdir -p /var/www/caree2day
mkdir -p /var/www/caree2day/frontend
mkdir -p /var/www/caree2day/pocketbase/pb_data
mkdir -p /var/www/caree2day/pocketbase/pb_migrations
mkdir -p /var/www/caree2day/pocketbase/pb_hooks

echo "=== Downloading PocketBase 0.36.7 ==="
cd /var/www/caree2day/pocketbase
curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.36.7/pocketbase_0.36.7_linux_amd64.zip -o pb.zip
apt-get install -y unzip
unzip -o pb.zip
rm pb.zip
chmod +x pocketbase

echo "=== Setting up firewall ==="
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw --force enable

echo "=== Nginx config ==="
cat > /etc/nginx/sites-available/caree2day << 'EOF'
server {
    listen 80;
    server_name _;

    # Frontend — React SPA
    root /var/www/caree2day/frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Express API proxy
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # PocketBase proxy
    location /pb/ {
        proxy_pass http://localhost:8090/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF

ln -sf /etc/nginx/sites-available/caree2day /etc/nginx/sites-enabled/caree2day
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "=== Creating PM2 ecosystem config ==="
cat > /var/www/caree2day/ecosystem.config.cjs << 'EOF'
module.exports = {
  apps: [
    {
      name: 'pocketbase',
      script: '/var/www/caree2day/pocketbase/pocketbase',
      args: 'serve --http=0.0.0.0:8090 --dir=/var/www/caree2day/pocketbase/pb_data --migrationsDir=/var/www/caree2day/pocketbase/pb_migrations --hooksDir=/var/www/caree2day/pocketbase/pb_hooks',
      cwd: '/var/www/caree2day/pocketbase',
      restart_delay: 3000,
      env: {
        PB_SUPERUSER_EMAIL: 'admin@caree2day.com',
        PB_SUPERUSER_PASSWORD: 'CHANGE_ME_STRONG_PASSWORD',
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: '587',
        SMTP_USER: 'your-email@caree2day.com',
        SMTP_PASSWORD: 'YOUR_EMAIL_PASSWORD',
        SMTP_SENDER: 'your-email@caree2day.com'
      }
    },
    {
      name: 'api',
      script: 'src/main.js',
      cwd: '/var/www/caree2day/api',
      restart_delay: 3000,
      env: {
        NODE_ENV: 'production',
        PORT: '3001',
        POCKETBASE_URL: 'http://localhost:8090',
        FRONTEND_URL: 'http://93.127.172.30',
        CORS_ORIGIN: 'http://93.127.172.30',
        WEBSITE_DOMAIN: '93.127.172.30',
        STRIPE_SECRET_KEY: 'sk_live_YOUR_KEY',
        STRIPE_WEBHOOK_SECRET: 'whsec_YOUR_SECRET'
      }
    }
  ]
}
EOF

echo ""
echo "=== Server setup complete! ==="
echo "Next steps:"
echo "1. Upload frontend files to /var/www/caree2day/frontend/"
echo "2. Upload API files to /var/www/caree2day/api/"
echo "3. Upload pb_migrations/ and pb_hooks/ to /var/www/caree2day/pocketbase/"
echo "4. Edit /var/www/caree2day/ecosystem.config.cjs and fill in real passwords/keys"
echo "5. Run: cd /var/www/caree2day && pm2 start ecosystem.config.cjs && pm2 save && pm2 startup"
