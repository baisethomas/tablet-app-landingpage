"use client"

import { useState } from "react"
import { useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"

const appScreenshots = [
  {
    title: "One-Tap Recording",
    description: "Start recording sermons with a single tap",
    image: "/images/app-recording.png",
    feature: "recording"
  },
  {
    title: "Real-Time Notes",
    description: "Take timestamped notes during the sermon",
    image: "/images/app-notes.png", 
    feature: "notes"
  },
  {
    title: "AI Transcription",
    description: "Get accurate transcripts instantly",
    image: "/images/app-transcript.png",
    feature: "transcription"
  },
  {
    title: "Smart Summaries",
    description: "AI-generated sermon summaries",
    image: "/images/app-summary.png",
    feature: "summary"
  }
]

export function FeaturePreview() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [fade, setFade] = useState(true)

  const nextScreen = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentScreen((prev) => (prev + 1) % appScreenshots.length)
      setFade(true)
    }, 200)
  }

  const prevScreen = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentScreen((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length)
      setFade(true)
    }, 200)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Ensure fade is true on initial mount
  useEffect(() => {
    setFade(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section title and subtitle always above images, no overlap */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-primary">
              See Tablet Notes in Action
            </h2>
            <p className="max-w-[700px] text-text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get a sneak peek at the app that's changing how people engage with sermons
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* App Screenshot/Demo */}
            <div className="relative">
              {appScreenshots[currentScreen].feature === "transcription" ? (
                <div className={`flex items-center justify-center w-full h-[600px] transition-all duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src="/images/tablet-notes-transcript.gif"
                    alt="Tablet Notes AI Transcription Demo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              ) : appScreenshots[currentScreen].feature === "summary" ? (
                <div className={`flex items-center justify-center w-full h-[600px] transition-all duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src="/images/tablet-notes-summary.gif"
                    alt="Tablet Notes Smart Summaries Demo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              ) : appScreenshots[currentScreen].feature === "notes" ? (
                <div className={`flex items-center justify-center w-full h-[600px] transition-all duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src="/images/tablet-notes-notes.gif"
                    alt="Tablet Notes Real-Time Notes Demo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              ) : appScreenshots[currentScreen].feature === "recording" ? (
                <div className={`flex items-center justify-center w-full h-[600px] transition-all duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src="/images/tablet-notes-recording.gif"
                    alt="Tablet Notes One-Tap Recording Demo"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              ) : (
                <div className="relative mx-auto w-full max-w-sm">
                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-sm">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* App content */}
                      <div className="bg-white h-[600px] relative overflow-hidden">
                        {/* Placeholder for app screenshot */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-info-50 flex flex-col items-center justify-center p-6">
                          <div className="w-full space-y-4">
                            <div className="text-center">
                              <h3 className="text-xl font-bold text-primary-700 mb-2">
                                {appScreenshots[currentScreen].title}
                              </h3>
                              <p className="text-sm text-text-secondary">
                                {appScreenshots[currentScreen].description}
                              </p>
                            </div>
                            {/* Mock UI elements based on feature */}
                            {appScreenshots[currentScreen].feature === "recording" && (
                              <div className="space-y-4">
                                <div className="w-32 h-32 mx-auto bg-primary-500 rounded-full flex items-center justify-center">
                                  <div className="w-6 h-6 bg-white rounded-full"></div>
                                </div>
                                <div className="text-center">
                                  <p className="text-lg font-semibold text-primary-700">Recording...</p>
                                  <p className="text-sm text-text-secondary">00:12:34</p>
                                </div>
                              </div>
                            )}
                            {appScreenshots[currentScreen].feature === "notes" && (
                              <div className="space-y-3">
                                <div className="bg-white border border-secondary-200 rounded-lg p-3 text-left">
                                  <p className="text-sm text-text-primary">Amazing point about grace...</p>
                                  <span className="text-xs text-text-secondary">12:34</span>
                                </div>
                                <div className="bg-white border border-secondary-200 rounded-lg p-3 text-left">
                                  <p className="text-sm text-text-primary">Remember to share with small group</p>
                                  <span className="text-xs text-text-secondary">15:22</span>
                                </div>
                              </div>
                            )}
                            {appScreenshots[currentScreen].feature === "summary" && (
                              <div className="space-y-3 text-left">
                                <h4 className="font-semibold text-text-primary">Key Points:</h4>
                                <ul className="space-y-1 text-sm text-text-secondary">
                                  <li>• God's sovereignty in difficult times</li>
                                  <li>• The promise of Romans 8:28</li>
                                  <li>• Practical steps for trusting God</li>
                                </ul>
                                <div className="bg-info-50 border border-info-200 rounded-lg p-2">
                                  <p className="text-xs text-info-700">
                                    🤖 Generated by AI in 3 seconds
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Feature list and controls */}
            <div className="space-y-6">
              <div className="space-y-4">
                {appScreenshots.map((screen, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreen(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      currentScreen === index
                        ? "border-primary-300 bg-primary-50"
                        : "border-secondary-200 hover:border-secondary-300"
                    }`}
                  >
                    <h4 className={`font-semibold ${
                      currentScreen === index ? "text-primary-700" : "text-text-primary"
                    }`}>
                      {screen.title}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1">
                      {screen.description}
                    </p>
                  </button>
                ))}
              </div>
              
              {/* Demo controls */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevScreen}
                  className="h-10 w-10 p-0"
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline" 
                  size="sm"
                  onClick={togglePlay}
                  className="h-10 w-10 p-0"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm" 
                  onClick={nextScreen}
                  className="h-10 w-10 p-0"
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}