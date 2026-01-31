'use client'

import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

const topics = [
  'Technology', 'AI & Machine Learning', 'Social Media', 'Marketing',
  'Business', 'Startups', 'Design', 'Productivity', 'Innovation', 'Trends'
]

export default function NewsScoutPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Technology', 'AI & Machine Learning'])

  // Mock articles data
  const articles = [
    {
      id: 1,
      title: 'AI Content Creation Tools Revolutionize Social Media Strategy',
      summary: 'New AI-powered tools are transforming how businesses create and schedule social media content, offering unprecedented efficiency and personalization.',
      source: 'TechCrunch',
      publishedAt: '2 hours ago',
      topic: 'AI & Machine Learning',
      image: '📰',
      relevance: 95
    },
    {
      id: 2,
      title: 'The Rise of Automated Social Media Management Platforms',
      summary: 'Companies are increasingly adopting automated platforms that handle content creation, scheduling, and analytics, freeing up marketers for strategic work.',
      source: 'Marketing Weekly',
      publishedAt: '4 hours ago',
      topic: 'Marketing',
      image: '📈',
      relevance: 88
    },
    {
      id: 3,
      title: 'How AI is Changing the Future of Content Marketing',
      summary: 'Artificial intelligence is not just automating content creation but also personalizing it at scale, leading to better engagement rates.',
      source: 'Content Marketing Institute',
      publishedAt: '6 hours ago',
      topic: 'AI & Machine Learning',
      image: '🤖',
      relevance: 92
    },
    {
      id: 4,
      title: 'Social Media Algorithms: What Marketers Need to Know in 2024',
      summary: 'Understanding platform algorithms is crucial for content strategy. Here are the key changes and trends shaping social media in the coming year.',
      source: 'Social Media Today',
      publishedAt: '8 hours ago',
      topic: 'Social Media',
      image: '📱',
      relevance: 85
    },
    {
      id: 5,
      title: 'From Manual to Automated: The Evolution of Content Workflows',
      summary: 'Businesses are moving from manual content creation processes to sophisticated automated workflows that integrate AI, analytics, and cross-platform publishing.',
      source: 'Business Tech Review',
      publishedAt: '12 hours ago',
      topic: 'Business',
      image: '⚙️',
      relevance: 78
    },
    {
      id: 6,
      title: 'The Impact of AI on Creative Industries',
      summary: 'While AI tools are enhancing productivity, they also raise questions about creativity, originality, and the future role of human creators.',
      source: 'Creative Economy Report',
      publishedAt: '1 day ago',
      topic: 'Innovation',
      image: '🎨',
      relevance: 82
    }
  ]

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const filteredArticles = articles.filter(article =>
    selectedTopics.includes(article.topic)
  )

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">📰 News Scout</h1>
          <p className="text-text-secondary">Discover trending topics and turn them into engaging content</p>
        </div>

        {/* Topic Selection */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-6 mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Select Topics to Monitor</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTopics.includes(topic)
                    ? 'bg-primary text-white'
                    : 'bg-background-app text-text-secondary hover:bg-primary/10 hover:text-text-primary'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-text-secondary">
            {selectedTopics.length} topics selected • {filteredArticles.length} articles found
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-background-card rounded-2xl border border-stroke-border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{article.image}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2 leading-tight">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                        <span>{article.source}</span>
                        <span>•</span>
                        <span>{article.publishedAt}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          article.topic === 'AI & Machine Learning'
                            ? 'bg-blue-100 text-blue-800'
                            : article.topic === 'Marketing'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {article.topic}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-secondary mb-1">Relevance</div>
                      <div className="text-lg font-semibold text-text-primary">{article.relevance}%</div>
                    </div>
                  </div>

                  <p className="text-text-primary mb-4 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 text-text-secondary hover:text-text-primary border border-stroke-border rounded-lg hover:bg-app-bg transition-colors">
                        📖 Read Full Article
                      </button>
                      <button className="px-4 py-2 text-text-secondary hover:text-text-primary border border-stroke-border rounded-lg hover:bg-app-bg transition-colors">
                        🔗 Copy Link
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
                      ✍️ Turn into Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-background-app text-text-primary rounded-lg hover:bg-stroke-border transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="bg-background-card rounded-2xl border border-stroke-border p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No articles found</h3>
            <p className="text-text-secondary mb-6">Try selecting different topics to see more content</p>
            <button
              onClick={() => setSelectedTopics(topics.slice(0, 3))}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Select Popular Topics
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
