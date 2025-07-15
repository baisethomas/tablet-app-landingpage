"use client"

import { CheckCircle2, Circle, Clock } from "lucide-react"

const milestones = [
  {
    phase: "Alpha Testing",
    description: "Core recording and transcription features",
    status: "current" as const,
    date: "Q2 2025"
  },
  {
    phase: "Beta Launch", 
    description: "AI summarization and cloud sync",
    status: "upcoming" as const,
    date: "Q3 2025"
  },
  {
    phase: "Feature Complete",
    description: "Export, sharing, and advanced notes",
    status: "upcoming" as const,
    date: "Q3 2025"
  },
  {
    phase: "Public Launch",
    description: "Full release with all premium features",
    status: "upcoming" as const,
    date: "Q4 2025"
  }
]

export function ProgressTimeline() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-primary">
              Development Roadmap
            </h2>
            <p className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See where we are and what's coming next
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-3xl py-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-secondary-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm">
                    {milestone.status === "current" && (
                      <div className="h-8 w-8 rounded-full bg-primary-500 animate-pulse">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                    )}
                    {milestone.status === "upcoming" && (
                      <Circle className="h-8 w-8 text-secondary-400" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-xl font-bold ${
                        milestone.status === "current" 
                          ? "text-primary-600" 
                          : "text-text-secondary"
                      }`}>
                        {milestone.phase}
                      </h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        milestone.status === "current"
                          ? "bg-primary-100 text-primary-700"
                          : "bg-secondary-100 text-secondary-600"
                      }`}>
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {milestone.description}
                    </p>
                    {milestone.status === "current" && (
                      <div className="inline-flex items-center rounded-lg bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                        🚀 Currently in progress
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-text-secondary">
            Beta testers get 3 months free when we launch publicly
          </p>
        </div>
      </div>
    </section>
  )
}