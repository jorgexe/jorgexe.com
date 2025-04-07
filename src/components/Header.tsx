"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about-me", "skills", "experience", "education", "client-websites", "projects", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-12 h-12 relative">
          <Image src="/js_logo.png" alt="Logo" layout="fill" objectFit="contain" priority />
        </div>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 mr-4">
            {["About Me", "Skills", "Experience", "Education", "Client Websites", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.toLowerCase().replace(" ", "-")
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/resume_Jorge_Sandoval.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
        <div className="md:hidden flex items-center">
          <a
            href="/resume_Jorge_Sandoval.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300 mr-2"
          >
            Resume
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            {["About Me", "Skills", "Experience", "Education", "Client Websites", "Projects", "Contact"].map((item) => (
              <li key={item} className="w-full">
                <button
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`w-full px-3 py-2 text-sm font-medium ${
                    activeSection === item.toLowerCase().replace(" ", "-")
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

