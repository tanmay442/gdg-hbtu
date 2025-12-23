import React from 'react';
import Masonry from './Masonry/Masonry';
import { GOOGLE_COLORS } from '../data/constants';

const items = [
    { id: "1", img: "/download.png", url: "#", height: 280 },
    { id: "2", img: "/download.png", url: "#", height: 180 },
    { id: "3", img: "/download.png", url: "#", height: 350 },
    { id: "4", img: "/download.png", url: "#", height: 300 },
    { id: "5", img: "/download.png", url: "#", height: 250 },
    { id: "6", img: "/download.png", url: "#", height: 320 },
    { id: "7-link", img: "/download.png", url: "https://example.com", height: 120 },
];

export function MediaSection() {
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
                    items={items}
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
