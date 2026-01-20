const volunteering = [
  {
    period: "Jun — Sep 2024",
    role: "Volunteer",
    organization: "Students 4 Students",
    description: "Designed LaTeX course material and assisted first-year students in Calculus and Linear Algebra exercise sessions at EPFL.",
  },
  {
    period: "Feb 2023 — Jul 2024",
    role: "Vice President",
    organization: "EPFelles",
    description: "Led initiatives promoting gender equality in STEM, organizing 10+ events per academic year and securing partnerships.",
  },
  {
    period: "Jul 2023",
    role: "Community Volunteer",
    organization: "Service Civil International",
    description: "Volunteered at a holiday camp for asylum-seeking children, organizing recreational and educational activities.",
  },
]

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-12 text-center">
          Volunteering
        </h2>

        <div className="space-y-8">
          {volunteering.map((vol, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4"
            >
              <p className="text-sm text-muted-foreground font-mono">
                {vol.period}
              </p>

              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {vol.role}
                </h3>
                <p className="text-primary text-sm">{vol.organization}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {vol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
