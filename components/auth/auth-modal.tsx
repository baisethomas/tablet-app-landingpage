'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'
import { Loader2, Mail } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setMessage('')

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/members`
          }
        })
        
        if (error) throw error
        
        setMessage('Please check your email for a confirmation link')
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/members`
          }
        })
        
        if (error) throw error
        
        setMessage('Please check your email for a sign-in link')
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setMessage('')
    setError('')
    setIsSignUp(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isSignUp 
              ? 'Create your TabletNotes account to manage your subscription'
              : 'Sign in to access your TabletNotes member dashboard'
            }
          </DialogDescription>
        </DialogHeader>

        {message ? (
          <div className="text-center py-6">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">{message}</p>
            <Button onClick={handleClose} variant="outline">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !email}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSignUp ? 'Create Account' : 'Send Sign-In Link'}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-blue-600 hover:underline"
                disabled={isLoading}
              >
                {isSignUp 
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Create one"
                }
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}