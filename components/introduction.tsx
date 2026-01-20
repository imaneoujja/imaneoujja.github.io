import { GraduationCap, Code, Brain } from "lucide-react"

export function Introduction() {
  return (
    <section id="introduction" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-8">
          About
        </h2>

        <div className="space-y-5 text-foreground leading-relaxed">
          <p>
            I&apos;m a <span className="font-medium">Computer Science Master&apos;s student</span> at{" "}
            <span className="text-primary font-medium">EPFL</span>, Switzerland, 
            with a passion for building intelligent systems and solving complex problems.
          </p>
          <p className="text-muted-foreground">
            With experience from an exchange program at the University of Edinburgh and hands-on work at companies
            like JPMorgan Chase and MATISA S.A., I am motivated to apply programming and
            analytical skills to design intelligent, efficient, and scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <div className="p-5 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <GraduationCap className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-1">Education</h3>
            <p className="text-muted-foreground text-sm">EPFL MSc + Edinburgh Exchange</p>
          </div>
          <div className="p-5 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <Code className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-1">Development</h3>
            <p className="text-muted-foreground text-sm">Python, Java, C, Full-Stack</p>
          </div>
          <div className="p-5 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <Brain className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-1">AI & ML</h3>
            <p className="text-muted-foreground text-sm">Deep Learning, Data Analysis</p>
          </div>
        </div>
      </div>
    </section>
  )
}
