import React from 'react';
import { CloseIcon } from './RetroIcons';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Window: React.FC<WindowProps> = ({ 
  title, 
  isOpen, 
  onClose, 
  zIndex, 
  onFocus,
  children,
  className = ""
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-retro-lightest border-2 border-retro-darkest shadow-[4px_4px_0px_0px_rgba(15,56,15,1)]
        flex flex-col w-[90%] max-w-lg max-h-[70%] sm:w-[500px] ${className}`}
      style={{ zIndex }}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div className="bg-retro-darkest text-retro-lightest px-2 py-1 flex justify-between items-center select-none cursor-grab active:cursor-grabbing">
        <span className="font-pixel text-lg tracking-wider truncate mr-4">{title}</span>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="hover:bg-retro-light hover:text-retro-darkest p-0.5 transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto p-4 font-pixel text-retro-darkest">
        {children}
      </div>
    </div>
  );
};