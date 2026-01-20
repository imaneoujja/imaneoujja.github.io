import { Github } from "lucide-react"

const projects = [
  {
    title: "ImgFS",
    description: "Custom image file system inspired by Facebook's Haystack, supporting add, extract, and list operations with optimized storage.",
    tags: ["C", "File Systems", "Systems Programming"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Javions",
    description: "Real-time aircraft tracking tool using ADS-B messages with interactive trajectory visualization on a map.",
    tags: ["Java", "JavaFX", "Real-Time"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Deep Learning Fashion",
    description: "Multi-architecture pipeline (CNNs, Transformers, MLPs) for fashion item classification with PCA optimization.",
    tags: ["Python", "TensorFlow", "CNNs"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "ML Classification",
    description: "Regression and KNN algorithms to classify dog breeds and detect object centers with cross-validation.",
    tags: ["Python", "Scikit-learn", "ML"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Code for Good",
    description: "Web app for MCR Pathways charity to streamline mentor recruitment with optimized matching algorithm.",
    tags: ["Web Dev", "Algorithms", "Hackathon"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Humanoid Robotics",
    description: "Advanced hand movement system for humanoid robot at University of Edinburgh's robotics society.",
    tags: ["Robotics", "Python", "Control"],
    github: "https://github.com/imaneoujja",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-center">
          A selection of projects showcasing my experience across different technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-5 rounded-lg bg-background border border-border hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground">
                    {tag}
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
