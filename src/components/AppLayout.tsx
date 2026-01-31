import React from 'react'
import SidebarNav from './SidebarNav'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen bg-af-surface-app">
      <SidebarNav />
      <main className="flex-1 pl-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
