"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mic, FileText, Book, PenTool, Archive, Mail } from "lucide-react"
import { LogoLink } from "@/components/logo"
import { EmailSignupForm } from "@/components/email-signup-form"
import { MobileNav } from "@/components/mobile-nav"

export default function LandingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Get the header height to offset the scroll position
      const headerHeight = 80 // This should match your header height
      const offsetPosition = section.offsetTop - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-50">
        <LogoLink className="mr-8" />
        <nav className="hidden md:flex gap-6 sm:gap-8">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("features")
            }}
          >
            Feature
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("how-it-works")
            }}
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("pricing")
            }}
          >
            Pricing
          </Link>
        </nav>
        <MobileNav
          links={[
            { href: "#features", label: "Features" },
            { href: "#how-it-works", label: "How It Works" },
            { href: "#pricing", label: "Pricing" },
            { href: "#download", label: "Download" },
          ]}
        />
      </header>
      <main className="flex-1 pt-20">
        {" "}
        {/* Added padding-top to account for fixed header */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Hero background with worship image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 mix-blend-multiply z-10"></div>
            <img
              src="/images/worship-background.jpg"
              alt="Worship service"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-20">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-medium animate-fade-in-down text-white">
                  Spiritual Growth Made Simple
                </div>
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-down text-white"
                  style={{ animationDelay: "0.1s" }}
                >
                  Tablet
                </h1>
                <p
                  className="text-xl text-white/90 md:text-2xl animate-fade-in-down"
                  style={{ animationDelay: "0.2s" }}
                >
                  Capture the Word. Write it on Your Heart.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start animate-fade-in-down"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary-700 shadow-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection("download")}
                  >
                    Join the Beta
                  </Button>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection("features")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="mx-auto w-full max-w-sm lg:max-w-none flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <img
                      src="/images/hero-logo.png"
                      alt="Tablet Notes Logo"
                      className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105 animate-float"
                      onError={(e) => {
                        // Fallback to a styled text logo if image fails to load
                        e.currentTarget.style.display = "none"
                        const fallback = e.currentTarget.nextElementSibling
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />
                    <div
                      className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl"
                      style={{ display: "none" }}
                    >
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">Tablet</div>
                        <div className="text-xl">Notes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  Key Features
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Everything you need to capture and reflect on spiritual teachings
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <Mic className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">One-Tap Recording</h3>
                <p className="text-center text-text-secondary">Start recording a sermon or message with a single tap</p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <FileText className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Automatic Transcription</h3>
                <p className="text-center text-text-secondary">
                  Once the session ends, the app generates a full transcript and summary
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <Book className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Scripture Recognition</h3>
                <p className="text-center text-text-secondary">
                  Bible verses mentioned are detected and listed for easy reference
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <PenTool className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Personal Notes</h3>
                <p className="text-center text-text-secondary">
                  Add your own reflections and insights directly into the app
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <Archive className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Organized Archive</h3>
                <p className="text-center text-text-secondary">
                  Keep all your past recordings and notes in one easily accessible place
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary transition-transform duration-300 hover:scale-110">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Share & Export</h3>
                <p className="text-center text-text-secondary">
                  Easily share your notes or export transcripts to other applications
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-bg-secondary via-info-50 to-bg-secondary z-0">
            <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-primary-100/20 blur-3xl animate-pulse-soft"></div>
            <div
              className="absolute top-20 left-40 w-60 h-60 rounded-full bg-info-100/30 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  How It Works
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Five simple steps to capture and reflect on spiritual teachings
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-info-100 to-primary-50 text-text-primary shadow-sm border border-white/50 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">Sign up with your email</h3>
                  <p className="text-text-secondary">Create your account in seconds and get started right away</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-info-100 to-primary-50 text-text-primary shadow-sm border border-white/50 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">Tap Start Recording</h3>
                  <p className="text-text-secondary">
                    When you're ready to capture a sermon, simply tap the record button
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-info-100 to-primary-50 text-text-primary shadow-sm border border-white/50 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">Listen and capture the moment</h3>
                  <p className="text-text-secondary">Be present in the moment while Tablet captures every word</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-info-100 to-primary-50 text-text-primary shadow-sm border border-white/50 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">4</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">Receive your transcript and summary</h3>
                  <p className="text-text-secondary">
                    Once it's done, the app generates a full transcript and concise summary
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-info-100 to-primary-50 text-text-primary shadow-sm border border-white/50 transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">5</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary">Add personal notes and revisit any time</h3>
                  <p className="text-text-secondary">
                    Add your own reflections and insights, then revisit whenever you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-info-50 to-bg-secondary z-0">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-info-100/20 blur-3xl animate-pulse-soft"></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1.2s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  Simple, Transparent Pricing
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Choose the plan that fits your spiritual journey
                </p>
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mt-8 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 flex items-center border border-secondary-200 shadow-sm">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    billingPeriod === "monthly"
                      ? "bg-primary-500 text-white shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    billingPeriod === "yearly"
                      ? "bg-primary-500 text-white shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="grid gap-6 mt-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div
                className="flex flex-col p-6 bg-white/80 backdrop-blur-sm shadow-sm rounded-lg border border-secondary-200 animate-fade-in-up transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="py-4">
                  <h3 className="text-2xl font-bold text-text-primary">Free</h3>
                  <div className="mt-4 flex items-baseline text-text-primary">
                    <span className="text-5xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-xl font-semibold">/forever</span>
                  </div>
                  <p className="mt-4 text-sm text-text-secondary">Perfect for occasional listeners</p>
                </div>
                <ul className="space-y-3 py-6 text-sm text-text-primary">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    5 recordings per month
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic transcription
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Scripture recognition
                  </li>
                  <li className="flex items-center text-secondary-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-secondary-400"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Advanced summaries
                  </li>
                  <li className="flex items-center text-secondary-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-secondary-400"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Cloud storage
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 border-primary-300 text-primary-600 hover:bg-primary-50"
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Premium Plan */}
              <div
                className="flex flex-col p-6 bg-gradient-to-br from-bg-secondary to-info-50 shadow-md rounded-lg border border-info-100 relative animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute top-0 right-0 -mt-4 mr-4">
                  <div className="inline-flex items-center rounded-full bg-info-100 px-2.5 py-0.5 text-xs font-semibold text-info-800">
                    Popular
                  </div>
                </div>
                <div className="py-4">
                  <h3 className="text-2xl font-bold text-text-primary">Premium</h3>
                  <div className="mt-4 flex items-baseline text-text-primary">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {billingPeriod === "monthly" ? "$9.99" : "$7.99"}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      /{billingPeriod === "monthly" ? "month" : "month"}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-text-secondary">
                    {billingPeriod === "yearly" && <span className="text-info-700 font-medium">Save 20%</span>} For
                    regular church attendees
                  </p>
                </div>
                <ul className="space-y-3 py-6 text-sm text-text-primary">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited recordings
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Enhanced transcription
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced scripture insights
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    AI-powered summaries
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-success-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    10GB cloud storage
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="w-full bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 hover:scale-105">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-text-secondary">
                All plans include a 14-day free trial. No credit card required.
              </p>
              {billingPeriod === "yearly" && (
                <div className="mt-4 inline-flex items-center rounded-lg bg-bg-secondary/80 backdrop-blur-sm px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-success-500"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-sm font-medium text-text-primary">Save 20% with annual billing</span>
                </div>
              )}
            </div>
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 border-t relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-info-50 to-white z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl animate-pulse-soft"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-info-100/20 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  Start capturing your sermons today.
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Join our beta program and be among the first to experience Tablet.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <EmailSignupForm buttonText="Notify Me" />
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-secondary-200 bg-white/80 backdrop-blur-sm hover:bg-bg-secondary shadow-sm transition-all duration-300 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-text-secondary">© {new Date().getFullYear()} Tablet App. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-text-secondary transition-all duration-200 hover:-translate-y-0.5"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-text-secondary transition-all duration-200 hover:-translate-y-0.5"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-text-secondary transition-all duration-200 hover:-translate-y-0.5"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
