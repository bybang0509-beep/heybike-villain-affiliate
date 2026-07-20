// Generate placeholder images for the Heybike Villain affiliate site
// Run: node scripts/generate-placeholders.js

const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "..", "public", "images", "products");

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function createSVG(width, height, text, subtext, bgColor = "#1a1a2e") {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <text x="50%" y="45%" text-anchor="middle" fill="#f59e0b" font-family="Arial,sans-serif" font-size="${Math.floor(width / 15)}" font-weight="bold">${text}</text>
  <text x="50%" y="58%" text-anchor="middle" fill="#94a3b8" font-family="Arial,sans-serif" font-size="${Math.floor(width / 25)}">${subtext}</text>
  <text x="50%" y="75%" text-anchor="middle" fill="#475569" font-family="Arial,sans-serif" font-size="${Math.floor(width / 35)}">Replace with real product photo</text>
</svg>`;
}

const images = [
  { name: "heybike-villain-hero.svg", w: 1200, h: 630, text: "Heybike Villain", sub: "Electric Dirt Bike" },
  { name: "heybike-villain-side.svg", w: 800, h: 600, text: "Side View", sub: "Heybike Villain" },
  { name: "heybike-villain-front.svg", w: 800, h: 600, text: "Front View", sub: "Heybike Villain" },
  { name: "heybike-villain-motor.svg", w: 800, h: 600, text: "Mid-Drive Motor", sub: "4160W / 190 N·m" },
  { name: "heybike-villain-display.svg", w: 800, h: 600, text: "LCD Display", sub: "FarDriver Controller" },
];

images.forEach((img) => {
  const svg = createSVG(img.w, img.h, img.text, img.sub);
  fs.writeFileSync(path.join(imagesDir, img.name), svg);
  console.log(`Created: ${img.name}`);
});

console.log("\nDone! Replace these SVG files with real WebP product images.");
console.log("Recommended: 1200x630 for hero, 800x600 for gallery.");
