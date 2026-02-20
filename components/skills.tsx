"use client"

import { Code, Wrench, Brain, Globe } from "lucide-react"
import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C", "Scala", "SQL", "JavaScript"],
    color: "primary",
  },
  {
    title: "Technologies & Tools",
    icon: Wrench,
    skills: ["Git", "TensorFlow", "Scikit-learn", "JavaFX", "React", "Docker", "LaTeX"],
    color: "secondary",
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Algorithms",
      "Distributed Systems",
      "OOP",
    ],
    color: "primary",
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["French (Bilingual)", "English (Advanced)", "Arabic (Native)", "Spanish (Intermediate)"],
    color: "secondary",
  },
]

export function Skills() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const items = document.querySelectorAll("[data-skill-category]")

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
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & Expertise<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            A diverse toolkit spanning programming languages, cutting-edge technologies, and core computer science
            concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isVisible = visibleItems.has(index)
            const isPrimary = category.color === "primary"

            return (
              <div
                key={index}
                data-skill-category={index}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 ${
                  isPrimary
                    ? "bg-gradient-to-br from-primary/5 to-transparent border-primary/30 hover:border-primary/60"
                    : "bg-gradient-to-br from-secondary/5 to-transparent border-secondary/30 hover:border-secondary/60"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl ${
                        isPrimary ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 cursor-default hover:scale-105 ${
                          isPrimary
                            ? "text-primary bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                            : "text-secondary bg-secondary/10 border-secondary/30 hover:bg-secondary/20 hover:border-secondary/50"
                        }`}
                        style={{
                          transitionDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
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
