import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

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
    location: "Glasgow, United Kingdom",
    period: "April 2025",
    description: [
      "Participated in Code for Good Hackathon: developed a web app for charity mentor recruitment",
      "Implemented algorithm to optimize mentee-mentor pairing",
      "Technical workshops on agile methodologies, TDD, and Git/GitHub",
      "Received direct offer for summer internship in 2026",
    ],
    tags: ["Hackathon", "Web Development", "Agile", "TDD"],
  },
  {
    title: "Software Developer",
    company: "HumanEd",
    location: "Edinburgh, United Kingdom",
    period: "Sept 2024 - April 2025",
    description: [
      "Contributed to University of Edinburgh's humanoid robotics society",
      "Developed advanced hand movement system for humanoid robot",
    ],
    tags: ["Robotics", "Python", "Control Systems"],
  },
  {
    title: "Teaching Assistant & Student Mentor",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    period: "Since Feb 2023",
    description: [
      "Assisted in teaching Numerical Analysis with Python, Calculus I, and Physics for CS students",
      "Mentored 15 CS students weekly to support them academically in their first year",
    ],
    tags: ["Teaching", "Python", "Mentoring"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Experience<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary transition-colors group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium text-foreground">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
