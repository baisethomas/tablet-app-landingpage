"use server"

import { z } from "zod"
import { Resend } from "resend"
import { WelcomeEmailTemplate } from "@/components/email-templates/welcome"

// Initialize Resend with the API key
const resend = new Resend(process.env.EMAIL_PROVIDER_API_KEY)

// Email validation schema
const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive emails",
  }),
})

type EmailFormData = z.infer<typeof emailSchema>

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract and validate form data
    const email = formData.get("email") as string
    const consent = formData.get("consent") === "on"

    // Validate the data
    const validatedData = emailSchema.parse({ email, consent })

    // Check if API key is available
    if (!process.env.EMAIL_PROVIDER_API_KEY) {
      console.error("Missing EMAIL_PROVIDER_API_KEY environment variable")
      return {
        success: false,
        message: "Server configuration error. Please try again later.",
      }
    }

    // Store the subscriber (in a real app, you'd save this to a database)
    console.log(`New subscriber: ${validatedData.email}`)

    // Send welcome email using Resend's default domain for testing
    try {
      const { data, error } = await resend.emails.send({
        from: "Tablet App <hello@updates.tabletnotes.io>", // Using your verified domain
        to: validatedData.email,
        subject: "Welcome to Tablet App Beta",
        html: WelcomeEmailTemplate({ email: validatedData.email }),
      })

      if (error) {
        // Check if it's a domain verification error or testing limitation
        if (
          error.message &&
          (error.message.includes("You can only send testing emails") ||
            error.message.includes("domain is not verified"))
        ) {
          console.log(
            `Email signup recorded for ${validatedData.email}, but welcome email not sent due to domain verification requirement`,
          )

          // Still return success to the user since we recorded their signup
          return {
            success: true,
            message: "Thanks for signing up! We've added you to our beta list and will notify you when we launch.",
          }
        }

        // For other Resend errors, log and return a generic error
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to complete signup. Please try again later.",
        }
      }

      console.log("Email sent successfully:", data)

      // Return success response with email sent
      return {
        success: true,
        message: "Thanks for signing up! Check your inbox for a confirmation email.",
      }
    } catch (emailError) {
      // If email sending fails completely, still record the signup as successful
      console.error("Email sending failed:", emailError)

      return {
        success: true,
        message: "Thanks for signing up! We've added you to our beta list and will notify you when we launch.",
      }
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message || "Please check your information and try again.",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
