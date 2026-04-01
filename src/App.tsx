import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/ShowcaseSection';
import Particles from './components/particleBackground/Particles';
import { GOOGLE_COLORS, SECTION_IDS } from './data/constants';
import Footer from './components/footer';

import { AboutSection } from './components/about';
import { NowSection } from './components/now';
import { MediaSection } from './components/media';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  useEffect(() => {
    document.title = 'GDG HBTU | Google Developer Group HBTU';
    const description =
      'GDG HBTU is the Google Developer Group HBTU community at Harcourt Butler Technical University, Kanpur. Learn, build, and connect through tech events and workshops.';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://gdghbtu.vercel.app/');
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

        <NavBar />

        <div id={SECTION_IDS.HOME} className="hero-layout">
          <HeroSection colors={GOOGLE_COLORS} />
          <ShowcaseSection colors={GOOGLE_COLORS} />
        </div>

      

        <div id={SECTION_IDS.ABOUT} className="py-0 md:py-10" >
          <AboutSection />
        </div>


        <div id={SECTION_IDS.NOW}>
          <NowSection />
        </div>


        <div id={SECTION_IDS.MEDIA}  >
          <MediaSection />
        </div>

      </div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
