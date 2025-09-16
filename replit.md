# Overview

This is a full-stack interior design company website for "R.R Interiors" built with React, Express.js, and PostgreSQL. The application showcases the company's services, portfolio projects, team information, and includes a contact form for potential clients. It features a modern, professional design with a focus on luxury interior design services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application built with React 18 and TypeScript for type safety
- **Wouter Router**: Lightweight client-side routing for navigation between pages (Home, Services, Portfolio, About, Testimonials, Contact)
- **Tailwind CSS + shadcn/ui**: Utility-first CSS framework combined with pre-built accessible components for consistent design
- **TanStack Query**: Data fetching and caching library for API calls with fallback data support
- **React Hook Form + Zod**: Form handling with validation for the contact form
- **Vite**: Build tool and development server for fast compilation and hot module replacement

## Backend Architecture
- **Express.js**: RESTful API server handling CRUD operations for services, projects, team members, testimonials, and contact submissions
- **Node.js with ES Modules**: Modern JavaScript runtime with native ES module support
- **TypeScript**: Type-safe server-side development
- **Custom storage layer**: Abstraction over database operations for better maintainability

## Data Storage
- **PostgreSQL**: Primary database using Drizzle ORM for type-safe database operations
- **Drizzle ORM**: Schema-first ORM with automatic type generation and migration support
- **Database Schema**: Includes tables for users, services, projects, transformations (before/after), team members, testimonials, and contact submissions
- **Connection pooling**: Using node-postgres Pool for efficient database connections

## API Design
- **RESTful endpoints**: Standard HTTP methods for resource operations
- **Route structure**: All API routes prefixed with `/api` for clear separation
- **Error handling**: Centralized error handling middleware with proper HTTP status codes
- **Request validation**: Input validation using Zod schemas shared between frontend and backend
- **Logging**: Custom request logging for API endpoints with timing information

## Deployment Architecture
- **Replit-optimized**: Configured for Replit environment with specific plugins and middleware
- **Static file serving**: Vite-built frontend served by Express in production
- **Development setup**: Hot module replacement and runtime error overlays for development
- **Build process**: Separate build processes for client (Vite) and server (esbuild)

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database service via `@neondatabase/serverless` package
- **Database URL**: Environment variable-based connection string configuration

## UI Component Libraries
- **Radix UI**: Unstyled, accessible UI primitives for complex components (dialogs, dropdowns, forms, etc.)
- **Lucide React**: Icon library providing consistent iconography
- **Class Variance Authority**: Utility for creating component variants with Tailwind classes

## Development Tools
- **Replit Plugins**: Custom Vite plugins for Replit integration including cartographer and theme support
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundler for server-side code in production builds

## Fonts and Assets
- **Google Fonts**: Playfair Display (serif) and Montserrat (sans-serif) fonts for typography hierarchy
- **Unsplash Images**: External image URLs for portfolio projects, services, and design elements

## Form Handling
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation
- **Zod**: Schema validation library used for both client and server-side validation

The application follows a monorepo structure with shared TypeScript schemas between client and server, ensuring type consistency across the full stack. The design emphasizes performance with image optimization, lazy loading, and efficient caching strategies.