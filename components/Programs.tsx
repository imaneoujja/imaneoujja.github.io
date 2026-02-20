"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Award, Users, Lightbulb } from "lucide-react";

const programs = [
  {
    period: "Feb 2025",
    role: "Women in Trading Insight Week",
    organization: "",
    location: "London Area, United Kingdom",
    description:
      "Shadowed traders across fuel, middle distillates, and LNG desks while gaining hands-on exposure to OTC crude and refined oil trading. Participated in live trade blotter exercises, generated a positive PnL in pit trading simulations, and presented an independent study on the OTC trade lifecycle to senior traders. Explored the role of technology in PnL optimisation and deepened understanding of market structure, execution, and risk through trader Q&As and shadowing.",
    icon: Award,
    highlight: true,
  },
  {
    period: "June - July 2025",
    role: "WAVE Fellowship Participant",
    organization: "Webloom & SAP",
    location: "Switzerland",
    description:
      "Selected participant in a competitive fellowship focused on AI and sustainability. Co-developed a carbon profitability model linking emissions data to financial impact. Pitched the solution to industry experts at Google Zurich.",
    icon: Award,
    highlight: true,
  },
  {
    period: "April 2025",
    role: "Spring into Software Engineering",
    organization: "JPMorgan Chase",
    location: "UK",
    description:
      "Participated in an intensive software engineering program combining workshops and a social-impact hackathon. Gained exposure to agile methodologies, test-driven development, and collaborative engineering practices. Received direct offer for SWE Summer Internship (2026).",
    icon: Award,
    highlight: true,
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" ref={ref} className="py-32 px-6 relative overflow-hidden bg-epfl-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-epfl-pink/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Programs<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-2xl">
            Beyond academics, I&apos;m passionate about making an impact through leadership, volunteering, and innovative programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const programRef = useRef(null);
            const programInView = useInView(programRef, { once: true, margin: "-50px" });
            const Icon = program.icon;

            return (
              <motion.div
                key={index}
                ref={programRef}
                initial={{ opacity: 0, y: 30 }}
                animate={programInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  program.highlight
                    ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60 md:col-span-2"
                    : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
                } hover:shadow-xl`}
              >
                {program.highlight && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-epfl-red/20 border border-epfl-red/30">
                    <Award className="w-3 h-3 text-epfl-red" />
                    <span className="text-xs font-semibold text-epfl-red">Featured</span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl shrink-0 ${program.highlight ? "bg-epfl-red/20 text-epfl-red" : "bg-epfl-pink/20 text-epfl-pink"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors mb-1">
                        {program.role}
                      </h3>
                      {program.organization && (
                        <p className="text-epfl-red font-semibold text-sm mb-1">{program.organization}</p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-epfl-dark/60">
                        <Calendar className="w-3 h-3" />
                        <span>{program.period}</span>
                        {program.location && (
                          <>
                            <span>•</span>
                            <MapPin className="w-3 h-3" />
                            <span>{program.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-epfl-dark/70 leading-relaxed">{program.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
