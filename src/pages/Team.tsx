import React, { useMemo } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Particles from '../components/particleBackground/Particles';
import teamData from '../data/team.json';
import { getGoogleTheme } from '../lib/utils';
import type { TeamMember, ChromaGridItem } from '../data/types';

const TeamPage: React.FC = () => {

    const chromaItems: ChromaGridItem[] = useMemo(() => {
        return (teamData.team as TeamMember[]).map((member, index) => {
            const theme = getGoogleTheme(index);

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
        <div className="min-h-screen flex flex-col relative bg-black overflow-x-hidden">
            {/* particles */}
            <div className="fixed inset-0 z-0 pointer-events-none">
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
            <div className="flex-1 z-10 relative">
                <NavBar />

                {/* fancy line to say something */}
                <div className="text-center mt-32 mb-10 px-5">
                    <h1 className="text-white text-[clamp(2rem,5vw,3rem)] font-bold">
                        Meet the Team
                    </h1>
                    <p className="text-[#aaa] text-[clamp(0.9rem,2vw,1.1rem)]">
                        The minds behind GDG HBTU
                    </p>
                </div>

                {/* mainGridWithInfo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-5 pb-10">
                    {chromaItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline block h-full"
                        >
                            <div
                                className="h-full rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1"
                                style={{
                                    background: item.gradient,
                                    border: `2px solid ${item.borderColor}`,
                                }}
                            >
                                <div
                                    className="w-[120px] h-[120px] mb-4 rounded-full overflow-hidden bg-[#1a1a1a]"
                                    style={{
                                        border: `3px solid ${item.borderColor}`
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#aaa] text-sm mb-1">
                                    {item.subtitle}
                                </p>
                                <p className="text-[#666] text-xs m-0">
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