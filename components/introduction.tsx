import { GraduationCap, Code, Brain } from "lucide-react"

export function Introduction() {
  return (
    <section id="introduction" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          Introduction<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-8" />

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am an EPFL Master&apos;s student in{" "}
            <span className="text-foreground font-medium">Computer Science</span> with a strong focus on{" "}
            <span className="text-primary">software development</span>,{" "}
            <span className="text-primary">artificial intelligence</span>, and{" "}
            <span className="text-primary">machine learning</span>.
          </p>
          <p>
            With experience from an exchange program at the{" "}
            <span className="text-foreground font-medium">University of Edinburgh</span> and hands-on work at companies
            like <span className="text-foreground font-medium">JPMorgan Chase</span> and{" "}
            <span className="text-foreground font-medium">MATISA S.A.</span>, I am motivated to apply programming and
            analytical skills to design intelligent, efficient, and scalable solutions.
          </p>
          <p>
            I have a strong belief in <span className="text-primary">learning by doing</span>, and have consistently
            sought out opportunities to further my skills through teaching, mentoring, and volunteering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Education</h3>
            <p className="text-muted-foreground text-sm">EPFL BSc & MSc in Computer Science, Exchange at Edinburgh</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
            <Code className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Development</h3>
            <p className="text-muted-foreground text-sm">Python, Java, C, Scala, SQL, Git, Full-Stack Development</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
            <Brain className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">AI & ML</h3>
            <p className="text-muted-foreground text-sm">Machine Learning, Deep Learning, Data Analysis, TensorFlow</p>
          </div>
        </div>
      </div>
    </section>
  )
}
