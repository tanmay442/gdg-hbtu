import React from 'react';
import './App.css';
import CardNav from './components/CardNav/CardNav';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/ShowcaseSection';
import logo from '/public/logo.svg';
import Particles from './components/particleBackground/Particles';
import { NAV_ITEMS, GOOGLE_COLORS } from './data/constants';
import Footer from './components/footer';

import { AboutSection } from './components/about';
import { NowSection } from './components/now';

const App = () => {
  return (
    <div className="app-container">

      <div className="particles-layer">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="main-content">

        <CardNav
          logo={logo}
          logoAlt="GDG HBTU Logo"
          items={NAV_ITEMS}
          baseColor="#6f6d6d54"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        <div className="hero-layout">
          <HeroSection colors={GOOGLE_COLORS} />
          <ShowcaseSection colors={GOOGLE_COLORS} />
        </div>

        <div>
          <AboutSection />
        </div>
        <div>
          <NowSection />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default App;