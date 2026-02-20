"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Wrench, Brain, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C", "Scala", "SQL", "JavaScript"],
    color: "red",
  },
  {
    title: "Technologies & Tools",
    icon: Wrench,
    skills: ["Git", "TensorFlow", "Scikit-learn", "JavaFX", "React", "Docker", "LaTeX"],
    color: "pink",
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Algorithms",
      "Distributed Systems",
      "OOP",
    ],
    color: "red",
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["French (Bilingual)", "English (Advanced)", "Arabic (Native)", "Spanish (Intermediate)"],
    color: "pink",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-epfl-pink/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & Expertise<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-2xl">
            A diverse toolkit spanning programming languages, cutting-edge technologies, and core computer science concepts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const categoryRef = useRef(null);
            const categoryInView = useInView(categoryRef, { once: true, margin: "-50px" });
            const Icon = category.icon;
            const isRed = category.color === "red";

            return (
              <motion.div
                key={index}
                ref={categoryRef}
                initial={{ opacity: 0, y: 30 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  isRed
                    ? "bg-gradient-to-br from-epfl-red/5 to-transparent border-epfl-red/30 hover:border-epfl-red/60"
                    : "bg-gradient-to-br from-epfl-pink/5 to-transparent border-epfl-pink/30 hover:border-epfl-pink/60"
                } hover:shadow-xl`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${isRed ? "bg-epfl-red/20 text-epfl-red" : "bg-epfl-pink/20 text-epfl-pink"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold ${isRed ? "text-epfl-red" : "text-epfl-pink"}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={categoryInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 cursor-default hover:scale-105 ${
                          isRed
                            ? "text-epfl-red bg-epfl-red/10 border-epfl-red/30 hover:bg-epfl-red/20 hover:border-epfl-red/50"
                            : "text-epfl-pink bg-epfl-pink/10 border-epfl-pink/30 hover:bg-epfl-pink/20 hover:border-epfl-pink/50"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
