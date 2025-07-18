# Omaha Auto Glass Repair Website

## Overview

This is a full-stack web application for Omaha Auto Glass Repair, a local auto glass repair business specializing in mobile rock chip repair and windshield services. The application is built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Shadcn/ui components built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reload with Vite integration for full-stack development

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon serverless driver for PostgreSQL connections

## Key Components

### Frontend Components
- **Pages**: Home (Index), About, Services, Fleet Services, Dealership Services, Contact, Privacy Policy, Terms of Service, and 404 handling
- **Layout**: Header with navigation, Hero section, Service benefits, Quote form, and Footer
- **UI Components**: Comprehensive set of accessible components from Shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **Server**: Express.js with middleware for JSON parsing, logging, and error handling
- **Routes**: RESTful API structure with `/api` prefix
- **Storage**: Interface-based storage system with in-memory implementation (ready for database integration)
- **Development**: Vite middleware integration for hot reloading

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Type Safety**: Zod validation schemas derived from Drizzle schema definitions

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express backend
2. **Backend Processing**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM manages database queries and mutations
4. **Response**: JSON responses sent back to frontend
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe database toolkit
- **@tanstack/react-query**: Server state management
- **express**: Web framework for Node.js
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built frontend
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

The application is designed for easy deployment to platforms like Replit, Vercel, or traditional hosting providers, with support for both development and production environments.

## Recent Changes (January 2025)

### Contact Information Updates
- Updated all phone numbers throughout the site to (402) 302-2284
- Changed emergency service from phone calls to text messages to avoid late-night calls
- Updated all tel: links and display text across all components

### New Pages Added
- **Contact Page**: Created comprehensive contact form with business hours, service areas, and emergency contact options
- **Privacy Policy**: Industry-standard privacy policy with auto glass business specifics
- **Terms of Service**: Legal terms covering services, payments, warranties, and liability (removed warranty and services sections per user request)

### UI/UX Improvements
- **About Page Logo**: Redesigned logo display with circular white background and teal/green opaque circle behind it
- **Footer Service Links**: Updated service listings to link to respective service pages (/services, /dealership-services, /fleet-services)
- **Services Page**: Added photo gallery section showcasing actual repair work (not logos) with before/after images
- **Header Navigation**: Updated contact link to direct to new contact page (/contact)

### Emergency Service Changes
- Changed emergency service CTA from "Call Now" to "Text Now" 
- Updated phone links to use sms: protocol instead of tel: for emergency contacts
- Added explanatory text "Text us for urgent service" to emergency banner

### Architecture Updates
- All pages now use proper routing with wouter
- Contact form uses mailto integration for message handling
- Photo gallery integrated into services page showcasing actual repair work