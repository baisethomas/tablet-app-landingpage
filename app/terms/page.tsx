import React from "react";
import { LogoLink } from "@/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-50">
        <LogoLink className="mr-8" />
        <nav className="hidden md:flex gap-6 sm:gap-8 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary" href="/#features">Features</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary" href="/#beta">Beta Access</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary" href="/#roadmap">Roadmap</Link>
          <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white" asChild>
            <Link href="/#signup">Join Beta</Link>
          </Button>
        </nav>
        <MobileNav
          links={[
            { href: "/#features", label: "Features" },
            { href: "/#beta", label: "Beta Access" },
            { href: "/#roadmap", label: "Roadmap" },
            { href: "/#signup", label: "Join Beta" },
          ]}
        />
      </header>
      <main className="flex-1 pt-20">
        <div className="container mx-auto max-w-3xl px-4 py-12 flex flex-col items-center">
          <article className="w-full bg-gradient-to-br from-primary-50 via-info-50 to-white rounded-2xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-text-primary text-center">Terms of Service</h1>
            <p className="text-text-secondary text-center mb-8">
              <strong>Effective Date:</strong> [Date of Beta Release]<br/>
              <strong>Last Updated:</strong> [Date of Beta Release]
            </p>
            <div className="prose prose-lg prose-headings:text-primary-700 dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>Welcome to Tablet Notes. These Terms of Service ("Terms") govern your use of our mobile application and related services ("Service"). By accessing or using Tablet Notes, you agree to be bound by these Terms. If you do not agree, please do not use the Service.</p>
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
                <li>Do not upload or share content that infringes on others' rights or is offensive.</li>
                <li>Do not interfere with or disrupt the Service or servers.</li>
              </ul>
              <h2>Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on Tablet Notes are owned by us or our licensors. You may not use, copy, or distribute any content from the Service without our permission.</p>
              <h2>Disclaimers</h2>
              <p>The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure.</p>
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Tablet Notes and its affiliates are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
              <h2>Termination</h2>
              <p>We may suspend or terminate your access to the Service at any time, with or without notice, for any reason, including violation of these Terms.</p>
              <h2>Governing Law</h2>
              <p>These Terms are governed by the laws of the United States and the State of [Your State], without regard to conflict of law principles.</p>
              <h2>Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <ul>
                <li><strong>Email</strong>: support@tabletnotes.io</li>
                <li><strong>Website</strong>: <a href="https://www.tabletnotes.io/terms">https://www.tabletnotes.io/terms</a></li>
                <li><strong>Address</strong>: [Your Business Address]</li>
              </ul>
            </div>
          </article>
          <Button asChild className="mt-8" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
