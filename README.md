# GDG on Campus HBTU - Official Website

A modern, interactive website for the Google Developer Groups (GDG) on Campus chapter at Harcourt Butler Technical University (HBTU), Kanpur. Built with React, TypeScript, and cutting-edge web technologies to showcase events, team members, and community activities.

## 🚀 About the Project

This website serves as the digital home for GDG HBTU, providing information about our technical community, upcoming events, past hackathons, workshops, and the talented team behind the organization. The site features stunning visual effects, smooth animations, and an immersive user experience.

## ✨ Key Features

- **Mobile-First Responsive Design**: Fully optimized for mobile devices with adaptive layouts
- **Interactive Particle Background**: Dynamic particle system that responds to user interactions
- **Smooth Animations**: GSAP-powered animations with Lenis smooth scrolling
- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **Event Showcase**: Dynamic event listings with responsive card layout (ChromaGrid on desktop, vertical cards on mobile)
- **Team Profiles**: Beautiful team member cards in responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- **Google Branding**: Consistent Google Developer Groups color scheme and branding
- **Mobile Optimizations**: Simplified layouts on mobile - hidden complex animations, reduced media gallery items, optimized spacing

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool
- **React Router DOM 7.11.0** - Client-side routing

### Styling & Animation
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **GSAP 3.14.2** - Professional-grade animation library
- **Framer Motion 12.23.26** - React animation library
- **Lenis 1.3.16** - Smooth scroll library

### Additional Libraries
- **Lucide React** - Beautiful icon set
- **React Icons** - Comprehensive icon library
- **OGL** - WebGL library for advanced graphics

## 📦 Custom Components

This project features a rich collection of custom-built, reusable components:

### UI Components
- **`CardNav`** - Interactive navigation cards with hover effects
- **`Card`** - Versatile card component with glassmorphism effects
- **`CardSwap`** - Animated card swapping component
- **`ChromaGrid`** - Dynamic grid layout with chromatic effects for showcasing events/team
- **`CountUp`** - Animated number counter with smooth transitions
- **`GradientText`** - Text with animated gradient effects
- **`Masonry`** - Pinterest-style masonry layout for media galleries
- **`OrbitingCircles`** - Circular orbit animations for the about section
- **`ParticleBackground`** - WebGL-powered particle system with customizable effects
- **`ScrollStack`** - Stacked scroll animation component
- **`StarBorder`** - Animated star border effects for buttons and cards

### Page Components
- **`HeroSection`** - Landing hero with Google branding
- **`ShowcaseSection`** - Feature showcase with themed cards
- **`AboutSection`** - About GDG with orbiting technology icons
- **`MediaSection`** - Gallery and media showcase
- **`NavBar`** - Responsive navigation bar
- **`Footer`** - Site footer with contact links

## 📁 Project Structure

```
gdg-hbtu/
├── public/                      # Static assets
│   ├── default.png             # Default placeholder images
│   └── ...
├── src/
│   ├── assets/                 # Images and media files
│   ├── components/             # Reusable React components
│   │   ├── CardNav/
│   │   ├── CardSwap/
│   │   ├── ChromaGrid/
│   │   ├── CountUp/
│   │   ├── GradientText/
│   │   ├── Masonry/
│   │   ├── orbitingcircles/
│   │   ├── particleBackground/
│   │   ├── ScrollStack/
│   │   ├── StarBorder/
│   │   ├── HeroSection.tsx
│   │   ├── ShowcaseSection.tsx
│   │   ├── NavBar.tsx
│   │   ├── about.tsx
│   │   ├── footer.tsx
│   │   ├── media.tsx
│   │   └── now.tsx
│   ├── data/                   # JSON data files
│   │   ├── constants.ts        # App constants and configuration
│   │   ├── eventdata.json      # Event information
│   │   └── team.json           # Team member data
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Page components
│   │   ├── events.tsx          # Events page
│   │   └── Team.tsx            # Team page
│   ├── App.tsx                 # Main app component (Home page)
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App-specific styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

## 🎨 Features Breakdown

### Home Page
- Interactive hero section with Google-themed branding
- Feature showcase cards (Workshops, DevFests, Hackathons)
- About section with orbiting technology icons
- Statistics counter showing community metrics
- Media gallery section
- Contact and social links

### Events Page
- ChromaGrid layout displaying all past and upcoming events
- Event cards with images, dates, and links
- Dynamic color theming based on Google colors
- Particle background for visual interest

### Team Page
- Team member profiles in ChromaGrid layout
- Profile pictures (with placeholder support)
- Member roles and social handles
- Interactive hover effects

## 🔧 Configuration

### Constants (`src/data/constants.ts`)
Contains Google brand colors and navigation configuration:
```typescript
export const GOOGLE_COLORS = {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC04',
  green: '#34A853'
};
```

### Event Data (`src/data/eventdata.json`)
Manage event information with structured JSON:
- Event title, type, date, category
- Image and description
- Status (past/upcoming)
- External links

### Team Data (`src/data/team.json`)
Team member information:
- Name, role, handle
- Profile image
- Social/portfolio link

## 🌐 Deployment

This project is configured for deployment on Vercel with proper SPA routing handled in `vercel.json`.

## 👤 Author

**Tanmay Goel**
- GitHub: [@tanmay442](https://github.com/tanmay442)
- Email: goeltanmay442@outlook.com

## 🙏 Acknowledgments

Special thanks to:
- **[ReactBits](https://reactbits.dev/)** for inspiring component architecture and design patterns

## 📝 Important Notes

### Placeholder Images
Due to the absence of actual media assets, the following sections currently use placeholder images:
- **Media Gallery Section**: Uses generic placeholder images
- **Team Profile Pictures** (in "Our Team" section): Uses `default.png` placeholder
- **Event Thumbnails**: Uses default GDG event thumbnails where specific images are unavailable

When adding actual content, replace these placeholders with appropriate high-quality images in the `src/assets/` or `public/` directories and update the corresponding JSON files.

## 📄 License

This project is developed for GDG on Campus HBTU. All rights reserved.

---

**Built with ❤️ for the GDG HBTU Community**
