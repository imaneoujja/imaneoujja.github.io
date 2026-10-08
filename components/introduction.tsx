"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { value: "60%", label: "less manual processing with my agentic workflow at JPMorgan" },
  { value: "1st", label: "place at the Artefact x Groupe Mutuel Women in AI Hackathon" },
  { value: "90.2%", label: "accuracy on 2.5M-tweet sentiment classification" },
  { value: "15+", label: "students mentored weekly as an EPFL TA" },
];

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="introduction"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-epfl-red/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-epfl-pink/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Introduction<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-12 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg md:text-xl leading-relaxed"
        >
          <p className="text-epfl-dark">
            I am a Computer Science Master&apos;s student at{" "}
            <span className="text-epfl-red font-semibold">EPFL</span> specializing in{" "}
            <span className="text-epfl-pink font-semibold">AI and Data Science</span>. I like building AI that
            holds up in the real world: reliable, reproducible, and actually useful to the people relying on it.
          </p>
          <p className="text-epfl-dark/80">
            This summer at <span className="text-epfl-red font-semibold">JPMorgan Chase</span>, I designed and
            deployed a <span className="text-epfl-red font-semibold">multi-agent LLM system</span> that lets business
            users run liquidity-risk scenario analyses in plain English. Today, at{" "}
            <span className="text-epfl-dark font-medium">Campus Biotech</span>, I am training a{" "}
            <span className="text-epfl-pink font-semibold">self-supervised foundation model</span> for brain signals
            (ECoG). Along the way: an exchange at the{" "}
            <span className="text-epfl-dark font-medium">University of Edinburgh</span>, data work at{" "}
            <span className="text-epfl-dark font-medium">MATISA</span>, and a hackathon win in agentic AI.
          </p>
          <p className="text-epfl-dark/80">
            Outside the code, I care deeply about bringing more women into tech, from leading{" "}
            <span className="text-epfl-red font-semibold">EPFelles</span> to pitching AI products that close the
            gap between university and tech careers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl p-5 bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border border-epfl-red/20 hover:border-epfl-red/50 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{h.value}</p>
              <p className="text-sm text-epfl-dark/70 leading-snug">{h.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
