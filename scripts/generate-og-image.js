const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 627;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient (dark to red)
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#1A1A1A');
  gradient.addColorStop(0.5, '#2D1B1B');
  gradient.addColorStop(1, '#E31E24');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add grid pattern overlay
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x <= width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  
  // Load and draw logo (centered, with padding)
  const logoPath = path.join(__dirname, '..', 'public', 'logo_head.png');
  const logo = await loadImage(logoPath);
  
  const logoSize = 250;
  const logoX = (width - logoSize) / 2;
  const logoY = (height - logoSize) / 2 - 40;
  
  // Draw logo with shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;
  ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
  ctx.shadowColor = 'transparent';
  
  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('EasternStack', width / 2, logoY + logoSize + 60);
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = '28px Inter, sans-serif';
  ctx.fillText('Enterprise AI Solutions', width / 2, logoY + logoSize + 100);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('OG image generated:', outputPath);
  console.log('Size:', width, 'x', height);
}

generateOGImage().catch(console.error);
