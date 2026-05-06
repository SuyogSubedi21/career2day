# Career2Day VPS Deployment

## Build

```bash
npm install
npm run build --prefix apps/web
```

Upload `dist/apps/web` to `/var/www/career2day/dist/apps/web`.

## Nginx

Copy `deploy/nginx-career2day.conf` to `/etc/nginx/sites-available/career2day` and enable it:

```bash
sudo ln -s /etc/nginx/sites-available/career2day /etc/nginx/sites-enabled/career2day
sudo nginx -t
sudo systemctl reload nginx
```

## SSL

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d career2day.com -d www.career2day.com
```

## DNS

Point both `career2day.com` and `www.career2day.com` A records to the VPS public IP.

## PM2

PM2 is not required for the static frontend. Use PM2 only if the API service is deployed later.

## Safety

CV data is stored in the browser with `localStorage`. Do not place private API keys in frontend `.env` files.
