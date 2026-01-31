import AppLayout from '@/components/AppLayout'
import Link from 'next/link'



export default function StudioPage() {
  // Mock draft posts data
  const draftPosts = [
    {
      id: 1,
      title: 'Product Launch Teaser',
      content: 'Exciting news! Our revolutionary AI-powered content creation tool is launching next week. Stay tuned for features that will transform your social media workflow. 🚀',
      platform: 'Instagram',
      estimatedEngagement: 'High',
      status: 'draft'
    },
    {
      id: 2,
      title: 'Industry Insights: AI Trends 2024',
      content: 'The landscape of AI in content creation is evolving rapidly. Here are the top 5 trends that will shape the industry this year: 1) Multimodal AI, 2) Personalization at scale, 3) Automated content optimization, 4) Cross-platform consistency, 5) Real-time adaptation.',
      platform: 'LinkedIn',
      estimatedEngagement: 'Medium',
      status: 'draft'
    },
    {
      id: 3,
      title: 'Behind the Scenes: Team Building',
      content: 'Meet the incredible team behind Autoflit! From AI engineers to creative strategists, get to know the people making social media automation effortless. Tag someone who should join our mission! 👋',
      platform: 'Instagram',
      estimatedEngagement: 'High',
      status: 'draft'
    },
    {
      id: 4,
      title: 'Customer Success Story',
      content: 'How TechCorp increased their social media engagement by 300% using automated content scheduling. Read their full case study and learn how you can achieve similar results.',
      platform: 'LinkedIn',
      estimatedEngagement: 'Medium',
      status: 'draft'
    },
    {
      id: 5,
      title: 'Friday Motivation',
      content: '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill. Here\'s to conquering challenges and achieving greatness this week! 💪 #Motivation #Success',
      platform: 'Instagram',
      estimatedEngagement: 'High',
      status: 'draft'
    }
  ]

  return (
    <AppLayout>
      <div className="py-8 pr-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Creator Studio</h1>
          <p className="text-text-secondary">Plan your content strategy and generate AI-powered posts</p>
        </div>

        {/* Monthly Planning Section */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Monthly Content Planning</h2>
            <p className="text-text-secondary mb-6 max-w-2xl">
              Generate a comprehensive content outline for the entire month. Our AI will analyze your brand voice,
              target audience, and trending topics to create a strategic content calendar.
            </p>

            <button className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-red-700 transition-colors mb-6">
              ✨ Generate Monthly Outline
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background-app rounded-lg p-4">
                <div className="text-text-primary text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-text-primary mb-2">Strategic Planning</h3>
                <p className="text-sm text-text-secondary">AI-powered content themes aligned with your business goals</p>
              </div>
              <div className="bg-background-app rounded-lg p-4">
                <div className="text-text-primary text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-text-primary mb-2">Performance Optimization</h3>
                <p className="text-sm text-text-secondary">Posts optimized for engagement based on historical data</p>
              </div>
              <div className="bg-background-app rounded-lg p-4">
                <div className="text-text-primary text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-text-primary mb-2">Consistent Voice</h3>
                <p className="text-sm text-text-secondary">Maintain brand consistency across all platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequency Tools Section */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Posting Frequency Settings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram Settings */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                  📷
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Instagram</h3>
                  <p className="text-sm text-text-secondary">@yourbrand</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Posts per week</span>
                  <select className="px-3 py-1 border border-stroke-border rounded">
                    <option>3</option>
                    <option>5</option>
                    <option>7</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Best posting times</span>
                  <span className="text-sm text-text-secondary">9 AM, 2 PM, 7 PM</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Settings */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">LinkedIn</h3>
                  <p className="text-sm text-text-secondary">Your Company</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Posts per week</span>
                  <select className="px-3 py-1 border border-stroke-border rounded">
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-primary">Best posting times</span>
                  <span className="text-sm text-text-secondary">8 AM, 12 PM, 5 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
              Save Frequency Settings
            </button>
          </div>
        </div>

        {/* AI-Generated Draft Posts */}
        <div className="bg-card-bg rounded-2xl border border-stroke-border p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">AI-Generated Draft Posts</h2>
              <p className="text-text-secondary">Review and customize your AI-generated content</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
              Generate New Posts
            </button>
          </div>

          <div className="space-y-6">
            {draftPosts.map((post) => (
              <div key={post.id} className="border border-stroke-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded mr-3 ${
                      post.platform === 'Instagram' ? 'bg-pink-500' : 'bg-blue-600'
                    }`}>
                      {post.platform === 'Instagram' ? '📷' : '💼'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{post.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-text-secondary">{post.platform}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          post.estimatedEngagement === 'High'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.estimatedEngagement} Engagement
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                    Draft
                  </span>
                </div>

                <p className="text-text-primary mb-4 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 text-text-secondary hover:text-text-primary border border-stroke-border rounded-lg hover:bg-app-bg transition-colors">
                      Edit Content
                    </button>
                    <button className="px-4 py-2 text-text-secondary hover:text-text-primary border border-stroke-border rounded-lg hover:bg-app-bg transition-colors">
                      Add Image
                    </button>
                  </div>
                  <Link
                    href="/calendar"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Send to Calendar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
