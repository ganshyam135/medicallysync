import { db } from "@db";
import { 
  services, 
  projects, 
  transformations, 
  teamMembers, 
  testimonials, 
  contactSubmissions,
  InsertContactSubmission
} from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export const storage = {
  // Services
  getServices: async (limit?: number) => {
    let query = db.select().from(services).orderBy(desc(services.id));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return await query;
  },
  
  getServiceById: async (id: number) => {
    const result = await db.select().from(services).where(eq(services.id, id));
    return result[0] || null;
  },
  
  // Projects
  getProjects: async (featured: boolean = false, limit?: number) => {
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
  
  getProjectById: async (id: number) => {
    const result = await db.select().from(projects).where(eq(projects.id, id));
    return result[0] || null;
  },
  
  // Transformations (Before/After)
  getTransformations: async (limit?: number) => {
    let query = db.select().from(transformations).orderBy(desc(transformations.createdAt));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return await query;
  },
  
  getTransformationById: async (id: number) => {
    const result = await db.select().from(transformations).where(eq(transformations.id, id));
    return result[0] || null;
  },
  
  // Team members
  getTeamMembers: async (limit?: number) => {
    let query = db.select().from(teamMembers).orderBy(desc(teamMembers.id));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return await query;
  },
  
  // Testimonials
  getTestimonials: async (limit?: number) => {
    let query = db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return await query;
  },
  
  // Contact form submissions
  createContactSubmission: async (data: InsertContactSubmission) => {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }
};
