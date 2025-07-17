"use client"
import { X, Menu, User, LogOut } from "lucide-react"
import { Logo } from "@/components/logo"
import { useMobileMenu } from "@/hooks/use-mobile-menu"
import { Button } from "@/components/ui/button"
import { User as UserType } from "@supabase/supabase-js"
import Link from "next/link"

interface MobileNavProps {
  links: { href: string; label: string }[]
  onAuthClick?: () => void
  onSignOut?: () => void
  user?: UserType | null
}

export function MobileNav({ links, onAuthClick, onSignOut, user }: MobileNavProps) {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Get the header height to offset the scroll position
      const headerHeight = 80 // This should match your header height
      const offsetPosition = section.offsetTop - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    // Close the mobile menu after clicking a link
    closeMobileMenu()
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMobileMenu}
        className="p-2 text-text-primary focus:outline-none"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={closeMobileMenu} />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm bg-bg-primary shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Logo variant="default" />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-text-primary focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2 text-text-primary hover:text-primary-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const sectionId = link.href.replace("#", "")
                    scrollToSection(sectionId)
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2 text-text-primary hover:text-primary-500 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              )
            ))}
            
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
                    onSignOut?.()
                    closeMobileMenu()
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
                    onAuthClick?.()
                    closeMobileMenu()
                  }}
                  className="w-full"
                >
                  Sign In
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
