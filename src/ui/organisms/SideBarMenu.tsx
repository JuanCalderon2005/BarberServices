'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import MenuItem from '../molecules/MenuItem';
import { FaCalendarAlt, FaCut, FaSignOutAlt, FaUserTie, FaUsers } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import IconButtonLogout from '../molecules/ButtonLogout';

const SideBarMenu: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: <FaCut />, label: 'Services', href: '/dashboard/services' },
    { icon: <FaUserTie />, label: 'Employees', href: '/dashboard/employee' },
    { icon: <FaUsers />, label: 'Clients', href: '/dashboard/client' },
    { icon: <FaCalendarAlt />, label: 'Appointments', href: '/dashboard/appointments' },
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <aside className="w-60 flex flex-col justify-between bg-gray-200 dark:bg-gray-900 h-screen p-7 shadow-lg rounded-tr-lg rounded-br-lg">
        <h2 className="text-2xl text-center font-bold text-indigo-600 dark:text-indigo-400 mb-6">Dashboard</h2>

        <div className="flex flex-col gap-7">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
        </div>
        <IconButtonLogout
          icon={<FaSignOutAlt />}
          label="Logout"
          onClick={handleLogout}
          className="flex items-center justify-center text-indigo-600 dark:text-indigo-400"
        />
    </aside >
  );
};

export default SideBarMenu;
