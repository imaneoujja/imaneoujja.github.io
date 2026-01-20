iimport { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-8">
          Contact
        </h2>

        <p className="text-2xl md:text-3xl font-medium text-foreground mb-6 text-balance">
          Let&apos;s work together
        </p>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations, 
          or just having a chat about technology and AI.
        </p>

        <div className="flex flex-col items-center gap-3 mb-8">
          <a
            href="mailto:i.oujja@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>i.oujja@gmail.com</span>
          </a>

          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Lausanne, Switzerland</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
