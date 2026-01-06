# Trace Website

![Build](https://img.shields.io/github/actions/workflow/status/6639835/trace-web/ci.yml?label=build)
![License](https://img.shields.io/github/license/6639835/trace-web)
![Version](https://img.shields.io/github/package-json/v/6639835/trace-web)
![Last Commit](https://img.shields.io/github/last-commit/6639835/trace-web)
![Issues](https://img.shields.io/github/issues/6639835/trace-web)

Professional docs and marketing site for Trace.

Marketing and documentation site for Trace, a professional iOS network debugging tool. It explains the product, showcases features, and hosts technical docs for engineers who need device-wide HTTP(S) inspection with on-device TLS MITM.

![Trace Website Screenshot](/public/trace-web.png)

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Authors and Credits](#authors-and-credits)
- [License](#license)

## Features

- Product marketing pages with a calm, engineering-focused visual system
- Documentation sections for features, architecture, and open-source info
- Next.js App Router with TypeScript and Tailwind CSS
- Component library based on shadcn/ui for consistent UI building blocks
- Static deployment ready for Vercel, Netlify, or any static host

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build and run production

```bash
npm run build
npm start
```

## Usage Examples

### Add a new page

```bash
mkdir -p app/new-page
```

```tsx
// app/new-page/page.tsx
export default function Page() {
  return <main className="mx-auto max-w-3xl p-8">New page</main>;
}
```

### Add a UI component

```bash
npx shadcn@latest add button
```

## Configuration

No runtime configuration is required for local development. If you add environment variables later, document them here and consider adding a `.env.example` file.

## Contributing

Contributions are welcome. If you plan larger changes, please open an issue first.

1. Fork the repo and create your branch.
2. Keep code style consistent with the existing TypeScript and Tailwind patterns.
3. Include clear descriptions and screenshots for UI changes.

## Authors and Credits

- Trace team and contributors
- Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui

## License

![License](https://img.shields.io/github/license/6639835/trace-web)

MIT License. See [LICENSE](LICENSE).
