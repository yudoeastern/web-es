# Eastern Stack Web - Production Deployment Guide

## Architecture Overview

```
Internet → Nginx (Port 80/443) → PM2 → Next.js App (Port 3005)
                ↓
           SSL/TLS (Let's Encrypt)
```

**Why This Stack:**
- **Nginx**: Reverse proxy, SSL termination, static file caching, rate limiting
- **PM2**: Process management, auto-restart on crash, log rotation, zero-downtime reload

---

## Server Requirements

- Ubuntu 22.04 LTS or newer
- Minimum 2GB RAM (4GB recommended)
- 25GB+ storage
- Domain pointed to server IP

---

## Step 1: Initial Server Setup

### 1.1 Connect to Server
```bash
ssh root@your-server-ip
```

### 1.2 Create Deployment User (Security Best Practice)
```bash
# Create dedicated user for the app
adduser easternstack

# Add to sudo group
usermod -aG sudo easternstack

# Switch to the user
su - easternstack
```

### 1.3 Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
```

---

## Step 2: Install Dependencies

### 2.1 Install Node.js (LTS Version)
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

### 2.2 Install Nginx
```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 2.3 Install PM2
```bash
sudo npm install -g pm2
```

### 2.4 Install Git
```bash
sudo apt install -y git
```

---

## Step 3: Project Structure

### 3.1 Recommended Folder Structure
```
/home/easternstack/
├── apps/
│   └── easternstack-web/          # Application code
│       ├── src/
│       ├── public/
│       ├── package.json
│       ├── next.config.ts
│       └── .env.local
├── logs/
│   └── easternstack-web/          # Application logs
└── backups/
    └── easternstack-web/          # Database/config backups
```

### 3.2 Create Directory Structure
```bash
cd ~
mkdir -p apps logs/backups easternstack-web
```

---

## Step 4: Deploy Application

### 4.1 Clone Repository
```bash
cd ~/apps
git clone <your-repository-url> easternstack-web
cd easternstack-web
```

### 4.2 Install Dependencies
```bash
npm ci --only=production
```

### 4.3 Build Application
```bash
npm run build
```

### 4.4 Create Environment File
```bash
nano .env.local
```

Add environment variables:
```env
# Next.js
NODE_ENV=production
PORT=3005

# Add other env vars as needed
```

---

## Step 5: Configure PM2

### 5.1 Create PM2 Ecosystem File
```bash
nano ecosystem.config.js
```

Content:
```javascript
module.exports = {
  apps: [{
    name: 'easternstack-web',
    cwd: '/home/easternstack/apps/easternstack-web',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3005,
    },
    instances: 1,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    error_file: '/home/easternstack/logs/easternstack-web/error.log',
    out_file: '/home/easternstack/logs/easternstack-web/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
  }]
};
```

### 5.2 Create Log Directory
```bash
mkdir -p ~/logs/easternstack-web
```

### 5.3 Start Application with PM2
```bash
pm2 start ecosystem.config.js
```

### 5.4 Save PM2 Configuration (Auto-start on Boot)
```bash
pm2 save
pm2 startup
```

Run the command output by `pm2 startup` (varies by system).

### 5.5 Verify PM2 Status
```bash
pm2 status
pm2 logs easternstack-web
```

---

## Step 6: Configure Nginx

### 6.1 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/easternstack-web
```

Content:
```nginx
server {
    listen 80;
    server_name easternstack.com www.easternstack.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Logging
    access_log /var/log/nginx/easternstack-web-access.log;
    error_log /var/log/nginx/easternstack-web-error.log;

    # Client body size (for file uploads)
    client_max_body_size 10M;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Proxy to Next.js app
    location / {
        proxy_pass http://localhost:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    # Health check endpoint (optional)
    location /health {
        proxy_pass http://localhost:3005;
        access_log off;
    }

    # Deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### 6.2 Enable Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/easternstack-web /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Step 7: Setup SSL with Let's Encrypt

### 7.1 Install Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 7.2 Obtain SSL Certificate
```bash
sudo certbot --nginx -d easternstack.com -d www.easternstack.com
```

### 7.3 Auto-Renewal Test
```bash
sudo certbot renew --dry-run
```

Certbot automatically sets up renewal cron job.

---

## Step 8: Firewall Configuration

### 8.1 Configure UFW (Uncomplicated Firewall)
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## Step 9: Deployment Automation

### 9.1 Create Deployment Script
```bash
nano ~/deploy.sh
```

Content:
```bash
#!/bin/bash

set -e

APP_NAME="easternstack-web"
APP_DIR="/home/easternstack/apps/$APP_NAME"
LOG_DIR="/home/easternstack/logs/$APP_NAME"

echo "🚀 Starting deployment..."

# Navigate to app directory
cd $APP_DIR

# Pull latest changes
echo "📦 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build application
echo "🔨 Building application..."
npm run build

# Restart PM2
echo "🔄 Restarting application..."
pm2 restart $APP_NAME

# Wait for app to be ready
sleep 5

# Check status
echo "✅ Deployment complete!"
pm2 status $APP_NAME
```

Make executable:
```bash
chmod +x ~/deploy.sh
```

### 9.2 Run Deployment
```bash
./deploy.sh
```

---

## Step 10: Monitoring & Maintenance

### 10.1 PM2 Commands
```bash
# View status
pm2 status

# View logs
pm2 logs easternstack-web

# Restart app
pm2 restart easternstack-web

# Stop app
pm2 stop easternstack-web

# View memory usage
pm2 monit
```

### 10.2 Nginx Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/easternstack-web-access.log

# Error logs
sudo tail -f /var/log/nginx/easternstack-web-error.log
```

### 10.3 System Monitoring
```bash
# Check disk space
df -h

# Check memory
free -h

# Check CPU
top

# Check running services
systemctl status nginx
```

### 10.4 Log Rotation
PM2 handles app log rotation automatically.

For Nginx, create logrotate config:
```bash
sudo nano /etc/logrotate.d/nginx-easternstack
```

Content:
```
/var/log/nginx/easternstack-web-*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    prerotate
        if [ -d /etc/logrotate.d/httpd-prerotate ]; then
            run-parts /etc/logrotate.d/httpd-prerotate
        fi
    endscript
    postrotate
        invoke-rc.d nginx rotate >/dev/null 2>&1
    endscript
}
```

---

## Quick Reference

### Deploy New Version
```bash
cd ~/apps/easternstack-web
git pull
npm ci --only=production
npm run build
pm2 restart easternstack-web
```

### Or Use Deploy Script
```bash
~/deploy.sh
```

### Check Application Status
```bash
pm2 status
curl -I https://easternstack.com
```

### View Logs
```bash
pm2 logs easternstack-web --lines 100
```

### Emergency Rollback
```bash
# Stop current version
pm2 stop easternstack-web

# Checkout previous version
cd ~/apps/easternstack-web
git revert HEAD
npm run build
pm2 start easternstack-web
```

---

## Troubleshooting

### App Won't Start
```bash
# Check PM2 logs
pm2 logs easternstack-web --err

# Check if port is in use
sudo lsof -i :3005

# Check environment variables
cat .env.local
```

### Nginx Errors
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/easternstack-web-error.log

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Issues
```bash
# Renew certificate
sudo certbot renew

# Check certificate
sudo certbot certificates
```

### Memory Issues
```bash
# Increase PM2 memory limit in ecosystem.config.js
max_memory_restart: '1G'

# Then restart
pm2 restart easternstack-web
```

---

## Security Checklist

- [ ] SSH key authentication only (disable password)
- [ ] UFW firewall enabled
- [ ] Regular system updates (`sudo apt update && sudo apt upgrade`)
- [ ] SSL certificate auto-renewal configured
- [ ] Non-root user for deployment
- [ ] `.env` files in `.gitignore`
- [ ] Nginx security headers configured
- [ ] PM2 running with minimal permissions
- [ ] Regular backups configured

---

## Backup Strategy

### Create Backup Script
```bash
nano ~/backup.sh
```

Content:
```bash
#!/bin/bash

DATE=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_DIR="/home/easternstack/backups/easternstack-web"
APP_DIR="/home/easternstack/apps/easternstack-web"

mkdir -p $BACKUP_DIR

# Backup .env file
cp $APP_DIR/.env.local $BACKUP_DIR/.env.local.$DATE

# Backup PM2 config
cp $APP_DIR/ecosystem.config.js $BACKUP_DIR/ecosystem.config.js.$DATE

# Keep only last 7 backups
find $BACKUP_DIR -name "*.env.local.*" -mtime +7 -delete

echo "Backup completed: $DATE"
```

### Add to Crontab
```bash
crontab -e
```

Add line (daily backup at 3 AM):
```
0 3 * * * /home/easternstack/backup.sh
```

---

## Support

For issues or questions:
- Check logs: `pm2 logs easternstack-web`
- Nginx logs: `sudo tail -f /var/log/nginx/easternstack-web-error.log`
- Documentation: `/home/easternstack/apps/easternstack-web/README.md`
