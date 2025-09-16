import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from "@shared/schema";
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const dbPath = process.env.DATABASE_URL.replace('sqlite://', '');
const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
// Export for compatibility with existing code
export const pool = { end: () => {} };