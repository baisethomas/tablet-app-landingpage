import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] text-[#1F1F23]">
      <header className="px-6 lg:px-8 h-16 flex items-center justify-center border-b border-[#1F1F23]/5 bg-[#F7F8FA]">
        <Link href="/" className="tracking-[0.2em] text-sm font-medium text-[#1F1F23]/90 hover:text-[#1F1F23] transition-colors">
          Tablet Notes
        </Link>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-[#1F1F23]/60 text-center text-sm mb-12">
            <strong>Effective Date:</strong> July 17, 2025 &mdash; <strong>Last Updated:</strong> December 21, 2025
          </p>

          <div className="prose prose-lg prose-headings:font-medium prose-headings:tracking-tight max-w-none text-[#1F1F23]/80">
            <h2>Introduction</h2>
            <p>{'Welcome to Tablet Notes. These Terms of Service ("Terms") govern your use of our mobile application and related services ("Service"). By accessing or using Tablet Notes, you agree to be bound by these Terms. If you do not agree, please do not use the Service.'}</p>
            <h2>Acceptance of Terms</h2>
            <p>By creating an account or using Tablet Notes, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy.</p>
            <h2>Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of significant changes by email or app notification. Continued use of the Service after changes means you accept the new Terms.</p>
            <h2>User Accounts</h2>
            <ul>
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
            <h2>Acceptable Use</h2>
            <ul>
              <li>Do not use the Service for unlawful, harmful, or abusive purposes.</li>
              <li>Do not attempt to gain unauthorized access to the Service or its systems.</li>
              <li>Do not upload or share content that infringes on others{"'"}s rights or is offensive.</li>
              <li>Do not interfere with or disrupt the Service or servers.</li>
            </ul>
            <h2>Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on Tablet Notes are owned by us or our licensors. You may not use, copy, or distribute any content from the Service without our permission.</p>
            <h2>Disclaimers</h2>
            <p>{"The Service is provided \"as is\" and \"as available\" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure."}</p>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Tablet Notes and its affiliates are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
            <h2>Termination</h2>
            <p>We may suspend or terminate your access to the Service at any time, with or without notice, for any reason, including violation of these Terms.</p>
            <h2>Contact Information</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <ul>
              <li><strong>Email</strong>: support@tabletnotes.io</li>
              <li><strong>Website</strong>: <a href="https://www.tabletnotes.io/terms">https://www.tabletnotes.io/terms</a></li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-[#2F4FA2] hover:bg-[#243D7C] text-[#FFFFFF] text-sm font-medium px-6 py-3 rounded-md transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
