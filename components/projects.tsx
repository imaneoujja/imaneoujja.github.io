"use client"

import { Github, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "What Makes America Laugh?",
    subtitle: "Large-Scale Humor Analysis",
    description:
      "Analyzed 1.4M captions and 183M audience votes from The New Yorker Caption Contest to study humor themes, stylistic patterns, and their evolution over time. Built scalable models and an interactive datastory website comparing editorial selections with crowd preferences.",
    tags: ["Python", "NLP", "Data Science", "Scalable Models", "Interactive Visualization"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "NLP Tweet Sentiment Classifier",
    subtitle: "Deep Learning for Text Analysis",
    description:
      "Developed an NLP model achieving 90.2% accuracy on a 2.5M balanced tweet dataset, progressing from classical models (SGD, Logistic Regression) to GRU-based networks and Transformer models (BERT, RoBERTa), with emphasis on preprocessing and benchmarking.",
    tags: ["Python", "NLP", "Deep Learning", "BERT", "RoBERTa", "GRU"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "Heart Disease Prediction from Scratch",
    subtitle: "ML from First Principles",
    description:
      "Implemented a machine learning classifier from first principles to predict heart disease risk on a 300K-patient dataset with 300 features, without using Scikit-learn, relying on linear algebra, numerical optimization, and custom training pipelines.",
    tags: ["Python", "Linear Algebra", "Numerical Optimization", "ML from Scratch"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "Deep Learning for Fashion Classification",
    subtitle: "Multi-Architecture Pipeline",
    description:
      "Designed a multi-architecture machine learning pipeline (CNNs, Transformers, MLPs) for fashion item classification, with PCA-based performance optimization.",
    tags: ["Python", "TensorFlow", "Deep Learning", "CNN", "Transformers", "PCA"],
    github: "https://github.com/imaneoujja",
    highlight: false,
  },
  {
    title: "ImgFS",
    subtitle: "Custom Image File System",
    description:
      "Custom image file system inspired by Facebook's Haystack, supporting add, extract, and list operations with optimized storage.",
    tags: ["C", "File Systems", "Systems Programming"],
    github: "https://github.com/imaneoujja",
    highlight: false,
  },
  {
    title: "Javions",
    subtitle: "Real-Time Aircraft Tracking",
    description:
      "Real-time aircraft tracking tool using ADS-B messages and AirSpy R2, with interactive trajectory visualization on a map.",
    tags: ["Java", "JavaFX", "Real-Time Systems"],
    github: "https://github.com/imaneoujja",
    highlight: false,
  },
]

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const projectElements = document.querySelectorAll("[data-project-index]")

    projectElements.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, index]))
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
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured Projects<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            From analyzing <span className="text-primary font-semibold">1.4M captions</span> to building{" "}
            <span className="text-secondary font-semibold">ML models from scratch</span>, these projects showcase my
            passion for data science, machine learning, and building scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.has(index)
            const isHighlight = project.highlight

            return (
              <div
                key={index}
                data-project-index={index}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 ${
                  isHighlight
                    ? "bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-primary/30 hover:border-primary/60 md:col-span-2 lg:col-span-1"
                    : "bg-card border-border hover:border-primary/50"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Highlight badge */}
                {isHighlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">Featured</span>
                    </div>
                  </div>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 transition-all duration-500" />

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-secondary font-medium mb-3">{project.subtitle}</p>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 shrink-0 group/link"
                      aria-label={`${project.title} source code`}
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </a>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full border border-primary/20 transition-all duration-300 cursor-default"
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
    </section>
  )
}
