export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
      <p className="text-base md:text-lg text-gray-700 mb-4">
        Feel free to reach out to me for any inquiries or opportunities.<br/>Email: jorgexe.sandoval@gmail.com
      </p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <a
          href="mailto:jorgexe.sandoval@gmail.com"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-center"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/jorgexe/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors text-center"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jorgexe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-center"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

