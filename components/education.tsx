"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import Image from "next/image";

const education = [
  {
    degree: "MSc in Computer Science",
    specialization: "Specialization in AI and Data Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2025 - 2027",
    logo: "/logos/epfl.png",
    details:
      "Master's program focusing on Machine Learning, Data Science, Distributed Systems, and advanced AI topics. EPFL is ranked 11th worldwide by QS Rankings.",
    highlight: true,
  },
  {
    degree: "Exchange Program",
    specialization: "School of Informatics",
    institution: "The University of Edinburgh",
    location: "Edinburgh, UK",
    period: "2024 - 2025",
    logo: "/logos/edinburgh.png",
    details:
      "International exchange broadening academic and cultural perspectives in AI and software engineering.",
    highlight: false,
  },
  {
    degree: "BSc in Computer Science & Communication Systems",
    specialization: "",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2022 - 2025",
    logo: "/logos/epfl.png",
    details:
      "Algorithms, Software Construction, Databases, OOP, Machine Learning, Discrete Mathematics, Probability & Statistics.",
    highlight: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-epfl-red/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Education<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-2xl">
            My academic journey from EPFL to Edinburgh, building a strong foundation in computer science and AI.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const eduRef = useRef(null);
            const eduInView = useInView(eduRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={index}
                ref={eduRef}
                initial={{ opacity: 0, x: -30 }}
                animate={eduInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  edu.highlight
                    ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60"
                    : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
                } hover:shadow-xl`}
              >
                {edu.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-epfl-red/20 border border-epfl-red/30">
                    <span className="text-xs font-semibold text-epfl-red">Current</span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-epfl-red/10 flex items-center justify-center overflow-hidden border border-epfl-red/20">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors mb-1">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-epfl-red font-semibold text-sm mb-1">{edu.specialization}</p>
                        )}
                        <p className="text-epfl-dark font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col text-sm text-epfl-dark/60 md:text-right shrink-0 gap-1">
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5 md:justify-end">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-epfl-dark/70 leading-relaxed">{edu.details}</p>
                    {edu.highlight && (
                      <div className="mt-6 pt-6 border-t border-epfl-red/20">
                        <p className="text-sm font-semibold text-epfl-dark mb-3">Relevant Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Machine Learning",
                            "Applied Data Analysis",
                            "Visual Intelligence",
                            "Modern NLP",
                            "Data Visualisation",
                            "Neuroscience Foundations for Engineers",
                          ].map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="text-xs font-medium text-epfl-red bg-epfl-red/10 px-3 py-1.5 rounded-full border border-epfl-red/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
