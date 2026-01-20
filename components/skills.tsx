const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "Scala", "SQL", "JavaScript"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["Git", "TensorFlow", "Scikit-learn", "JavaFX", "React", "Docker"],
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "Deep Learning", "Algorithms", "Distributed Systems", "Data Analysis"],
  },
  {
    title: "Spoken Languages",
    skills: ["French (Bilingual)", "English (Advanced)", "Arabic (Native)", "Spanish (Intermediate)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-medium text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
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
