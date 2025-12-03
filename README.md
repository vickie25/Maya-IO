# Maya-IO Web UI

A modern financial web application built with React, TypeScript, and Tailwind CSS. The application provides features for money transfer (MoneyX), peer-to-peer trading, crypto swapping, and account management.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Available Routes](#available-routes)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vickie25/Maya-IO.git
cd Maya-IO
```

2. Install dependencies:
```bash
npm install
```

## How to Run

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port if 3000 is in use).

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Maya-IO/
├── src/
│   ├── components/              # React components
│   │   ├── Account.tsx          # Account management page
│   │   ├── Dashboard.tsx        # Dashboard overview
│   │   ├── MoneyXContent.tsx    # Money transfer interface
│   │   ├── P2P Trading.tsx      # Peer-to-peer trading
│   │   ├── Settings.tsx         # User settings
│   │   ├── Swap Crypto.tsx      # Cryptocurrency swap
│   │   ├── Xchange.tsx          # Exchange interface
│   │   ├── figma/               # Design system components
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                  # Reusable UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── tabs.tsx
│   │       ├── accordion.tsx
│   │       └── ... (other UI components)
│   ├── Layout/                  # Layout components
│   │   ├── Header.tsx           # Top navigation bar
│   │   └── Sidebar.tsx          # Left sidebar navigation
│   ├── store/                   # Redux store configuration
│   │   ├── index.ts             # Store setup
│   │   └── navSlice.ts          # Navigation state slice
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Global CSS and theme variables
│   ├── Assets/                  # Static assets
│   │   ├── Salaam.png           # Bank logo
│   │   └── Premierbank.png      # Bank logo
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # React entry point
│   └── images.d.ts              # Image module declarations
├── public/                      # Public static files
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lock file
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

## Tech Stack

### Frontend Framework
- **React 18** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript

### Build Tool
- **Vite** - Fast and modern build tool and dev server
- **Vite CJS Node API** (deprecated warning) - Legacy API usage

### State Management
- **Redux Toolkit** - Predictable state management with Redux
- **react-redux** - React bindings for Redux

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Custom CSS Variables** - Theme configuration in `globals.css`

### UI Components
- **Radix UI** - Unstyled accessible component primitives (via shadcn/ui)
- **Lucide React** - Beautiful icon library

### Type Definitions
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM

### Development Tools
- **ESLint** - Code linting (with TypeScript support disabled via eslint-disable comments where needed)

## Features

### Navigation
- **Sidebar Navigation** - Easy access to different sections
- **Redux-based State Management** - Global navigation state for seamless page transitions
- **Interactive Menu Items** - Highlight active page with visual feedback

### Pages/Sections

1. **Dashboard** - Overview and statistics
2. **MoneyX** - Money transfer between banks
   - Send/receive amount input
   - Bank selection (Salam Bank, Premier Bank)
   - Exchange rate display
   - Transaction warnings
3. **Exchange** - Currency/asset exchange
4. **P2P Trading** - Peer-to-peer trading platform
5. **Swap Crypto** - Cryptocurrency swapping interface
6. **Account** - User account management
7. **Settings** - Application settings and preferences

### Design System
- Dark theme optimized for fintech applications
- Consistent color palette with CSS variables
- Responsive layout with Tailwind breakpoints
- Accessible components using Radix UI primitives

## Configuration Files

### `tsconfig.json`
- TypeScript compiler options
- Module resolution and strict mode enabled

### `vite.config.ts`
- Vite bundler configuration
- React plugin integration

### `tailwind.config.ts`
- Tailwind CSS customization
- Custom color schemes and spacing

### `postcss.config.js`
- PostCSS plugins (Tailwind CSS processor)

## Environment

The application runs in a modern browser environment with:
- ES2020+ JavaScript support
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)

## Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and maintained by the author Victor

## Support

For issues, questions, or feedback, please open an issue on the GitHub repository.

---

**Last Updated:** December 3, 2025
