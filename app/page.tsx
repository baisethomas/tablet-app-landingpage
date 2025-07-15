"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Mic, FileText, Book, PenTool, Archive, Mail, ChevronDown, 
  Smartphone, Brain, Cloud, Share2, Zap, MessageSquare, Clock, Users 
} from "lucide-react"
import { LogoLink } from "@/components/logo"
import { EmailSignupForm } from "@/components/email-signup-form"
import { MobileNav } from "@/components/mobile-nav"
import { BetaBadge } from "@/components/beta-badge"
import { ProgressTimeline } from "@/components/progress-timeline"
import { FeaturePreview } from "@/components/feature-preview"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b fixed top-0 left-0 right-0 bg-white z-50">
        <LogoLink className="mr-8" />
        <nav className="hidden md:flex gap-6 sm:gap-8 items-center">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("features")
            }}
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#beta"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("beta")
            }}
          >
            Beta Access
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 text-text-primary"
            href="#roadmap"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("roadmap")
            }}
          >
            Roadmap
          </Link>
          <Button
            size="sm"
            className="bg-primary-500 hover:bg-primary-600 text-white"
            onClick={() => scrollToSection("signup")}
          >
            Join Beta
          </Button>
        </nav>
        <MobileNav
          links={[
            { href: "#features", label: "Features" },
            { href: "#beta", label: "Beta Access" },
            { href: "#roadmap", label: "Roadmap" },
            { href: "#signup", label: "Join Beta" },
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
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start animate-fade-in-down">
                  <BetaBadge variant="glow" size="md" />
                  <span className="text-white/90 text-sm font-medium">
                    Limited Beta Access Available
                  </span>
                </div>
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-down text-white drop-shadow-lg"
                  style={{ animationDelay: "0.1s" }}
                >
                  The Future of Sermon Notes is Here
                </h1>
                <p
                  className="text-xl text-white/90 md:text-2xl animate-fade-in-down"
                  style={{ animationDelay: "0.2s" }}
                >
                  AI-powered recording, transcription, and insights for every sermon
                </p>
                <p className="text-lg text-white/80 max-w-2xl animate-fade-in-down" style={{ animationDelay: "0.25s" }}>
                  Tablet Notes uses cutting-edge AI to automatically transcribe sermons, detect Bible verses, 
                  generate summaries, and sync your notes across all devices. Join our exclusive beta and 
                  experience the next generation of sermon engagement.
                </p>
                <div className="space-y-3 animate-fade-in-down" style={{ animationDelay: "0.3s" }}>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-primary-500 to-info-500 px-8 text-base font-semibold text-white shadow-lg hover:from-primary-600 hover:to-info-600 transition-all duration-300 hover:scale-105"
                      onClick={() => scrollToSection("signup")}
                    >
                      Get Beta Access
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-base font-medium text-white shadow-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      onClick={() => scrollToSection("features")}
                    >
                      See Features
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 text-sm justify-center lg:justify-start">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Limited spots remaining</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 months free at launch</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mx-auto w-full max-w-sm lg:max-w-none flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src="/images/tablet-logo-hero.png"
                    alt="Tablet Notes Logo"
                    className="w-64 h-64 object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105 animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-bg-primary">
          <div className="container px-4 md:px-6 pt-12 bg-gradient-to-br from-primary-50 via-info-50 to-white rounded-2xl shadow-md">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  <span className="bg-gradient-to-r from-primary-500 to-info-500 bg-clip-text text-transparent">Powered by Advanced AI</span>
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Experience the next generation of sermon engagement with cutting-edge features
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/40 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-info-400 transition-transform duration-300 hover:scale-110 shadow-md">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">One-Tap Recording</h3>
                <p className="text-center text-text-secondary">
                  Start recording sermons instantly with a single tap. Choose service type and let Tablet Notes handle the rest.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info-100 transition-transform duration-300 hover:scale-110">
                  <MessageSquare className="h-6 w-6 text-info-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Live Note-Taking</h3>
                <p className="text-center text-text-secondary">
                  Take timestamped notes in real-time that sync perfectly with your recording timeline.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-100 transition-transform duration-300 hover:scale-110">
                  <Zap className="h-6 w-6 text-success-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">AI Transcription</h3>
                <p className="text-center text-text-secondary">
                  Get accurate, real-time transcripts using advanced on-device speech recognition technology.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning-100 transition-transform duration-300 hover:scale-110">
                  <Brain className="h-6 w-6 text-warning-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Smart Summaries</h3>
                <p className="text-center text-text-secondary">
                  AI automatically generates concise sermon summaries highlighting key theological points.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info-100 transition-transform duration-300 hover:scale-110">
                  <Book className="h-6 w-6 text-info-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Scripture Insights</h3>
                <p className="text-center text-text-secondary">
                  Automatic detection and contextual linking of Bible verses mentioned in sermons and notes.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 transition-transform duration-300 hover:scale-110">
                  <Cloud className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Cloud Sync</h3>
                <p className="text-center text-text-secondary">
                  Access your sermon library across iPhone, iPad, and web with automatic cloud synchronization.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-100 transition-transform duration-300 hover:scale-110">
                  <Share2 className="h-6 w-6 text-success-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Export & Share</h3>
                <p className="text-center text-text-secondary">
                  Export notes and transcripts as PDF or Markdown. Share insights with your small group easily.
                </p>
              </div>
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info-100 transition-transform duration-300 hover:scale-110">
                  <Smartphone className="h-6 w-6 text-info-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Modern Design</h3>
                <p className="text-center text-text-secondary">
                  Clean, distraction-free interface built with SwiftUI. Fully accessible with VoiceOver support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturePreview />
        <section id="beta" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-info-100 via-primary-100 to-bg-secondary z-0">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl animate-pulse-soft"></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-info-500/10 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1.2s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <BetaBadge variant="glow" size="lg" className="mb-4" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  <span className="bg-gradient-to-r from-primary-500 to-info-500 bg-clip-text text-transparent">Why Join the Beta?</span>
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Get exclusive early access and help shape the future of sermon engagement
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-primary-200 bg-primary-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                  <span className="text-xl font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">First Access</h3>
                <p className="text-center text-text-secondary">
                  Be among the first to experience Tablet Notes before public launch
                </p>
              </div>
              
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-success-200 bg-success-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-500 text-white">
                  <span className="text-xl font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">3 Months Free</h3>
                <p className="text-center text-text-secondary">
                  Get 3 months of premium features at no cost when we launch publicly
                </p>
              </div>
              
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-info-200 bg-info-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-info-500 text-white">
                  <span className="text-xl font-bold">🗣️</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Shape the Product</h3>
                <p className="text-center text-text-secondary">
                  Your feedback directly influences features and improvements
                </p>
              </div>
              
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-warning-200 bg-warning-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning-500 text-white">
                  <span className="text-xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Exclusive Community</h3>
                <p className="text-center text-text-secondary">
                  Join a community of church leaders testing cutting-edge technology
                </p>
              </div>
              
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-secondary-200 bg-secondary-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-500 text-white">
                  <span className="text-xl font-bold">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Priority Support</h3>
                <p className="text-center text-text-secondary">
                  Get direct access to our development team for support and suggestions
                </p>
              </div>
              
              <div
                className="flex flex-col items-center space-y-4 rounded-lg border border-primary-200 bg-primary-50/50 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                  <span className="text-xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Latest Features</h3>
                <p className="text-center text-text-secondary">
                  Access new features and improvements as soon as they're ready
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-text-secondary mb-4">
                Beta testing starts Q3 2025 • Limited spots available
              </p>
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("signup")}
              >
                Reserve Your Beta Spot
              </Button>
            </div>
          </div>
        </section>
        
        
        <section id="roadmap">
          <ProgressTimeline />
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
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
                  Beta Program FAQ
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12 space-y-4">
              {[
                {
                  question: "When does the beta program start?",
                  answer:
                    "The Tablet Notes beta program launches in Q3 2025. Beta testers will receive an email invitation with download instructions when it's ready.",
                },
                {
                  question: "What devices will the beta support?",
                  answer:
                    "The beta will initially support iPhone and iPad running iOS 17 or later. Web access for viewing and managing recordings will be available later in the beta period.",
                },
                {
                  question: "How long does the beta program last?",
                  answer:
                    "The beta program runs for approximately 2 months (Q3 2025) leading up to our public launch. Beta testers keep access to all premium features for 3 months after public launch.",
                },
                {
                  question: "What if I find bugs or have feature requests?",
                  answer:
                    "That's exactly what we're looking for! Beta testers get direct access to our development team through in-app feedback tools and a private WhatsApp community.",
                },
                {
                  question: "Is my sermon data safe and private?",
                  answer:
                    "Absolutely. All recordings are stored locally on your device by default. Cloud sync is optional and uses enterprise-grade encryption. Your sermon data is never used for AI training or shared with third parties.",
                },
                {
                  question: "How do I qualify for the beta program?",
                  answer:
                    "Simply sign up below! We're looking for church attendees, pastors, and ministry leaders who are excited about improving their sermon experience with AI technology.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg border border-secondary-200 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-secondary/50 transition-colors rounded-lg"
                  >
                    <h3 className="text-lg font-medium text-text-primary">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-text-secondary transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 border-t relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-info-50 to-white z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl animate-pulse-soft"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-info-500/20 blur-3xl animate-pulse-soft"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <BetaBadge variant="glow" size="md" className="mb-4" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-down text-text-primary">
                  <span className="bg-gradient-to-r from-primary-500 to-info-500 bg-clip-text text-transparent">Join the Tablet Notes Beta</span>
                </h2>
                <p
                  className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  Be among the first to experience the future of sermon notes. Limited beta spots available.
                </p>
              </div>
              
              <div className="w-full max-w-md space-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <EmailSignupForm buttonText="Get Beta Access" placeholder="Enter your email for beta access" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm text-text-secondary animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>3 months free at launch</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-info-500 rounded-full"></div>
                  <span>Priority feature access</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Direct developer feedback</span>
                </div>
              </div>
              
              <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-sm text-text-secondary mb-4">
                  <strong>Limited spots remaining</strong>
                </p>
                {/*
                <div className="w-full max-w-md mx-auto bg-secondary-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-info-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <p className="text-xs text-text-secondary mt-2">78% of beta spots filled</p>
                */}
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
