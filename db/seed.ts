import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting seed process...");

    // Services data
    const services = [
      {
        title: "New Property Design",
        description: "Starting with a blank canvas? Our new property design service creates cohesive, functional spaces that reflect your style from the ground up.",
        imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        features: ["Comprehensive space planning and layout", "Custom furniture selection and procurement", "Material and finish specification"]
      },
      {
        title: "Complete Renovations",
        description: "Transform your existing space with our comprehensive renovation services that bring fresh life to your home.",
        imageUrl: "https://images.unsplash.com/photo-1615529179035-e88bf63d86ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        features: ["Structural modifications and space reconfiguration", "Kitchen and bathroom remodeling", "Project management and contractor coordination"]
      },
      {
        title: "Interior Styling",
        description: "Refresh your space with our styling services, focusing on decor, accessories, and finishing touches that elevate your home.",
        imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        features: ["Accessory selection and arrangement", "Art and decor curation", "Color scheme development"]
      },
      {
        title: "Consultation Services",
        description: "Need professional guidance? Our consultation services provide expert advice to help you make informed design decisions.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        features: ["Design concept development", "Material and furniture recommendations", "Space planning advice"]
      }
    ];

    // Projects data for portfolio
    const projects = [
      {
        title: "Modern Elegance",
        description: "A complete redesign of a spacious living room combining modern aesthetics with comfortable elegance. The design focuses on natural light, clean lines, and a neutral color palette with strategic pops of color.",
        category: "residential",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "Contemporary Kitchen",
        description: "A full renovation of an outdated kitchen, transforming it into a functional and stylish space with custom cabinetry, premium appliances, and thoughtful storage solutions.",
        category: "renovation",
        imageUrl: "https://images.unsplash.com/photo-1599327286089-88a26dad7af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "Creative Workspace",
        description: "Designed for a creative agency, this commercial office space balances functionality with inspiration, incorporating comfortable work areas and collaborative spaces.",
        category: "commercial",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "Luxurious Retreat",
        description: "A master bedroom transformation designed to create a peaceful sanctuary with premium materials, subtle lighting, and a harmonious color palette.",
        category: "residential",
        imageUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "Spa-Inspired Bathroom",
        description: "This bathroom renovation created a spa-like retreat with high-end fixtures, natural materials, and a serene color palette, transforming an ordinary space into a luxurious escape.",
        category: "renovation",
        imageUrl: "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      },
      {
        title: "Fine Dining Experience",
        description: "A restaurant interior designed to create an unforgettable dining experience, balancing sophistication with comfort and incorporating acoustic considerations and creative lighting design.",
        category: "commercial",
        imageUrl: "https://images.unsplash.com/photo-1600566753376-12c6b3da140b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        featured: true
      }
    ];

    // Before and After Transformations
    const transformations = [
      {
        title: "Modern Kitchen Transformation",
        description: "This outdated kitchen was transformed into a modern, functional space with custom cabinetry, premium appliances, and an open concept design that maximizes natural light.",
        beforeImageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        afterImageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Living Room Revival",
        description: "We transformed this dated living space with a fresh color palette, custom built-ins, and carefully curated furniture that creates a sophisticated yet comfortable atmosphere.",
        beforeImageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        afterImageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ];

    // Team Members
    const teamMembers = [
      {
        name: "Sarah Johnson",
        position: "Principal Designer",
        bio: "With over 15 years of experience, Sarah leads our team with vision and expertise.",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
          pinterest: "https://pinterest.com"
        }
      },
      {
        name: "Michael Chen",
        position: "Senior Designer",
        bio: "Michael specializes in contemporary design with a focus on sustainable materials.",
        imageUrl: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
          pinterest: "https://pinterest.com"
        }
      },
      {
        name: "Emma Rodriguez",
        position: "Interior Designer",
        bio: "Emma brings a fresh perspective to traditional design, creating timeless spaces.",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
          pinterest: "https://pinterest.com"
        }
      },
      {
        name: "David Thompson",
        position: "Project Manager",
        bio: "David ensures that every project runs smoothly from concept to completion.",
        imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
          pinterest: "https://pinterest.com"
        }
      }
    ];

    // Testimonials
    const testimonials = [
      {
        clientName: "Jennifer Adams",
        clientType: "Residential Client",
        content: "Working with R.R Interiors was an absolute pleasure. They transformed our outdated living space into a stunning, modern sanctuary that perfectly reflects our style. Their attention to detail and commitment to excellence is unmatched.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
      },
      {
        clientName: "Robert Martinez",
        clientType: "Commercial Client",
        content: "R.R Interiors exceeded all of our expectations. Their team was professional, creative, and efficient. The renovation of our restaurant not only looks amazing but has significantly improved the dining experience for our customers.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
      },
      {
        clientName: "Michelle and James Wilson",
        clientType: "Residential Clients",
        content: "The team at R.R Interiors has an incredible eye for design. They helped us completely reimagine our space, making it both beautiful and functional. They were responsive, professional, and a joy to work with from start to finish.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
      }
    ];

    // Insert services
    console.log("Seeding services...");
    for (const service of services) {
      // Check if service already exists
      const existingServices = await db.select().from(schema.services).where(schema.services.title === service.title);
      
      if (existingServices.length === 0) {
        await db.insert(schema.services).values({
          title: service.title,
          description: service.description,
          imageUrl: service.imageUrl,
          features: service.features
        });
      }
    }

    // Insert projects
    console.log("Seeding projects...");
    for (const project of projects) {
      // Check if project already exists
      const existingProjects = await db.select().from(schema.projects).where(schema.projects.title === project.title);
      
      if (existingProjects.length === 0) {
        await db.insert(schema.projects).values({
          title: project.title,
          description: project.description,
          category: project.category,
          imageUrl: project.imageUrl,
          featured: project.featured
        });
      }
    }

    // Insert transformations
    console.log("Seeding transformations...");
    for (const transformation of transformations) {
      // Check if transformation already exists
      const existingTransformations = await db.select().from(schema.transformations).where(schema.transformations.title === transformation.title);
      
      if (existingTransformations.length === 0) {
        await db.insert(schema.transformations).values({
          title: transformation.title,
          description: transformation.description,
          beforeImageUrl: transformation.beforeImageUrl,
          afterImageUrl: transformation.afterImageUrl
        });
      }
    }

    // Insert team members
    console.log("Seeding team members...");
    for (const member of teamMembers) {
      // Check if team member already exists
      const existingMembers = await db.select().from(schema.teamMembers).where(schema.teamMembers.name === member.name);
      
      if (existingMembers.length === 0) {
        await db.insert(schema.teamMembers).values({
          name: member.name,
          position: member.position,
          bio: member.bio,
          imageUrl: member.imageUrl,
          socialLinks: member.socialLinks
        });
      }
    }

    // Insert testimonials
    console.log("Seeding testimonials...");
    for (const testimonial of testimonials) {
      // Check if testimonial already exists
      const existingTestimonials = await db.select().from(schema.testimonials).where(schema.testimonials.clientName === testimonial.clientName);
      
      if (existingTestimonials.length === 0) {
        await db.insert(schema.testimonials).values({
          clientName: testimonial.clientName,
          clientType: testimonial.clientType,
          content: testimonial.content,
          rating: testimonial.rating,
          imageUrl: testimonial.imageUrl
        });
      }
    }

    console.log("✅ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Error during seed process:", error);
  }
}

seed();
