import AppLayout from '@/components/AppLayout'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { supabase } from '@/lib/supabase/client'
import { Badge } from "@/components/ui/badge"
import { createClient } from '@supabase/supabase-js';



export default async function DashboardPage() {
  const { data: scheduledPosts, error: scheduledError } = await supabase
    .from('posts')
    .select('*')
    .eq('state', 'scheduled')
    .order('scheduled_for', { ascending: true })
    .limit(5);


  return (

    <AppLayout>
      <div className="py-8 pr-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Dashboard</h1>
          <p className="text-text-secondary">Welcome back! Here's your social media overview.</p>
        </div>

        {/* Top Row - Social Media Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Instagram Panel */}
          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                  📷
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Instagram</h3>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 border border-green-300 hover:bg-green-200">
                Connected
              </Badge>

            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-left text-sm">
                <div className="text-2xl font-bold text-text-primary">12.5K</div>
                <div className="text-sm text-text-secondary">Followers</div>
              </div>
              <div className="text-left text-sm">
                <div className="text-2xl font-bold text-text-primary">245</div>
                <div className="text-sm text-text-secondary">Posts</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-text-primary">4.2%</div>
                <div className="text-sm text-text-secondary">Engagement</div>
              </div>
            </div>
          </Card>

          {/* LinkedIn Panel */}
          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">LinkedIn</h3>
                  <p className="text-sm text-text-secondary">Your Company</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">Connected</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">8.3K</div>
                <div className="text-sm text-text-secondary">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">89</div>
                <div className="text-sm text-text-secondary">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">2.8%</div>
                <div className="text-sm text-text-secondary">Engagement</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Second Row - Top Post and Queue Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Post Card */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Top Performing Post</h3>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 mb-4">
              <p className="text-text-primary mb-3">
                "Just launched our new AI-powered content scheduling tool. Say goodbye to manual posting! 🚀"
              </p>
              <div className="flex items-center text-sm text-text-secondary">
                <span className="mr-4">📷 Instagram</span>
                <span>Posted 3 days ago</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">1.2K</div>
                <div className="text-sm text-text-secondary">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">89</div>
                <div className="text-sm text-text-secondary">Comments</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">456</div>
                <div className="text-sm text-text-secondary">Shares</div>
              </div>
            </div>
          </Card>

          {/* Queue Snapshot */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Upcoming Posts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background-app rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-500 rounded mr-3 flex items-center justify-center text-xs">📷</div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{scheduledPosts?.[0]?.title ?? "No upcoming posts"}</p>
                    <p className="text-xs text-text-secondary">{scheduledPosts?.[0]?.scheduled_for
                      ? new Date(scheduledPosts[0].scheduled_for).toLocaleString()
                      : ""}</p>
                  </div>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded">Scheduled</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background-app rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center text-xs">💼</div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Industry insights</p>
                    <p className="text-xs text-text-secondary">Friday at 2:00 PM</p>
                  </div>
                </div>
                <span className="text-xs bg-primary text-white px-2 py-1 rounded">Scheduled</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background-app rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-500 rounded mr-3 flex items-center justify-center text-xs">📷</div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Behind the scenes</p>
                    <p className="text-xs text-text-secondary">Next Monday at 11:00 AM</p>
                  </div>
                </div>
                <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">Draft</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Third Row - Channel Comparison and News Scout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Channel Comparison */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Channel Performance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-500 rounded mr-3"></div>
                  <span className="text-text-primary">Instagram</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-pink-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium text-text-primary">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded mr-3"></div>
                  <span className="text-text-primary">LinkedIn</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                  </div>
                  <span className="text-sm font-medium text-text-primary">50%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* News Scout Teaser */}
          <Card className="p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-text-primary mb-4">📰 News Scout</h3>
            <p className="text-text-secondary mb-4">
              Discover trending topics and turn them into engaging content for your audience.
            </p>
            <Link
              href="/news-scout"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore Topics
              <span className="ml-2">→</span>
            </Link>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/studio"
              className="flex flex-col items-center p-4 bg-background-app rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-700 transition-colors">
                <span className="text-white text-xl">📝</span>
              </div>
              <span className="text-sm font-medium text-text-primary text-center">Plan Month</span>
            </Link>

            <button className="flex flex-col items-center p-4 bg-background-app rounded-lg hover:bg-primary/5 transition-colors group">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-700 transition-colors">
                <span className="text-white text-xl">👀</span>
              </div>
              <span className="text-sm font-medium text-text-primary text-center">Review Tomorrow's Posts</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-background-app rounded-lg hover:bg-primary/5 transition-colors group">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-700 transition-colors">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <span className="text-sm font-medium text-text-primary text-center">Adjust Frequency</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-background-app rounded-lg hover:bg-primary/5 transition-colors group">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-700 transition-colors">
                <span className="text-white text-xl">+</span>
              </div>
              <span className="text-sm font-medium text-text-primary text-center">Create Post</span>
            </button>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
