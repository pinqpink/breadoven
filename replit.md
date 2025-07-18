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
- **Storage**: Interface-based storage system with PostgreSQL database integration via DatabaseStorage
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

## Recent Changes (January 2025) - Updated

### Contact Page Updates
- Added Google Maps embed showing Omaha service area
- Removed "Get a Free Quote" section from contact page
- Changed emergency service back to phone calls instead of text messages

### Header Navigation Changes
- Updated phone number in toolbar to use SMS/text messaging (sms: protocol)
- Made "Get Quote" button redirect to new dedicated quote page (/quote)

### Services Page Updates
- Removed before/after photo gallery section from Services page
- Kept process and benefits sections intact

### New Quote Page
- Created comprehensive quote page with 2 main damage options:
  1. Large damage (larger than 6 inches) - leads to replacement
  2. Small damage (3 or fewer chips/cracks smaller than 6 inches) - repairable
- Dynamic form that shows chip count selection (1, 2, or 3) when small damage is selected
- Customer information form with name, phone, email, and damage description
- Quote submissions sent to info@autoglassomaha.com via mailto integration
- Visual windshield damage illustrations for each option
- Proper form validation and user feedback

### Quote Page UI Improvements (Latest)
- Made entire damage selection diagrams clickable, not just radio buttons
- Changed chip count selection to card-based boxes labeled 1, 2, and 3
- Updated damage option images to use actual windshield photos (broken.jpeg and crack.jpeg)
- Redirected all "Get Free Quote" buttons throughout the site to the new quote page (/quote)
- Updated Hero section, ChipRepairBenefits "Ready to Save Money and Time" section to redirect to quote page

### Quote Page Updates (January 2025)
- Made windshield images larger (h-40) and changed to object-contain for better visibility
- Replaced small damage image with newwind.png showing clear windshield with small chips
- Modified large damage section to display "coming soon" message instead of form
- Added referral information for Metro Glass Omaha and Omaha Glass Pro
- Updated form logic to only show customer information form for small damage repairs
- Large damage now shows service expansion message with local provider recommendations

### Database Integration (January 2025)
- ✓ Created PostgreSQL database using Neon serverless
- ✓ Added database connection layer with proper error handling
- ✓ Implemented DatabaseStorage class replacing MemStorage
- ✓ Updated storage interface to use Drizzle ORM for type-safe database operations
- ✓ Successfully pushed schema to database using `npm run db:push`
- ✓ Verified database connectivity and proper environment variable configuration

### UI/UX Improvements (January 2025)
- ✓ Reduced blur effect on About page background image for better visibility
- ✓ Centered bottom two sales point boxes on dealership services page using separate grid layout
- ✓ Added wave hover effects to email/call buttons across Fleet, Dealership, and Services pages
- ✓ Changed emergency service messaging from "Text Number Now" to "Call Number Now" throughout site
- ✓ Updated service messaging from "24/7 on site mobile glass service" to "Flexible On-Site Mobile Glass Service"
- ✓ Made windshield images smaller (h-32 instead of h-40) on quote page for better visibility
- ✓ Replaced small damage image with newwind_1752862458887.png showing clear windshield with small chips

### Service Area Updates (January 2025)
- ✓ Added Bennington to service area listings throughout the site
- ✓ Replaced Boys Town with Bennington in Footer service areas list
- ✓ Updated Contact page service area to include Bennington
- ✓ Updated Google Maps embed to show broader Omaha metro area coverage

### Performance Optimizations (January 2025)
- ✓ Added QueryClient configuration with stale time (5 minutes) and garbage collection time (10 minutes)
- ✓ Optimized query retry settings to reduce unnecessary API calls
- ✓ Maintained existing component structure while improving loading performance

### Logo Updates (January 2025)
- ✓ Updated logo throughout the entire website to new design featuring windshield crack icons
- ✓ Replaced logo in Header, Footer, About page, and Hero components
- ✓ Updated logo file path from old lovable-uploads to new ChatGPT Image file
- ✓ Removed old logo file (9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png) from project
- ✓ Verified all logo references point to new logo file