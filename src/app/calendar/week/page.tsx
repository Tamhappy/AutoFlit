'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

const tabs = [
  { name: 'Month', href: '/calendar', current: false },
  { name: 'Week', href: '/calendar/week', current: true },
  { name: 'Queue', href: '/calendar/queue', current: false },
]

export default function CalendarWeekPage() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const getWeekDates = (date: Date) => {
    const startOfWeek = new Date(date)
    const day = startOfWeek.getDay()
    const diff = startOfWeek.getDate() - day
    startOfWeek.setDate(diff)

    const weekDates = []
    for (let i = 0; i < 7; i++) {
      const weekDate = new Date(startOfWeek)
      weekDate.setDate(startOfWeek.getDate() + i)
      weekDates.push(weekDate)
    }
    return weekDates
  }

  const weekDates = getWeekDates(currentWeek)

  const timeSlots = Array.from({ length: 24 }, (_, i) => i)

  // Mock posts data
  const mockPosts = [
    { id: 1, date: weekDates[2], time: 9, platform: 'Instagram', content: 'Morning motivation post', status: 'scheduled' },
    { id: 2, date: weekDates[4], time: 14, platform: 'LinkedIn', content: 'Industry update', status: 'scheduled' },
    { id: 3, date: weekDates[1], time: 11, platform: 'Instagram', content: 'Product showcase', status: 'draft' },
  ]

  const getPostsForDateTime = (date: Date, hour: number) => {
    return mockPosts.filter(post =>
      post.date.toDateString() === date.toDateString() && post.time === hour
    )
  }

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeek(prev => {
      const newWeek = new Date(prev)
      if (direction === 'prev') {
        newWeek.setDate(prev.getDate() - 7)
      } else {
        newWeek.setDate(prev.getDate() + 7)
      }
      return newWeek
    })
  }

  const formatWeekRange = () => {
    const start = weekDates[0]
    const end = weekDates[6]
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    if (start.getMonth() === end.getMonth()) {
      return `${monthNames[start.getMonth()]} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`
    } else {
      return `${monthNames[start.getMonth()]} ${start.getDate()} - ${monthNames[end.getMonth()]} ${end.getDate()}, ${start.getFullYear()}`
    }
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Calendar</h1>
          <p className="text-text-secondary">Schedule and manage your social media posts</p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-stroke-border">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    tab.current
                      ? 'border-primary text-text-primary'
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-stroke-border'
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Week Header */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              {formatWeekRange()}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => navigateWeek('prev')}
                className="p-2 hover:bg-app-bg rounded-lg transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => navigateWeek('next')}
                className="p-2 hover:bg-app-bg rounded-lg transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Week Grid */}
          <div className="grid grid-cols-8 gap-1 min-h-[600px]">
            {/* Time column */}
            <div className="pr-2">
              <div className="h-12"></div> {/* Header space */}
              {timeSlots.map((hour) => (
                <div key={hour} className="h-12 text-xs text-text-secondary text-right pr-2">
                  {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                </div>
              ))}
            </div>

            {/* Day columns */}
            {weekDates.map((date, dayIndex) => {
              const isToday = new Date().toDateString() === date.toDateString()
              const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

              return (
                <div key={dayIndex} className="border-l border-stroke-border first:border-l-0">
                  {/* Day header */}
                  <div className={`h-12 text-center text-sm font-medium p-2 ${
                    isToday ? 'text-text-primary bg-primary/5' : 'text-text-primary'
                  }`}>
                    <div>{dayNames[date.getDay()]}</div>
                    <div className="text-xs">{date.getDate()}</div>
                  </div>

                  {/* Time slots */}
                  {timeSlots.map((hour) => {
                    const posts = getPostsForDateTime(date, hour)
                    return (
                      <div
                        key={hour}
                        className="h-12 border-t border-stroke-border hover:bg-background-app transition-colors cursor-pointer relative"
                      >
                        {posts.map((post) => (
                          <div
                            key={post.id}
                            className={`absolute inset-1 rounded text-xs p-1 ${
                              post.platform === 'Instagram'
                                ? 'bg-pink-100 text-pink-800 border border-pink-200'
                                : 'bg-blue-100 text-blue-800 border border-blue-200'
                            }`}
                          >
                            <div className="font-medium truncate">
                              {post.platform === 'Instagram' ? '📷' : '💼'} {post.content}
                            </div>
                            <div className="text-xs opacity-75">
                              {post.status === 'draft' ? 'Draft' : 'Scheduled'}
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-pink-100 border border-pink-200 rounded mr-2"></div>
            <span className="text-text-secondary">Instagram Post</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded mr-2"></div>
            <span className="text-text-secondary">LinkedIn Post</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary/5 border border-primary rounded mr-2"></div>
            <span className="text-text-secondary">Today</span>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
