'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogoLink } from '@/components/logo'
import { MobileNav } from '@/components/mobile-nav'
import { AuthModal } from '@/components/auth/auth-modal'
import { useAuth } from '@/contexts/auth-context'
import { User, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export function Header({ scrollToSection }: HeaderProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, profile, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-50">
      <LogoLink className="mr-8" />
      <nav className="hidden md:flex gap-6 sm:gap-8 items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
          href="#features"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("features")
          }}
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
          href="#beta"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("beta")
          }}
        >
          Beta Access
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
          href="#roadmap"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("roadmap")
          }}
        >
          Roadmap
        </Link>
        
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                {profile?.name || user.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/members" className="w-full">
                  Member Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-primary-500 hover:bg-primary-600 text-white"
              onClick={() => scrollToSection("signup")}
            >
              Join Beta
            </Button>
          </>
        )}
      </nav>
      
      <MobileNav
        links={[
          { href: "#features", label: "Features" },
          { href: "#beta", label: "Beta Access" },
          { href: "#roadmap", label: "Roadmap" },
          { href: "#signup", label: "Join Beta" },
          ...(user ? [{ href: "/members", label: "Dashboard" }] : [])
        ]}
        onAuthClick={user ? undefined : () => setIsAuthModalOpen(true)}
        onSignOut={user ? handleSignOut : undefined}
        user={user}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthModalOpen(false)
          window.location.href = '/members'
        }}
      />
    </header>
  )
}