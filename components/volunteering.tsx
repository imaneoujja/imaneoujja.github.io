import { Heart, Calendar, MapPin } from "lucide-react"

const volunteering = [
  {
    title: "Volunteer",
    organization: "Students 4 Students",
    location: "Lausanne, Switzerland",
    period: "June - Sept 2024",
    description:
      "Designed LaTeX course material and assisted first-year students in Calculus and Linear Algebra exercise sessions at EPFL.",
  },
  {
    title: "Vice President",
    organization: "EPFelles",
    location: "Lausanne, Switzerland",
    period: "Feb 2023 - July 2024",
    description:
      "Led initiatives promoting gender equality in STEM, organizing 10+ events per academic year and securing partnerships with major sponsors.",
  },
  {
    title: "Community Volunteer",
    organization: "Service Civil International",
    location: "Nendaz, Switzerland",
    period: "July 2023",
    description:
      "Volunteered at a holiday camp for asylum-seeking children. Organized recreational and educational activities to foster social integration and well-being.",
  },
]

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Volunteering<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteering.map((vol, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors group flex flex-col"
            >
              <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{vol.title}</h3>
              <p className="text-foreground font-medium text-sm">{vol.organization}</p>

              <div className="flex flex-col text-xs text-muted-foreground mt-2 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{vol.period}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{vol.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm flex-grow">{vol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
