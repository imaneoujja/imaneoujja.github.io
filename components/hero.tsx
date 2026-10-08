"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Machine Learning",
  "Data Science",
  "Artificial Intelligence",
];

// Deterministic pseudo-random values so server and client render the same particles
const particles = Array.from({ length: 15 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 9301 + n * 49297) * 233280;
    return x - Math.floor(x);
  };
  return { x: r(1) * 100, y: r(2) * 100, duration: 4 + r(3) * 4, delay: r(4) * 2 };
});

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === role) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? role.substring(0, displayedText.length - 1)
          : role.substring(0, displayedText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  const scrollToIntro = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-epfl-red/5 via-epfl-pink/5 to-epfl-red/5 animate-gradient bg-[length:200%_200%]" />
      
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-epfl-red/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      <div className="max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-epfl-red/10 border border-epfl-red/20 backdrop-blur-sm">
            <span className="text-xs font-semibold text-epfl-red">MSc AI & Data Science @ EPFL</span>
            <span className="hidden sm:inline text-xs text-epfl-dark/50">•</span>
            <span className="text-xs text-epfl-dark/70">SWE Intern @ JPMorgan Chase 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-epfl-dark mb-2">Hi! I'm</span>
          <span className="block text-gradient">Imane Oujja</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl mb-8 min-h-[90px] md:min-h-[60px] flex flex-wrap items-center justify-center"
        >
          <span className="text-epfl-red font-bold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-epfl-dark/70 mb-12 max-w-2xl mx-auto"
        >
          Building <span className="text-epfl-red font-semibold">agentic AI systems</span>, training{" "}
          <span className="text-epfl-pink font-semibold">foundation models</span>, and turning{" "}
          <span className="text-epfl-red font-semibold">data</span> into real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="https://github.com/imaneoujja"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-epfl-red" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-epfl-red" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-epfl-red" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToIntro}
            className="px-8 py-4 rounded-full bg-gradient-epfl text-epfl-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            Discover My Story
            <ChevronDown className="inline-block ml-2 w-5 h-5" />
          </button>
          <a
            href="/Imane_Oujja_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-epfl-red text-epfl-red font-semibold text-lg bg-epfl-white/70 hover:bg-epfl-red hover:text-epfl-white transition-all hover:scale-105"
          >
            Download CV
            <Download className="inline-block ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToIntro}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-epfl-red/60 hover:text-epfl-red transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
