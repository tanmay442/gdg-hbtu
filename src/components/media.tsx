import { useState, useEffect } from 'react';
import Masonry from './Masonry/Masonry';
import { GOOGLE_COLORS } from '../data/constants';

const items = [
    { id: "1", img: "/media/1.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 280 },
    { id: "2", img: "/media/2.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 180 },
    { id: "3", img: "/media/3.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 180 },
    { id: "4", img: "/media/4.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 270 },
    { id: "5", img: "/media/5.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 150 },
    { id: "6", img: "/media/6.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 320 },
    { id: "7", img: "/media/7.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 220 },
    { id: "8", img: "/media/8.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 320 },
    { id: "9", img: "/media/9.webp", url: "https://drive.google.com/drive/folders/1vz4k7YgQVgBWBUWzepOWn48dt42bErm3", height: 280 },
];

export function MediaSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Show only 4 items on mobile, all items on desktop
    const displayItems = isMobile ? items.slice(0, 4) : items;

    return (
        <section id="media" className="relative w-full overflow-hidden px-4 py-16 md:px-16 md:py-24 mb-24">
            <div className="flex w-full flex-col justify-center text-left max-w-7xl mx-auto z-10">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Media Gallery
                    </h2>
                    <div
                        style={{
                            width: '100px',
                            height: '4px',
                            backgroundColor: GOOGLE_COLORS.yellow,
                            marginTop: '0.5rem',
                            borderRadius: '2px'
                        }}
                    ></div>
                </div>

                <Masonry
                    items={displayItems}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />
            </div>
        </section>
    );
}
