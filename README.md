# Autoflit

AI-powered social posting system built with Next.js, Tailwind CSS, and Supabase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up Supabase:
   - Create a new project on [Supabase](https://supabase.com)
   - Get your project URL and anon key from the project settings
   - Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Run the development server:
```bash
npm run dev
```

## Features

- User authentication with Supabase Auth
- Dashboard with social media management
- Calendar for scheduling posts
- Creator Studio for content creation
- News Scout for trending topics
- Analytics and settings

## Design System

- **Colors**: Coral primary (#FF6F61), neutral backgrounds, and accessible text colors
- **Typography**: Sans-serif for UI, serif for metrics
- **Layout**: Clean, card-based design with sidebar navigation
