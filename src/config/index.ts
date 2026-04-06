import { Megaphone, MicVocal, Languages, ShieldCheck, Compass, Fingerprint, Globe, Lock } from "lucide-react";

export const navigations = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about_us",
  },
];

export const specializations = [
  {
    id: 1,
    title: "Political Leadership",
    icon: Megaphone,
    desc: "Build authority, public trust, and strategic clarity for the political arena. We shape individuals into impactful public leaders.",
    imagePath: "/images/political_leadership.webp",
    sourcePath: "political_leadership",
  },
  {
    id: 2,
    title: "Personal Branding",
    icon: ShieldCheck,
    desc: "Architect a professional legacy through strategic storytelling and institutional positioning. Transition from a local voice to a globally recognized authority.",
    imagePath: "/images/leadership_communication.webp", 
    sourcePath: "personal_branding",
  },
  {
    id: 3,
    title: "Guidance & Motivation",
    icon: Compass,
    desc: "Strategic path-finding for students and young professionals. We provide the clarity required to navigate high-stakes career and life decisions with purpose.",
    imagePath: "/images/guidance&Motivation.webp",
    sourcePath: "guidance-motivation",
  },
];


export const leadNexStats = [
  {
    id: 1,
    value: "500",
    label: "Grads",
    mobileLabel: "Grads",
  },
  {
    id: 2,
    value: "50",
    label: "Classes",
    mobileLabel: "Classes",
  },
  {
    id: 3,
    value: "90",
    label: "Retention",
    mobileLabel: "Ret.",
  },
];

export const products = [
  {
    id: "PROD_01",
    name: "Tuna Fish Pickle",
    type: "Limited Batch",
    origin: "Kanyakumari Fisherman Special",
    price: 1200,
    img: "/images/tuna_pickle.webp",
  },
  {
    id: "PROD_02",
    name: "Prawn Pickle",
    type: "Limited Batch",
    origin: "Kanyakumari Fisherman Special",
    price: 1500,
    img: "/images/prawn_pickle.webp",
  },
];


export const operationalBadges = [
  {
    icon: Fingerprint,
    title: "Sovereignty",
    desc: "Economic independence framework for artisans.",
  },
  {
    icon: Globe,
    title: "Heritage",
    desc: "Traditional methods meeting global delivery standards.",
  },
  {
    icon: Lock,
    title: "Discretion",
    desc: "Confidential handling of intellectual property.",
  },
];


export const artisans = [
  {
    id: "ART_01",
    name: "Priya Sharma",
    role: "Master Artisan",
    quote: "Since joining Kumari, I’ve gained the financial independence to send my daughter to university.",
    imageUrl: "/images/global_english.webp",
    impact: "Education & Independence"
  },
  {
    id: "ART_02",
    name: "Meera Iyer",
    role: "Production Lead",
    quote: "I never knew my leadership potential until I started leading the production floor here.",
    imageUrl: "/images/global_english.webp",
    impact: "Leadership & Agency"
  },
  {
    id: "ART_03",
    name: "Lakshmi Devi",
    role: "Quality Control",
    quote: "My family now has access to quality healthcare thanks to the stability this work provides.",
    imageUrl: "/images/global_english.webp",
    impact: "Healthcare & Stability"
  }
];