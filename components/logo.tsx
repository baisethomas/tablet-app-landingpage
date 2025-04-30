import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "icon"
  className?: string
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {variant === "default" ? (
        <Image src="/images/tablet-logo-transparent.png" alt="Tablet Logo" width={120} height={60} className="h-auto" />
      ) : (
        <Image src="/images/tablet-logo-transparent.png" alt="Tablet Logo" width={40} height={40} className="h-8 w-8" />
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
