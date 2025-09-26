"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground hover-glow cursor-pointer transition-all duration-300">
            {"Steve Febryanto Tan"}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-all duration-300 hover-lift ${
                activeSection === "about" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-all duration-300 hover-lift ${
                activeSection === "projects" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-all duration-300 hover-lift ${
                activeSection === "contact" ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-primary-foreground hover-lift shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
