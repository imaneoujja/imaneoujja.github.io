const experiences = [
  {
    period: "Jul — Aug 2025",
    title: "ERP Data Analyst Intern",
    company: "MATISA S.A.",
    location: "Crissier, Switzerland",
    description: "Analyzed large-scale data extractions and validated accuracy. Supported data cleansing across sales, purchasing, and production departments.",
    tags: ["Data Analysis", "ERP Systems", "Data Quality"],
  },
  {
    period: "Apr 2025",
    title: "Spring into Software Engineering",
    company: "JPMorgan Chase",
    location: "Glasgow, UK",
    description: "Code for Good Hackathon: developed a web app for charity mentor recruitment. Implemented algorithm to optimize mentee-mentor pairing. Received direct offer for 2026 internship.",
    tags: ["Web Development", "Agile", "TDD"],
  },
  {
    period: "Sep 2024 — Apr 2025",
    title: "Software Developer",
    company: "HumanEd Robotics",
    location: "Edinburgh, UK",
    description: "Contributed to University of Edinburgh's humanoid robotics society. Developed advanced hand movement system for humanoid robot.",
    tags: ["Robotics", "Python", "Control Systems"],
  },
  {
    period: "Feb 2023 — Present",
    title: "Teaching Assistant & Mentor",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    description: "Assisted in teaching Numerical Analysis with Python, Calculus I, and Physics. Mentored 15 CS students weekly in their first year.",
    tags: ["Teaching", "Python", "Mentoring"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4"
            >
              <p className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </p>

              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary text-sm">
                  {exp.company} <span className="text-muted-foreground">· {exp.location}</span>
                </p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
