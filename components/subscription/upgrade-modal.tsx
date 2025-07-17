'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Crown, Zap } from 'lucide-react'
import { STRIPE_CONFIG } from '@/lib/stripe'

interface UpgradeModalProps {
  isOpen: boolean
  onClose: () => void
  currentTier: string
}

export function UpgradeModal({ isOpen, onClose, currentTier }: UpgradeModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      price: '$9.99',
      description: 'Perfect for regular sermon attendees',
      icon: Zap,
      features: [
        '50 recordings per month',
        '20 hours of recording time',
        '20 exports per month',
        '10GB storage',
        'AI transcription',
        'Smart summaries',
        'Email support'
      ],
      limitations: STRIPE_CONFIG.LIMITS.pro,
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$19.99',
      description: 'For power users and church leaders',
      icon: Crown,
      features: [
        'Unlimited recordings',
        'Unlimited recording time',
        'Unlimited exports',
        '100GB storage',
        'AI transcription',
        'Smart summaries',
        'Priority support',
        'Advanced analytics',
        'Team sharing'
      ],
      limitations: STRIPE_CONFIG.LIMITS.premium,
      popular: false
    }
  ]

  const handleUpgrade = async (planId: string) => {
    setIsLoading(true)
    
    try {
      // TODO: Implement actual Stripe checkout
      console.log(`Upgrading to ${planId}`)
      alert(`Stripe checkout for ${planId} plan would be initiated here. Please configure Stripe integration first.`)
    } catch (error) {
      console.error('Upgrade error:', error)
      alert('Upgrade failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Upgrade Your Plan</DialogTitle>
          <DialogDescription className="text-center">
            Choose a plan that fits your sermon note-taking needs
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isCurrentPlan = currentTier === plan.id
            const canUpgrade = currentTier === 'free' || 
              (currentTier === 'pro' && plan.id === 'premium')

            return (
              <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary-500">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-2">
                    <Icon className={`h-8 w-8 ${plan.id === 'premium' ? 'text-yellow-500' : 'text-blue-500'}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    disabled={isCurrentPlan || !canUpgrade || isLoading}
                    onClick={() => handleUpgrade(plan.id)}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {isCurrentPlan 
                      ? 'Current Plan' 
                      : canUpgrade 
                        ? `Upgrade to ${plan.name}`
                        : 'Downgrade Not Available'
                    }
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground mt-6">
          <p>All plans include a 7-day free trial. Cancel anytime.</p>
          <p>Prices are in USD and billed monthly.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}