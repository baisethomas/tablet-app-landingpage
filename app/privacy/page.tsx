import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            <span className="text-3xl">🔐</span> Privacy Policy — <em>Tablet</em>
          </h1>

          <p className="text-lg font-medium">
            <strong>Effective Date:</strong>{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p className="my-6">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Account Info:</strong> Email address, password (encrypted), and optional display name.
            </li>
            <li>
              <strong>Usage Data:</strong> Sermon recordings, summaries, timestamps, and notes.
            </li>
            <li>
              <strong>Device Info:</strong> Device ID, operating system, and app usage logs.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transcribe and summarize sermons</li>
            <li>Save and organize your notes</li>
            <li>Improve app performance and personalize your experience</li>
          </ul>
          <p className="mt-4">
            We <strong>do not sell or share your data</strong> with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Storage</h2>
          <p>Your data is stored securely in the cloud. All transmissions are encrypted in transit and at rest.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            We use third-party APIs strictly to enhance the app's core features. These
            services have their own privacy practices.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
          <p>You can:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request deletion of your account and all associated data</li>
            <li>Export your data at any time</li>
            <li>Opt out of non-essential notifications</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Children's Privacy</h2>
          <p>Tablet is not intended for children under 13. We do not knowingly collect data from minors.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Policy</h2>
          <p>We may update this policy to reflect changes in our practices. We'll notify you of significant changes.</p>

          <div className="mt-12 pt-8 border-t border-secondary-200">
            <p className="text-sm text-text-secondary">
              If you have any questions about our Privacy Policy, please contact us at privacy@tabletapp.com
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
