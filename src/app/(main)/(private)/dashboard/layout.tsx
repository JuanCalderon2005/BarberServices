import React from 'react';
import AuthGuard from './guard/AuthGuard';
import SideBarMenu from '@/ui/organisms/SideBarMenu';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex">
        <aside className="fixed w-60 h-screen">
          <SideBarMenu />
        </aside>
        <main className="ml-60 w-full p-6 sm:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
