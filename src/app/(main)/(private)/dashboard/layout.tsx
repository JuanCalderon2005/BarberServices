
import React from 'react'
import AuthGuard from './guard/AuthGuard'
import SideBarMenu from '@/ui/organisms/SideBarMenu'

export default function PrivateLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <AuthGuard>
      <div className=" flex">
        <div className="w-1/5">
          <SideBarMenu />
        </div>
        <main className="w-4/5">
          {children}
        </main>
      </div>
    </AuthGuard>
  )
}
