"use client"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { useMobileMenu } from "@/hooks/use-mobile-menu"

interface MobileNavProps {
  links: { href: string; label: string }[]
}

export function MobileNav({ links }: MobileNavProps) {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()

  // Close menu when clicking a link
  const handleLinkClick = () => {
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
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium py-2 text-text-primary hover:text-primary-500 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
