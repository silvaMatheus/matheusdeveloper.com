import { ContentProps } from "@/types/Projects.types";
import { SocialNetworksProps } from "@/types/SocialNetworks.types";
import { TechsProps } from "@/types/Techs.types";
import { WorkExperienceProps } from "@/types/WorkExperience.types";
import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const SocialNetworks: SocialNetworksProps[] = [
  {
    name: "github",
    icon: GitHubLogoIcon,
    href: "https://github.com/silvaMatheus",
  },
  {
    name: "linkedin",
    icon: LinkedInLogoIcon,
    href: "https://www.linkedin.com/in/matheus-silva-064472157",
  },
  {
    name: "email",
    icon: EnvelopeOpenIcon,
    href: "matheus@matheusdeveloper.com",
  },
];

const Specialties = [
  "Web Development",
  "Artificial Intelligence (AI)",
  "API Development",
  "SaaS",
  "E-commerce",
  "Consulting",
  "Mobile Development",
  "Financial Solutions",
  "Blockchain",
];

const WorkExperiences: WorkExperienceProps[] = [
  {
    company: "Americas Technology",
    role: "Tech Lead FrontEnd",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "WoohooPlus",
    role: "Tech Lead FrontEnd",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "Freelancer",
    role: "Full-stack Developer",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "MOL",
    role: "Sênior Frontend Developer",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "Intellective",
    role: "Full Stack Developer",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "Accenture Brasil",
    role: "Software Engineering",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "Organize Cloud Labs",
    role: "Software Engineer",
    logo: "/assets/logos/logo.svg",
  },
  {
    company: "Icomon Tecnologia Ltda",
    role: "Front end junior",
    logo: "/assets/logos/logo.svg",
  },
];

const professionalProjects: ContentProps[] = [
  {
    title: "Project 1",
    subtitle: "Lorem ipsum dolor sit amet",
    link: "https://example.com/project1",
    backgroundImage: "/assets/projects/projeto1.png",
  },
  {
    title: "Project 2",
    subtitle: "Consectetur adipiscing elit",
    link: "https://example.com/project2",
    backgroundImage: "/assets/projects/projeto2.png",
  },
  {
    title: "Project 3",
    subtitle: "Sed do eiusmod tempor incididunt",
    link: "https://example.com/project3",
    backgroundImage: "/assets/projects/projeto3.png",
  },
];

const Articles: ContentProps[] = [
  {
    date: new Date("Oct 2022"),
    title: "Project 1",
    backgroundImage: "/assets/projects/projeto1.png",
  },
  {
    title: "Project 2",
    date: new Date("Oct 2022"),
    backgroundImage: "/assets/projects/projeto1.png",
  },
  {
    title: "Project 3",
    date: new Date("Oct 2022"),
    backgroundImage: "/assets/projects/projeto1.png",
  },
];

const Techs: TechsProps[] = [
  {
    iconName: "devicon_angular.svg",
    principalColor: "#DD0031",
    techName: "angular",
  },
  {
    iconName: "devicon_azure.svg",
    principalColor: "#3CCBF4",
    techName: "azure",
  },
  {
    iconName: "devicon_javascript.svg",
    principalColor: "#F0DB4F",
    techName: "javascript",
  },
  {
    iconName: "devicon_tailwindcss.svg",
    principalColor: "#38BDF8",
    techName: "tailwindcss",
  },
  {
    iconName: "devicon_vercel-wordmark.svg",
    principalColor: "#FFF",
    techName: "vercel",
  },
  {
    iconName: "logos_aws.svg",
    principalColor: "#252F3E",
    techName: "aws",
  },
  {
    iconName: "logos_ganache-icon.svg",
    principalColor: "#E4A663",
    techName: "ganache",
  },
  {
    iconName: "logos_google-cloud.svg",
    principalColor: "#EA4335",
    techName: "google",
  },
  {
    iconName: "logos_html-5.svg",
    principalColor: "#E44D26",
    techName: "html5",
  },
  {
    iconName: "logos_jwt-icon.svg",
    principalColor: "#D63AFF",
    techName: "jwt",
  },
  {
    iconName: "logos_metamask-icon.svg",
    principalColor: "#E17726",
    techName: "metamask",
  },
  {
    iconName: "logos_nestjs.svg",
    principalColor: "#E0234E",
    techName: "nestjs",
  },
  {
    iconName: "logos_nodejs.svg",
    principalColor: "#539E43",
    techName: "nodejs",
  },
  {
    iconName: "logos_postgresql.svg",
    principalColor: "#fff",
    techName: "postgresql",
  },
  {
    iconName: "logos_prisma.svg",
    principalColor: "#fff",
    techName: "prisma",
  },
  {
    iconName: "logos_react.svg",
    principalColor: "#00D8FF",
    techName: "react",
  },
  {
    iconName: "openai-icon.svg",
    principalColor: "#ffff",
    techName: "openai",
  },
  {
    iconName: "simple-icons_zod.svg",
    principalColor: "#3068b7",
    techName: "zod",
  },
  {
    iconName: "skill-icons_css.svg",
    principalColor: "#0277BD",
    techName: "css",
  },
  {
    iconName: "teenyicons_nextjs-outline.svg",
    principalColor: "#fff",
    techName: "nextjs",
  },
  {
    iconName: "vscode-icons_file-type-typescript-official.svg",
    principalColor: "#3178C6",
    techName: "typescript",
  },
];

const navItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/articles", name: "Articles" },
  { path: "/uses", name: "Uses" },
];

export {
  Articles,
  SocialNetworks,
  Specialties,
  Techs,
  WorkExperiences,
  navItems,
  professionalProjects,
};
