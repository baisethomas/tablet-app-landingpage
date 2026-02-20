"use client"

import { FadeUp, StaggerChildren, StaggerItem } from "@/components/motion"

const columns = [
  {
    title: "Capture",
    description:
      "Take notes as you listen, without distraction. A clean interface that respects the speaker and the message.",
  },
  {
    title: "Reflect",
    description:
      "Review and organize insights after the message. Connect ideas while they are fresh.",
  },
  {
    title: "Retain",
    description:
      "Strengthen understanding through active inscription. Keep what matters on the tablet of your heart.",
  },
]

export function Experience() {
  return (
    <section className="bg-[#F7F8FA] text-[#1F1F23] pb-24 md:pb-32 px-6 border-t border-[#1F1F23]/5">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-center md:text-left pt-24 mb-16">
            Designed for focused reflection.
          </h3>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {columns.map((col) => (
            <StaggerItem key={col.title}>
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-medium tracking-tight">{col.title}</h4>
                <p className="text-sm text-[#1F1F23]/70 leading-relaxed max-w-xs">
                  {col.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
