"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Trophy, Lightbulb, TrendingUp, Code2, Users, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Program = {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string[];
  icon: LucideIcon;
  logo?: string;
  badge?: string;
  wide?: boolean;
};

const programs: Program[] = [
  {
    period: "Aug - Sept 2026",
    role: "WAVE Fellowship 2026",
    organization: "Microsoft & Swissquote",
    location: "The Circle, Zurich",
    description: [
      "Designed and pitched an AI product strategy tackling the drop-off of women moving from university into tech careers",
      "Integrated Microsoft Copilot, LinkedIn, and Teams into the product concept",
      "Built a working prototype with Lovable",
    ],
    icon: Lightbulb,
    badge: "Fellow",
    wide: true,
  },
  {
    period: "April 2026",
    role: "Women in AI Hackathon",
    organization: "Artefact x Groupe Mutuel",
    location: "Switzerland",
    description: [
      "Built an agentic AI system for automated healthcare invoice validation and fraud detection",
      "Designed an LLM-based workflow providing structured decision support",
    ],
    icon: Trophy,
    badge: "Winner",
  },
  {
    period: "April 2025",
    role: "Spring into Software Engineering",
    organization: "JPMorgan Chase",
    location: "UK",
    description: [
      "Intensive software engineering program combining workshops and a social-impact hackathon",
      "Exposure to agile methodologies, test-driven development, and collaborative engineering",
      "Received a direct offer for the 2026 SWE Summer Internship",
    ],
    icon: Code2,
    badge: "Offer",
  },
  {
    period: "Feb 2025",
    role: "Trading Insight Week",
    organization: "Dare",
    logo: "/logos/dare.jpeg",
    location: "London, UK",
    description: [
      "Selected as one of 30 participants from nearly 1,000 applicants",
      "Shadowed traders across the fuel, middle distillates, and LNG desks; generated a positive PnL in pit trading simulations",
      "Presented an independent study on the OTC trade lifecycle to senior traders",
    ],
    icon: TrendingUp,
    badge: "Top 3%",
  },
  {
    period: "June - July 2025",
    role: "WAVE Fellowship 2025",
    organization: "Webloom & SAP",
    location: "Switzerland",
    description: [
      "Selected for a competitive fellowship focused on AI and sustainability",
      "Co-developed a carbon profitability model linking emissions data to financial impact",
      "Pitched the solution to industry experts at Google Zurich",
    ],
    icon: Leaf,
  },
  {
    period: "Feb 2023 - July 2024",
    role: "Vice President",
    organization: "EPFelles",
    location: "Lausanne, Switzerland",
    description: [
      "Led 10+ STEM gender-equality events per year",
      "Secured partnerships with major sponsors including Deloitte, UBS, and BCG",
    ],
    icon: Users,
    badge: "Leadership",
    wide: true,
  },
];

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = program.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        program.wide
          ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60 md:col-span-2"
          : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          {program.logo ? (
            <img
              src={program.logo}
              alt={`${program.organization} logo`}
              className="w-12 h-12 rounded-xl shrink-0 object-cover border border-epfl-red/20"
            />
          ) : (
            <div className="p-3 rounded-xl shrink-0 bg-epfl-red/15 text-epfl-red group-hover:bg-epfl-red group-hover:text-epfl-white transition-colors">
              <Icon className="w-6 h-6" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors">
                {program.role}
              </h3>
              {program.badge && (
                <span className="text-[11px] font-semibold uppercase tracking-wide text-epfl-red bg-epfl-red/10 border border-epfl-red/30 px-2 py-0.5 rounded-full">
                  {program.badge}
                </span>
              )}
            </div>
            <p className="text-epfl-red font-semibold text-sm mb-1">{program.organization}</p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-epfl-dark/60">
              <Calendar className="w-3 h-3" />
              <span>{program.period}</span>
              <span>•</span>
              <MapPin className="w-3 h-3" />
              <span>{program.location}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {program.description.map((item, itemIndex) => (
            <li key={itemIndex} className="text-epfl-dark/70 flex items-start gap-3 leading-relaxed">
              <span className="text-epfl-red mt-1 shrink-0 font-bold">{">"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

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
            Beyond the Code<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-2xl">
            Hackathons, fellowships, and leadership: where I pitch ideas, build fast, and work to bring more women
            into tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.role} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
