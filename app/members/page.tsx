'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { UpgradeModal } from '@/components/subscription/upgrade-modal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { MembersHeader } from '@/components/members/members-header'
import { 
  User, 
  Crown, 
  Calendar, 
  Clock, 
  HardDrive, 
  FileText, 
  CreditCard,
  Settings,
  ArrowUpCircle,
  Download
} from 'lucide-react'

export default function MembersPage() {
  const { user, profile, loading } = useAuth()
  const router = useRouter()
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!user || !profile) {
    return null
  }

  const getSubscriptionColor = (tier: string) => {
    switch (tier) {
      case 'premium': return 'bg-yellow-100 text-yellow-800'
      case 'pro': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUsagePercentage = (used: number, limit: number) => {
    return limit > 0 ? Math.min((used / limit) * 100, 100) : 0
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString()
  }

  const isSubscriptionActive = profile.subscription_status === 'active'
  const subscriptionExpiry = profile.subscription_expiry ? new Date(profile.subscription_expiry) : null
  const daysUntilExpiry = subscriptionExpiry ? Math.ceil((subscriptionExpiry.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : 0

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary">
      <MembersHeader />
      
      <main className="flex-1 pt-20 px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary mb-2">Member Dashboard</h1>
            <p className="text-muted-foreground">Manage your Tablet Notes subscription and account settings</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {/* Account Overview */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Account</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{profile.name || 'User'}</div>
                <p className="text-xs text-muted-foreground">{profile.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={getSubscriptionColor(profile.subscription_tier)}>
                    {profile.subscription_tier.charAt(0).toUpperCase() + profile.subscription_tier.slice(1)}
                  </Badge>
                  {profile.subscription_tier !== 'free' && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Subscription Status */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isSubscriptionActive ? 'Active' : 'Inactive'}
                </div>
                <p className="text-xs text-muted-foreground">
                  {subscriptionExpiry 
                    ? `${daysUntilExpiry > 0 ? `${daysUntilExpiry} days remaining` : 'Expired'}`
                    : 'No expiry date'
                  }
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Expires: {formatDate(profile.subscription_expiry)}
                </p>
              </CardContent>
            </Card>

            {/* Storage Usage */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Storage</CardTitle>
                <HardDrive className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{profile.current_storage_used_gb.toFixed(1)} GB</div>
                <p className="text-xs text-muted-foreground">Used storage</p>
                <Progress 
                  value={getUsagePercentage(profile.current_storage_used_gb, 10)} 
                  className="mt-2" 
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Monthly Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Monthly Usage
                </CardTitle>
                <CardDescription>
                  Your usage for the current billing period
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Recordings</span>
                    <span>{profile.monthly_recording_count} / ∞</span>
                  </div>
                  <Progress value={Math.min(profile.monthly_recording_count * 10, 100)} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Recording Minutes</span>
                    <span>{profile.monthly_recording_minutes} / ∞</span>
                  </div>
                  <Progress value={Math.min(profile.monthly_recording_minutes / 10, 100)} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Exports</span>
                    <span>{profile.monthly_export_count} / ∞</span>
                  </div>
                  <Progress value={Math.min(profile.monthly_export_count * 20, 100)} />
                </div>

                <Separator />
                
                <p className="text-xs text-muted-foreground">
                  Usage resets on: {formatDate(profile.last_usage_reset_date)}
                </p>
              </CardContent>
            </Card>

            {/* Subscription Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription Management
                </CardTitle>
                <CardDescription>
                  Manage your plan and billing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium capitalize">{profile.subscription_tier} Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      {profile.subscription_tier === 'free' 
                        ? 'Basic features included'
                        : `${profile.subscription_tier === 'pro' ? '$9.99' : '$19.99'}/month`
                      }
                    </p>
                  </div>
                  {profile.subscription_tier === 'free' && (
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={() => setIsUpgradeModalOpen(true)}
                    >
                      <ArrowUpCircle className="h-4 w-4" />
                      Upgrade
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full gap-2">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <FileText className="h-4 w-4" />
                    Billing History
                  </Button>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Export Data
                  </Button>
                </div>

                {profile.subscription_tier !== 'free' && (
                  <Button variant="destructive" size="sm" className="w-full">
                    Cancel Subscription
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        currentTier={profile.subscription_tier}
      />
    </div>
  )
}