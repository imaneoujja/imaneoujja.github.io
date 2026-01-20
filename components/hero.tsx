"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react"

const roles = ["developer", "AI enthusiast", "problem solver", "student"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && displayedText === role) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting ? role.substring(0, displayedText.length - 1) : role.substring(0, displayedText.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  const scrollToIntro = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="max-w-4xl text-center">
        <p className="text-muted-foreground text-lg mb-4 tracking-wide">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Imane Oujja</h1>
        <div className="text-2xl md:text-4xl text-muted-foreground mb-8">
          I am a{" "}
          <span className="text-primary font-semibold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span>Lausanne, Switzerland</span>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToIntro}
        className="absolute bottom-12 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to introduction"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
