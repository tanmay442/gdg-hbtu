import { OrbitingCircles } from "./orbitingcircles/orbiting-circles"
import { FaReact, FaShieldVirus } from "react-icons/fa6";
import { SiAndroidstudio, SiGooglecloud, SiLeetcode, SiPytorch } from "react-icons/si";
import { GOOGLE_COLORS } from "../data/constants";

export function AboutSection() {
    return (
        <section id="about" className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16 md:flex-row md:px-16 md:py-24">

            <div className="orbiting-circles-container relative flex h-[500px] w-full flex-col items-center justify-center md:w-1/2 scale-90 md:scale-100">
                <style>{`
                    @media (max-width: 768px) {
                        .orbiting-circles-container {
                            display: none !important;
                        }
                    }
                `}</style>

                <div className="pointer-events-none absolute z-10 select-none flex items-center justify-center">
                    <span className="text-8xl font-black text-white/5 tracking-tighter">GDG</span>
                </div>
                <OrbitingCircles iconSize={50} radius={190} speed={1.5}>
                    <SiPytorch className="size-full text-[#EA4335]" />
                    <SiGooglecloud className="size-full text-[#4285F4]" />
                    <FaShieldVirus className="size-full text-[#FBBC04]" />
                </OrbitingCircles>

                <OrbitingCircles iconSize={40} radius={120} reverse speed={2} path={true}>
                    <FaReact className="size-full text-[#61DAFB]" />
                    <SiAndroidstudio className="size-full text-[#3DDC84]" />
                    <SiLeetcode className="size-full text-[#FFA116]" />
                </OrbitingCircles>
            </div>

            <div className="flex w-full flex-col justify-center text-left md:w-1/2 z-10">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        About <span className="text-white">GDG-HBTU</span>
                    </h2>
                    <div
                        style={{
                            width: '200px',
                            height: '4px',
                            backgroundColor: GOOGLE_COLORS.red,
                            marginTop: '0.5rem',
                            borderRadius: '2px'
                        }}
                    ></div>

                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl text-justify max-w-[600px]">
                    Google Developer Groups (GDG) on Campus at Harcourt Butler Technical University, Kanpur, functions as an independent group; accordingly, its activities and expressed opinions are not representative of Google, the corporation. To foster technical growth, the chapter organizes and facilitates various workshops, hackathons, speaker sessions, and study jams, providing students with essential development skills and opportunities to engage in immersive technical webinars and events.                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-300 md:text-xl text-justify max-w-[600px]">
                    Join our peer-to-peer learning environment to master a diverse range of technologies and domains:
                </p>

                <div className="flex flex-wrap gap-3">
                    {[
                        "Web Development",
                        "App Development",
                        "DSA & CP",
                        "Cloud Computing",
                        "Embedded Systems",
                        "Cyber Security",
                        "AI & ML"
                    ].map((tech) => (
                        <span key={tech} className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}