"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

const roles = ["Student", "AI Enthusiast", "Aspiring Data Scientist", "Aspiring ML Engineer"]

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
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-3xl text-center">
        <div className="mb-6">
          <Image
            src="/epfl-logo.svg"
            alt="EPFL Logo"
            width={120}
            height={40}
            className="mx-auto opacity-80"
          />
        </div>
        
        <p className="text-muted-foreground mb-4">Hello, my name is</p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4">
          Imane Oujja
        </h1>
        
        <div className="h-16 mb-6">
          <p className="text-2xl md:text-3xl text-muted-foreground">
            I am a <span className="text-primary">{displayedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Currently a <span className="text-foreground font-medium">Computer Science Master&apos;s student</span> at{" "}
          <span className="text-primary font-medium">EPFL</span> with specialization in{" "}
          <span className="text-foreground font-medium">AI and Data Science</span>.
        </p>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToIntro}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to introduction"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  )
}
