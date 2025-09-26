"use client"

import { useEffect, useRef } from "react"

export function StarfieldBackground() {
  const starfieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const starfield = starfieldRef.current
    if (!starfield) return

    // Create stars
    const createStars = () => {
      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.width = Math.random() * 3 + 1 + "px"
        star.style.height = star.style.width
        star.style.animationDelay = Math.random() * 3 + "s"
        star.style.animationDuration = Math.random() * 3 + 2 + "s"
        starfield.appendChild(star)
      }
    }

    // Create shooting stars
    const createShootingStars = () => {
      const shootingStar = document.createElement("div")
      shootingStar.className = "shooting-star animate-shooting-star"
      shootingStar.style.left = Math.random() * 100 + "%"
      shootingStar.style.top = Math.random() * 50 + "%"
      shootingStar.style.animationDelay = Math.random() * 2 + "s"
      starfield.appendChild(shootingStar)

      // Remove shooting star after animation
      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.parentNode.removeChild(shootingStar)
        }
      }, 3000)
    }

    createStars()

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStars, 2000)

    return () => {
      clearInterval(shootingStarInterval)
    }
  }, [])

  return <div ref={starfieldRef} className="starfield" />
}
