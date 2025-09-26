"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Ikon Video sudah ditambahkan di sini
import { ExternalLink, Github, Video } from "lucide-react" 
import { useEffect, useState } from "react"

const projects = [
  {
    id: 1,
    title: "J-Roll Anime Streaming Platform",
    description:
      "J-Roll redefines the digital streaming experience by merging next-generation security, AI-driven personalization, and a healthy, inclusive community. ",
    technologies: ["React", "Node.js", "Supabase", "Tailwind CSS", "Firebase", "Machine Learning","Flask"],
    image: "/logo (1).png",
    githubUrl: "https://github.com/StyNW7/JRoll-Frontend",
    liveUrl: "https://jroll-frontend.vercel.app/",
    videoUrl: "https://drive.google.com/file/d/1xnbdRuozQ7uBrE0pr1Mb45k3umyXTH-k/view?usp=sharing",
  },
  {
    id: 2,
    title: "CV.Venus E-commerce Website",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using modern web technologies.",
    technologies: ["React", "Supabase", "Tailwind CSS"],
    image: "/Cv-Venus.png",
    githubUrl: "https://github.com/steve-tan-gh/cv-venus-website.git",
    liveUrl: "https://cv-venus-website.vercel.app/",
    // Tidak ada videoUrl, jadi tombol tidak akan muncul
  },
  {
    id: 3,
    title: "Asphatl 9: Rejends",
    description:
      "Asphatl 9: ReJends boasts some of the best graphics in mobile gaming, offering detailed environments, realistic lighting effects, and meticulously designed cars that bring the racing experience to life.",
    technologies: ["HTML", "CSS", "JS"],
    image: "/Asphatl9.png",
    githubUrl: "https://github.com/steve-tan-gh/Asphatl-9.git",
    liveUrl: "https://asphatl-9.vercel.app/home.html",
    // Tidak ada videoUrl, jadi tombol tidak akan muncul
  },
]

export function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
            setVisibleCards((prev) => [...new Set([...prev, cardId])]) // Mencegah duplikat
          }
        })
      },
      { threshold: 0.1 },
    )

    const cardElements = document.querySelectorAll("[data-card-id]")
    cardElements.forEach((card) => observer.observe(card))

    return () => cardElements.forEach((card) => observer.unobserve(card));
  }, [])

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Featured <span className="text-primary animate-glow hover-glow">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in software development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              data-card-id={project.id}
              className={`group card-hover bg-card border-border hover:border-primary/50 transition-all duration-500 ${
                visibleCards.includes(project.id)
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-card-foreground group-hover:text-primary transition-all duration-300 hover-glow">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3"> {/* Tambahkan flex-wrap untuk responsivitas */}
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-primary-foreground hover-lift shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent hover-lift hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {/* Tombol video akan muncul di sini hanya jika videoUrl ada */}
                  {project.videoUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent hover-lift hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Video size={16} className="mr-2" />
                        Watch Video
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover-lift hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <a href="https://github.com/steve-tan-gh" target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}