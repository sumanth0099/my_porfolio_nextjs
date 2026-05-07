# Personal Portfolio Website

A premium, fully responsive, and animated personal portfolio built from scratch for Tetala Sumanth Reddy.

## Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## Key Features
- **Centralized Data**: Manage all content (projects, skills, certs) from a single file: `src/data/portfolioData.js`.
- **Responsive Design**: Optimized for mobile (375px), tablet (768px), and desktop (1280px).
- **Parallax Scrolling**: Dynamic background elements in the Hero section.
- **On-Scroll Animations**: Reveal effects for various sections and project cards.
- **Accessibility**: Support for `prefers-reduced-motion`.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Centralized Management
To update your portfolio content, simply edit the `portfolioData` object in `src/data/portfolioData.js`. The changes will reflect across the entire application instantly.

## Requirements Checklist
- [x] Fully responsive layout (Mobile/Tablet/Desktop)
- [x] Parallax scrolling effect (Hero section)
- [x] At least 3 on-scroll animations
- [x] All 5 required sections (Hero, About, Skills, Projects, Contact) + Certifications
- [x] `prefers-reduced-motion` support
- [x] README with setup instructions
