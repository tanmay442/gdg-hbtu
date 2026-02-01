import type { NavItem } from './types';

export const GOOGLE_COLORS = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC04",
  green: "#34A853",
  darkBg: "#050505"
};

export const SECTION_IDS = {
  HOME: "Home",
  ABOUT: "AboutSection",
  NOW: "NowSection",
  MEDIA: "MediaSection",
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    bgColor: "rgba(66, 133, 244, 0.9)",
    textColor: "#fff",
    links: [
      { label: "About Us", href: `/#${SECTION_IDS.ABOUT}`, ariaLabel: "Go to About Section" },
      { label: "Now", href: `/#${SECTION_IDS.NOW}`, ariaLabel: "Go to Now Section" },
      { label: "Our Team", href: "/team", target: "_blank", ariaLabel: "Meet the Team" }
    ]
  },
  {
    label: "Events",
    bgColor: "rgba(234, 67, 53, 0.9)",
    textColor: "#fff",
    links: [
      { label: "All Events", href: "/events", target: "_blank", ariaLabel: "GDG HBTU" },
      { label: "Media & Gallery", href: `/#${SECTION_IDS.MEDIA}`, ariaLabel: "View Events" }
    ]
  },
  {
    label: "Contact",
    bgColor: "rgba(251, 188, 4, 0.9)",
    textColor: "#000",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/gdghbtu/", target: "_blank", ariaLabel: "LinkedIn" },
      { label: "Instagram", href: "https://www.instagram.com/gdg.hbtu", target: "_blank", ariaLabel: "Instagram" },
      { label: "WhatsApp", href: "https://chat.whatsapp.com/HZHxCeLi1pvAVwNT3lXjE5", target: "_blank", ariaLabel: "WhatsApp" }
    ]
  }
];