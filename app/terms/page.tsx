import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center mb-8 text-primary-500 hover:text-primary-600 transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">📄</span> Terms of Service — <em>Tablet</em>
          </h1>

          <p className="text-lg font-medium">
            <strong>Effective Date:</strong>{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p className="my-6">
            Welcome to <strong>Tablet</strong>! By using our app, you agree to these Terms of Service ("Terms"). Please
            read them carefully.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Overview</h2>
          <p>
            Tablet is a mobile application that enables users to transcribe sermons in real-time, receive summaries, and
            take personal notes. It is designed to help users stay engaged during religious services and reflect on
            messages later.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of the App</h2>
          <p>
            You agree to use the app in a manner consistent with all applicable laws and regulations. Misuse or
            unauthorized use of the app, including reverse engineering or scraping, is prohibited.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
          <p>
            To use certain features, you may be required to create an account. You are responsible for maintaining the
            confidentiality of your account information and all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Content Ownership</h2>
          <p>
            All notes and recordings you create are owned by you. However, by using the app, you grant us a
            non-exclusive license to process and store this content for the purpose of providing our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All branding, logos, design elements, and software are the intellectual property of Tablet or its licensors.
            You may not reuse or reproduce any part of the app without express permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitations of Liability</h2>
          <p>
            Tablet is provided "as-is." We are not liable for any indirect, incidental, or consequential damages that
            result from the use or inability to use the app.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the app if you violate these Terms or engage in
            any harmful activity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the app after changes are made indicates your
            acceptance of those changes.
          </p>

          <div className="mt-12 pt-8 border-t border-secondary-200">
            <p className="text-sm text-text-secondary">
              If you have any questions about these Terms, please contact us at support@tabletapp.com
            </p>

            <div className="mt-8">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
