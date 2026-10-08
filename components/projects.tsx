"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  note?: string;
  highlight: boolean;
  featured?: boolean;
  status?: string;
}[] = [
  {
    title: "What Makes America Laugh?",
    subtitle: "Large-Scale Humor Analysis",
    description:
      "Analyzed 1.4M captions and 183M audience votes from The New Yorker Caption Contest to study humor themes, stylistic patterns, and their evolution over time. Built scalable models and an interactive datastory website comparing editorial selections with crowd preferences.",
    tags: ["Python", "NLP", "Data Science", "Scalable Models", "Interactive Visualization"],
    note: "Course project · code private",
    image: "/projects/humor.jpg",
    highlight: true,
  },
  {
    title: "Beyond the Pitch",
    subtitle: "Women's Football Data Story",
    description:
      "Built a scrollytelling website telling the story of women's international football, from the 50-year ban to 2 billion viewers. Ten interactive D3.js chapters cover 11,177 matches from 1956 to 2025, including a bar chart race, an animated world map, a rivalry chord diagram and a cross-filtered country explorer.",
    tags: ["D3.js", "JavaScript", "Data Visualization", "Scrollytelling", "Python"],
    github: "https://github.com/imaneoujja/Women-Football",
    live: "https://com-480-data-visualization.github.io/DVP/",
    image: "/projects/beyond-the-pitch.jpg",
    highlight: true,
    featured: true,
  },
  {
    title: "Barça's Anfield Collapse",
    subtitle: "Football Data Analysis · UCL 2018-19",
    description:
      "Investigated why Barcelona, 3-0 up after the first leg, lost 4-0 at Anfield. Across 12 Champions League matches, Barça kept more of the ball away from home but scored 56% fewer goals, and possession had almost no link with goals (r = 0.05). Published as an interactive data story.",
    tags: ["Python", "pandas", "Data Analysis", "Plotly", "Data Storytelling"],
    github: "https://github.com/imaneoujja/barca-ucl-18-19",
    live: "https://imaneoujja.github.io/barca-ucl-18-19/",
    image: "/projects/barca-ucl.jpg",
    highlight: false,
  },
  {
    title: "NLP Tweet Sentiment Classifier",
    subtitle: "Deep Learning for Text Analysis",
    description:
      "Developed an NLP model achieving 90.2% accuracy on a 2.5M balanced tweet dataset, progressing from classical models (SGD, Logistic Regression) to GRU-based networks and Transformer models (BERT, RoBERTa), with emphasis on preprocessing and benchmarking.",
    tags: ["Python", "NLP", "Deep Learning", "BERT", "RoBERTa", "GRU"],
    note: "Course project · code private",
    image: "/projects/nlp.jpg",
    highlight: true,
    featured: true,
  },
  {
    title: "Heart Disease Prediction from Scratch",
    subtitle: "ML from First Principles",
    description:
      "Implemented a machine learning classifier from first principles to predict heart disease risk on a 300K-patient dataset with 300 features, without using Scikit-learn, relying on linear algebra, numerical optimization, and custom training pipelines.",
    tags: ["Python", "Linear Algebra", "Numerical Optimization", "ML from Scratch"],
    note: "Course project · code private",
    image: "/projects/heart.jpg",
    highlight: true,
  },
  {
    title: "Deep Learning for Fashion Classification",
    subtitle: "Multi-Architecture Pipeline",
    description:
      "Compared an MLP, a CNN and a Vision Transformer written from scratch in PyTorch for fashion item classification. The CNN reached 89.3% accuracy, and PCA implemented from scratch cut the MLP's parameters by 74% for under 1 point of accuracy.",
    tags: ["Python", "PyTorch", "Deep Learning", "CNN", "Vision Transformer", "PCA"],
    github: "https://github.com/imaneoujja/Fashion-MNIST-ML",
    image: "/projects/fashion.jpg",
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
            From <span className="text-epfl-red font-semibold">NLP on millions of tweets</span> to{" "}
            <span className="text-epfl-pink font-semibold">ML models built from scratch</span> and interactive data
            stories, these projects showcase my passion for machine learning and data science.
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
                {(project.status || project.featured) && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-epfl-red/30">
                    {project.status && <span className="w-1.5 h-1.5 rounded-full bg-epfl-red animate-pulse" />}
                    <span className="text-xs font-semibold text-epfl-red">{project.status ?? "Featured"}</span>
                  </div>
                )}

                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover border-b border-epfl-red/10"
                  />
                )}

                <div className={project.image ? "p-8" : "p-8 pt-14"}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-epfl-dark group-hover:text-epfl-red transition-colors mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-epfl-pink font-medium mb-3">{project.subtitle}</p>
                      )}
                    </div>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="ml-4 p-2 rounded-lg border border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 text-epfl-red" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className={`${project.live ? "ml-2" : "ml-4"} p-2 rounded-lg border border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all`}
                      >
                        <Github className="w-5 h-5 text-epfl-red" />
                      </a>
                    )}
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

                  {project.note && <p className="mt-4 text-xs text-epfl-dark/50">{project.note}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
