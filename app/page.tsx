import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { StarBackground } from "@/components/star-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <StarBackground />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
