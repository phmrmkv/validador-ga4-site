// Gera public/favicon.svg, favicon-32.png, apple-touch-icon.png e og-image.jpg a partir do logo tipográfico PROVISÓRIO.
// Uso: node scripts/gerar-marca.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const placa = `
    <rect x="1" y="1" width="30" height="30" rx="8" fill="#131c28"/>
    <rect x="7" y="8" width="6" height="16" rx="1.5" fill="#dfe5ee"/>
    <rect x="19" y="12" width="6" height="12" rx="1.5" fill="#dfe5ee"/>
    <rect x="19" y="7" width="6" height="3.5" rx="1.2" fill="#ff7088"/>
    <path d="M8.5 18.2l4.6 4.4 10.4-11.2" stroke="#4fd18a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">${placa}\n</svg>\n`;
writeFileSync('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon), { density: 600 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(favicon), { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const fonte = 'font-family="Segoe UI, Arial, Helvetica, sans-serif"';
const mono = 'font-family="Consolas, Courier New, monospace"';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e131a"/>
  <rect width="1200" height="14" fill="#ff7088"/>
  <g transform="translate(80 70) scale(2.6)">${placa}</g>
  <text x="185" y="132" ${fonte} font-size="56" font-weight="800" fill="#e7ecf3">Validador <tspan ${mono} fill="#ff8da0">GA4</tspan></text>
  <text x="80" y="330" ${fonte} font-size="84" font-weight="800" fill="#e7ecf3">Confira o que a página</text>
  <text x="80" y="428" ${fonte} font-size="84" font-weight="800" fill="#ff8da0">mandou para o GA4.</text>
  <text x="80" y="520" ${fonte} font-size="34" font-weight="600" fill="#9fabbc">Extensão para Chrome e Edge: dataLayer, hits e plano.</text>
  <text x="80" y="566" ${fonte} font-size="30" font-weight="600" fill="#9fabbc">Em desenvolvimento.</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('marca gerada');
