import React from 'react';
import CountUp from './CountUp/CountUp';
import GradientText from './GradientText/GradientText';
import StarBorder from './StarBorder/StarBorder';
import { GOOGLE_COLORS } from '../data/constants';

const DESCRIPTION = "We as a developer committee conduct hands-on workshops, mentoring students, exciting hackathons, expert talks aka DevFests and many more fun events so that you can learn and grow with us and get adept with latest technology.";

export function NowSection() {
    return (
        <section className="relative w-full overflow-hidden px-4 py-16 md:px-16 md:py-24">
            <div className="flex w-full flex-col justify-center text-left max-w-4xl mx-auto z-10">

                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        What we do
                    </h2>
                    <div
                        style={{
                            width: '100px',
                            height: '4px',
                            backgroundColor: GOOGLE_COLORS.green,
                            marginTop: '0.5rem',
                            borderRadius: '2px'
                        }}
                    ></div>
                </div>

                <p className="mb-12 text-lg leading-relaxed text-gray-300 md:text-xl text-justify max-w-[800px]">
                    {DESCRIPTION}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

                    <div className="flex flex-col gap-10 w-full md:w-auto">

                        <div className="flex flex-col">
                            <div className="text-5xl font-bold w-fit">
                                <GradientText colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]} animationSpeed={8}>
                                    <div className="flex items-center">
                                        <CountUp to={1300} duration={2} separator="," />+
                                    </div>
                                </GradientText>
                            </div>
                            <span className="text-gray-300 text-lg mt-2">Students connected</span>
                        </div>

                        <div className="flex flex-col">
                            <div className="text-5xl font-bold w-fit">
                                <GradientText colors={[GOOGLE_COLORS.blue, GOOGLE_COLORS.red, GOOGLE_COLORS.yellow, GOOGLE_COLORS.green]} animationSpeed={8}>
                                    <div className="flex items-center">
                                        <CountUp to={10} duration={2} />+
                                    </div>
                                </GradientText>
                            </div>
                            <span className="text-gray-300 text-lg mt-2">Workshops and events</span>
                        </div>

                    </div>

                    <div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
                        <a href="/events" target="_blank" rel="noopener noreferrer" className="no-underline">
                            <StarBorder as="button" color={GOOGLE_COLORS.blue} speed="5s" className="text-white">
                                Events
                            </StarBorder>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}