"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building2, Sparkles } from "lucide-react";
import LogoTile from "@/components/logo-tile";

type Experience = {
  title: string;
  company: string;
  team?: string;
  location: string;
  period: string;
  logo?: string;
  logoFit?: "cover" | "contain";
  description: string[];
  tags: string[];
  highlight: boolean;
  badge?: string;
};

const experiences: Experience[] = [
  {
    title: "Research Project",
    company: "Integrated Neurotechnologies Lab, EPFL",
    location: "Campus Biotech, Geneva",
    period: "Sept 2026 - Present",
    logo: "/logos/campus-biotech.png",
    logoFit: "contain",
    description: [
      "Building a self-supervised foundation model for heterogeneous electrocorticography (ECoG) brain signals, combining LUNA's topology-agnostic latent cross-attention architecture with LaBraM's vector-quantization tokenizer",
      "Currently training the vector-quantization tokenizer, the first stage of the pipeline",
      "Goal: learn representations that transfer across public ECoG datasets",
    ],
    tags: ["Python", "PyTorch", "Self-Supervised Learning", "Foundation Models", "Neuroscience"],
    highlight: true,
    badge: "Current",
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase",
    team: "Liquidity Risk Infrastructure",
    location: "Glasgow Technology Centre, UK",
    period: "June - Aug 2026",
    logo: "/logos/JPMorganChase-brown-and-white.jpg",
    description: [
      "Designed and deployed a multi-agent LLM system: a delegating agent orchestrates sub-agents that call internal enterprise tools via MCP (Model Context Protocol) servers to carry out multi-step scenario-analysis tasks, letting business users ask questions in natural language and receive automated variance reports",
      "Built the natural-language understanding layer on Amazon Bedrock, resolving ambiguous business queries and mapping them reliably to structured internal actions, with a focus on correctness and reproducibility of outputs",
      "Developed domain-specific agent skills for two production use cases (Sources & Uses and International Reporting)",
      "Automated an end-to-end workflow, from Apache Airflow-orchestrated data pipelines to report generation, cutting manual processing time by 60%",
    ],
    tags: ["Multi-Agent LLMs", "MCP", "Amazon Bedrock", "Apache Airflow", "Python", "Agile"],
    highlight: true,
  },
  {
    title: "ERP Data Analyst Intern",
    company: "MATISA S.A.",
    location: "Crissier, Switzerland",
    period: "July - Sept 2025",
    logo: "/logos/logo_matisa_RVB.jpg",
    description: [
      "Validated and reconciled data across ERP modules (sales, purchasing, production), cleaning and structuring large-scale datasets to improve data consistency and reporting accuracy",
      "Automated client data-renewal outreach with Excel VBA macros that triggered email requests to update records",
    ],
    tags: ["Data Analysis", "ERP Systems", "Data Quality", "VBA Automation"],
    highlight: false,
  },
  {
    title: "Software Developer",
    company: "HumanEd",
    logo: "/logos/humaned.png",
    logoFit: "contain",
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
    logo: "/logos/epfl.png",
    description: [
      "Assisted in teaching Numerical Analysis with Python, Calculus I and Physics for CS students",
      "Mentored 15+ CS students weekly to support them academically in their first year at EPFL",
    ],
    tags: ["Teaching", "Python", "Mentoring", "Education"],
    highlight: false,
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div
        className={`absolute left-[26px] top-8 w-4 h-4 rounded-full border-4 z-10 hidden md:block transition-all ${
          exp.highlight
            ? "bg-epfl-red border-epfl-red/30 shadow-[0_0_0_6px_rgba(226,0,31,0.12)]"
            : "bg-epfl-white border-epfl-red/50 group-hover:border-epfl-red"
        }`}
      />

      <div
        className={`relative md:ml-16 p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${
          exp.highlight
            ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60"
            : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
        } hover:shadow-xl`}
      >
        {exp.highlight && (
          <div className="inline-flex md:absolute md:top-4 md:right-4 mb-4 md:mb-0 items-center gap-1 px-3 py-1 rounded-full bg-epfl-red/20 border border-epfl-red/30">
            <Sparkles className="w-3 h-3 text-epfl-red" />
            <span className="text-xs font-semibold text-epfl-red">{exp.badge ?? "Latest"}</span>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div className="flex items-start gap-4 flex-1">
            <LogoTile src={exp.logo} alt={`${exp.company} logo`} fit={exp.logoFit} fallbackIcon={Building2} />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors mb-1">
                {exp.title}
              </h3>
              <p className="text-epfl-red font-semibold">{exp.company}</p>
              {exp.team && <p className="text-sm text-epfl-dark/60">{exp.team}</p>}
            </div>
          </div>
          <div className={`flex flex-col text-sm text-epfl-dark/60 md:text-right shrink-0 gap-1 ${exp.highlight ? "md:mt-10" : ""}`}>
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

        <ul className="space-y-2 mb-6">
          {exp.description.map((item, i) => (
            <li key={i} className="text-epfl-dark/70 flex items-start gap-3 leading-relaxed">
              <span className="text-epfl-red mt-1 shrink-0 font-bold">{">"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
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
}

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
            From <span className="text-epfl-pink font-semibold">foundation-model research</span> at Campus Biotech and{" "}
            <span className="text-epfl-red font-semibold">agentic AI systems</span> at JPMorgan Chase to data work in
            industry and years of teaching at EPFL.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-epfl-red via-epfl-pink to-epfl-red opacity-30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company + exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
