import Image from "next/image"
import { Mail, Github, Linkedin } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about-me" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">Hi, I&apos;m</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Jorge A. Sandoval</h1>
            <p className="text-lg text-gray-600 mb-6">
            Software engineering student with a passion for crafting modern web applications. 
            Experienced in building scalable, efficient solutions, and currently exploring the world of AI.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:jorgexe.sandoval@gmail.com"
                className="bg-gray-500 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/jorgexe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jorgexe/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black shadow-lg">
              <Image
                src="/myphoto.png"
                alt="Jorge Sandoval"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

