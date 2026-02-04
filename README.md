# Ian Gicheha Mbae - Portfolio Website

A professional portfolio website for a Python Software Developer, built with Next.js 14, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features

- 🚀 **Next.js 14** - Latest React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ✨ **Framer Motion** - Smooth animations and transitions
- 🔗 **GitHub Integration** - Dynamically fetches projects from GitHub API
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark Theme** - Modern dark design with gradient accents
- 📧 **Contact Form** - With validation and loading states

## Tech Stack

- **Frontend**: React, TypeScript, Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Fa, Si)
- **API**: GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/stewiriffin/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── globals.css      # Global styles and Tailwind imports
│       ├── layout.tsx      # Root layout component
│       └── page.tsx        # Main page component
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## GitHub Integration

The Projects section automatically fetches repositories from the GitHub API:
- Endpoint: `https://api.github.com/users/stewiriffin/repos`
- Filters: Non-forked repositories with language tags
- Updates: Sorted by most recently updated

## Customization

### Update Personal Information

Edit `src/app/page.tsx` to customize:

```typescript
// Contact information
const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'your-email@gmail.com', gradient: '...' },
  // Add your info here
]

// Social links
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/your-username', label: 'GitHub' },
  // Add your links here
]
```

### Update GitHub Username

Find and replace `stewiriffin` with your GitHub username:
- Line ~920: GitHub API endpoint
- Line ~404: Social links

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Deploy automatically

### GitHub Pages

```bash
npm run build
# Deploy .next/public or static export
```

## Contact

- **Email**: mbaegicheha@gmail.com
- **Phone**: +254 708617059
- **LinkedIn**: https://www.linkedin.com/in/ianmbae
- **GitHub**: https://github.com/stewiriffin

## License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
