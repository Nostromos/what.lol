<p align="center">
  <img src="/Users/figgefenk/Dev/family-meal/public/uploads/Logo.png" alt="Family Meal" />
</p>
<h1 align="center"><i>what.lol - Michael Monaghan's Portfolio</i></h1>

<p align="center">
  <a href="https://docusaurus.io">
    <img alt="Docusaurus" src="https://img.shields.io/badge/Docusaurus-3ECC5F?style=for-the-badge&logo=docusaurus&logoColor=white" />
  </a>
  <a href="https://react.dev">
    <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  <a href="https://tailwindcss.com">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  </a>
  <a href="https://ui.shadcn.com">
    <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
  </a>
  <a href="https://mdxjs.com">
    <img alt="MDX" src="https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white" />
  </a>
</p>

## Overview

Michael Monaghan's personal portfolio and blog built with Docusaurus 3.8.1. A static site showcasing various projects, technical blog posts, and insights on career transitions in software development. Visit live at [what.lol](http://what.lol).

## Features

- **Project Showcase**: Interactive portfolio displaying various development projects
- **Blog Platform**: Technical articles and career insights written in MDX
- **Documentation Hub**: Comprehensive project documentation with auto-generated sidebars
- **Search Integration**: Algolia-powered search for easy content discovery
- **Responsive Design**: Mobile-first design with Infima framework
- **MDX Support**: Rich, interactive content with embedded React components
- **Theme Support**: Light/dark mode with system detection

## Tech Stack

- **Docusaurus 3.8.1** - Static site generator for documentation sites
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with shadcn/ui components
- **MDX** - Markdown with embedded JSX for rich content
- **CSS Modules** - Component-scoped styling with Infima framework
- **Algolia** - Search integration for content discovery

## Requirements

- Node.js 18.0 or higher
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/what.lol.git
cd what.lol
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

### Getting Started

1. **Explore Projects**: Browse the project showcase to see featured work
2. **Read Blog Posts**: Discover technical insights and career journey articles
3. **View Documentation**: Access detailed documentation for each project
4. **Search Content**: Use Algolia search to find specific topics
5. **Contact**: Reach out through the contact page for inquiries

### Key Features

#### Content Management
- Write blog posts in Markdown with frontmatter metadata
- Create rich MDX pages with embedded React components
- Organize project documentation with auto-generated sidebars
- Add custom React components for interactive content

#### Project Showcase
- Display projects with custom ProjectCard components
- Tag projects by technology and category
- Link to live demos and source code
- Include detailed project documentation

#### Blog Platform
- Write technical articles in Markdown/MDX
- Automatic RSS feed generation
- Tag-based categorization
- Reading time estimates

## Project Structure

```
what.lol/
├── blog/                  # Blog posts in Markdown
├── docs/                  # Project documentation
│   ├── dashboard-tifco/  # TIFCO Dashboard docs
│   ├── ggob/             # GGOB project docs
│   ├── notion-clone/     # Notion Clone docs
│   ├── qli/              # QLI project docs
│   └── RCScout/          # RC Scout docs
├── src/                   # Source code
│   ├── components/       # React components
│   │   ├── EnhancedLogo.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── RCScout.tsx
│   │   ├── TagPill.tsx
│   │   └── ui/          # shadcn/ui components
│   ├── css/             # Global styles
│   ├── lib/             # Utilities
│   └── pages/           # MDX pages
│       ├── index.mdx    # Homepage
│       ├── about.mdx    # About page
│       ├── contact.mdx  # Contact page
│       └── projects.mdx # Projects showcase
├── static/              # Static assets
├── docusaurus.config.ts # Site configuration
├── sidebars.ts         # Sidebar config
└── CLAUDE.md          # AI assistant context
```

## Development

### Commands

```bash
# Start development server (port 3000)
npm start

# Build for production
npm build

# Serve production build locally
npm serve

# Type checking
npm run typecheck

# Deploy to GitHub Pages
npm run deploy

# Clear cache
npm run clear
```

### Architecture Patterns

- **Static Site Generation**: Pre-built pages for optimal performance
- **Component-based**: Modular, reusable React components
- **MDX-driven**: Rich content with embedded components
- **CSS Modules**: Scoped styling with Infima framework
- **Type-safe**: Full TypeScript coverage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Comments system for blog posts
- [ ] Newsletter integration
- [ ] Project demo videos
- [ ] Interactive code snippets
- [ ] Analytics dashboard
- [ ] RSS feed enhancements
- [ ] Multi-language support
- [ ] Progressive Web App features

## License

See [LICENSE](./LICENSE) for more information.

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io)
- UI components from [shadcn/ui](https://ui.shadcn.com) 
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Search powered by [Algolia](https://www.algolia.com)

## Additional Resources

- [Project Documentation](./docs/) - Detailed project documentation
- [CLAUDE.md](./CLAUDE.md) - AI assistant instructions
- [Docusaurus Documentation](https://docusaurus.io/docs) - Learn about Docusaurus
- [Live Site](http://what.lol) - Visit the portfolio