import Image from "next/image"

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-[400px] flex items-center justify-center" >
            <Image 
              src="/logos/university.png" 
              alt="University Campus" 
              width={400} 
              height={400} 
              className="object-contain w-full h-full"
            />

            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-2">Bachelor of Science in Software Engineering</h3>
              <p className="text-lg text-gray-600 mb-4">Universidad Autónoma de Baja California</p>
              <p className="text-md text-gray-500 mb-4">Graduation Year: 2025</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, AI</li>
                <li>Grade Average: 90/100</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

