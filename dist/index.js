var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// db/index.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertProjectSchema: () => insertProjectSchema,
  insertServiceSchema: () => insertServiceSchema,
  insertTeamMemberSchema: () => insertTeamMemberSchema,
  insertTestimonialSchema: () => insertTestimonialSchema,
  insertTransformationSchema: () => insertTransformationSchema,
  insertUserSchema: () => insertUserSchema,
  projects: () => projects,
  services: () => services,
  teamMembers: () => teamMembers,
  testimonials: () => testimonials,
  transformations: () => transformations,
  users: () => users
});
import { sqliteTable as table, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = table("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var projects = table("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  // residential, commercial, renovation
  imageUrl: text("image_url").notNull(),
  featured: integer("featured", { mode: "boolean" }).default(0),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertProjectSchema = createInsertSchema(projects, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  category: (schema) => schema.refine(
    (val) => ["residential", "commercial", "renovation", "all"].includes(val),
    "Category must be one of: residential, commercial, renovation, all"
  ),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL")
});
var transformations = table("transformations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  beforeImageUrl: text("before_image_url").notNull(),
  afterImageUrl: text("after_image_url").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertTransformationSchema = createInsertSchema(transformations, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  beforeImageUrl: (schema) => schema.url("Before image URL must be a valid URL"),
  afterImageUrl: (schema) => schema.url("After image URL must be a valid URL")
});
var services = table("services", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  features: text("features").notNull(),
  // Array of features as JSON string
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertServiceSchema = createInsertSchema(services, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
  features: () => z.array(z.string().min(3)).min(1, "At least one feature is required")
});
var teamMembers = table("team_members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  position: text("position").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  socialLinks: text("social_links"),
  // Optional JSON of social links as string
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertTeamMemberSchema = createInsertSchema(teamMembers, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  position: (schema) => schema.min(2, "Position must be at least 2 characters"),
  bio: (schema) => schema.min(10, "Bio must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
  socialLinks: () => z.record(z.string().url(), z.string().url()).optional()
});
var testimonials = table("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  clientName: text("client_name").notNull(),
  clientType: text("client_type").notNull(),
  // Residential, Commercial, etc.
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  // 1-5 stars
  imageUrl: text("image_url"),
  // Optional client photo
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertTestimonialSchema = createInsertSchema(testimonials, {
  clientName: (schema) => schema.min(2, "Client name must be at least 2 characters"),
  clientType: (schema) => schema.min(2, "Client type must be at least 2 characters"),
  content: (schema) => schema.min(20, "Content must be at least 20 characters"),
  rating: (schema) => schema.min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL").optional()
});
var contactSubmissions = table("contact_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull()
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please provide a valid email address"),
  phone: (schema) => schema.optional(),
  service: (schema) => schema.min(2, "Service must be at least 2 characters"),
  message: (schema) => schema.min(20, "Message must be at least 20 characters")
});

// db/index.ts
import * as dotenv from "dotenv";
dotenv.config();
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var dbPath = process.env.DATABASE_URL.replace("sqlite://", "");
var sqlite = new Database(dbPath);
var db = drizzle(sqlite, { schema: schema_exports });

// server/storage.ts
import { eq, desc } from "drizzle-orm";
var storage = {
  // Services
  getServices: async (limit) => {
    let query = db.select().from(services).orderBy(desc(services.id));
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },
  getServiceById: async (id) => {
    const result = await db.select().from(services).where(eq(services.id, id));
    return result[0] || null;
  },
  // Projects
  getProjects: async (featured = false, limit) => {
    let query = db.select().from(projects);
    if (featured) {
      query = query.where(eq(projects.featured, true));
    }
    query = query.orderBy(desc(projects.createdAt));
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },
  getProjectById: async (id) => {
    const result = await db.select().from(projects).where(eq(projects.id, id));
    return result[0] || null;
  },
  // Transformations (Before/After)
  getTransformations: async (limit) => {
    let query = db.select().from(transformations).orderBy(desc(transformations.createdAt));
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },
  getTransformationById: async (id) => {
    const result = await db.select().from(transformations).where(eq(transformations.id, id));
    return result[0] || null;
  },
  // Team members
  getTeamMembers: async (limit) => {
    let query = db.select().from(teamMembers).orderBy(desc(teamMembers.id));
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },
  // Testimonials
  getTestimonials: async (limit) => {
    let query = db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
    if (limit) {
      query = query.limit(limit);
    }
    return await query;
  },
  // Contact form submissions
  createContactSubmission: async (data) => {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }
};

// server/routes.ts
import { z as z2 } from "zod";
async function registerRoutes(app2) {
  const apiPrefix = "/api";
  app2.get(`${apiPrefix}/services`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const services2 = await storage.getServices(limit);
      return res.json(services2);
    } catch (error) {
      console.error("Error fetching services:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/services/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid service ID" });
      }
      const service = await storage.getServiceById(id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      return res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/projects`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const featured = req.query.featured === "true";
      const projects2 = await storage.getProjects(featured, limit);
      return res.json(projects2);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/projects/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      const project = await storage.getProjectById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      return res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/transformations`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const transformations2 = await storage.getTransformations(limit);
      return res.json(transformations2);
    } catch (error) {
      console.error("Error fetching transformations:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/transformations/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid transformation ID" });
      }
      const transformation = await storage.getTransformationById(id);
      if (!transformation) {
        return res.status(404).json({ message: "Transformation not found" });
      }
      return res.json(transformation);
    } catch (error) {
      console.error("Error fetching transformation:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/team`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const teamMembers2 = await storage.getTeamMembers(limit);
      return res.json(teamMembers2);
    } catch (error) {
      console.error("Error fetching team members:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const testimonials2 = await storage.getTestimonials(limit);
      return res.json(testimonials2);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      return res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z2.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@db": path.resolve(import.meta.dirname, "db"),
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/env.ts
import * as dotenv2 from "dotenv";
dotenv2.config();
var DATABASE_URL = process.env.DATABASE_URL;
var NODE_ENV = process.env.NODE_ENV || "development";

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    log(`Error: ${message} (${status})`, "error");
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "localhost"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
