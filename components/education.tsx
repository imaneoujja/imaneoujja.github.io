import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2025 - 2027",
    description: "Master's program focusing on advanced Computer Science topics",
  },
  {
    degree: "Exchange Program",
    institution: "University of Edinburgh",
    location: "Edinburgh, United Kingdom",
    period: "2024 - 2025",
    description: "International exchange program broadening academic and cultural perspectives",
  },
  {
    degree: "BSc in Communication Systems",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2022 - 2025",
    description:
      "Algorithms, Software Construction, Databases, OOP, Machine Learning, Discrete Mathematics, Calculus, Probability & Statistics, Stochastic Modeling, Digital Communications",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Education<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-secondary h-fit">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-foreground font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                  </div>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground md:text-right md:min-w-fit">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
