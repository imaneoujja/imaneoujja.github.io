"use client"

import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"
import { useEffect, useState } from "react"

const education = [
  {
    degree: "MSc in Computer Science",
    specialization: "Specialization in AI and Data Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2025 - 2027",
    details:
      "Master's program focusing on Machine Learning, Data Science, Distributed Systems, and advanced AI topics. EPFL is ranked 11th worldwide by QS Rankings.",
    highlight: true,
  },
  {
    degree: "Exchange Program",
    specialization: "School of Informatics",
    institution: "The University of Edinburgh",
    location: "Edinburgh, UK",
    period: "2024 - 2025",
    details:
      "International exchange broadening academic and cultural perspectives in AI and software engineering.",
    highlight: false,
  },
  {
    degree: "BSc in Computer Science & Communication Systems",
    specialization: "",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2022 - 2025",
    details:
      "Algorithms, Software Construction, Databases, OOP, Machine Learning, Discrete Mathematics, Probability & Statistics.",
    highlight: false,
  },
]

export function Education() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const items = document.querySelectorAll("[data-education-index]")

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
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Education<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            My academic journey from EPFL to Edinburgh, building a strong foundation in computer science and AI.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const isVisible = visibleItems.has(index)

            return (
              <div
                key={index}
                data-education-index={index}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 ${
                  edu.highlight
                    ? "bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-primary/30 hover:border-primary/60"
                    : "bg-card border-border hover:border-primary/50"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Highlight badge */}
                {edu.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">Current</span>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8 flex gap-6">
                  <div
                    className={`shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                      edu.highlight
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-primary font-semibold text-sm mb-1">{edu.specialization}</p>
                        )}
                        <p className="text-foreground font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col text-sm text-muted-foreground md:text-right shrink-0 gap-1">
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
