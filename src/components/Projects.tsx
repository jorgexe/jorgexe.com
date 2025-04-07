import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "LegisConnect - Hackathon 3rd Place Winner",
    description: "A social network prototype enabling citizens to propose and debate legislative topics with lawmakers. Won 3rd place among 375+ students at the 'Elegis Tech3' Hackathon (UABC). Built with Next.js and deployed at legisconnect.org.",
    image: "/projects/legisconnect.png",
    githubUrl: "https://github.com/jorgexe/LegisConnect",
  },
  {
    title: "Real-Time Computer Vision Classification App",
    description: "A browser-based application that uses machine learning to classify objects in real-time via webcam. Pre-configured for Rock-Paper-Scissors recognition but can be trained to recognize any object.",
    image: "/projects/classifier.png",
    githubUrl: "https://github.com/jorgexe/web-classifier",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Sorting Algorithm Visualizer that allows users to visualize how different sorting algorithms work in real-time. It provides an interactive GUI where users can select a sorting algorithm, specify the number of elements, and watch the algorithm sort the data step-by-step.",
    image: "/projects/Sort.png",
    githubUrl: "https://github.com/jorgexe/Sort_Visualizer",
  },
  {
    title: "Prim's Algorithm Visualizer",
    description: "This project demonstrates Prim's algorithm for finding the Minimum Spanning Tree (MST) of a weighted undirected graph. The implementation includes step-by-step visualization using networkx and matplotlib, highlighting edges as they are added to the MST.",
    image: "/projects/Prim.png",
    githubUrl: "https://github.com/jorgexe/Prim_Algorithm",
  },
  {
    title: "Movie Reviews Application",
    description:
      "A Java Swing application for managing movie reviews and watchlists. Users can register, log in, add reviews, track pending movies, and manage their entries.",
    image: "/projects/movie_review.png",
    githubUrl: "https://github.com/jorgexe/movie_review_app",
  },
  {
    title: "Sliding Squares: Teamwork Puzzle Game",
    description: "An exciting 2-player game that challenges you and a friend to slide your way to victory while avoiding obstacles. With simple controls and engaging gameplay, it's not only fun but also an educational tool that promotes teamwork and strategic thinking.",
    image: "/projects/Squares.png",
    githubUrl: "https://github.com/jorgexe/Sliding_Squares",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

