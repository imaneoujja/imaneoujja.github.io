"use client"

import { useEffect, useRef, useState } from "react"

export function Introduction() {
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

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="introduction"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Story<span className="text-primary">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-12 rounded-full" />

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-foreground mb-4">
                From the halls of <span className="text-primary font-bold">EPFL</span> (ranked 11th worldwide) to the
                vibrant tech scene, my journey has been one of{" "}
                <span className="text-secondary font-semibold">continuous learning</span> and{" "}
                <span className="text-primary font-semibold">hands-on exploration</span>.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-muted-foreground">
                Currently pursuing my <span className="text-foreground font-semibold">Master's in Computer Science</span>{" "}
                with a specialization in <span className="text-primary font-bold">AI & Data Science</span>, I'm
                passionate about building intelligent systems that make a real impact. My exchange at the{" "}
                <span className="text-foreground font-medium">University of Edinburgh</span> broadened my
                perspectives, while experiences at{" "}
                <span className="text-primary font-semibold">JPMorgan Chase</span> and{" "}
                <span className="text-primary font-semibold">MATISA S.A.</span> taught me the value of{" "}
                <span className="text-secondary font-semibold">scalable, production-ready solutions</span>.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/20 backdrop-blur-sm">
                <p className="text-foreground font-medium">
                  <span className="text-primary text-2xl mr-2">"</span>
                  I believe in <span className="text-primary font-bold">learning by doing</span> — building projects
                  from first principles, analyzing millions of data points, and turning complex problems into elegant
                  solutions. Every line of code, every model trained, every insight discovered brings me closer to
                  understanding how AI can transform our world.
                  <span className="text-primary text-2xl ml-2">"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
