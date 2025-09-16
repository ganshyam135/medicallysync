import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, '..', 'medicallysync.db');

console.log(`Creating SQLite database at: ${dbPath}`);

try {
  // Create the database file
  const db = new Database(dbPath);
  
  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      image_url TEXT NOT NULL,
      featured INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS transformations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      before_image_url TEXT NOT NULL,
      after_image_url TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      features TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS team_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      position TEXT NOT NULL,
      bio TEXT NOT NULL,
      image_url TEXT NOT NULL,
      social_links TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_name TEXT NOT NULL,
      client_type TEXT NOT NULL,
      content TEXT NOT NULL,
      rating INTEGER NOT NULL,
      image_url TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      service TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
  
  // Insert sample data
  db.exec(`
    INSERT OR IGNORE INTO users (username, password) VALUES ('admin', 'password123');
    
    INSERT OR IGNORE INTO projects (title, description, category, image_url, featured)
    VALUES 
      ('Modern Residential Home', 'A beautiful modern home design with open concept living', 'residential', '/images/project1.jpg', 1),
      ('Commercial Office Space', 'Contemporary office design with collaborative spaces', 'commercial', '/images/project2.jpg', 1),
      ('Kitchen Renovation', 'Complete kitchen remodel with custom cabinetry', 'renovation', '/images/project3.jpg', 0);
      
    INSERT OR IGNORE INTO transformations (title, description, before_image_url, after_image_url)
    VALUES
      ('Living Room Transformation', 'Complete redesign of outdated living space', '/images/before1.jpg', '/images/after1.jpg'),
      ('Bathroom Remodel', 'Modern bathroom update with luxury fixtures', '/images/before2.jpg', '/images/after2.jpg');
      
    INSERT OR IGNORE INTO services (title, description, image_url, features)
    VALUES
      ('Architectural Design', 'Professional architectural design services for residential and commercial projects', '/images/service1.jpg', '{"features": ["Custom blueprints", "3D modeling", "Permit assistance"]}'),
      ('Interior Design', 'Complete interior design services to transform your space', '/images/service2.jpg', '{"features": ["Color consultation", "Furniture selection", "Space planning"]}'),
      ('Construction Management', 'End-to-end construction management services', '/images/service3.jpg', '{"features": ["Budget planning", "Timeline management", "Quality control"]}');
      
    INSERT OR IGNORE INTO team_members (name, position, bio, image_url, social_links)
    VALUES
      ('John Smith', 'Principal Architect', 'Over 15 years of experience in residential and commercial architecture', '/images/team1.jpg', '{"linkedin": "https://linkedin.com/in/johnsmith", "twitter": "https://twitter.com/johnsmith"}'),
      ('Sarah Johnson', 'Interior Designer', 'Award-winning interior designer with a passion for modern aesthetics', '/images/team2.jpg', '{"linkedin": "https://linkedin.com/in/sarahjohnson", "instagram": "https://instagram.com/sarahjohnson"}');
      
    INSERT OR IGNORE INTO testimonials (client_name, client_type, content, rating, image_url)
    VALUES
      ('Michael Brown', 'Residential', 'The team transformed our outdated home into a modern masterpiece. We could not be happier with the results!', 5, '/images/client1.jpg'),
      ('ABC Corporation', 'Commercial', 'The office redesign has significantly improved our workflow and employee satisfaction. Highly recommended!', 5, '/images/client2.jpg');
  `);
  
  console.log('Database initialized successfully with sample data!');
  db.close();
} catch (error) {
  console.error('Error initializing database:', error);
}