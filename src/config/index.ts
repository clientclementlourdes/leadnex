import { Megaphone, ShieldCheck, Compass } from "lucide-react";

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
    url: "/about-us",
  },
];

export const specializations = [
  {
    id: 1,
    title: "Political Mentorship Programme",
    icon: Megaphone,
    desc: "Confidential, founder-led programme for political leaders seeking strategic advice.",
    imagePath: "/images/political_leadership.webp",
    sourcePath: "political-leadership",
  },
  {
    id: 2,
    title: "Personal Branding",
    icon: ShieldCheck,
    desc: "Amplifying the voices of public personalities and influencers striving to reach the next level of recognition.",
    imagePath: "/images/leadership_communication.webp", 
    sourcePath: "personal-branding",
  },
  {
    id: 3,
    title: "Guidance and Motivational Sessions",
    icon: Compass,
    desc: "From educational institutions to corporate workplaces, LeadNex delivers customized sessions for individuals navigating important life and career decisions.",
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