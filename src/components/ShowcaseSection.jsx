import React from 'react';
import CardSwap, { Card } from './CardSwap/CardSwap';

const ShowcaseSection = ({ colors }) => {
    const cardStyle = (borderColor, gradient) => ({
        width: '100%', height: '100%',
        background: gradient,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '25px', borderRadius: '20px',
        border: `1px solid ${borderColor}`,
        backgroundClip: 'padding-box',
        WebkitBackgroundClip: 'padding-box'

    });

    const iconStyle = (bgColor) => ({
        background: bgColor, width: '40px', height: '40px',
        borderRadius: '50%', marginBottom: '15px',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    });

    return (
        <div style={{ flex: '1 1 400px', height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-100px' }}>
            <div style={{ position: 'absolute', width: '450px', height: '450px', background: `radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(0,0,0,0) 70%)`, borderRadius: '50%', zIndex: 0 }}></div>

            <CardSwap cardDistance={40} verticalDistance={60} delay={5000} pauseOnHover={true}>
                <Card>
                    <div style={cardStyle(colors.green, 'linear-gradient(135deg, #1e1e1e 0%, #0d1f12 100%)')}>
                        <div style={iconStyle(colors.green)}><span style={{ fontSize: '20px' }}>🌱</span></div>
                        <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>Workshops</h3>
                        <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Hands-on Android & AI Labs</p>
                    </div>
                </Card>
                <Card>
                    <div style={cardStyle(colors.red, 'linear-gradient(135deg, #1e1e1e 0%, #2a1010 100%)')}>
                        <div style={iconStyle(colors.red)}><span style={{ fontSize: '20px' }}>🎤</span></div>
                        <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>Tech Talks</h3>
                        <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Learn from Industry Experts</p>
                    </div>
                </Card>
                <Card>
                    <div style={cardStyle(colors.blue, 'linear-gradient(135deg, #1e1e1e 0%, #10192a 100%)')}>
                        <div style={iconStyle(colors.blue)}><span style={{ fontSize: '20px' }}>🚀</span></div>
                        <h3 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.5rem' }}>GDG HBTU</h3>
                        <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Building the Future Together</p>
                    </div>
                </Card>
            </CardSwap>
        </div>
    );
};

export default ShowcaseSection;