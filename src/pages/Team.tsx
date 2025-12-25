import React, { useMemo } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Particles from '../components/particleBackground/Particles';
import teamData from '../data/team.json';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    handle: string;
    image: string;
    link: string;
}

interface ChromaGridItem {
    image: string;
    title: string;
    subtitle: string;
    handle: string;
    borderColor: string;
    gradient: string;
    url: string;
}

const TeamPage: React.FC = () => {

    const googleColors = [
        { border: '#4285F4', gradient: 'linear-gradient(135deg, #4285F4 0%, #000000 85%)' },
        { border: '#EA4335', gradient: 'linear-gradient(135deg, #EA4335 0%, #000000 85%)' },
        { border: '#FBBC04', gradient: 'linear-gradient(135deg, #FBBC04 0%, #000000 85%)' },
        { border: '#34A853', gradient: 'linear-gradient(135deg, #34A853 0%, #000000 85%)' },
    ];

    const chromaItems: ChromaGridItem[] = useMemo(() => {
        return (teamData.team as TeamMember[]).map((member, index) => {
            const theme = googleColors[index % googleColors.length];

            return {
                image: member.image,
                title: member.name,
                subtitle: member.role,
                handle: member.handle,
                borderColor: theme.border,
                gradient: theme.gradient,
                url: member.link || '#',
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

            {/*partciltes*/}
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
                    particleCount={80}
                    particleSpread={10}
                    speed={0.08}
                    particleBaseSize={90}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* main page */}
            <div
                className="main-content"
                style={{
                    flex: 1,
                    zIndex: 2,
                    position: 'relative'
                }}
            >
                <NavBar />

                {/* fancy line to say something */}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '120px',
                        marginBottom: '40px',
                        padding: '0 20px'
                    }}
                >
                    <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold' }}>
                        Meet the Team
                    </h1>
                    <p style={{ color: '#aaa', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                        The minds behind GDG HBTU
                    </p>
                </div>

                {/* mainGridWithInfo */}
                <div className="responsive-grid">
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
                                padding: '24px',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: '100%'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    marginBottom: '16px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    background: '#1a1a1a',
                                    border: `3px solid ${item.borderColor}`
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
            </div>

            <Footer />
        </div>
    );
};

export default TeamPage;
