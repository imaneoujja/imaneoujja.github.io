import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in Touch<span className="text-primary">.</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just having a chat about technology and AI.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:i.oujja@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              i.oujja@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Lausanne, Switzerland</span>
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
