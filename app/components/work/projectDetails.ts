import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiAngular,
    SiNodedotjs
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  //techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
   
    
     {
        id: 0,
        name: "SAHARA VIEWPOINT WEBSITE",
        description:
            "Developed a landing page for SaharaViewPoint..",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "https://saharaviewpoint.com/",
        image: "/projects/sahara.png",
        available: true,
    },
          {
        id: 1,
        name: "BANKS THE PLUG",
        description:
            "Developed a HUB for Job referrals and recruitment",
        technologies: [SiTailwindcss, SiAngular, SiNodedotjs],
        techNames: ["Tailwind", "Angular", "NodeJs"],
        github: "",
        demo: "https://bankstheplug.ng/",
        image: "/projects/btp.png",
        available: true,
    },
          {
        id: 2,
        name: "Lafarge Admin",
        description:
            "Developed an Admin App to manage Logistics Processes",
        technologies: [SiTailwindcss, SiAngular],
        techNames: ["Tailwind", "Angular",],
        github: "",
        demo: "#",
        image: "/projects/lafarge-admin.png",
        available: true,
    },
          
          {
        id: 3,
        name: "SaharaViewPoint Client App",
        description:
            "Developed a HUB for Client users",
        technologies: [SiTailwindcss, SiAngular],
        techNames: ["Tailwind", "Angular"],
        github: "",
        demo: "#",
        image: "/projects/svp-admin.png",
        available: true,
    },
             {
        id: 4,
        name: "Deliciousness Recipe App",
        description:
            "Developed an app to manage recipes",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "#",
        image: "/projects/deliciousness.jpeg",
        available: true,
    },
                {
        id: 5,
        name: "Jose's Pizza App",
        description:
            "Developed an App for a Pizza store",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "#",
        image: "/projects/pizza-store.png",
        available: true,
    },
            {
        id: 6,
        name: "Loop Studios",
        description:
            "Developed a landing page for Loop Studios",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "https://loopstudios-tobibanks.vercel.app/",
        image: "/projects/loopstudios.png",
        available: true,
    },
                    {
        id: 7,
        name: "Shortly",
        description:
            "Developed a landing page for SHORTLY",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "https://shortly-inky.vercel.app/",
        image: "/projects/shortly.png",
        available: true,
    },
                            {
        id: 8,
        name: "SendIt",
        description:
            "Developed a landing page for SENDIT",
        technologies: [SiTailwindcss, SiReact],
        techNames: ["Tailwind", "React"],
        github: "",
        demo: "https://sendit-website-tailwind.vercel.app/",
        image: "/projects/sendit.png",
        available: true,
    },
];
