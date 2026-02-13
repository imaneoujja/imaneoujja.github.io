import { Calendar, MapPin, Building2 } from "lucide-react"

const experiences = [
  {
    title: "ERP Data Analyst Intern",
    company: "MATISA S.A.",
    location: "Crissier, Switzerland",
    period: "July - Aug 2025",
    description: [
      "Analyzed large-scale data extractions and validated accuracy using defined methodologies",
      "Supported data cleansing across sales, purchasing, and production departments",
      "Applied internal data control procedures to ensure consistency and reliability",
    ],
    tags: ["Data Analysis", "ERP Systems", "Data Quality"],
  },
  {
    title: "Spring into Software Engineering",
    company: "JPMorgan Chase",
    location: "Glasgow, UK",
    period: "April 2025",
    description: [
      "Code for Good Hackathon: developed a web app for charity mentor recruitment",
      "Implemented algorithm to optimize mentee-mentor pairing",
      "Technical workshops on agile methodologies, TDD, and Git/GitHub",
      "Received direct offer for summer internship in 2026",
    ],
    tags: ["Hackathon", "Web Dev", "Agile", "TDD"],
  },
  {
    title: "Software Developer",
    company: "HumanEd Robotics",
    location: "Edinburgh, UK",
    period: "Sept 2024 - April 2025",
    description: [
      "Contributed to University of Edinburgh's humanoid robotics society",
      "Developed advanced hand movement system for humanoid robot",
    ],
    tags: ["Robotics", "Python", "Control Systems"],
  },
  {
    title: "Teaching Assistant & Mentor",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    period: "Since Feb 2023",
    description: [
      "Assisted in teaching Numerical Analysis with Python, Calculus I, and Physics",
      "Mentored 15 CS students weekly to support them in their first year",
    ],
    tags: ["Teaching", "Python", "Mentoring"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Experience<span className="text-primary">.</span>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span className="text-foreground font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground md:text-right shrink-0">
                  <span className="flex items-center gap-1.5 md:justify-end">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 md:justify-end mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                  >
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
