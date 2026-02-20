"use client"

import { useState } from "react"

interface SignupFormProps {
  variant: "dark" | "blue"
}

export function SignupForm({ variant }: SignupFormProps) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (firstName.trim() && email.trim()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto mb-4">
        <p className={variant === "dark" ? "text-foreground/80 text-sm" : "text-foreground/90 text-sm"}>
          Thanks, {firstName}! We will be in touch.
        </p>
      </div>
    )
  }

  const isDark = variant === "dark"
  const inputBg = isDark ? "bg-[#26262b]" : "bg-[#385bb5]"
  const inputBorder = isDark ? "border-foreground/10" : "border-foreground/20"
  const inputPlaceholder = isDark ? "placeholder-foreground/40" : "placeholder-foreground/60"
  const inputFocus = isDark ? "focus:border-foreground/30" : "focus:border-foreground/50"
  const buttonClasses = isDark
    ? "bg-[#2F4FA2] hover:bg-[#243D7C] text-foreground"
    : "bg-foreground hover:bg-foreground/90 text-[#2F4FA2]"

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mb-4"
    >
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className={`w-full sm:w-1/3 ${inputBg} border ${inputBorder} text-foreground ${inputPlaceholder} text-sm px-4 py-3 rounded-md focus:outline-none ${inputFocus} transition-colors`}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`w-full sm:w-2/3 ${inputBg} border ${inputBorder} text-foreground ${inputPlaceholder} text-sm px-4 py-3 rounded-md focus:outline-none ${inputFocus} transition-colors`}
      />
      <button
        type="submit"
        className={`w-full sm:w-auto whitespace-nowrap ${buttonClasses} text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200`}
      >
        Notify me at launch
      </button>
    </form>
  )
}
