import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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