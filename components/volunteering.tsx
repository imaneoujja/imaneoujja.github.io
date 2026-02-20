"use client"

import { Calendar, Users, Award, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"

const volunteering = [
  {
    period: "June - July 2025",
    role: "WAVE Fellowship Participant",
    organization: "Webloom & SAP",
    location: "Switzerland",
    description:
      "Selected participant in a competitive fellowship focused on AI and sustainability. Co-developed a carbon profitability model linking emissions data to financial impact. Pitched the solution to industry experts at Google Zurich.",
    icon: Award,
    highlight: true,
  },
  {
    period: "Feb 2023 — Jul 2024",
    role: "Vice President",
    organization: "EPFelles",
    location: "Lausanne, Switzerland",
    description:
      "Led initiatives promoting gender equality in STEM, organizing 10+ events per academic year and securing partnerships with major sponsors.",
    icon: Users,
    highlight: true,
  },
  {
    period: "Jun — Sep 2024",
    role: "Volunteer",
    organization: "Students 4 Students",
    location: "EPFL",
    description:
      "Designed LaTeX course material and assisted first-year students in Calculus and Linear Algebra exercise sessions at EPFL.",
    icon: Lightbulb,
    highlight: false,
  },
]

export function Volunteering() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const items = document.querySelectorAll("[data-volunteering-index]")

    items.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="volunteering" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Programs & Initiatives<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            Beyond academics, I'm passionate about making an impact through leadership, volunteering, and innovative
            programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {volunteering.map((vol, index) => {
            const Icon = vol.icon
            const isVisible = visibleItems.has(index)

            return (
              <div
                key={index}
                data-volunteering-index={index}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 ${
                  vol.highlight
                    ? "bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-primary/30 hover:border-primary/60 md:col-span-2"
                    : "bg-card border-border hover:border-primary/50"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Highlight badge */}
                {vol.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">Featured</span>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 ${
                        vol.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                        {vol.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm mb-1">{vol.organization}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{vol.period}</span>
                        {vol.location && (
                          <>
                            <span>•</span>
                            <span>{vol.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{vol.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
