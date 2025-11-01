# WebLearn - Interactive Web Development Tutorial Platform

## Overview

WebLearn is an interactive educational platform designed to teach web development fundamentals through structured lessons, code examples, and hands-on exercises. The platform focuses on HTML and CSS courses, providing a Codecademy-inspired learning experience with progressive disclosure, immediate feedback, and clear progress tracking.

The application follows a content-first architecture where code examples and lessons are the primary focus, with the UI designed to recede into the background and minimize cognitive load for learners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (two main routes: course selection and lesson view)

**UI Component Library:**
- shadcn/ui (New York style) with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes with localStorage persistence

**State Management:**
- TanStack Query (React Query) for server state management and API data caching
- React Context for theme management
- Local component state with hooks for UI interactions
- localStorage for lesson progress tracking (completed lessons, progress counts)

**Design System:**
- Typography: DM Sans for UI, Fira Code/Geist Mono for code blocks
- Spacing: Consistent Tailwind scale (2, 4, 6, 8, 12 units)
- Layout: Responsive grid system with mobile-first approach
- Three-panel lesson layout: navigation sidebar (25%), content area (50%), reference panel (25%)
- Mobile: Single column stack with collapsible navigation

**Key Components:**
- `CodeBlock`: Syntax-highlighted code display with copy functionality (using react-syntax-highlighter)
- `ExerciseCard`: Interactive coding exercises with hints, solutions, and validation
- `LessonNav`: Collapsible tree navigation with progress indicators
- `ProgressBar`: Visual lesson completion tracking
- `CourseCard`: Course information display with metadata badges

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js
- Custom Vite middleware integration for development with HMR
- RESTful API endpoints for course and lesson data

**API Structure:**
- `GET /api/courses` - List all available courses
- `GET /api/courses/:courseId` - Get specific course details
- `GET /api/lessons/:lessonId` - Get lesson content with exercises

**Data Layer:**
- In-memory storage using `MemStorage` class (currently used for user management)
- Static course data imported from `shared/courseData.ts`
- Course content includes: lessons, sections, exercises, code examples, key points

**Data Models:**
- `Course`: Contains title, level, topic, description, estimated hours, learning outcomes, sections
- `Lesson`: Contains title, content, key points, code examples, exercises
- `Section`: Groups related lessons together
- `Exercise`: Includes description, starter code, hints, solutions, validation

### Code Organization

**Monorepo Structure:**
- `/client` - React frontend application
- `/server` - Express backend server
- `/shared` - Shared TypeScript types and data (course content, schemas)
- Path aliases configured for clean imports: `@/` for client, `@shared/` for shared code

**Type Safety:**
- Full TypeScript coverage across frontend and backend
- Shared types between client and server for API contracts
- Drizzle-zod integration for schema validation

### Build & Deployment

**Development:**
- Concurrent dev servers: Vite for frontend, tsx for backend
- Hot module replacement (HMR) for instant feedback
- Replit-specific plugins for error overlays and dev tools

**Production:**
- Vite builds optimized client bundle to `dist/public`
- esbuild bundles server code to `dist/index.js`
- ESM modules throughout the stack
- Static asset serving through Express

## External Dependencies

### Database & ORM
- **Drizzle ORM** (v0.39.1): Type-safe SQL query builder
- **@neondatabase/serverless** (v0.10.4): Serverless PostgreSQL driver
- Configuration: `drizzle.config.ts` points to PostgreSQL with schema in `shared/schema.ts`
- Current schema: Basic user table (id, username, password)
- Migrations directory: `/migrations`
- Note: Database is configured but not actively used for course data (which is static)

### UI Component Libraries
- **Radix UI**: Complete set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, progress, scroll-area, select, tabs, toast, etc.)
- **class-variance-authority**: Type-safe variant management for component styles
- **tailwind-merge**: Intelligent Tailwind class merging utility
- **cmdk**: Command palette component (currently unused but available)

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Schema validation library
- **drizzle-zod**: Bridge between Drizzle schemas and Zod validation

### Code Display & Syntax Highlighting
- **react-syntax-highlighter**: Code syntax highlighting with Prism
- **Prism themes**: vscDarkPlus (dark mode), vs (light mode)
- Language support: HTML, CSS, JavaScript

### Routing & Data Fetching
- **wouter**: Minimalist router (2 routes: home, lesson view)
- **@tanstack/react-query** (v5.60.5): Server state management, caching, background updates

### Styling & CSS
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Custom CSS variables**: HSL-based color system for theming

### Development Tools
- **Vite**: Build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development enhancements (error modals, cartographer, dev banner)
- **tsx**: TypeScript execution for server development

### Utilities
- **date-fns** (v3.6.0): Date manipulation library
- **nanoid**: Unique ID generation
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

### Session Management (Configured but Not Active)
- **connect-pg-simple** (v10.0.0): PostgreSQL session store for Express
- Currently not implemented in routes but available for future authentication