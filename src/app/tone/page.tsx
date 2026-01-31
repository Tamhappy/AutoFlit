import AppLayout from '@/components/AppLayout'
import { Card } from '@/components/ui/card'

export default function TonePage() {
  return (
    <AppLayout>
      <div className="py-8 pr-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-af-text-primary mb-2">Your Tone</h1>
          <p className="text-af-text-secondary">Define and manage your brand voice and communication style</p>
        </div>

        {/* Current Tone Profile */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-af-text-primary mb-6">Current Brand Voice</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-af-text-primary mb-3">Voice Characteristics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-af-text-primary">Formality</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-af-fill-primary h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-sm text-af-text-secondary">Professional</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-af-text-primary">Enthusiasm</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-af-fill-primary h-2 rounded-full w-5/6"></div>
                    </div>
                    <span className="text-sm text-af-text-secondary">High</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-af-text-primary">Humor</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-af-fill-primary h-2 rounded-full w-1/2"></div>
                    </div>
                    <span className="text-sm text-af-text-secondary">Moderate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-af-text-primary">Empathy</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-af-fill-primary h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm text-af-text-secondary">High</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-af-text-primary mb-3">Communication Style</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-af-fill-primary rounded-sm"></div>
                  <span className="text-af-text-primary">Conversational and approachable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-af-fill-primary rounded-sm"></div>
                  <span className="text-af-text-primary">Uses storytelling techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-af-fill-primary rounded-sm"></div>
                  <span className="text-af-text-primary">Includes actionable insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-af-fill-primary rounded-sm"></div>
                  <span className="text-af-text-primary">Emoji usage: Moderate</span>
                </div>
              </div>
            </div>
          </div>

          <button className="px-6 py-3 bg-af-fill-primary text-white rounded-lg hover:opacity-80 transition-opacity">
            Edit Brand Voice
          </button>
        </Card>

        {/* Example Content */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-af-text-primary mb-6">Example Content in Your Voice</h2>
          
          <div className="space-y-6">
            <div className="border border-af-stroke-border rounded-lg p-6 bg-af-surface-app">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-pink-500 rounded mr-3 flex items-center justify-center">
                  📷
                </div>
                <div>
                  <h3 className="font-semibold text-af-text-primary">Instagram Post</h3>
                  <p className="text-sm text-af-text-secondary">Example in your brand voice</p>
                </div>
              </div>
              <p className="text-af-text-primary leading-relaxed">
                "Hey there! 👋 Ever feel like your social media is running YOU instead of the other way around? 
                We've been there. That's exactly why we built tools that work WITH your schedule, not against it. 
                What's your biggest social media time-saver? Drop a comment below! 💡"
              </p>
            </div>

            <div className="border border-af-stroke-border rounded-lg p-6 bg-af-surface-app">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-af-text-primary">LinkedIn Post</h3>
                  <p className="text-sm text-af-text-secondary">Example in your brand voice</p>
                </div>
              </div>
              <p className="text-af-text-primary leading-relaxed">
                "The future of content creation isn't about replacing human creativity—it's about amplifying it. 
                By automating the repetitive tasks, teams can focus on what truly matters: building authentic 
                connections with their audience. Here are 3 ways AI-powered tools are reshaping social media 
                strategy in 2024... [Read more]"
              </p>
            </div>
          </div>
        </Card>

        {/* Tone Guidelines */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-af-text-primary mb-6">Writing Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-af-text-primary mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Do's
              </h3>
              <ul className="space-y-2 text-af-text-primary">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Use inclusive language that welcomes everyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Lead with value and actionable insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ask questions to encourage engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Share relatable stories and examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>End with clear calls-to-action</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-af-text-primary mb-4 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                Don'ts
              </h3>
              <ul className="space-y-2 text-af-text-primary">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Use jargon or overly technical language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Make unsubstantiated claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Be overly promotional or sales-focused</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Use negative or divisive language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Post without a clear purpose or message</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}



