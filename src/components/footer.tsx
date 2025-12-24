///this is debugged and refined by me but the entire code is written with copilot's help

import React from 'react';


// Interfaces for type safety
interface LinkItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  underlineColor: string;
  links: LinkItem[];
}

const footerData: FooterSection[] = [
  {
    title: 'About',
    underlineColor: 'bg-yellow-400', // Google Yellow
    links: [
      { label: 'About Us', href: '#AboutSection' },
      { label: 'HBTU', href: 'https://hbtu.ac.in/' },
    ],
  },
  {
    title: 'Events',
    underlineColor: 'bg-green-500', // Google Green
    links: [
      //{ label: 'Upcoming Events', href: '/events' }, //idk what to put here lmao
      { label: 'Past Events', href: '/events' },
    ],
  },
  {
    title: 'Team',
    underlineColor: 'bg-red-500', // Google Red
    links: [
      { label: 'Our Team', href: 'https://example.com/core-team' },
    ],
  },
  {
    title: 'Contact',
    underlineColor: 'bg-blue-500', // Google Blue
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdghbtu/' },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 text-white py-12 px-6 md:px-16 font-sans relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Hero Text + Links Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16">

          {/* Left Column: Hero Text & CTA */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <h5 className="text-sm md:text-base font-normal leading-tight mb-8 text-lg md:text-xl">
              GDG On Campus HBTU is a student-led community that empowers students to learn, share knowledge, and build projects using Google technologies.
            </h5>
            <button className="border border-white/20 hover:bg-white/10 text-white px-7 py-2.5 rounded-full transition-colors duration-300">
              <a href="https://gdg.community.dev/gdg-on-campus-harcourt-butler-technical-university-kanpur-india/" className="text-white no-underline">Join Us and Learn</a>
            </button>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerData.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h3 className="text-xl font-medium mb-1">{section.title}</h3>
                {/* Colored Underline */}
                <div className={`h-1 w-12 ${section.underlineColor} mb-6 rounded-full`}></div>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white hover:underline transition-colors text-sm md:text-base font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 text-center md:text-left">
            Google Developer Groups On Campus • Harcourt Butler Technical University, Kanpur
          </p>

          <div className="flex space-x-4">
            <SocialIcon href="https://www.linkedin.com/company/gdghbtu/" icon={<LinkedInIcon />} />
            <SocialIcon href="https://github.com/tanmay442/gdg-hbtu" icon={<GithubIcon />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components for Icons ---

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center w-10 h-10"
  >
    {icon}
  </a>
);

// Simple SVG Icons to avoid external dependencies for this snippet
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default Footer;