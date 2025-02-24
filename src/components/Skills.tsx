import Image from "next/image"

type Skill = {
  name: string
  logo: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", logo: "/logos/python.png" },
      { name: "Java", logo: "/logos/java.png" },
      { name: "C", logo: "/logos/c.png" },
      { name: "C++", logo: "/logos/cpp.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "TypeScript", logo: "/logos/typescript.png" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", logo: "/logos/react.png" },
      { name: "Tailwind CSS", logo: "/logos/tailwindcss.png" },
    ],
  },
  {
    name: "Backend",
    skills: [{ name: "Express.js", logo: "/logos/expressjs.png" }],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", logo: "/logos/aws.png" },
      { name: "Linux", logo: "/logos/linux.png" },
      { name: "Docker", logo: "/logos/docker.png" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", logo: "/logos/mysql.png" },
      { name: "PostgreSQL", logo: "/logos/postgresql.png" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/github.png" },
      { name: "Linux", logo: "/logos/linux.png" },
    ],
  },
  {
    name: "AI & Data Science",
    skills: [
      { name: "TensorFlow", logo: "/logos/tensorflow.png" },
      { name: "NumPy", logo: "/logos/numpy.png" },
      { name: "Pandas", logo: "/logos/pandas.png" },
      { name: "Matplotlib", logo: "/logos/matplotlib.png" },
      { name: "Seaborn", logo: "/logos/seaborn.png" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "Spanish (Native)", logo: "/logos/spanish.png" },
      { name: "English (Fluent)", logo: "/logos/english.png" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <div className="w-12 h-12 relative mb-2">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

