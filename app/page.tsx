import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Volunteering } from "@/components/volunteering"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Volunteering />
      <Contact />
      <Footer />
    </main>
  )
}
