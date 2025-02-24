import Header from "@/components/Header"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-4 md:py-8">
        <AboutMe />
        <Skills />
        <Experience/>
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

