import React from 'react';

export const FolderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 4H10L12 6H22V20H2V4ZM4 8H20V18H4V8Z" />
    <path d="M2 6H12L10 4H2V6Z" fillOpacity="0.5"/>
  </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2H16V4H20V6H4V4H8V2Z" />
    <path d="M6 8H18V20H6V8ZM8 10V18H10V10H8ZM14 10V18H16V10H14Z" />
  </svg>
);

export const ComputerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H22V16H2V2ZM4 4V14H20V4H4Z" />
    <rect x="8" y="18" width="8" height="2" />
    <rect x="6" y="20" width="12" height="2" />
  </svg>
);

export const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2H14L20 8V22H4V2Z" />
    <path d="M14 2V8H20" fill="rgba(0,0,0,0.2)"/>
    <rect x="7" y="10" width="10" height="2" fill="var(--color-retro-lightest, #9bbc0f)" />
    <rect x="7" y="14" width="10" height="2" fill="var(--color-retro-lightest, #9bbc0f)" />
    <rect x="7" y="18" width="8" height="2" fill="var(--color-retro-lightest, #9bbc0f)" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 12 12" fill="currentColor" className={className}>
    <path d="M2 2H4V4H6V6H8V4H10V2H12V4H10V6H8V8H6V10H4V8H2V6H4V4H2V2Z" />
  </svg>
);