'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Calendar', href: '/calendar', icon: '📅' },
  { name: 'Creator Studio', href: '/studio', icon: '✍️' },
  { name: 'News Scout', href: '/news-scout', icon: '📰' },
  { name: 'Your Tone', href: '/tone', icon: '🎨' },
  { name: 'Analytics', href: '/analytics', icon: '📈' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function SidebarNav() {
  const pathname = usePathname()
  const isCalendarRoute = pathname?.startsWith('/calendar')
  
  // Initialize state from localStorage immediately
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('sidebarCollapsed')
      return savedState ? JSON.parse(savedState) : false
    }
    return false
  })

  // Save collapsed state to localStorage whenever it changes
  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState))
  }

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-60'} bg-white h-full border-r border-af-stroke-border flex flex-col transition-all duration-300`}>
      <div className={`${isCollapsed ? 'p-4' : 'p-6'} transition-all duration-300`}>
        <Link href="/dashboard" className={`text-xl font-bold text-af-text-primary ${isCollapsed ? 'text-center block' : ''}`}>
          {isCollapsed ? 'AF' : 'Autoflit'}
        </Link>
      </div>
      <nav className={`${isCollapsed ? 'px-2' : 'px-4'} flex-1 transition-all duration-300`}>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = isCalendarRoute ? item.href === '/calendar' : pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-af-text-primary bg-gray-100'
                      : 'text-af-text-secondary hover:bg-gray-50 hover:text-af-text-primary'
                  }`}
                  title={isCollapsed ? item.name : undefined}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      {/* Collapse Button */}
      <div className={`${isCollapsed ? 'p-2' : 'p-4'} border-t border-af-stroke-border transition-all duration-300`}>
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg 
            className={`w-5 h-5 text-af-text-secondary transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          {!isCollapsed && <span className="text-sm text-af-text-secondary">Collapse</span>}
        </button>
      </div>
    </div>
  )
}
