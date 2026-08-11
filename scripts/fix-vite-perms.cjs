const fs = require('fs');
const path = require('path');

const viteBin = path.join(__dirname, '..', 'node_modules', '.bin', 'vite');

if (fs.existsSync(viteBin)) {
  try {
    fs.chmodSync(viteBin, 0o755);
    console.log('Set executable permissions on Vite binary');
  } catch (error) {
    console.warn('Could not set executable permissions on Vite binary:', error.message);
  }
} else {
  console.log('Vite binary not found; skipping permission fix.');
}
