import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Programs from "@/components/programs";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Experience />
      <Projects />
      <Education />
      <Programs />
      <Skills />
      <Contact />
    </main>
  );
}
