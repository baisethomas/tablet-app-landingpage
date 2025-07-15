import { cn } from "@/lib/utils"

interface BetaBadgeProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "accent" | "glow"
}

export function BetaBadge({ className, size = "md", variant = "primary" }: BetaBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  }

  const variantClasses = {
    primary: "bg-primary-500 text-white border-primary-600",
    accent: "bg-info-500 text-white border-info-600", 
    glow: "bg-gradient-to-r from-primary-500 to-info-500 text-white border-primary-400 shadow-lg shadow-primary-500/25"
  }

  return (
    <div className={cn(
      "inline-flex items-center rounded-full border font-semibold tracking-wide uppercase",
      sizeClasses[size],
      variantClasses[variant],
      variant === "glow" && "animate-pulse-soft",
      className
    )}>
      <span className="relative">
        Beta Access
        {variant === "glow" && (
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
        )}
      </span>
    </div>
  )
}