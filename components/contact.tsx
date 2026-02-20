"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Connect<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-8 mx-auto rounded-full" />

          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborations, research projects, or just having a
            chat about <span className="text-primary font-semibold">technology</span>,{" "}
            <span className="text-secondary font-semibold">AI</span>, and{" "}
            <span className="text-primary font-semibold">data science</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:i.oujja@gmail.com"
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  i.oujja@gmail.com
                </p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border">
              <div className="p-4 rounded-full bg-secondary/10">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-semibold">Lausanne, Switzerland</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/imaneoujja"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/imane-oujja-65165011a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:i.oujja@gmail.com"
              className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
