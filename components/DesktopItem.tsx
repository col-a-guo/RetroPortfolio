import React from 'react';
import { FolderIcon, TrashIcon, ComputerIcon, DocumentIcon } from './RetroIcons';

interface DesktopItemProps {
  label: string;
  // Added 'document' to the allowed types
  iconType?: 'folder' | 'trash' | 'image' | 'document';
  customIconSrc?: string; 
  onClick: () => void;
}

export const DesktopItem: React.FC<DesktopItemProps> = ({ label, iconType, customIconSrc, onClick }) => {
  const renderIcon = () => {
    if (customIconSrc) {
      return (
        <img 
          src={customIconSrc} 
          alt={label} 
          className="w-12 h-12 mb-1 object-contain pixel-antialiasing-off" 
        />
      );
    }

    switch (iconType) {
      case 'folder':
        return <FolderIcon className="w-12 h-12 mb-1" />;
      case 'trash':
        return <TrashIcon className="w-12 h-12 mb-1" />;
      case 'document':
        return <DocumentIcon className="w-12 h-12 mb-1" />;
      case 'image':
      default:
        return <ComputerIcon className="w-12 h-12 mb-1" />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group flex flex-col items-center justify-center w-24 h-24 cursor-pointer hover:bg-retro-dark/10 rounded-sm active:translate-y-0.5 transition-all"
    >
      <div className="text-retro-darkest group-hover:text-retro-dark transition-colors">
        {renderIcon()}
      </div>
      <span className="font-pixel text-lg text-retro-darkest bg-retro-lightest/80 px-1 border border-transparent group-hover:border-retro-darkest group-hover:border-dashed">
        {label}
      </span>
    </div>
  );
};