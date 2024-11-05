// components/molecules/MenuItem.tsx
import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, isActive }) => {
  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
          isActive
            ? 'bg-indigo-500 text-white shadow-lg' // Estilos activos
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900'
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
