"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Database, Wrench, Globe, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: "red" | "pink";
};

const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI",
    icon: Bot,
    skills: ["LLMs", "AI Agents", "Multi-Agent Systems", "RAG", "MCP", "Prompt Engineering", "Amazon Bedrock"],
    color: "red",
  },
  {
    title: "Machine Learning & NLP",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "Transformers", "Self-Supervised Learning"],
    color: "pink",
  },
  {
    title: "Programming & Data",
    icon: Database,
    skills: ["Python", "SQL", "Java", "Scala", "Pandas", "NumPy", "PySpark", "ETL Pipelines"],
    color: "pink",
  },
  {
    title: "Engineering",
    icon: Wrench,
    skills: ["FastAPI", "REST APIs", "AWS", "Apache Airflow", "Docker", "Git", "Linux", "JIRA"],
    color: "red",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Fundamentals of Agents", issuer: "Hugging Face" },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Bilingual" },
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Intermediate" },
];

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;
  const isRed = category.color === "red";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
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
          <h3 className={`text-xl font-bold ${isRed ? "text-epfl-red" : "text-epfl-pink"}`}>{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
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
}

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
            From agentic LLM systems in production to deep learning research and data engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="rounded-2xl border-2 border-epfl-red/20 bg-epfl-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-epfl-red/20 text-epfl-red">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-epfl-red">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-3">
                  <span className="text-epfl-red mt-1 shrink-0 font-bold">{">"}</span>
                  <div>
                    <p className="font-semibold text-epfl-dark">{cert.name}</p>
                    <p className="text-sm text-epfl-dark/60">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-epfl-pink/30 bg-epfl-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-epfl-pink/20 text-epfl-pink">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-epfl-pink">Languages</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="rounded-xl border border-epfl-pink/30 bg-epfl-pink/5 px-4 py-3">
                  <p className="font-semibold text-epfl-dark">{lang.name}</p>
                  <p className="text-sm text-epfl-pink font-medium">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
