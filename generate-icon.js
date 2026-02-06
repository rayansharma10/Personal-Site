const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 256x256 icon
const canvas = createCanvas(256, 256);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#2563eb';
ctx.roundRect(0, 0, 256, 256, 32);
ctx.fill();

// Letter N
ctx.fillStyle = 'white';
ctx.font = 'bold 140px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('N', 128, 140);

// Save as PNG (we'll convert to ICO manually)
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/icon.png', buffer);
console.log('Icon created at public/icon.png');
