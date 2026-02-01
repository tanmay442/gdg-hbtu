export interface NavLink {
  label: string;
  href: string;
  target?: string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

export interface Link {
  label: string;
  href: string;
}

export interface GDGEvent {
  id: string;
  title: string;
  type: string;
  date: string;
  category: string;
  image: string;
  description: string;
  status: string;
  links: Link[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  handle: string;
  image: string;
  link: string;
}

export interface ChromaGridItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}