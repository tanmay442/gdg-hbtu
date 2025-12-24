import React from 'react';
import type { CSSProperties } from 'react';
import CardSwap, { Card } from './CardSwap/CardSwap';

interface ShowcaseSectionProps {
    colors: {
        blue: string;
        red: string;
        yellow: string;
        green: string;
        darkBg?: string;
    };
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ colors }) => {

    const cardStyle = (borderColor: string, gradient: string): CSSProperties => ({
        width: '100%',
        height: '100%',
        background: gradient,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '25px',
        borderRadius: '20px',
        border: `1px solid ${borderColor}`,
        backgroundClip: 'padding-box',
        WebkitBackgroundClip: 'padding-box',
        overflow: 'hidden',
        position: 'relative'
    });

    const imageContainerStyle: CSSProperties = {
        flex: 1,
        minHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15px',
        overflow: 'hidden'
    };

    const imageStyle: CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '12px'
    };

    return (
        <div style={{ flex: '1 1 400px', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-100px' }}>
            <div style={{ position: 'absolute', width: '450px', height: '450px', background: `radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(0,0,0,0) 70%)`, borderRadius: '50%', zIndex: 0 }}></div>

            <CardSwap cardDistance={40} verticalDistance={60} delay={5000} pauseOnHover={true}>

                <Card>
                    <div style={cardStyle(colors.green, 'linear-gradient(135deg, #1e1e1e 0%, #0d1f12 100%)')}>
                        <div style={imageContainerStyle}>
                            <img src="/public/GDG_Bevy_DefaultEventThumbnail_2_8AMTctc.webp" alt="Workshops" style={imageStyle} />
                        </div>
                        <div>
                            <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>Workshops</h3>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Hands-on Web Development & AI Labs</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div style={cardStyle(colors.red, 'linear-gradient(135deg, #1e1e1e 0%, #2a1010 100%)')}>
                        <div style={imageContainerStyle}>
                            <img src="/public/image.png" alt="Dev Fests" style={imageStyle} />
                        </div>
                        <div>
                            <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>Dev Fests</h3>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Learn from Industry Experts</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div style={cardStyle(colors.blue, 'linear-gradient(135deg, #1e1e1e 0%, #10192a 100%)')}>
                        <div style={imageContainerStyle}>
                            <img src="/public/blob_qoNbrVn.webp" alt="Hackathons" style={imageStyle} />
                        </div>
                        <div>
                            <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>Hackathons</h3>
                            <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Build the next big thing</p>
                        </div>
                    </div>
                </Card>

            </CardSwap>
        </div>
    );
};

export default ShowcaseSection;
