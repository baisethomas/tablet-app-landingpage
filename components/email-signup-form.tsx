"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { subscribeToNewsletter } from "@/actions/email-signup"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { isValidEmail } from "@/utils/email-utils"

interface EmailSignupFormProps {
  buttonText?: string
  placeholder?: string
  className?: string
  darkMode?: boolean
}

export function EmailSignupForm({
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  className = "",
  darkMode = false,
}: EmailSignupFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  async function handleSubmit(formData: FormData) {
    // Client-side validation
    const emailValue = formData.get("email") as string
    if (!isValidEmail(emailValue)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setResult(null)
    setEmailError("")

    try {
      const response = await subscribeToNewsletter(formData)
      setResult(response)

      // Clear the form on success
      if (response.success) {
        setEmail("")
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {result?.success ? (
        <div className="bg-success-50 border border-success-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-success-700">Thank you for signing up!</h4>
            <p className="text-sm text-success-600 mt-1">{result.message}</p>
          </div>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <Input
                className={`max-w-lg w-full transition-all duration-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-300 ${
                  emailError ? "border-error-500 focus:ring-error-300 focus:border-error-300" : ""
                } text-text-primary`}
                placeholder={placeholder}
                name="email"
                type="email"
                required
                disabled={isLoading}
                aria-label="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError && isValidEmail(e.target.value)) {
                    setEmailError("")
                  }
                }}
              />
              {emailError && <p className="text-xs text-error-500 mt-1">{emailError}</p>}
            </div>
            <Button
              type="submit"
              className={`bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 hover:scale-105 ${
                darkMode ? "bg-white text-primary-700 hover:bg-white/90" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="consent" name="consent" required />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="consent" className="text-xs text-text-primary font-normal leading-relaxed">
                I agree to receive emails about Tablet app updates, features, and promotions. You can unsubscribe at any
                time.
              </Label>
            </div>
          </div>

          {result && !result.success && (
            <div
              className="bg-error-50 border border-error-200 rounded-lg p-3 flex items-center gap-2 animate-fade-in"
              role="alert"
            >
              <AlertCircle className="h-4 w-4 text-error-500 flex-shrink-0" />
              <p className="text-sm text-error-600">{result.message}</p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
