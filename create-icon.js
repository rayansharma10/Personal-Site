const sharp = require('sharp');

const svg = `
<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
  <rect width="256" height="256" fill="#2563eb" rx="32"/>
  <text x="128" y="180" font-family="Arial, sans-serif" font-size="140" font-weight="bold" fill="white" text-anchor="middle">N</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/icon.png')
  .then(() => console.log('Icon created successfully!'))
  .catch(console.error);
