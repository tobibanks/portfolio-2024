import {
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiSanity,
  SiAngular,
  SiNodedotjs
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { ComponentType } from "react";


export type ProjectProps = {
  id: number
  name: string
  description: string
  technologies: ComponentType[]
  techNames: string[]
  //techLinks: string[];
  github: string
  demo: string
  image: string
  available: boolean
}

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "APPLE IPHONE WEBSITE",
    description: "A pixel-perfect recreation of Apple's iPhone 15 landing page with smooth 3D animations and interactive product showcases. Built to demonstrate advanced frontend skills and attention to detail in replicating premium web experiences.",
    technologies: [SiTailwindcss, SiReact, TbBrandThreejs],
    techNames: ["Tailwind", "React", "GSAP", "THREE.JS"],
    github: "https://github.com/tobibanks/apple-iphone-website",
    demo: "https://tobiodogwu-apple-15.vercel.app/",
    image: "/projects/apple-website.png",
    available: true
  },
  {
    id: 1,
    name: "SAHARA VIEWPOINT WEBSITE",
    description: "A clean, professional landing page for SaharaViewPoint that introduces visitors to their services. Focused on intuitive navigation and clear messaging to convert visitors into engaged users.",
    technologies: [SiTailwindcss, SiAngular] as ComponentType[],
    techNames: ["Tailwind", "Angular"],
    github: "",
    demo: "https://saharaviewpoint.com/",
    image: "/projects/sahara.png",
    available: true
  },
  {
    id: 2,
    name: "YC DIRECTORY",
    description: "A pitch platform where inventors showcase their ideas to potential investors and collaborators. Integrated with Sanity CMS for easy content management, allowing users to create compelling pitch profiles and discover innovative projects.",
    technologies: [SiTailwindcss, SiNextdotjs, SiSanity] as ComponentType[],
    techNames: ["Tailwind", "Next.js", "Sanity"] ,
    github: "https://github.com/tobibanks/yc-directory",
    demo: "https://yc-directory-tobi.vercel.app/",
    image: "/projects/sanity.png",
    available: true
  },
  {
    id: 3,
    name: "BANKS THE PLUG",
    description: "A job referral and recruitment platform connecting talent with opportunities. Built a full-stack hub that streamlines the hiring process, making it easier for candidates to find positions through trusted referrals and for companies to discover quality talent.",
    technologies: [SiTailwindcss, SiAngular, SiNodedotjs, SiTypescript] as ComponentType[],
    techNames: ["Tailwind", "Angular", "Node.js"],
    github: "",
    demo: "https://bankstheplug.ng/",
    image: "/projects/btp.png",
    available: true
  },
  {
    id: 4,
    name: "Lafarge Admin",
    description: "An internal logistics management system that coordinates shipment operations across multiple teams. Designed to reduce bottlenecks and improve visibility into the supply chain, helping Lafarge teams track and manage shipments efficiently from a centralized dashboard.",
    technologies: [SiTailwindcss, SiAngular, SiTypescript] as ComponentType[],
    techNames: ["Tailwind", "Angular"],
    github: "",
    demo: "#",
    image: "/projects/lafarge-admin.png",
    available: true
  },
  {
    id: 5,
    name: "SaharaViewPoint Client App",
    description: "A client portal for SaharaViewPoint users to access services and manage their accounts. Built with user experience in mind, providing clients with a seamless, intuitive interface for their daily interactions.",
    technologies: [SiTailwindcss, SiAngular, SiTypescript] as ComponentType[],
    techNames: ["Tailwind", "Angular"],
    github: "",
    demo: "#",
    image: "/projects/svp-admin.png",
    available: true
  },
  {
    id: 6,
    name: "Deliciousness Recipe App",
    description: "A recipe management application that helps users organize, discover, and save their favorite dishes. Features intuitive browsing and search functionality to make cooking inspiration easily accessible.",
    technologies: [SiTailwindcss, SiReact] as ComponentType[],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "#",
    image: "/projects/deliciousness.jpeg",
    available: true
  },
//   {
//     id: 7,
//     name: "Jose's Pizza App",
//     description: "Developed an App for a Pizza store",
//     technologies: [SiTailwindcss, SiReact],
//     techNames: ["Tailwind", "React"],
//     github: "",
//     demo: "#",
//     image: "/projects/pizza-store.png",
//     available: true
//   },
  {
    id: 7,
    name: "Loop Studios",
    description: "A visually striking landing page showcasing Loop Studios' immersive VR experiences. Created a responsive, modern interface that captures attention and effectively communicates the brand's creative vision.",
    technologies: [SiTailwindcss, SiReact] as ComponentType[],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://loopstudios-tobibanks.vercel.app/",
    image: "/projects/loopstudios.png",
    available: true
  },
  {
    id: 8,
    name: "Shortly",
    description: "A URL shortening service landing page with a clean, conversion-focused design. Built to demonstrate modern UI/UX principles and responsive design best practices.",
    technologies: [SiTailwindcss, SiReact] as ComponentType[],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://shortly-inky.vercel.app/",
    image: "/projects/shortly.png",
    available: true
  },
  {
    id: 9,
    name: "SendIt",
    description: "A delivery service landing page featuring bold visuals and clear calls-to-action. Designed to engage visitors and effectively communicate the service's value proposition.",
    technologies: [SiTailwindcss, SiReact] as ComponentType[],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://sendit-website-tailwind.vercel.app/",
    image: "/projects/sendit.png",
    available: true
  }
];