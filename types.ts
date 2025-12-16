export enum WindowType {
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  TRASH = 'TRASH',
  IMAGE_VIEWER = 'IMAGE_VIEWER',
  RESUME = 'RESUME'
}

export interface DesktopItem {
  id: string;
  label: string;
  type: WindowType;
  icon: 'folder' | 'trash' | 'image' | 'document';
  x?: number; // Optional grid position logic could go here
  y?: number;
}

export interface WindowState {
  id: string;
  type: WindowType;
  title: string;
  isOpen: boolean;
  zIndex: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}