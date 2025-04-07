import Image from "next/image";

interface ClientWebsite {
  name: string;
  url: string;
  description: string;
  image: string;
}

export default function ClientWebsites() {
  const clientWebsites: ClientWebsite[] = [
    {
      name: "Dental Solorio",
      url: "https://solorio.dental",
      description: "Website for a well-established dental practice in Tijuana",
      image: "/images/clients/dental-solorio.png" // Add your screenshot image
    },
    {
      name: "Alesstra",
      url: "https://alesstra.com",
      description: "Website for a technology company",
      image: "/images/clients/alesstra.png" // Add your screenshot image
    },
    {
      name: "Simolding",
      url: "https://simolding.com",
      description: "Precision engineering and innovative solutions for your injection molding challenges in Tijuana",
      image: "/images/clients/simolding.png" // Add your screenshot image
    },
    // Add more client websites as needed
  ];

  return (
    <section id="client-websites" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Client Websites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientWebsites.map((site, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={site.image} 
                  alt={`${site.name} website`} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{site.name}</h3>
                <p className="text-gray-600 mt-2">{site.description}</p>
                <a 
                  href={site.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 hover:text-blue-800"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}