import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubghnmenxbhhlpxvypea.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ2hubWVueGJoaGxweHZ5cGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTgzMzMsImV4cCI6MjA2NjAzNDMzM30.gAzL8N2vXA8FhcAIFR0gKV6K7WS0_WCnMyINOiXcDfs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Profile {
  id: string
  created_at: string
  is_email_verified: boolean
  subscription_expiry: string | null
  monthly_recording_count: number
  monthly_recording_minutes: number
  current_storage_used_gb: number
  monthly_export_count: number
  last_usage_reset_date: string | null
  subscription_tier: 'free' | 'pro' | 'premium'
  subscription_status: string
  email: string
  name: string | null
  profile_image_url: string | null
}

export interface Sermon {
  id: string
  user_id: string
  title: string
  speaker: string
  service_type: string
  recording_date: string
  duration: number
  created_at: string
  updated_at: string
  is_archived: boolean
  audio_file_path: string
  sync_status: string
  transcription_status: string
  summary_status: string
  deleted_at: string | null
}