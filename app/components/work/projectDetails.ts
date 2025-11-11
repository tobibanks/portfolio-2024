import {
  SiCplusplus,
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
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number
  name: string
  description: string
  technologies: IconType[]
  techNames: string[]
  //techLinks: string[];
  github: string
  demo: string
  image: string
  available: boolean
}

export const projects = [
  {
    id: 0,
    name: "APPLE IPHONE WEBSITE",
    description: "remake of the iphone 15 landing page",
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
    description: "Developed a landing page for SaharaViewPoint..",
    technologies: [SiTailwindcss, SiReact],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://saharaviewpoint.com/",
    image: "/projects/sahara.png",
    available: true
  },
  {
    id: 2,
    name: "YC DIRECTORY",
    description: "A web app used by inventors to pitch their ideas",
    technologies: [SiTailwindcss, SiReact, SiSanity],
    techNames: ["Tailwind", "React", "Sanity"],
    github: "https://github.com/tobibanks/yc-directory",
    demo: "https://yc-directory-tobi.vercel.app/",
    image: "/projects/sanity.png",
    available: true
  },
  {
    id: 3,
    name: "BANKS THE PLUG",
    description: "Developed a HUB for Job referrals and recruitment",
    technologies: [SiTailwindcss, SiAngular, SiNodedotjs, SiTypescript],
    techNames: ["Tailwind", "Angular", "NodeJs"],
    github: "",
    demo: "https://bankstheplug.ng/",
    image: "/projects/btp.png",
    available: true
  },
  {
    id: 4,
    name: "Lafarge Admin",
    description: "Developed an Admin App to manage Logistics Processes",
    technologies: [SiTailwindcss, SiAngular, SiTypescript],
    techNames: ["Tailwind", "Angular"],
    github: "",
    demo: "#",
    image: "/projects/lafarge-admin.png",
    available: true
  },
  {
    id: 5,
    name: "SaharaViewPoint Client App",
    description: "Developed a HUB for Client users",
    technologies: [SiTailwindcss, SiAngular, SiTypescript],
    techNames: ["Tailwind", "Angular"],
    github: "",
    demo: "#",
    image: "/projects/svp-admin.png",
    available: true
  },
  {
    id: 6,
    name: "Deliciousness Recipe App",
    description: "Developed an app to manage recipes",
    technologies: [SiTailwindcss, SiReact],
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
    description: "Developed a landing page for Loop Studios",
    technologies: [SiTailwindcss, SiReact],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://loopstudios-tobibanks.vercel.app/",
    image: "/projects/loopstudios.png",
    available: true
  },
  {
    id: 8,
    name: "Shortly",
    description: "Developed a landing page for SHORTLY",
    technologies: [SiTailwindcss, SiReact],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://shortly-inky.vercel.app/",
    image: "/projects/shortly.png",
    available: true
  },
  {
    id: 9,
    name: "SendIt",
    description: "Developed a landing page for SENDIT",
    technologies: [SiTailwindcss, SiReact],
    techNames: ["Tailwind", "React"],
    github: "",
    demo: "https://sendit-website-tailwind.vercel.app/",
    image: "/projects/sendit.png",
    available: true
  }
];
