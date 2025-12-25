import React from 'react';
import StarBorder from './StarBorder/StarBorder';
import { GOOGLE_COLORS } from '../data/constants';
import GradientText from './GradientText/GradientText';

interface HeroSectionProps {
    colors?: typeof GOOGLE_COLORS;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div style={{ flex: '1 1 500px', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                <GradientText
                    colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]}
                    animationSpeed={10}>
                    Welcome Harcourtians

                </GradientText>
            </div>

            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.1, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ color: GOOGLE_COLORS.red, marginRight: '5px' }}>&lt;</span>
                <span style={{ color: GOOGLE_COLORS.blue }}>/</span>
                <span style={{ color: GOOGLE_COLORS.yellow }}>G</span>
                <span style={{ color: GOOGLE_COLORS.green }}>D</span>
                <span style={{ color: GOOGLE_COLORS.red }}>G</span>
                <span style={{ color: GOOGLE_COLORS.blue, marginLeft: '5px', marginRight: '15px' }}>&gt;</span>
                <span style={{ color: '#fff' }}>On Campus HBTU</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.2', marginBottom: '1.5rem', color: '#e0e0e0' }}>
                Join us to learn, grow and connect with technical minds and unleash your talent.
            </h1>

            <div style={{
                width: '120px',
                height: '6px',
                background: `linear-gradient(90deg, ${GOOGLE_COLORS.blue} 25%, ${GOOGLE_COLORS.red} 25%, ${GOOGLE_COLORS.red} 50%, ${GOOGLE_COLORS.yellow} 50%, ${GOOGLE_COLORS.yellow} 75%, ${GOOGLE_COLORS.green} 75%)`,
                marginBottom: '2rem',
                borderRadius: '4px'
            }}></div>

            <p style={{ fontSize: '1.1rem', color: '#aaa', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.6' }}>
                A student chapter of Google Developer Groups on Campus,
                <strong style={{ color: '#fff' }}> Harcourt Butler Technical University</strong>.
            </p>

            <a href="https://gdg.community.dev/gdg-on-campus-harcourt-butler-technical-university-kanpur-india/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <StarBorder as="button" className="custom-class" color={GOOGLE_COLORS.blue} speed="5s">
                    Join Our Chapter
                </StarBorder>
            </a>
        </div>
    );
};

export default HeroSection;
