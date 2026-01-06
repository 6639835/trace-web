# Trace Website

Official website for Trace, a professional iOS network debugging tool.

## Overview

This is the marketing and documentation website for Trace, an open-source network debugger for iOS. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Design Philosophy

The website follows these core principles:

- **Minimalist and calm**: No visual noise, strong hierarchy, clean layouts
- **Engineering-first**: Technical credibility without marketing hype
- **Professional**: Reflects the quality and seriousness of the tool
- **Accessible**: Clear information architecture and navigation

Design references: Linear, Vercel, Raycast

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion (minimal usage)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
trace-web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── features/          # Features page
│   ├── architecture/      # Architecture documentation
│   ├── open-source/       # Open source information
│   ├── docs/              # Documentation
│   ├── layout.tsx         # Root layout with nav and footer
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Site navigation
│   └── footer.tsx        # Site footer
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper for class names
└── public/               # Static assets

```

## Pages

- **Home** (`/`): Landing page with hero, product showcase, capabilities, technical details, and open source information
- **Features** (`/features`): Detailed feature breakdown and capabilities
- **Architecture** (`/architecture`): Technical architecture and implementation details
- **Open Source** (`/open-source`): Licensing, contribution guidelines, and community information
- **Docs** (`/docs`): Documentation structure (placeholder content)

## Styling

The site uses a neutral, monochromatic color palette with subtle accents. Colors are defined as CSS variables in `app/globals.css` using HSL values for easy theming.

### Design Tokens

- Typography: Inter font family
- Spacing: Consistent scale using Tailwind spacing
- Border radius: Subtle rounding (0.5rem default)
- Colors: Zinc-based neutral palette

## Components

All UI components are from shadcn/ui, copied directly into the project for full control:

- Button
- Card
- Badge
- Separator
- Tabs

Components are located in `components/ui/` and can be customized as needed.

## Content Guidelines

When adding or editing content, follow these rules:

- **Tone**: Engineering-focused, confident, calm
- **Length**: Short sentences, concise paragraphs
- **Voice**: Third person, matter-of-fact
- **Avoid**: Buzzwords, exclamation marks, hype, marketing language

## Development

### Adding a New Page

1. Create a new directory in `app/`
2. Add `page.tsx` in that directory
3. Update navigation in `components/navigation.tsx`
4. Update footer links if needed

### Adding a Component

Use shadcn/ui CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

Or manually create in `components/ui/`.

### Code Style

- TypeScript strict mode enabled
- Functional components with hooks
- Tailwind for all styling (no CSS modules)
- Use `cn()` utility for conditional classes

## Building for Production

```bash
npm run build
```

Generates an optimized production build in `.next/`.

## Deployment

The site is static and can be deployed to:

- Vercel (recommended, zero-config)
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome. Please maintain the design philosophy and coding standards when submitting changes.