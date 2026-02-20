"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building2, Award } from "lucide-react";

const experiences = [
  {
    title: "ERP Data Analyst Intern",
    company: "MATISA S.A.",
    location: "Crissier, Switzerland",
    period: "July - Aug 2025",
    description: [
      "Analyzed large-scale ERP data extractions and validated data accuracy using structured methodologies",
      "Supported data cleaning and reconciliation across sales, purchasing, and production datasets",
      "Applied internal data-control procedures to ensure consistency, reliability, and traceability",
    ],
    tags: ["Data Analysis", "ERP Systems", "Data Quality"],
    highlight: false,
  },
  {
    title: "Software Developer",
    company: "HumanEd",
    location: "Edinburgh, United Kingdom",
    period: "Sept 2024 - April 2025",
    description: [
      "Contributed to multiple robotics software projects, focusing on code optimization and maintainability",
      "Explored computer vision concepts for humanoid robots, including perception and vision-based control",
      "Developed advanced hand movement system for humanoid robot",
    ],
    tags: ["Robotics", "Python", "Computer Vision", "Control Systems"],
    highlight: false,
  },
  {
    title: "Teaching Assistant & Student Mentor",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    period: "Since Feb 2023",
    description: [
      "Assisted in teaching Numerical Analysis with Python, Calculus I and Physics for CS students",
      "Mentored 15 CS students weekly to support them academically in their first year at EPFL",
    ],
    tags: ["Teaching", "Python", "Mentoring", "Education"],
    highlight: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative overflow-hidden bg-epfl-white">
      <div className="absolute inset-0 bg-gradient-to-b from-epfl-pink/5 via-transparent to-epfl-red/5" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Work Experience<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-2xl">
            From internships at leading companies to teaching and mentoring, each experience has shaped my journey in tech.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-epfl-red via-epfl-pink to-epfl-red opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const expRef = useRef(null);
              const expInView = useInView(expRef, { once: true, margin: "-50px" });

              return (
                <motion.div
                  key={index}
                  ref={expRef}
                  initial={{ opacity: 0, x: -30 }}
                  animate={expInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-6 md:left-8 top-2 w-4 h-4 rounded-full bg-epfl-white border-4 border-epfl-red/50 group-hover:border-epfl-red group-hover:scale-125 transition-all z-10 hidden md:block" />

                  <div
                    className={`ml-0 md:ml-16 p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${
                      exp.highlight
                        ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60"
                        : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
                    } hover:shadow-xl`}
                  >
                    {exp.highlight && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-epfl-red/20 border border-epfl-red/30">
                        <Award className="w-3 h-3 text-epfl-red" />
                        <span className="text-xs font-semibold text-epfl-red">Achievement</span>
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl shrink-0 ${exp.highlight ? "bg-epfl-red/20 text-epfl-red" : "bg-epfl-pink/20 text-epfl-pink"}`}>
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-epfl-dark hover:text-epfl-red transition-colors mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-epfl-red font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col text-sm text-epfl-dark/60 md:text-right shrink-0 gap-1">
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 ml-16 md:ml-0">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-epfl-dark/70 flex items-start gap-3 leading-relaxed">
                          <span className="text-epfl-red mt-1 shrink-0 font-bold">{">"}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 ml-16 md:ml-0">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                            exp.highlight
                              ? "text-epfl-red bg-epfl-red/10 border-epfl-red/30"
                              : "text-epfl-pink bg-epfl-pink/10 border-epfl-pink/30"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
