import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Programs from "@/components/Programs";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

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
