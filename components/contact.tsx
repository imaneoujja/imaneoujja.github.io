import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Get in Touch<span className="text-primary">.</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 mx-auto" />

        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology
          and innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:i.oujja@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              i.oujja@gmail.com
            </span>
          </a>

          <a
            href="tel:+41767127571"
            className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">+41 76 712 7571</span>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Lausanne, Switzerland</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/imaneoujja"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/imane-oujja-65165011a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:i.oujja@gmail.com"
            className="p-4 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
