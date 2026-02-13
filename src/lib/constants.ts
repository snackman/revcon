export const EVENT = {
  name: "Revolution Conference",
  shortName: "RevCon",
  tagline: "Revolutionary tech in the city of the revolution. Coming Fall 2026.",
  date: "Fall 2026",
  location: "Philadelphia, PA",
  description:
    "Philadelphia's premier tech conference bringing together innovators in AI, Blockchain, Medicine, and Robotics.",
};

export const TOPICS = [
  {
    name: "Artificial Intelligence",
    description:
      "Machine learning, LLMs, computer vision, and the future of intelligent systems",
    icon: "Brain" as const,
  },
  {
    name: "Blockchain",
    description:
      "Decentralized systems, smart contracts, DeFi, and the evolution of digital trust",
    icon: "Link" as const,
  },
  {
    name: "Medicine",
    description:
      "Biotech breakthroughs, digital health, genomics, and the intersection of tech and healthcare",
    icon: "HeartPulse" as const,
  },
  {
    name: "Robotics",
    description:
      "Autonomous systems, human-robot interaction, industrial automation, and embodied AI",
    icon: "Bot" as const,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Topics", href: "#topics" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" },
  { label: "Sponsors", href: "#sponsors" },
];
