// components/molecules/IconButton.tsx
import React from 'react';
import Icon from '../atoms/IconLogout';
import TextLabel from '../atoms/TextLabel';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

const IconButtonLogout: React.FC<IconButtonProps> = ({ icon, label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-indigo-600 dark:text-indigo-400 ${className}`}
    >
      <Icon icon={icon} />
      <TextLabel text={label} />
    </button>
  );
};

export default IconButtonLogout;
