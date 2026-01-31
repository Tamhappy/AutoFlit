'use client'

import { useState } from 'react'
import SidebarNav from '@/components/SidebarNav'
import CalendarSidebar from '@/components/CalendarSidebar'
import { Button } from '@/components/ui/button'

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10, 17)) // November 17, 2025 to match Figma

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  // Mock calendar events matching Figma design
  const mockEvents = [
    { id: 1, date: 27, month: 10, time: '14:30', title: 'Felix | Senior Product Designer | Tamara Mckn', icon: '📅', color: 'blue' },
    { id: 2, date: 30, month: 10, time: '16:30', title: 'Second Interview', subtitle: '- Principal Product Designe', icon: '📅', color: 'blue' },
    { id: 3, date: 3, month: 11, time: '08:00', title: 'Appointment with Dr Ryan Dusil at Ashgrove', icon: '📅', color: 'blue' },
    { id: 4, date: 3, month: 11, time: '12:00', title: 'Tam B 3', icon: '🎂', color: 'green' },
    { id: 5, date: 7, month: 11, time: '15:30', title: 'Appointment with', subtitle: 'Dr Ryan Dusil at Ashgrove', icon: '📅', color: 'blue' },
    { id: 6, date: 11, month: 11, holiday: 'Remembrance Day', color: 'red' },
    { id: 7, date: 12, month: 11, time: '08:00', title: 'Uniform Shop', icon: '🎂', color: 'green' },
    { id: 8, date: 14, month: 11, time: '09:30', title: 'Origin Story line', icon: '🎂', color: 'green' },
    { id: 9, date: 17, month: 11, time: '12:15', title: 'PD', icon: '🎂', color: 'green' },
    { id: 10, date: 22, month: 11, time: '11:30', title: 'Dentist', icon: '🎂', color: 'green' },
    { id: 11, date: 1, month: 11, time: '10:30', title: 'Dentist', icon: '🎂', color: 'green' },
    { id: 12, date: 5, month: 11, time: '06:05', title: 'Flight to Perth', subtitle: '(QF 933)', icon: '✈️', color: 'green' },
  ]

  const getEventsForDate = (date: number, month: number) => {
    return mockEvents.filter(event => event.date === date && event.month === month)
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const goToToday = () => {
    setCurrentMonth(new Date(2025, 10, 17))
  }

  const today = new Date()
  const isCurrentMonth = currentMonth.getMonth() === today.getMonth() && 
                         currentMonth.getFullYear() === today.getFullYear()

  return (
    <div className="flex h-screen bg-af-surface-app">
      {/* Main Navigation Sidebar */}
      <SidebarNav />
      
      {/* Calendar Sidebar */}
      <CalendarSidebar currentMonth={currentMonth} onMonthChange={navigateMonth} />
      
      {/* Main Calendar Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-af-stroke-border bg-white">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📅</span>
              <h1 className="text-xl font-medium text-af-text-primary">Calendar</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={goToToday} className="text-sm">
              Today
            </Button>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-medium text-af-text-primary min-w-[180px] text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center gap-2">
              <span className="text-sm font-medium">Month</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto px-6 py-4">
          <div className="border border-af-stroke-border rounded-lg overflow-hidden bg-white">
            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-af-stroke-border">
              {dayNames.map((day, idx) => (
                <div
                  key={day}
                  className={`py-3 text-center text-xs font-medium text-af-text-secondary border-r border-af-stroke-border ${
                    idx === 6 ? 'border-r-0' : ''
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7">
              {/* Empty cells for days before the first day of month */}
              {Array.from({ length: firstDayOfMonth }, (_, i) => {
                const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0)
                const prevMonthDays = prevMonth.getDate()
                const day = prevMonthDays - firstDayOfMonth + i + 1
                const dayIndex = i

                return (
                  <div
                    key={`empty-${i}`}
                    className={`min-h-[130px] p-2 border-r border-b border-af-stroke-border bg-gray-50 ${
                      dayIndex === 6 ? 'border-r-0' : ''
                    }`}
                  >
                    <div className="text-sm text-gray-400">{day}</div>
                  </div>
                )
              })}

              {/* Calendar days */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1
                const dayIndex = (firstDayOfMonth + i) % 7
                const events = getEventsForDate(day, currentMonth.getMonth())
                const isToday = day === 17 && currentMonth.getMonth() === 10 && currentMonth.getFullYear() === 2025

                return (
                  <div
                    key={day}
                    className={`min-h-[130px] p-2 border-r border-b border-af-stroke-border bg-white hover:bg-gray-50 transition-colors cursor-pointer ${
                      dayIndex === 6 ? 'border-r-0' : ''
                    }`}
                  >
                    {isToday ? (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mb-1">
                        <span className="text-xs font-medium text-white">{day}</span>
                      </div>
                    ) : (
                      <div className="text-sm font-medium text-af-text-primary mb-1">{day}</div>
                    )}
                    <div className="space-y-1">
                      {events.map((event) => (
                        <div key={event.id}>
                          {event.holiday ? (
                            <div className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">
                              {event.holiday}
                            </div>
                          ) : (
                            <div className={`text-xs ${event.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
                              <div className="flex items-start gap-1">
                                <span className="text-[10px]">{event.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="truncate">
                                    {event.time} {event.title}
                                  </div>
                                  {event.subtitle && (
                                    <div className="truncate">{event.subtitle}</div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Next month days to fill the grid */}
              {Array.from({ length: (7 - ((firstDayOfMonth + daysInMonth) % 7)) % 7 }, (_, i) => {
                const day = i + 1
                const dayIndex = (firstDayOfMonth + daysInMonth + i) % 7
                const nextMonth = currentMonth.getMonth() + 1
                const events = getEventsForDate(day, nextMonth)

                return (
                  <div
                    key={`next-${i}`}
                    className={`min-h-[130px] p-2 border-r border-b border-af-stroke-border bg-gray-50 ${
                      dayIndex === 6 ? 'border-r-0' : ''
                    }`}
                  >
                    <div className="text-sm text-gray-400">
                      {nextMonth === 12 ? 'Dec' : ''} {day}
                    </div>
                    <div className="space-y-1">
                      {events.map((event) => (
                        <div key={event.id}>
                          {event.holiday ? (
                            <div className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">
                              {event.holiday}
                            </div>
                          ) : (
                            <div className={`text-xs ${event.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
                              <div className="flex items-start gap-1">
                                <span className="text-[10px]">{event.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="truncate">
                                    {event.time} {event.title}
                                  </div>
                                  {event.subtitle && (
                                    <div className="truncate">{event.subtitle}</div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
