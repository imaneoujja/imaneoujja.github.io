"use client"

import { useState, useEffect } from "react"
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownIcon } from "@/components/icons"

const roles = ["student", "AI enthusiast", "aspiring data scientist", "aspiring ML engineer"]

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
        isDeleting
          ? role.substring(0, displayedText.length - 1)
          : role.substring(0, displayedText.length + 1),
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  const scrollToIntro = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="EPFL Logo"
            width={120}
            height={40}
            className="mx-auto brightness-0 invert opacity-60"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          {"Hi! My name is "}
          <span className="text-primary">Imane</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          I am a{" "}
          <span className="text-primary font-semibold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        <div className="flex gap-6 justify-center mb-6">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Email"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToIntro}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  )
}
