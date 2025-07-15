"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { subscribeToNewsletter } from "@/actions/email-signup"
import { Loader2, CheckCircle2, AlertCircle, Users } from "lucide-react"
import { isValidEmail } from "@/utils/email-utils"

interface EmailSignupFormProps {
  buttonText?: string
  placeholder?: string
  className?: string
  darkMode?: boolean
  variant?: "simple" | "detailed"
  showProgressIndicator?: boolean
}

export function EmailSignupForm({
  buttonText = "Get Beta Access",
  placeholder = "Enter your email for beta access",
  className = "",
  darkMode = false,
  variant = "simple",
  showProgressIndicator = false,
}: EmailSignupFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [church, setChurch] = useState("")
  const [emailError, setEmailError] = useState("")
  const [showDetailedForm, setShowDetailedForm] = useState(variant === "detailed")

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
        <div className="bg-success-50 border border-success-200 rounded-lg p-6 flex flex-col items-center gap-4 animate-fade-in text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-500">
            <CheckCircle2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-success-700 text-lg">Welcome to the Beta!</h4>
            <p className="text-sm text-success-600 mt-2">{result.message}</p>
            <div className="mt-4 p-3 bg-success-100 rounded-lg">
              <p className="text-xs text-success-700 font-medium">
                🎉 You'll receive an email invitation when beta testing begins in Q1 2025
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {showProgressIndicator && (
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary mb-4">
              <Users className="h-4 w-4" />
            </div>
          )}
          
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
                className={`bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 hover:scale-105 font-semibold ${
                  darkMode ? "bg-white text-primary-700 hover:bg-white/90" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
            
            {showDetailedForm && (
              <div className="grid gap-4 p-4 bg-bg-secondary/50 rounded-lg border border-secondary-200">
                <div className="text-center">
                  <p className="text-sm text-text-secondary">Help us personalize your beta experience (optional)</p>
                </div>
                
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-sm text-text-primary">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-sm text-text-primary">Role</Label>
                    <Select name="role" value={role} onValueChange={setRole}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pastor">Pastor/Minister</SelectItem>
                        <SelectItem value="leader">Church Leader</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="member">Church Member</SelectItem>
                        <SelectItem value="student">Student/Seminary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="church" className="text-sm text-text-primary">Church/Organization</Label>
                  <Input
                    id="church"
                    name="church"
                    placeholder="Your church name (optional)"
                    value={church}
                    onChange={(e) => setChurch(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            )}
            
            {!showDetailedForm && variant === "simple" && (
              <button
                type="button"
                onClick={() => setShowDetailedForm(true)}
                className="text-xs text-primary-600 hover:text-primary-700 underline"
              >
                + Add optional details to personalize your experience
              </button>
            )}

            <div className="flex items-start space-x-2">
              <Checkbox id="consent" name="consent" required />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="consent" className="text-xs text-text-primary font-normal leading-relaxed">
                  I agree to receive beta program updates and Tablet Notes launch notifications. 
                  You can unsubscribe at any time.
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
        </div>
      )}
    </div>
  )
}
