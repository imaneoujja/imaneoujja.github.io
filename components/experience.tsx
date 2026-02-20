"use client"

import { Calendar, MapPin, Building2, Award, Code } from "lucide-react"
import { useEffect, useState } from "react"

const experiences = [
  {
    title: "ERP Data Analyst Intern",
    company: "MATISA S.A.",
    location: "Crissier, Switzerland",
    period: "July - Aug 2025",
    description: [
      "Analyzed large-scale ERP data extractions and validated data accuracy using structured methodologies",
      "Supported data cleaning and reconciliation across sales, purchasing, and production datasets",
      "Applied internal data-control procedures to ensure consistency, reliability, and traceability",
    ],
    tags: ["Data Analysis", "ERP Systems", "Data Quality"],
    icon: Building2,
    highlight: false,
  },
  {
    title: "Spring into Software Engineering",
    company: "JPMorgan Chase",
    location: "Glasgow, UK",
    period: "April 2025",
    description: [
      "Participated in an intensive software engineering program combining workshops and a social-impact hackathon",
      "Won 2nd Place in Code for Good Hackathon: developed web app for MCR Pathways charity mentor recruitment",
      "Implemented algorithm to optimize mentee-mentor pairing",
      "Gained exposure to agile methodologies, test-driven development, and collaborative engineering practices",
      "Received direct offer for SWE Summer Internship (2026)",
    ],
    tags: ["Hackathon", "Web Dev", "Agile", "TDD", "2nd Place Winner"],
    icon: Award,
    highlight: true,
  },
  {
    title: "Software Developer",
    company: "HumanEd",
    location: "Edinburgh, United Kingdom",
    period: "Sept 2024 - April 2025",
    description: [
      "Contributed to multiple robotics software projects, focusing on code optimization and maintainability",
      "Explored computer vision concepts for humanoid robots, including perception and vision-based control",
      "Developed advanced hand movement system for humanoid robot",
    ],
    tags: ["Robotics", "Python", "Computer Vision", "Control Systems"],
    icon: Code,
    highlight: false,
  },
  {
    title: "Teaching Assistant & Student Mentor",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    period: "Since Feb 2023",
    description: [
      "Assisted in teaching Numerical Analysis with Python, Calculus I and Physics for CS students",
      "Mentored 15 CS students weekly to support them academically in their first year at EPFL",
    ],
    tags: ["Teaching", "Python", "Mentoring", "Education"],
    icon: Building2,
    highlight: false,
  },
]

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const items = document.querySelectorAll("[data-experience-index]")

    items.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            From internships at leading companies to teaching and mentoring, each experience has shaped my journey in
            tech.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isVisible = visibleItems.has(index)

              return (
                <div
                  key={index}
                  data-experience-index={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 top-2 w-4 h-4 rounded-full bg-background border-4 border-primary/50 group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10 hidden md:block" />

                  <div
                    className={`ml-0 md:ml-16 p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 group ${
                      exp.highlight
                        ? "bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-primary/30 hover:border-primary/60 hover:shadow-xl"
                        : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    {/* Highlight badge */}
                    {exp.highlight && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                          <Award className="w-3 h-3 text-primary" />
                          <span className="text-xs font-semibold text-primary">Achievement</span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`p-3 rounded-xl ${
                            exp.highlight
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary/20 text-secondary"
                          } shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4 shrink-0" />
                            <span className="text-foreground font-semibold">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col text-sm text-muted-foreground md:text-right shrink-0 gap-1">
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 ml-16 md:ml-0">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm md:text-base flex items-start gap-3 leading-relaxed"
                        >
                          <span className="text-primary mt-1 shrink-0 font-bold">{">"}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 ml-16 md:ml-0">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                            exp.highlight
                              ? "text-primary bg-primary/10 border-primary/30 hover:bg-primary/20"
                              : "text-secondary bg-secondary/10 border-secondary/30 hover:bg-secondary/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
