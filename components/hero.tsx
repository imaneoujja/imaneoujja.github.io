"use client"

import { useState, useEffect, useRef } from "react"
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons"
import { ChevronDown } from "lucide-react"

const roles = [
  "Master's student at EPFL",
  "AI & Data Science enthusiast",
  "aspiring ML engineer",
  "researcher & builder",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToIntro = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.75 0.15 350 / 0.4), oklch(0.55 0.25 25 / 0.2), transparent 70%)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `oklch(${0.55 + Math.random() * 0.2} ${0.15 + Math.random() * 0.1} ${Math.random() * 360})`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            opacity: 0.3 + Math.random() * 0.3,
          }}
        />
      ))}

      <div className="max-w-5xl text-center relative z-10 animate-fade-in-up">
        {/* EPFL Badge */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-primary">EPFL</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">Ranked 11th Worldwide</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-foreground mb-2">Hello, I'm</span>
          <span className="block">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Imane Oujja
            </span>
          </span>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl mb-8 min-h-[60px] flex items-center justify-center">
          <span className="text-muted-foreground">I'm an </span>
          <span className="text-primary font-bold ml-2 relative">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of <span className="text-primary font-semibold">AI</span>,{" "}
          <span className="text-secondary font-semibold">data science</span>, and{" "}
          <span className="text-primary font-semibold">machine learning</span> to solve real-world
          problems at scale.
        </p>

        {/* Social Links with hover effects */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="group p-4 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
            aria-label="Email"
          >
            <MailIcon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToIntro}
          className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow shadow-lg hover:shadow-xl"
        >
          Discover My Story
          <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToIntro}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
