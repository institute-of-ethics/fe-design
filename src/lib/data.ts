export interface Publication {
  id: string;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  pdfUrl?: string;
  type: string;
  topic: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationLink?: string;
  image?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
  email?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/vision", label: "Vision" },
      { href: "/about/history", label: "History" },
      { href: "/about/team", label: "Team" },
    ],
  },
  {
    href: "/research",
    label: "Research",
    children: [
      { href: "/research/areas", label: "Areas of Research" },
      { href: "/research/publications", label: "Publications" },
      { href: "/research/speaker-series", label: "Speaker Series" },
    ],
  },
  { href: "/education", label: "Education" },
  {
    href: "/outreach",
    label: "Outreach",
    children: [
      { href: "/outreach/events", label: "Events" },
      { href: "/outreach/symposium", label: "Symposium" },
    ],
  },
  { href: "/news", label: "News & Updates" },
  { href: "/engage", label: "Engage" },
  { href: "/contact", label: "Contact" },
];

export const placeholderPublications: Publication[] = [
  {
    id: "1",
    title: "Ethics in Global Supply Chains",
    authors: ["Dr. Jane Smith", "Prof. John Doe"],
    date: "2024-01-15",
    abstract: "Examining ethical decision-making in multinational supply chain management.",
    type: "Journal Article",
    topic: "Business Ethics",
    image: "/images/home/publication_1.jpg",
  },
  {
    id: "2",
    title: "Responsible Leadership in the Digital Age",
    authors: ["Dr. Alice Brown"],
    date: "2024-02-01",
    abstract: "A framework for ethical leadership in technology-driven organizations.",
    type: "Research Report",
    topic: "Leadership",
    image: "/images/home/publication_2.jpg",
  },
  {
    id: "3",
    title: "Sustainability and Corporate Governance",
    authors: ["Prof. Robert Lee", "Dr. Maria Garcia"],
    date: "2024-03-10",
    abstract: "Integrating sustainability metrics into governance structures.",
    type: "Working Paper",
    topic: "Sustainability",
    image: "/images/home/publication_3.jpg",
  },
];

export const placeholderEvents: Event[] = [
  {
    id: "1",
    title: "Annual Ethics Symposium 2025",
    date: "2025-06-15",
    location: "Main Conference Hall",
    description: "Our flagship event examining business ethics from multiple stakeholder perspectives.",
    registrationLink: "#",
    image: "/images/home/event_1.jpg",
  },
  {
    id: "2",
    title: "Business + Ethics Case Competition",
    date: "2025-10-10",
    location: "Virtual",
    description: "Applications open for the annual case competition. First round deadline October 10.",
    registrationLink: "#",
    image: "/images/home/event_2.jpg",
  },
  {
    id: "3",
    title: "Speaker Series: Organizing for Impact",
    date: "2025-04-22",
    location: "Lecture Theatre A",
    description: "Proposals invited for the new collaboration with Mehrotra Institute.",
  },
];

export const placeholderNews: NewsArticle[] = [
  {
    id: "1",
    title: "Call for Proposals: Organizing for Impact",
    date: "2025-02-01",
    author: "Institute of Ethics",
    excerpt: "The Institute invites proposals for a new research collaboration.",
    content: "",
    category: "Research",
  },
  {
    id: "2",
    title: "Third Annual Business + Ethics Case Competition",
    date: "2025-01-15",
    author: "Education Team",
    excerpt: "Applications are open through October 10, 2025 for the case competition.",
    content: "",
    category: "Education",
  },
  {
    id: "3",
    title: "Symposium 2024 Recap",
    date: "2024-12-01",
    author: "Outreach Team",
    excerpt: "Twenty teams from business schools around the world competed in the finals.",
    content: "",
    category: "Outreach",
  },
  {
    id: "4",
    title: "New Publication: Ethics in AI",
    date: "2024-11-20",
    author: "Research Team",
    excerpt: "Latest research on ethical frameworks for artificial intelligence.",
    content: "",
    category: "Research",
  },
];

export const placeholderTeam: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    title: "Director",
    bio: "Leading scholar in business ethics with over 20 years of experience in academia and industry.",
  },
  {
    id: "2",
    name: "Prof. Michael Roberts",
    title: "Associate Director, Research",
    bio: "Focus on ethical leadership and organizational behavior.",
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    title: "Associate Director, Education",
    bio: "Develops curriculum and programs for ethics education.",
  },
];

export const placeholderResearchAreas: ResearchArea[] = [
  {
    id: "1",
    title: "Business Ethics",
    description: "Ethical decision-making in corporate environments, governance, and stakeholder relations.",
  },
  {
    id: "2",
    title: "Global Economy & Ethics",
    description: "Cross-cultural and global perspectives on ethical business practices.",
  },
  {
    id: "3",
    title: "Leadership & Responsibility",
    description: "Responsible leadership development and ethical leadership frameworks.",
  },
  {
    id: "4",
    title: "Sustainability & Governance",
    description: "Integration of sustainability and ethical governance in organizations.",
  },
];
