import React from 'react';
import CardNav from './CardNav/CardNav';
import logo from '/public/logo.svg';

const NavBar = () => {
    const navItems = [
        {
            label: "About",
            bgColor: "rgba(66, 133, 244, 0.9)",
            textColor: "#fff",
            links: [
                { label: "About Us", href: "#AboutSection", ariaLabel: "Go to About Section" },
                { label: "Now", href: "#NowSection", ariaLabel: "Go to Now Section" },
                { label: "Our Team", href: "/team", target: "_blank", ariaLabel: "Meet the Team" }
            ]
        },
        {
            label: "Events",
            bgColor: "rgba(234, 67, 53, 0.9)",
            textColor: "#fff",
            links: [
                { label: "All Events", href: "/events", target: "_blank", ariaLabel: "GDG HBTU" },
                { label: "Media & Gallery", href: "#MediaSection", ariaLabel: "View Events" }
            ]
        },
        {
            label: "Contact",
            bgColor: "rgba(251, 188, 4, 0.9)",
            textColor: "#000",
            links: [
                { label: "LinkedIn", href: "https://www.linkedin.com/company/gdghbtu/", target: "_blank", ariaLabel: "LinkedIn" },
                //{ label: "Instagram", href: "example.com", target: "_blank", ariaLabel: "Instagram" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="GDG HBTU Logo"
            items={navItems}
            baseColor="#807c7c54"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    );
};

export default NavBar;