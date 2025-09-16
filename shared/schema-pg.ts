import { pgTable as table, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

// Users table (kept from original)
export const users = table("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects for portfolio
export const projects = table("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // residential, commercial, renovation
  imageUrl: text("image_url").notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertProjectSchema = createInsertSchema(projects, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  category: (schema) => schema.refine(val => ['residential', 'commercial', 'renovation', 'all'].includes(val), 
    "Category must be one of: residential, commercial, renovation, all"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL")
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Before/After projects
export const transformations = table("transformations", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  beforeImageUrl: text("before_image_url").notNull(),
  afterImageUrl: text("after_image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertTransformationSchema = createInsertSchema(transformations, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  beforeImageUrl: (schema) => schema.url("Before image URL must be a valid URL"),
  afterImageUrl: (schema) => schema.url("After image URL must be a valid URL")
});

export type InsertTransformation = z.infer<typeof insertTransformationSchema>;
export type Transformation = typeof transformations.$inferSelect;

// Services
export const services = table("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  features: text("features").notNull(), // Array of features as JSON string
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertServiceSchema = createInsertSchema(services, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
  features: () => z.array(z.string().min(3)).min(1, "At least one feature is required")
});

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

// Team members
export const teamMembers = table("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  socialLinks: text("social_links"), // Optional JSON of social links as string
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  position: (schema) => schema.min(2, "Position must be at least 2 characters"),
  bio: (schema) => schema.min(10, "Bio must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
  socialLinks: () => z.record(z.string().url(), z.string().url()).optional()
});

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

// Testimonials
export const testimonials = table("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientType: text("client_type").notNull(), // Residential, Commercial, etc.
  content: text("content").notNull(),
  rating: integer("rating").notNull(), // 1-5 stars
  imageUrl: text("image_url"), // Optional client photo
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertTestimonialSchema = createInsertSchema(testimonials, {
  clientName: (schema) => schema.min(2, "Client name must be at least 2 characters"),
  clientType: (schema) => schema.min(2, "Client type must be at least 2 characters"),
  content: (schema) => schema.min(20, "Content must be at least 20 characters"),
  rating: (schema) => schema.min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL").optional()
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Contact form submissions
export const contactSubmissions = table("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please provide a valid email address"),
  phone: (schema) => schema.optional(),
  service: (schema) => schema.min(2, "Service must be at least 2 characters"),
  message: (schema) => schema.min(20, "Message must be at least 20 characters")
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;