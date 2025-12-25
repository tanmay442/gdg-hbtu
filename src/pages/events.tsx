import { useMemo, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Particles from '../components/particleBackground/Particles';
import ChromaGrid from '../components/ChromaGrid/ChromaGrid';
import eventsData from '../data/eventdata.json';
import { GOOGLE_COLORS } from '../data/constants';

const EventsPage = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1025);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const googleColors = [
        { border: GOOGLE_COLORS.blue, gradient: 'linear-gradient(145deg, #4285F4, #000)' },
        { border: GOOGLE_COLORS.red, gradient: 'linear-gradient(145deg, #EA4335, #000)' },
        { border: GOOGLE_COLORS.yellow, gradient: 'linear-gradient(145deg, #FBBC04, #000)' },
        { border: GOOGLE_COLORS.green, gradient: 'linear-gradient(145deg, #34A853, #000)' },
    ];

    const chromaItems = useMemo(() =>
        eventsData.events.map((evt, index) => {
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
        }), []
    );

    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, offsetY: number) => {
        e.currentTarget.style.transform = `translateY(${offsetY}px)`;
    };

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex' as const,
            flexDirection: 'column' as const,
            position: 'relative' as const,
            background: '#000'
        },
        particles: {
            position: 'fixed' as const,
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none' as const
        },
        mainContent: {
            flex: 1,
            zIndex: 2,
            position: 'relative' as const
        },
        header: {
            textAlign: 'center' as const,
            marginTop: '120px',
            marginBottom: '40px',
            padding: '0 20px'
        },
        title: {
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold' as const,
            marginBottom: '10px'
        },
        subtitle: {
            color: '#aaa',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
        },
        chromaGrid: {
            height: '1800px',
            width: '100%',
            maxWidth: '1250px',
            margin: '0 auto',
            position: 'relative' as const,
            isolation: 'isolate' as const
        },
        card: (gradient: string, borderColor: string) => ({
            background: gradient,
            border: `2px solid ${borderColor}`,
            borderRadius: '16px',
            padding: '20px',
            transition: 'transform 0.3s ease' as const,
            cursor: 'pointer' as const
        }),
        imageContainer: {
            width: '100%',
            height: '200px',
            marginBottom: '15px',
            borderRadius: '12px',
            overflow: 'hidden' as const,
            background: '#1a1a1a'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover' as const
        },
        cardTitle: {
            color: '#fff',
            fontSize: '1.25rem',
            fontWeight: 'bold' as const,
            margin: '0 0 8px 0'
        },
        cardSubtitle: {
            color: '#aaa',
            fontSize: '0.9rem',
            margin: '0 0 4px 0'
        },
        cardHandle: {
            color: '#666',
            fontSize: '0.85rem',
            margin: 0
        }
    };

    return (
        <div className="app-container" style={styles.container}>
            <div className="particles-layer" style={styles.particles}>
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

            <div className="main-content" style={styles.mainContent}>
                <NavBar />

                <div style={styles.header}>
                    <h1 style={styles.title}>Our Events</h1>
                    <p style={styles.subtitle}>
                        Explore our past hackathons, workshops, and upcoming tech talks.
                    </p>
                </div>

                {isDesktop ? (
                    <div style={styles.chromaGrid}>
                        <ChromaGrid
                            items={chromaItems}
                            radius={500}
                            damping={0.45}
                            fadeOut={0.25}
                            ease="power3.out"
                        />
                    </div>
                ) : (
                    <div className="responsive-grid">
                        {chromaItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    style={styles.card(item.gradient, item.borderColor)}
                                    onMouseEnter={(e) => handleCardHover(e, -4)}
                                    onMouseLeave={(e) => handleCardHover(e, 0)}
                                >
                                    <div style={styles.imageContainer}>
                                        <img src={item.image} alt={item.title} style={styles.image} />
                                    </div>
                                    <h3 style={styles.cardTitle}>{item.title}</h3>
                                    <p style={styles.cardSubtitle}>{item.subtitle}</p>
                                    <p style={styles.cardHandle}>{item.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
