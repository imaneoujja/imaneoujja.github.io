const education = [
  {
    period: "2025 — 2027",
    degree: "MSc in Computer Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    details: "Master's program focusing on advanced Computer Science topics, ML, and distributed systems.",
  },
  {
    period: "2024 — 2025",
    degree: "Exchange Program",
    institution: "University of Edinburgh",
    location: "Edinburgh, UK",
    details: "International exchange broadening academic and cultural perspectives in AI and software engineering.",
  },
  {
    period: "2022 — 2025",
    degree: "BSc in Communication Systems",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    details: "Algorithms, Software Construction, Databases, OOP, Machine Learning, Discrete Mathematics, Probability & Statistics.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4"
            >
              <p className="text-sm text-muted-foreground font-mono">
                {edu.period}
              </p>

              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-primary text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-xs">{edu.location}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
