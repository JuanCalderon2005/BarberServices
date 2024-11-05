'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import MenuItem from '../molecules/MenuItem';
import { FaCut, FaUserTie, FaUsers } from 'react-icons/fa';

const SideBarMenu: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: <FaCut />, label: 'Servicios', href: '/dashboard/services' },
    { icon: <FaUserTie />, label: 'Empleados', href: '/dashboard/employee' },
    { icon: <FaUsers />, label: 'Clientes', href: '/dashboard/client' },
  ];

  return (
    <aside className="flex flex-col gap-5 w-60 bg-gray-200 dark:bg-gray-900 h-screen p-5 shadow-lg rounded-tr-lg rounded-br-lg ">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Dashboard</h2>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isActive={pathname === item.href}
        />
      ))}
    </aside>
  );
};

export default SideBarMenu;
