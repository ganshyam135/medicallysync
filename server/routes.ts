import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // Services
  app.get(`${apiPrefix}/services`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const services = await storage.getServices(limit);
      return res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(`${apiPrefix}/services/:id`, async (req, res) => {
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

  // Projects
  app.get(`${apiPrefix}/projects`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const featured = req.query.featured === "true";
      const projects = await storage.getProjects(featured, limit);
      return res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(`${apiPrefix}/projects/:id`, async (req, res) => {
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

  // Transformations (Before/After)
  app.get(`${apiPrefix}/transformations`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const transformations = await storage.getTransformations(limit);
      return res.json(transformations);
    } catch (error) {
      console.error("Error fetching transformations:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(`${apiPrefix}/transformations/:id`, async (req, res) => {
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

  // Team members
  app.get(`${apiPrefix}/team`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const teamMembers = await storage.getTeamMembers(limit);
      return res.json(teamMembers);
    } catch (error) {
      console.error("Error fetching team members:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Testimonials
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const testimonials = await storage.getTestimonials(limit);
      return res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      return res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
