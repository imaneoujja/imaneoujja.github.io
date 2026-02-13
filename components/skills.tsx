const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "Scala", "SQL", "JavaScript"],
  },
  {
    title: "Technologies & Tools",
    skills: ["Git", "TensorFlow", "Scikit-learn", "JavaFX", "React", "Docker", "LaTeX"],
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Algorithms", "Distributed Systems", "OOP"],
  },
  {
    title: "Languages",
    skills: ["French (Bilingual)", "English (Advanced)", "Arabic (Native)", "Spanish (Intermediate)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills<span className="text-primary">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
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
