import AppLayout from '@/components/AppLayout'

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Analytics</h1>
          <p className="text-text-secondary">Track your social media performance and engagement metrics</p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-12 text-center">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Analytics Dashboard Coming Soon</h2>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            We're building comprehensive analytics to help you track engagement, reach, and growth across all your social media platforms.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-text-secondary">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">📈</div>
              <div>Performance Metrics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">👥</div>
              <div>Audience Insights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">📅</div>
              <div>Content Calendar</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
