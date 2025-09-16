import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export environment variables for use in other files
export const DATABASE_URL = process.env.DATABASE_URL;
export const NODE_ENV = process.env.NODE_ENV || 'development';