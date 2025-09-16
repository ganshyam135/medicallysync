// Fallback data to use when database connections fail
import { Service, Project, Transformation, TeamMember } from "@shared/schema";

export const fallbackServices: Service[] = [
  {
    id: 1,
    title: "Residential Design",
    description: "Transform your living spaces with our custom interior design services tailored for homes and apartments.",
    imageUrl: "/images/services/residential.jpg",
    features: ["Space optimization", "Custom furniture selection", "Color consultation", "Lighting design"],
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Commercial Design",
    description: "Create inspiring work environments with our commercial interior design services for offices and retail spaces.",
    imageUrl: "/images/services/commercial.jpg",
    features: ["Brand integration", "Workspace planning", "Acoustics optimization", "Ergonomic solutions"],
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Renovation Services",
    description: "Breathe new life into existing spaces with our comprehensive renovation and remodeling services.",
    imageUrl: "/images/services/renovation.jpg",
    features: ["Kitchen remodeling", "Bathroom renovation", "Open-concept conversions", "Material upgrades"],
    createdAt: new Date()
  },
  {
    id: 4,
    title: "Space Planning",
    description: "Optimize your space with professional planning that maximizes functionality and enhances flow.",
    imageUrl: "/images/services/planning.jpg",
    features: ["Traffic flow analysis", "Furniture layout", "Spatial efficiency", "3D visualization"],
    createdAt: new Date()
  },
];

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Contemporary Apartment",
    description: "A sleek, modern design for a high-rise apartment with panoramic city views.",
    imageUrl: "/images/projects/apartment.jpg",
    category: "residential",
    featured: true,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Luxury Villa Makeover",
    description: "Complete interior transformation of a luxury villa with custom furniture and unique décor elements.",
    imageUrl: "/images/projects/villa.jpg",
    category: "residential",
    featured: true,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Modern Office Space",
    description: "A collaborative office environment designed for productivity and employee well-being.",
    imageUrl: "/images/projects/office.jpg",
    category: "commercial",
    featured: true,
    createdAt: new Date()
  },
  {
    id: 4,
    title: "Boutique Retail Store",
    description: "Elegant retail space designed to enhance product display and customer experience.",
    imageUrl: "/images/projects/retail.jpg",
    category: "commercial",
    featured: true,
    createdAt: new Date()
  },
  {
    id: 5,
    title: "Minimalist Home",
    description: "Clean lines and thoughtful design create a peaceful, minimalist living space.",
    imageUrl: "/images/projects/minimalist.jpg",
    category: "residential",
    featured: true,
    createdAt: new Date()
  },
  {
    id: 6,
    title: "Restaurant Redesign",
    description: "A complete overhaul of dining space to create an immersive culinary experience.",
    imageUrl: "/images/projects/restaurant.jpg",
    category: "commercial",
    featured: true,
    createdAt: new Date()
  }
];

export const fallbackTransformations: Transformation[] = [
  {
    id: 1,
    title: "Kitchen Renovation",
    description: "Transformed an outdated kitchen into a modern cooking space with premium appliances and elegant finishes.",
    beforeImageUrl: "/images/transformations/kitchen-before.jpg",
    afterImageUrl: "/images/transformations/kitchen-after.jpg",
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Living Room Redesign",
    description: "Converted a dark, cramped living area into a bright, open space perfect for family gatherings.",
    beforeImageUrl: "/images/transformations/living-before.jpg",
    afterImageUrl: "/images/transformations/living-after.jpg",
    createdAt: new Date()
  }
];

export const fallbackTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rohan Rao",
    position: "Principal Designer & Founder",
    bio: "With over 15 years of experience in interior design, Rohan brings creativity and precision to every project. His vision for creating timeless interiors has been the foundation of R.R Interiors.",
    imageUrl: "/images/team/rohan.jpg",
    socialLinks: null,
    createdAt: new Date()
  },
  {
    id: 2,
    name: "Anika Sharma",
    position: "Senior Interior Designer",
    bio: "Specializing in residential design, Anika has a keen eye for detail and a talent for understanding and executing client visions.",
    imageUrl: "/images/team/anika.jpg",
    socialLinks: null,
    createdAt: new Date()
  },
  {
    id: 3,
    name: "Vikram Patel",
    position: "Commercial Design Specialist",
    bio: "Vikram excels in creating functional and inspiring commercial spaces that reflect brand identity while enhancing productivity.",
    imageUrl: "/images/team/vikram.jpg",
    socialLinks: null,
    createdAt: new Date()
  },
  {
    id: 4,
    name: "Priya Nair",
    position: "Project Manager",
    bio: "Priya ensures that every project is completed on time and within budget while maintaining the highest standards of quality.",
    imageUrl: "/images/team/priya.jpg",
    socialLinks: null,
    createdAt: new Date()
  }
];