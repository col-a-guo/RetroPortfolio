import { Project } from './types';

export const INTRO_TEXT = "WELCOME TO DEV_OS v1.0. SYSTEM READY.";

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Dash",
    description: "A full-stack dashboard for managing inventory and sales metrics.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "AI Chat Bot",
    description: "Generative AI interface using Gemini API for real-time conversation.",
    tech: ["TypeScript", "Gemini API", "Tailwind"],
    link: "#"
  },
  {
    title: "Pixel Art Editor",
    description: "A canvas-based editor for creating 8-bit sprites in the browser.",
    tech: ["HTML5 Canvas", "React"],
    link: "#"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com", username: "@developer" },
  { platform: "LinkedIn", url: "https://linkedin.com", username: "Jane Doe" },
  { platform: "Twitter", url: "https://twitter.com", username: "@dev_jane" }
];