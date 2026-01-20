import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "Scala", "SQL"],
  },
  {
    title: "Technologies & Tools",
    skills: ["Git", "LaTeX", "TensorFlow", "Scikit-learn", "JavaFX"],
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "Data Analysis", "OOP", "File Systems", "Algorithms"],
  },
  {
    title: "Languages",
    skills: ["French (Bilingual)", "English (Advanced)", "Arabic (Native)", "Spanish (Intermediate)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Skills<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
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
