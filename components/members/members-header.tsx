'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { AuthModal } from '@/components/auth/auth-modal'
import { useAuth } from '@/contexts/auth-context'
import { User, LogOut, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function MembersHeader() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, profile, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-50">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Logo variant="default" />
      </Link>
      
      <nav className="hidden md:flex gap-6 items-center">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                {profile?.name || user.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAuthModalOpen(true)}
          >
            Member Login
          </Button>
        )}
      </nav>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-text-primary focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        <div
          className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm bg-bg-primary shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo variant="default" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text-primary focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 space-y-4">
              {user ? (
                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {user.email}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleSignOut()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsAuthModalOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full"
                  >
                    Member Login
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthModalOpen(false)
          window.location.reload()
        }}
      />
    </header>
  )
}