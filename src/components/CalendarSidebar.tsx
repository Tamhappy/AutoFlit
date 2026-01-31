'use client'

import React, { useState } from 'react'

interface CalendarSidebarProps {
  currentMonth: Date
  onMonthChange: (direction: 'prev' | 'next') => void
}

export default function CalendarSidebar({ currentMonth, onMonthChange }: CalendarSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const calendars = [
    { name: 'Tam M.', color: 'blue', checked: true },
    { name: 'Birthdays', color: 'blue', checked: true },
    { name: 'Family', color: 'blue', checked: true },
    { name: 'Family', color: 'blue', checked: true },
    { name: 'Tasks', color: 'blue', checked: true },
  ]

  const otherCalendars = [
    { name: 'Holidays in Australia', color: 'blue', checked: true },
  ]

  return (
    <div className="w-64 bg-white h-full border-r border-af-stroke-border flex flex-col">
      {/* Create Button */}
      <div className="p-4 pb-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 border border-af-stroke-border rounded-full hover:bg-gray-50 transition-colors">
          <span className="text-af-text-primary font-medium text-sm">+</span>
          <span className="text-af-text-primary font-medium text-sm">Create</span>
        </button>
      </div>

      {/* Mini Calendar */}
      <div className="px-4 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-af-text-primary">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <div className="flex gap-1">
            <button 
              onClick={() => onMonthChange('prev')}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => onMonthChange('next')}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mini calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-xs">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-center text-af-text-secondary font-medium py-1">
              {day}
            </div>
          ))}
          
          {/* Empty cells */}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} className="text-center py-1"></div>
          ))}
          
          {/* Calendar days */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1
            const isToday = day === 17 && currentMonth.getMonth() === 10 && currentMonth.getFullYear() === 2025
            
            return (
              <div
                key={day}
                className={`text-center py-1 cursor-pointer hover:bg-gray-100 rounded ${
                  isToday ? 'bg-blue-600 text-white rounded-full' : 'text-af-text-primary'
                }`}
              >
                {day}
              </div>
            )
          })}

          {/* Next month days */}
          {Array.from({ length: (7 - ((firstDayOfMonth + daysInMonth) % 7)) % 7 }, (_, i) => (
            <div key={`next-${i}`} className="text-center py-1 text-gray-400">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search for people"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-af-text-primary placeholder:text-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Booking Pages */}
      <div className="px-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-af-text-primary">Booking pages</h3>
          <button className="p-0.5 hover:bg-gray-100 rounded">
            <svg className="w-3 h-3 text-af-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* My Calendars */}
      <div className="px-4 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-af-text-primary">My calendars</h3>
          <button className="p-0.5 hover:bg-gray-100 rounded">
            <svg className="w-3 h-3 text-af-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-2">
          {calendars.map((calendar, idx) => (
            <div key={idx} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
              <div className={`w-4 h-4 rounded-sm bg-blue-600`}></div>
              <span className="text-sm text-af-text-primary">{calendar.name}</span>
            </div>
          ))}
        </div>

        {/* Other Calendars */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-af-text-primary">Other calendars</h3>
            <button className="p-0.5 hover:bg-gray-100 rounded">
              <svg className="w-3 h-3 text-af-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-2">
            {otherCalendars.map((calendar, idx) => (
              <div key={idx} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
                <div className={`w-4 h-4 rounded-sm bg-blue-600`}></div>
                <span className="text-sm text-af-text-primary">{calendar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

