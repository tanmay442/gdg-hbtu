import { useMemo, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Particles from '../components/particleBackground/Particles';
import ChromaGrid from '../components/ChromaGrid/ChromaGrid';
import eventsData from '../data/eventdata.json';
import { GOOGLE_COLORS } from '../data/constants';

const EventsPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

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
                        marginBottom: '40px',
                        padding: '0 20px'
                    }}
                >
                    <h1
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}
                    >
                        Our Events
                    </h1>

                    <p
                        style={{
                            color: '#aaa',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                        }}
                    >
                        Explore our past hackathons, workshops, and upcoming tech talks.
                    </p>
                </div>

                {isMobile ? (
                    // Mobile: Simple vertical card layout
                    <div style={{
                        padding: '0 20px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        paddingBottom: '40px'
                    }}>
                        {chromaItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div style={{
                                    background: item.gradient,
                                    border: `2px solid ${item.borderColor}`,
                                    borderRadius: '16px',
                                    padding: '20px',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        marginBottom: '15px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        background: '#1a1a1a'
                                    }}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <h3 style={{
                                        color: '#fff',
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        margin: '0 0 8px 0'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: '#aaa',
                                        fontSize: '0.9rem',
                                        margin: '0 0 4px 0'
                                    }}>
                                        {item.subtitle}
                                    </p>
                                    <p style={{
                                        color: '#666',
                                        fontSize: '0.85rem',
                                        margin: 0
                                    }}>
                                        {item.handle}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    // Desktop: ChromaGrid layout
                    <div
                        className="events-grid-container"
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
                )}
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
