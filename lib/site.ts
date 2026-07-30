export const site = {
  name: "Riverside Cetina",
  instagram: {
    handle: "@riverside_cetina",
    url: "https://www.instagram.com/riverside_cetina/",
  },
  location: {
    start: "Glavice, Sinj",
    distanceFromSplit: "35 km from Split",
  },
  ride: {
    duration: "1 h 30 min",
    price: "€50",
    level: "Beginner-friendly, no experience needed",
  },
  contacts: [
    { name: "Marko", phone: "+385 92 365 1110", whatsapp: "https://wa.me/385923651110" },
    { name: "Ivan", phone: "+385 99 460 3818", whatsapp: "https://wa.me/385994603818" },
  ],
} as const;

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Contact" },
] as const;
