"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Alumni {
  name: string
  specialty: string
  currentRole: string
  image: string
}

interface AlumniCarouselProps {
  alumni: Alumni[]
}

export function AlumniCarousel({ alumni }: AlumniCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = alumni.length
  const maxIndex = Math.max(0, totalSlides - visibleCount)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden px-6" ref={containerRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {alumni.map((alumni, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1.5" style={{ width: `${100 / visibleCount}%` }}>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={alumni.image || "/placeholder.svg"}
                  alt={alumni.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2 w-full">
                    <h4 className="text-white font-bold text-sm truncate">{alumni.name}</h4>
                    <p className="text-white/80 text-xs truncate">{alumni.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="mt-4 flex justify-center gap-1">
        {Array.from({ length: Math.min(5, maxIndex + 1) }).map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-6 rounded-full ${
              index === Math.min(4, currentIndex) ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
