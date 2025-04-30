import Link from "next/link"

interface LogoProps {
  variant?: "default" | "icon"
  className?: string
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {variant === "default" ? (
        <div className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-500"
          >
            <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M20 10L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ml-2 text-2xl font-semibold text-primary-500">Tablet</span>
        </div>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-500"
        >
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M20 10L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
