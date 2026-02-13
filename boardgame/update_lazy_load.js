// Script to update image loading for pagination
const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace all img src with data-src
html = html.replace(/<img loading="lazy" src="/g, '<img loading="lazy" data-src="');

// Write back
fs.writeFileSync('index.html', html, 'utf8');

console.log('Updated all img src to data-src');
