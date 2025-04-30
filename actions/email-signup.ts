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

    const validatedData = emailSchema.parse({ email, consent })

    // Add subscriber to your list (you would typically store this in a database)
    // For now, we'll just send a confirmation email using Resend
    const { data, error } = await resend.emails.send({
      from: "Tablet App <notifications@yourdomain.com>", // Update with your verified domain
      to: validatedData.email,
      subject: "Welcome to Tablet App Beta",
      html: WelcomeEmailTemplate({ email: validatedData.email }),
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(error.message)
    }

    // Return success response
    return {
      success: true,
      message: "Thanks for signing up! Check your inbox for a confirmation email.",
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
