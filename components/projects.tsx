"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "What Makes America Laugh?",
    subtitle: "Large-Scale Humor Analysis",
    description:
      "Analyzed 1.4M captions and 183M audience votes from The New Yorker Caption Contest to study humor themes, stylistic patterns, and their evolution over time. Built scalable models and an interactive datastory website comparing editorial selections with crowd preferences.",
    tags: ["Python", "NLP", "Data Science", "Scalable Models", "Interactive Visualization"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "NLP Tweet Sentiment Classifier",
    subtitle: "Deep Learning for Text Analysis",
    description:
      "Developed an NLP model achieving 90.2% accuracy on a 2.5M balanced tweet dataset, progressing from classical models (SGD, Logistic Regression) to GRU-based networks and Transformer models (BERT, RoBERTa), with emphasis on preprocessing and benchmarking.",
    tags: ["Python", "NLP", "Deep Learning", "BERT", "RoBERTa", "GRU"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "Heart Disease Prediction from Scratch",
    subtitle: "ML from First Principles",
    description:
      "Implemented a machine learning classifier from first principles to predict heart disease risk on a 300K-patient dataset with 300 features, without using Scikit-learn, relying on linear algebra, numerical optimization, and custom training pipelines.",
    tags: ["Python", "Linear Algebra", "Numerical Optimization", "ML from Scratch"],
    github: "https://github.com/imaneoujja",
    highlight: true,
  },
  {
    title: "Deep Learning for Fashion Classification",
    subtitle: "Multi-Architecture Pipeline",
    description:
      "Designed a multi-architecture machine learning pipeline (CNNs, Transformers, MLPs) for fashion item classification, with PCA-based performance optimization.",
    tags: ["Python", "TensorFlow", "Deep Learning", "CNN", "Transformers", "PCA"],
    github: "https://github.com/imaneoujja",
    highlight: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-epfl-red/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-epfl-pink/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Projects<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-6 rounded-full" />
          <p className="text-epfl-dark/70 text-lg md:text-xl max-w-3xl">
            From analyzing <span className="text-epfl-red font-semibold">1.4M captions</span> to building{" "}
            <span className="text-epfl-pink font-semibold">ML models from scratch</span>, these projects showcase my
            passion for data science and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectRef = useRef(null);
            const projectInView = useInView(projectRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={index}
                ref={projectRef}
                initial={{ opacity: 0, y: 30 }}
                animate={projectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  project.highlight
                    ? "bg-gradient-to-br from-epfl-red/10 via-epfl-pink/5 to-epfl-red/10 border-epfl-red/30 hover:border-epfl-red/60 md:col-span-2 lg:col-span-1"
                    : "bg-epfl-white border-epfl-red/20 hover:border-epfl-red/50"
                } hover:shadow-xl`}
              >
                {project.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-epfl-red/20 border border-epfl-red/30">
                    <span className="text-xs font-semibold text-epfl-red">Featured</span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-epfl-pink font-medium mb-3">{project.subtitle}</p>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-2 rounded-lg border border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all"
                    >
                      <Github className="w-5 h-5 text-epfl-red" />
                    </a>
                  </div>

                  <p className="text-epfl-dark/70 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-epfl-red bg-epfl-red/10 px-3 py-1.5 rounded-full border border-epfl-red/20"
                      >
                        #{tag}
                      </span>
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
