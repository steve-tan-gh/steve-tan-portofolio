"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="container mx-auto text-center">
        <div className="space-y-8">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-4xl font-bold text-primary-foreground animate-float hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300 shadow-lg shadow-primary/30">
              <img 
                src="/removebgFoto.png" 
                alt="Steve Febryanto Tan" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="animate-fade-in-delay-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Hi, I'm{" "}
              <span className="text-primary text-glow hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300">
                Steve Febryanto Tan
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-delay-2">
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance max-w-3xl mx-auto">
              Computer Science Student at <span className="text-primary font-semibold text-glow">BINUS University</span>
            </p>
          </div>

          <div className="animate-fade-in-delay-3">
            <p className="text-lg text-foreground/70 mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
              Passionate about{" "}
              <span className="text-primary font-medium hover:text-glow transition-all duration-300 cursor-default">
                Artificial Intelligence
              </span>
              ,
              <span className="text-primary font-medium hover:text-glow transition-all duration-300 cursor-default">
                {" "}
                Web Development
              </span>
              , and
              <span className="text-primary font-medium hover:text-glow transition-all duration-300 cursor-default">
                {" "}
                Software Engineering
              </span>
              . I love creating innovative solutions and learning new technologies.
            </p>
          </div>

          <div className="animate-fade-in-delay-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="cosmic-button bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 bg-transparent"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-delay-4 animate-fade-out-delay-4">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/steve-tan-gh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/steve-febryanto-tan-aa7592371/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
            aria-label="Scroll to projects"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
