'use client'

import { useRouter } from 'next/navigation'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase/client'

export default function SettingsPage() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleDeleteAccount = () => {
    // This would typically show a confirmation modal
    alert('Account deletion functionality would be implemented here')
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Settings</h1>
          <p className="text-text-secondary">Manage your account and connected platforms</p>
        </div>

        {/* Profile Information */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Profile Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Company
              </label>
              <input
                type="text"
                defaultValue="Acme Corp"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Website
              </label>
              <input
                type="url"
                defaultValue="https://acmecorp.com"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        {/* Connected Channels */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Connected Channels</h2>

          <div className="space-y-6">
            {/* Instagram */}
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  📷
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Instagram</h3>
                  <p className="text-sm text-text-secondary">@yourbrand • 12.5K followers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm">Connected</span>
                <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                  Disconnect
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">LinkedIn</h3>
                  <p className="text-sm text-text-secondary">Your Company • 8.3K followers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm">Connected</span>
                <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                  Disconnect
                </button>
              </div>
            </div>

            {/* Twitter (Not Connected) */}
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                  🐦
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Twitter</h3>
                  <p className="text-sm text-text-secondary">Not connected</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-red-700 transition-colors">
                Connect
              </button>
            </div>

            {/* Facebook (Not Connected) */}
            <div className="flex items-center justify-between p-4 border border-border rounded-xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                  📘
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Facebook</h3>
                  <p className="text-sm text-text-secondary">Not connected</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-red-700 transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-background-card rounded-2xl border border-stroke-border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Account Actions</h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary">Sign Out</h3>
              <p className="text-sm text-text-secondary">Sign out of your Autoflit account</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-stroke-border text-text-primary rounded hover:bg-background-app transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-red-900 mb-6">Danger Zone</h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-red-900">Delete Account</h3>
              <p className="text-sm text-red-700">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
