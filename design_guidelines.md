# Design Guidelines: Web Development Tutorial Platform

## Design Approach

**Selected Approach:** Reference-Based with System Support
- Primary inspiration: Codecademy's lesson structure + MDN Web Docs' clarity + freeCodeCamp's progression model
- Supporting system: Material Design principles for content organization
- Rationale: Educational platforms require proven patterns that reduce cognitive load and maximize learning efficiency

## Core Design Principles

1. **Content-First Architecture:** Code examples and lessons are the hero, UI recedes into background
2. **Progressive Disclosure:** Information revealed in digestible chunks, preventing overwhelm
3. **Immediate Feedback:** Visual confirmation for all user actions and exercise completions
4. **Persistent Context:** Users always know where they are in their learning journey

## Typography System

**Font Selection:**
- Primary: Inter or IBM Plex Sans (clean, highly legible for UI)
- Code: JetBrains Mono or Fira Code (monospace with ligatures for code blocks)

**Type Scale:**
- Hero/Page Titles: text-4xl to text-5xl, font-bold
- Section Headers: text-2xl to text-3xl, font-semibold
- Lesson Titles: text-xl, font-semibold
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Code Comments: text-sm, font-normal
- UI Labels: text-sm, font-medium

## Layout System

**Spacing Primitives:** 
Tailwind units of 2, 4, 6, 8, and 12 for consistent rhythm
- Tight spacing: p-2, gap-2 (UI elements, inline code)
- Standard spacing: p-4, gap-4 (cards, buttons, form fields)
- Section spacing: p-6, gap-6 (lesson sections)
- Major spacing: p-8, gap-8 (page sections, major components)
- Generous spacing: p-12, gap-12 (page padding, section breaks)

**Grid Structure:**
- Course Selection Page: Two-column cards (grid-cols-1 md:grid-cols-2) with ample space
- Lesson Pages: Three-panel layout
  - Left Sidebar (25%): Lesson navigation tree, progress indicators
  - Center Content (50%): Lesson content with examples
  - Right Panel (25%): Quick reference, tips, or collapsed when not needed
- Mobile: Single column stack, hamburger navigation for lesson list

## Component Library

### Navigation Components

**Top Navigation Bar:**
- Fixed header with logo left, course selector center, user progress/profile right
- Height: h-16, shadow-sm for subtle separation
- Logo: max-h-8
- Breadcrumb trail showing: Course > Section > Lesson

**Lesson Sidebar Navigation:**
- Collapsible sections for lesson groupings
- Progress dots/checkmarks next to completed lessons
- Current lesson highlighted with border accent
- Lesson numbers prefix each title for easy reference
- Smooth scroll to active lesson on page load

### Content Components

**Lesson Header:**
- Lesson number and title (text-3xl)
- Estimated completion time badge
- Previous/Next navigation buttons (subtle, positioned at edges)

**Code Block Component:**
- Syntax-highlighted pre-formatted blocks
- Line numbers in gutter (text-xs, opacity-50)
- Copy button (top-right corner, icon-only, appears on hover)
- Rounded corners: rounded-lg
- Background distinct from page background
- Padding: p-6
- Font size: text-sm for readability

**Interactive Code Editor:**
- Split view: Editor pane (60%) | Live Preview (40%)
- Resizable divider between panes
- Editor: Monaco-style interface with line numbers, syntax highlighting
- Preview: iframe with bordered container
- Run Code button: Prominent, positioned between editor and preview
- Reset button: Secondary style, less prominent

**Exercise Card:**
- Border: border-2 with distinct treatment
- Padding: p-6
- Contains: Task description, starter code, hints (collapsed), solution (locked until attempt)
- Submit button with loading state
- Success/error feedback banner with animation

**Info Callouts:**
- Three types: Tip (lightbulb icon), Warning (alert icon), Pro Tip (star icon)
- Border-left accent (border-l-4)
- Icon position: absolute left
- Padding: p-4 with pl-12 for icon clearance
- Rounded: rounded-md

### Progress & Feedback

**Progress Bar:**
- Course-level: Top of page, h-2, rounded-full
- Lesson-level: Within sidebar for each section
- Percentage completion displayed

**Achievement Badges:**
- Displayed on course selection and profile
- Size: w-16 h-16, rounded-full
- Simple icon-based design
- Earned badges at full opacity, locked badges at opacity-30

**Completion Checkmark:**
- Animated check icon (stroke-dasharray animation)
- Appears after exercise submission success
- Size: w-8 h-8 within lesson list

## Page-Specific Layouts

### Course Selection Page

**Hero Section:**
- Centered content, max-w-4xl
- Main heading: "Learn to Build Websites" (text-5xl, font-bold)
- Subtitle: "Choose your learning path" (text-xl)
- Height: min-h-screen with content vertically centered
- No background image - clean, focused entry point

**Course Cards:**
- Two cards side-by-side on desktop (grid-cols-2 gap-8)
- Each card: Large (min-h-96), rounded-xl, shadow-lg
- Card structure:
  - Badge indicator: "Beginner" or "Intermediate" (top-right)
  - Course title (text-2xl, font-bold)
  - Topic focus: "HTML Fundamentals" or "CSS Styling"
  - Lesson count and estimated hours
  - Key learning outcomes (bulleted list, 4-5 items)
  - Large "Start Learning" button (w-full, py-4)
- Hover: Subtle lift effect (transform translate-y)

### Lesson Page

**Left Sidebar (Persistent):**
- Sticky position, overflow-y-auto
- Width: w-64 on desktop, full-width drawer on mobile
- Course progress at top (circular progress indicator)
- Expandable sections with lesson lists
- Each lesson: checkbox, number, title
- Current lesson: Highlighted with left border accent

**Main Content Area:**
- Max width: max-w-3xl for optimal reading
- Generous line-height: leading-relaxed
- Content sections separated by my-8
- Images: Full-width within content area, rounded-lg, shadow-md
- Code examples: Full-width with scroll-x-auto if needed

**Bottom Navigation:**
- Fixed bottom bar on mobile
- Static pagination on desktop (bottom of content)
- Previous/Next buttons with lesson titles
- "Mark as Complete" button (prominent, center or right-aligned)

### Exercise Page

**Full-Width Layout:**
- Code editor takes precedence
- Minimal chrome, maximum workspace
- Task description: Collapsible panel (top), max-h-64 with scroll
- Editor/Preview: Main workspace
- Controls: Floating toolbar (Run, Reset, Submit, Get Hint)

## Interactive Elements

**Buttons:**
- Primary CTA: Larger padding (px-8 py-3), rounded-lg, font-semibold
- Secondary: Outlined style, same padding
- Icon buttons: Square (w-10 h-10), rounded-md
- Code action buttons: Small (px-3 py-1.5), rounded, text-sm

**Form Inputs:**
- Consistent height: h-12
- Rounded: rounded-md
- Border: border-2
- Focus: Ring treatment (ring-2 ring-offset-2)
- Padding: px-4

**Tabs (if needed for examples):**
- Horizontal tab list with border-b-2 on container
- Active tab: border-b-4 accent, font-semibold
- Padding: px-4 py-3
- Smooth transition on active state change

## Responsive Behavior

**Breakpoints:**
- Mobile: base (single column, stacked)
- Tablet: md (sidebar toggleable, content optimized)
- Desktop: lg (full three-panel layout where applicable)

**Mobile Optimizations:**
- Hamburger menu for lesson navigation
- Code editor: Vertically stacked (editor top, preview bottom)
- Exercise controls: Bottom sticky bar
- Simplified progress indicators
- Larger touch targets (min-h-12 for all interactive elements)

## Images

**Course Selection Cards:**
- Decorative header image for each card (aspect-ratio-16/9)
- Beginner: Illustration of basic HTML tags/structure
- Intermediate: Illustration of styled webpage mockup
- Images should be clean, simple, educational in nature

No large hero images required. The platform prioritizes content and functionality over decorative visuals.