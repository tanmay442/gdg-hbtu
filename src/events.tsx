import React, { useMemo } from 'react';
import NavBar from '/src/components/NavBar';
import Footer from '/src/components/footer';
import Particles from '/src/components/particleBackground/Particles';
import ChromaGrid from '/src/components/ChromaGrid/ChromaGrid';
import eventsData from '/src/data/eventdata.json';
import { GOOGLE_COLORS } from './data/constants';

const EventsPage = () => {

    const googleColors = [
        { border: GOOGLE_COLORS.blue, gradient: 'linear-gradient(145deg, #4285F4, #000)' },
        { border: GOOGLE_COLORS.red, gradient: 'linear-gradient(145deg, #EA4335, #000)' },
        { border: GOOGLE_COLORS.yellow, gradient: 'linear-gradient(145deg, #FBBC04, #000)' },
        { border: GOOGLE_COLORS.green, gradient: 'linear-gradient(145deg, #34A853, #000)' },
    ];

    const chromaItems = useMemo(() => {
        return eventsData.events.map((evt, index) => {
            const theme = googleColors[index % googleColors.length];

            return {
                image: evt.image,
                title: evt.title,
                subtitle: evt.type,
                handle: `@${evt.date}`,
                borderColor: theme.border,
                gradient: theme.gradient,
                url: evt.links?.[0]?.href || '#',
            };
        });
    }, []);

    return (
        <div
            className="app-container"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: '#000'
            }}
        >

            <div
                className="particles-layer"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            >
                <Particles
                    particleColors={['#ffffff']}
                    particleCount={120}
                    particleSpread={10}
                    speed={0.08}
                    particleBaseSize={90}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div
                className="main-content"
                style={{
                    flex: 1,
                    zIndex: 2,
                    position: 'relative'
                }}
            >
                <NavBar />

                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '120px',
                        marginBottom: '40px'
                    }}
                >
                    <h1
                        style={{
                            color: '#fff',
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}
                    >
                        Our Events
                    </h1>

                    <p
                        style={{
                            color: '#aaa',
                            fontSize: '1.1rem'
                        }}
                    >
                        Explore our past hackathons, workshops, and upcoming tech talks.
                    </p>
                </div>

                <div
                    style={{
                        height: '1800px',
                        width: '100%',
                        maxWidth: '1250px',
                        margin: '0 auto',
                        position: 'relative',
                        isolation: 'isolate'
                    }}
                >
                    <ChromaGrid
                        items={chromaItems}
                        radius={500}
                        damping={0.45}
                        fadeOut={0.25}
                        ease="power3.out"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
