'use client'

import AppLayout from '@/components/AppLayout'
import Link from 'next/link'

const tabs = [
  { name: 'Month', href: '/calendar', current: false },
  { name: 'Week', href: '/calendar/week', current: false },
  { name: 'Queue', href: '/calendar/queue', current: true },
]

export default function CalendarQueuePage() {
  // Mock posts data
  const mockPosts = [
    {
      id: 1,
      date: 'Tomorrow',
      time: '9:00 AM',
      platform: 'Instagram',
      content: 'Exciting product launch announcement! 🚀 Our new AI-powered tool is here to revolutionize your workflow. Link in bio to learn more.',
      status: 'scheduled',
      image: true
    },
    {
      id: 2,
      date: 'Friday',
      time: '2:00 PM',
      platform: 'LinkedIn',
      content: 'Industry insights: The future of AI in content creation. What trends are you seeing in your organization? Share your thoughts below. #AI #ContentCreation #DigitalMarketing',
      status: 'scheduled',
      image: false
    },
    {
      id: 3,
      date: 'Next Monday',
      time: '11:00 AM',
      platform: 'Instagram',
      content: 'Behind the scenes: Meet the team working on our latest features. Tag a friend who should join us! 👋',
      status: 'draft',
      image: true
    },
    {
      id: 4,
      date: 'Next Wednesday',
      time: '10:30 AM',
      platform: 'LinkedIn',
      content: 'How to optimize your social media strategy for maximum engagement. Our latest guide covers everything you need to know.',
      status: 'scheduled',
      image: false
    },
    {
      id: 5,
      date: 'Next Friday',
      time: '3:00 PM',
      platform: 'Instagram',
      content: 'Friday motivation: "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill 💪',
      status: 'draft',
      image: false
    }
  ]

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
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
                      ? 'border-fill-primary text-text-primary'
                      : 'border-transparent text-text-secondary hover:text-text-primary hover:border-stroke-border'
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Queue Header */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">Post Queue</h2>
              <p className="text-text-secondary mt-1">Your scheduled and draft posts</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
                Create Post
              </button>
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-background-card rounded-2xl border border-stroke-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    post.platform === 'Instagram' ? 'bg-pink-500' : 'bg-blue-600'
                  }`}>
                    {post.platform === 'Instagram' ? '📷' : '💼'}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-text-primary">{post.platform}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        post.status === 'scheduled'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status === 'scheduled' ? 'Scheduled' : 'Draft'}
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary">
                      {post.date} at {post.time}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-background-app rounded-lg transition-colors">
                    ✏️
                  </button>
                  <button className="p-2 hover:bg-background-app rounded-lg transition-colors">
                    📅
                  </button>
                  <button className="p-2 hover:bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                    🗑️
                  </button>
                </div>
              </div>

              <div className="ml-13">
                <p className="text-text-primary mb-3 leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="flex items-center text-sm text-text-secondary mb-3">
                    <span className="mr-2">🖼️</span>
                    <span>Image attached</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-stroke-border">
                  <div className="flex space-x-4 text-sm text-text-secondary">
                    <button className="hover:text-text-primary transition-colors">
                      👍 Like
                    </button>
                    <button className="hover:text-text-primary transition-colors">
                      💬 Comment
                    </button>
                    <button className="hover:text-text-primary transition-colors">
                      🔄 Share
                    </button>
                  </div>
                  <button className="text-text-primary hover:text-red-700 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for when no posts */}
        {mockPosts.length === 0 && (
          <div className="bg-background-card rounded-2xl border border-stroke-border p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No posts in queue</h3>
            <p className="text-text-secondary mb-6">Start creating content for your social media channels</p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
              Create Your First Post
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
