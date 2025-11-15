# UI Website Template - Next.js + React + TypeScript

A modern, responsive SaaS landing page template built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Based on a clean Figma design, perfect for customer service software, SaaS products, or any business website.

## Features

- **Next.js 15** - Latest Next.js with App Router
- **React 19** - Modern React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Fully Responsive** - Mobile-first design approach
- **Modern Components** - Reusable React components
- **Animations** - Smooth transitions and scroll animations
- **SEO Optimized** - Built-in Next.js SEO features

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── Companies.tsx      # Company logos section
│   ├── Features.tsx       # Features grid with animations
│   ├── Testimonial.tsx    # Testimonial carousel
│   └── Footer.tsx         # Footer component
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Components Overview

### Navbar
- Sticky navigation with mobile menu
- Dropdown indicators for Products/Resources
- Responsive design with mobile hamburger menu

### Hero
- Eye-catching headline and CTA buttons
- Two-column layout with image placeholder
- Fully responsive grid

### Companies
- Social proof section with company logos
- Gradient-colored logo icons
- Responsive flex layout

### Features
- 6-card grid layout
- Scroll-triggered animations
- Hover effects with smooth transitions
- Responsive: 3 columns → 2 columns → 1 column

### Testimonial
- Auto-rotating carousel (5-second interval)
- Manual navigation with dots
- Purple gradient background
- Grid layout with image placeholder

### Footer
- Simple, clean footer
- Easily expandable for additional links

## Customization

### Colors

Edit Tailwind theme in `tailwind.config.ts` or use Tailwind's utility classes:

```tsx
// Purple theme
className="bg-purple-600"

// Red CTA buttons
className="bg-red-500 hover:bg-red-600"
```

### Content

Edit component files directly:
- `components/Navbar.tsx` - Menu items and links
- `components/Hero.tsx` - Headlines and descriptions
- `components/Features.tsx` - Feature cards content
- `components/Testimonial.tsx` - Testimonials array

### Typography

The project uses Inter font from Google Fonts. To change:

```tsx
// app/layout.tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Performance

- Server-side rendering (SSR)
- Automatic code splitting
- Optimized images with next/image
- Font optimization with next/font
- Minimal client-side JavaScript

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
