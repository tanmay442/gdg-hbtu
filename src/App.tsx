import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/ShowcaseSection';
import Particles from './components/particleBackground/Particles';
import { GOOGLE_COLORS } from './data/constants';
import Footer from './components/footer';

import { AboutSection } from './components/about';
import { NowSection } from './components/now';
import { MediaSection } from './components/media';

const App = () => {

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
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

        <div id="Home" className="hero-layout">
          <HeroSection colors={GOOGLE_COLORS} />
          <ShowcaseSection colors={GOOGLE_COLORS} />
        </div>

        <div id="AboutSection">
          <AboutSection />
        </div>

        <div id="NowSection">
          <NowSection />
        </div>

        <div id="MediaSection">
          <MediaSection />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default App;