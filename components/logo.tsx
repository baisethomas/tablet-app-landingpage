import Link from "next/link"

interface LogoProps {
  variant?: "default" | "icon"
  className?: string
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  // Direct reference to the uploaded image URL
  const logoUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-inline-GfvUQH8rWrT5L4cTX6te3NuKShfihl.png"

  return (
    <div className={`flex items-center ${className}`}>
      {variant === "default" ? (
        <img
          src={logoUrl || "/placeholder.svg"}
          alt="Tablet Logo"
          className="h-8 w-auto"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              // Create fallback text
              const fallback = document.createElement("span")
              fallback.textContent = "Tablet"
              fallback.className = "text-2xl font-semibold text-primary-500"
              parent.appendChild(fallback)
            }
          }}
        />
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-500"
        >
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M10 12L8 20L16 18L10 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 15L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

export function LogoLink({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link href="#" className="flex items-center justify-center">
      <Logo variant={variant} className={className} />
    </Link>
  )
}
