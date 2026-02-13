import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "MSc in Computer Science",
    specialization: "Specialization in AI and Data Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2025 - 2027",
    logo: "/logos/epfl.png",
    details:
      "Master's program focusing on Machine Learning, Data Science, Distributed Systems, and advanced AI topics.",
  },
  {
    degree: "Exchange Program",
    specialization: "School of Informatics",
    institution: "University of Edinburgh",
    location: "Edinburgh, UK",
    period: "2024 - 2025",
    logo: "/logos/edinburgh.png",
    details:
      "International exchange broadening academic and cultural perspectives in AI and software engineering.",
  },
  {
    degree: "BSc in Communication Systems",
    specialization: "",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    period: "2022 - 2025",
    logo: "/logos/epfl.png",
    details:
      "Algorithms, Software Construction, Databases, OOP, Machine Learning, Discrete Mathematics, Probability & Statistics.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education<span className="text-primary">.</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert opacity-80"
                />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-primary text-sm">{edu.specialization}</p>
                    )}
                    <p className="text-foreground font-medium text-sm">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col text-sm text-muted-foreground md:text-right shrink-0">
                    <span className="flex items-center gap-1.5 md:justify-end">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 md:justify-end mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
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
