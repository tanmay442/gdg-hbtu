import React, { useMemo } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Particles from '../components/particleBackground/Particles';
import ChromaGrid from '../components/ChromaGrid/ChromaGrid';
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

            {/* PARTICLES — HARD FIXED BEHIND */}
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

            {/* MAIN CONTENT */}
            <div
                className="main-content"
                style={{
                    flex: 1,
                    zIndex: 2,
                    position: 'relative'
                }}
            >
                <NavBar />

                {/* HEADER */}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '120px',
                        marginBottom: '30px'
                    }}
                >
                    <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold' }}>
                        Meet the Team
                    </h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>
                        The minds behind GDG HBTU
                    </p>
                </div>

                {/* GRID */}
                <div
                    style={{
                        height: '1600px',
                        width: '100%',
                        maxWidth: '1600px',
                        margin: '0 auto',
                        position: 'relative',
                        isolation: 'isolate',
                        overflow: 'hidden'
                    }}
                >
                    <ChromaGrid
                        items={chromaItems}
                        radius={280}
                        damping={0.45}
                        fadeOut={0.25}   // ✅ FIXED
                        ease="power3.out"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TeamPage;
