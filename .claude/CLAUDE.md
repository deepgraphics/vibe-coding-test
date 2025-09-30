# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Serial Effect** - a UX/UI design consultation website built as a single-page React application using Vite, Material-UI (MUI), and React Router. The site is being developed mobile-first based on Figma designs, with two app entry points:

- `AppMobileMock.jsx` - Currently active mobile mockup (matches Figma mobile design exactly)
- `App.jsx` - Full responsive site (under development)

The `main.jsx` entry point currently imports `AppMobileMock` for mobile-first development.

## Development Commands

```bash
# Start development server (opens automatically on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── common/       # Shared components (Header, MobileMockHeader)
│   ├── sections/     # Page sections (HeroSection, ServicesSection, AboutSection, MobileMockHero)
│   ├── forms/        # Form components (currently empty)
│   ├── navigation/   # Navigation components (currently empty)
│   └── ui/           # UI elements (currently empty)
├── pages/            # Page components (Home.jsx, About.jsx)
├── theme/            # MUI theme configuration (theme.js)
├── styles/           # Global styles (global.css)
├── hooks/            # Custom React hooks (useLocalStorage.js)
├── utils/            # Utility functions (formatters.js)
├── assets/           # Static assets (images, icons)
├── layouts/          # Layout components (currently empty)
└── services/         # API/service layer (currently empty)
```

### Theme System

The project uses a custom MUI theme (`src/theme/theme.js`) based on Figma designs:

**Colors (Exact Figma Palette):**
- Primary: `#1ABC9C` (teal)
- Secondary: `#D62A04` (red)
- Tertiary: `#2C3E50` (dark blue)
- Background: `#FFFFFF` (pure white)

**Typography:**
- **Headings**: Karantina font (700 weight)
- **Body text**: Inter font (400 weight)
- **Buttons**: Inter font (600 weight)

The theme includes modern component overrides for buttons, cards, and typography with smooth transitions and hover effects.

### Component Architecture

**Two App Entry Points:**

1. **AppMobileMock** (Active) - Mobile-only design matching Figma mockups
   - Uses `MobileMockHeader` and `MobileMockHero`
   - Focus: Pixel-perfect mobile implementation

2. **App** (Development) - Full responsive site
   - Uses `Header`, `HeroSection`, `ServicesSection`, `AboutSection`
   - Focus: Responsive design across breakpoints

**Section Components:**
- Wrap in `<Box>` with consistent spacing
- Use MUI's responsive utilities (`sx` prop)
- Follow theme color palette strictly

## Development Workflow

1. **Mobile-First Approach**: Start with mobile designs in `AppMobileMock`
2. **Component Development**: Build sections in `components/sections/`
3. **Theme Consistency**: Always reference `theme.js` for colors and typography
4. **Responsive Design**: Use MUI breakpoints (`xs`, `sm`, `md`, `lg`, `xl`)

## Key Files

- `src/main.jsx` - React entry point (currently renders AppMobileMock)
- `src/theme/theme.js` - Centralized theme configuration (Figma colors, fonts, spacing)
- `index.html` - Loads Karantina and Inter fonts from Google Fonts
- `vite.config.js` - Vite configuration (dev server on port 3000, auto-open browser)

## Design System Notes

- **Spacing**: 8px base unit (MUI default)
- **Border Radius**: 12px (buttons), 20px (cards)
- **Shadows**: Subtle by default, elevated on hover
- **Transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Effects**: -2px translateY + shadow elevation

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **Material-UI 7** - Component library
- **Emotion** - CSS-in-JS styling
- **React Router 7** - Client-side routing