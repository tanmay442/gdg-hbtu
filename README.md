# GDG on Campus HBTU - Official Website

A modern, interactive website for the Google Developer Groups (GDG) on Campus chapter at Harcourt Butler Technical University (HBTU), Kanpur.

## 🚀 Overview

This website serves as the digital home for GDG HBTU, providing an immersive experience through high-performance animations and a responsive, mobile-first design. It centralizes our community metrics, event history, and team profiles.

## ✨ Features

- **Dynamic Showcase**: Responsive event and team galleries using `ChromaGrid` on desktop and optimized card layouts on mobile.
- **Visual Excellence**: WebGL-powered particle backgrounds and GSAP-driven interactive animations.
- **Thematic Consistency**: Full integration of the Google Developer Groups color palette across all UI elements.
- **Smart Data**: Decoupled content management using JSON for events and team data, with centralized TypeScript interfaces.

### 📦 Component Library
- **`ChromaGrid` & `CardSwap`**: High-performance interactive showcases.
- **`StarBorder` & `GradientText`**: Polished, themed UI elements.
- **`ParticleBackground`**: OGL-powered dynamic environment.
- **`Masonry`**: Optimized media gallery for event highlights.

## 🛠️ Technical Implementation

### Tech Stack
- **Core**: React 19, TypeScript 5.9, Vite 7, React Router 7.
- **Styling**: Tailwind CSS 4 (Utility-first with CSS variables).
- **Animation**: GSAP 3, Framer Motion 12, OGL.

### Data Management
Content is managed via `src/data/` for easy updates:
- **`eventdata.json`**: Managed with the `GDGEvent` interface.
- **`team.json`**: Managed with the `TeamMember` interface.
- **`constants.ts`**: Centralized brand colors and navigation config.



Special thanks to **[ReactBits](https://reactbits.dev/)** for the inspiring design patterns and component architecture.

