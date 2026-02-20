"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            <span className="text-epfl-red font-semibold">EPFL</span> (ranked 11th worldwide) with
            specialization in <span className="text-epfl-pink font-semibold">AI and Data Science</span>.
            As an aspiring data scientist and ML engineer, my aim is to{" "}
            <span className="text-epfl-red font-semibold">leverage AI to solve real-world problems at scale</span>.
          </p>
          <p className="text-epfl-dark/80">
            With experience from an exchange at the{" "}
            <span className="text-epfl-dark font-medium">University of Edinburgh</span> and hands-on work at{" "}
            <span className="text-epfl-red font-semibold">JPMorgan Chase</span> and{" "}
            <span className="text-epfl-red font-semibold">MATISA S.A.</span>, I am driven to design intelligent,
            efficient, and scalable solutions. I strongly believe in{" "}
            <span className="text-epfl-pink font-semibold">learning by doing</span>, and have consistently sought
            out opportunities to grow my skills.
          </p>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border border-epfl-red/20">
            <p className="text-epfl-dark font-medium italic">
              <span className="text-epfl-red text-2xl mr-2">&quot;</span>
              Experienced in building end-to-end ML pipelines, working with large-scale datasets, and developing
              models from first principles. Motivated to contribute to research-driven, data-intensive projects.
              <span className="text-epfl-red text-2xl ml-2">&quot;</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
