import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "ImgFS – Image-Oriented File System",
    description:
      "Developed a custom image file system inspired by Facebook's Haystack, supporting add, extract, and list operations with optimized storage.",
    tags: ["C", "File Systems", "Systems Programming"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Javions – ADS-B Aircraft Tracking",
    description:
      "Built a real-time aircraft tracking tool using ADS-B messages and AirSpy R2, with interactive trajectory visualization on a map.",
    tags: ["Java", "JavaFX", "Real-Time Systems"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Deep Learning Fashion Classification",
    description:
      "Designed a multi-architecture pipeline (CNNs, Transformers, MLPs) for fashion item classification, with PCA-based performance optimization.",
    tags: ["Python", "TensorFlow", "Deep Learning", "CNNs"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Stanford Dogs ML Classification",
    description:
      "Applied regression and KNN algorithms to classify dog breeds and detect object centers, with evaluation via cross-validation.",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Code for Good Hackathon Project",
    description:
      "Developed a web app for MCR Pathways charity to streamline mentor recruitment and matching; implemented an algorithm to optimize mentee-mentor pairing.",
    tags: ["Web Dev", "Algorithm Design", "Hackathon"],
    github: "https://github.com/imaneoujja",
  },
  {
    title: "Humanoid Robot Hand Movement",
    description:
      "Contributed to the University of Edinburgh's humanoid robotics society by developing a more advanced hand movement system for a humanoid robot.",
    tags: ["Robotics", "Python", "Control Systems"],
    github: "https://github.com/imaneoujja",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Projects<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-4" />
        <p className="text-muted-foreground mb-12 max-w-2xl">
          The following projects display my experience with different programming languages, concepts, and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 flex flex-col"
            >
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
