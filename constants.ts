import { Project } from './types';

export const INTRO_TEXT = "WELCOME TO BeepBoop_OS v1.0. SYSTEM READY.";

export const PROJECTS: Project[] = [
  {
    title: "BERT and Earnings Explainability Visualizer",
    description: "Visualizes model decisions based on each subword token, showing how they contribute to the final label",
    tech: ["Python", "Pytorch", "BERT", "Captum"],
    link: "https://huggingface.co/spaces/colaguo/bottleneckBERTdemo"
  },
  {
    title: "ARPA-E Optical",
    description: "Generate near-black-body emissivity curves with surface geometry given material, i.e. turning metal pitch black with texture alone.",
    tech: ["Julia", "Python", "Pytorch", "Travis CI/CD"],
    link: "https://github.com/arpae-optical/"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "github.com/col-a-guo", username: "col-a-guo" },
  { platform: "HuggingFace", url: "https://huggingface.co/colaguo", username: "colaguo" },
  { platform: "LinkedIn", url: " www.linkedin.com/in/collin-guo-d20/", username: "Collin Guo" }
];
