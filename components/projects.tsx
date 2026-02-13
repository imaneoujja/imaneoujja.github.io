import { Github } from "lucide-react"

const projects = [
  {
    title: "ImgFS",
    description:
      "Custom image file system inspired by Facebook's Haystack, supporting add, extract, and list operations with optimized storage.",
    tags: ["C", "file-systems", "systems-programming"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Javions",
    description:
      "Real-time aircraft tracking tool using ADS-B messages and AirSpy R2, with interactive trajectory visualization on a map.",
    tags: ["java", "javafx", "real-time"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Deep Learning Fashion",
    description:
      "Multi-architecture pipeline (CNNs, Transformers, MLPs) for fashion item classification, with PCA-based performance optimization.",
    tags: ["python", "tensorflow", "deep-learning", "cnn"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Stanford Dogs ML",
    description:
      "Applied regression and KNN algorithms to classify dog breeds and detect object centers, with evaluation via cross-validation.",
    tags: ["python", "scikit-learn", "machine-learning"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Code for Good",
    description:
      "Web app for MCR Pathways charity to streamline mentor recruitment and matching; implemented algorithm to optimize mentee-mentor pairing.",
    tags: ["web-dev", "algorithms", "hackathon"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Humanoid Robotics",
    description:
      "Developed advanced hand movement system for humanoid robot at University of Edinburgh's robotics society.",
    tags: ["robotics", "python", "control-systems"],
    github: "https://github.com/imaneoujja",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projects<span className="text-primary">.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          The following projects display my experience with different programming languages, concepts, and technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-3"
                  aria-label={`${project.title} source code`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                  >
                    {"#"}{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
