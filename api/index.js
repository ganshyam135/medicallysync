// Vercel serverless function wrapper
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the built server
const serverPath = path.join(__dirname, '../dist/index.js');
const { default: app } = await import(serverPath);

export default app;