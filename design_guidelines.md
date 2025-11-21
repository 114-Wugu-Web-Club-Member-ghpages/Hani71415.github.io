# Design Guidelines: Tech-Style Student Portfolio Blog

## Design Approach
**Reference-Based Approach** drawing from tech-forward platforms like GitHub, Notion, and Linear, emphasizing clean information architecture with futuristic aesthetic touches. The blog balances content showcase with tech sophistication.

## Core Design Principles
- **Tech Minimalism**: Clean layouts with strategic use of subtle gradients and geometric accents
- **Content First**: Visual hierarchy that guides visitors through personal story naturally
- **Modular Grid System**: Consistent card-based layouts for photos, diary entries, and portfolio pieces

## Typography System
**Font Stack**: 
- Primary: 'Inter' or 'Space Grotesk' (Google Fonts) - clean, modern sans-serif
- Accent: 'JetBrains Mono' for tech details/metadata (dates, tags, code snippets)

**Hierarchy**:
- Hero/Section Titles: text-4xl to text-6xl, font-bold, tracking-tight
- Subsections: text-2xl to text-3xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Metadata/Captions: text-sm, font-mono, uppercase tracking-wide

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with mx-auto px-4

## Page Structure

### Homepage/Introduction
- **Hero Section**: Full-width with gradient overlay, profile image (circular, large), name in bold display text, tagline/role subtitle, quick navigation to main sections
- **About Preview**: Two-column split (md:grid-cols-2) - left: extended bio text with interests/skills list, right: additional profile photo or tech stack icons
- **Quick Links Grid**: 3-4 column cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) linking to Photos, Diary, Videos, Portfolio - each with icon and description

### Photo Gallery
- **Masonry/Grid Layout**: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 with gap-4
- Cards with aspect-ratio-square or aspect-ratio-video, hover overlay with caption/date
- Category filter tabs at top (All, Campus, Events, Personal, etc.)

### Diary/Blog
- **Post Grid**: Two-column on desktop (lg:grid-cols-2), single column mobile
- Post cards include: thumbnail image, title (text-xl font-bold), excerpt (2-3 lines), metadata bar (date, reading time, tags)
- Featured post at top: larger card spanning full width with prominent image
- Individual post view: max-w-3xl centered, large header image, metadata below title, content with generous line-height

### Video Gallery
- **Grid Layout**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Video cards with 16:9 aspect ratio placeholders/thumbnails
- Title overlay on bottom, hover state reveals play button and description
- Lightbox/modal for video playback with backdrop blur

### Portfolio/Works
- **Project Showcase**: Alternating left-right layout for featured projects or uniform grid
- Each project card: large preview image, title, tech tags (as badges/pills), brief description, "View Details" link
- Detail view modal or dedicated page: image carousel, full description, tech stack list, links to demo/code

## Component Library

### Navigation
- **Fixed header**: backdrop-blur-md with border-b, flex justify-between
- Logo/name on left, navigation links center/right, hamburger menu for mobile
- Smooth scroll to sections on single-page or route navigation

### Cards (Universal Pattern)
- Rounded corners (rounded-lg or rounded-xl)
- Border treatment (border or subtle shadow)
- Padding: p-6 to p-8
- Hover state: subtle scale or shadow increase

### Buttons
- Primary CTA: px-6 py-3, rounded-full or rounded-lg, font-semibold
- Secondary: outlined variant with border-2
- Icon buttons: square aspect-ratio with centered icon

### Tags/Badges
- Small pills: px-3 py-1, rounded-full, text-xs uppercase tracking-wider

### Forms (Comments, Contact)
- Input fields: w-full px-4 py-3, rounded-lg, border focus state
- Textarea: min-h-32
- Submit button: full-width on mobile, auto-width on desktop

## Images

**Hero Section**: Yes - large hero image with gradient overlay
- Full-width header image showcasing tech/workspace aesthetic or personal silhouette against tech backdrop
- Profile photo: 200x200px circular, positioned prominently

**Content Images**:
- Gallery photos: Various aspect ratios, user-uploaded
- Blog post thumbnails: 16:9 ratio, abstract tech patterns or relevant photography
- Portfolio screenshots: Actual project interfaces, code editors, or creative work
- Video thumbnails: 16:9 with play icon overlay

**Background Elements**: Subtle geometric patterns or grid lines on hero/section backgrounds (SVG patterns, not images)

## Accessibility
- All images with descriptive alt text
- Form inputs with visible labels and focus states
- Keyboard navigation support for all interactive elements
- Sufficient contrast ratios for all text
- Skip navigation link for screen readers

## Animations
Use sparingly:
- Smooth scroll behavior for anchor links
- Card hover transforms (scale-105 transition-transform)
- Fade-in on scroll for sections (intersection observer)
- Loading states for video/image content

## Tech Visual Touches
- Subtle grid patterns in section backgrounds
- Border accents with gradient directions
- Monospace font for technical metadata
- Icon set: Heroicons for consistency (solid for filled states, outline for default)