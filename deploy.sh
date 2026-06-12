#!/bin/bash

# EasternStack Website Auto-Deploy Script
# This script pulls latest changes, clears cache, rebuilds, and restarts PM2

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Step 1: Pull latest changes
echo "📦 Pulling latest changes from git..."
git pull

# Step 2: Install dependencies (in case package.json changed)
echo "📦 Installing dependencies..."
npm install

# Step 3: Clear Next.js cache
echo "🧹 Clearing cache..."
rm -rf .next

# Step 4: Build the application
echo "🔨 Building application..."
npm run build

# Step 5: Restart PM2
echo "🔄 Restarting PM2 process..."
pm2 restart konten-web

echo "✅ Deployment completed successfully!"
echo "💡 Use 'pm2 logs konten-web' to check logs"
