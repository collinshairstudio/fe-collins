"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Barber {
  name: string
  role: string
  image: string
  description: string
}

interface BarberCarouselProps {
  barbers: Barber[]
}

export function BarberCarousel({ barbers }: BarberCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = barbers.length
  const maxIndex = totalSlides - visibleCount

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex))
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden px-6" ref={containerRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {barbers.map((barber, index) => (
            <div key={index} className="w-full flex-shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
              <Card className="h-full overflow-hidden">
                <div className="relative h-72">
                  <Image
                    src={barber.image || "/placeholder.svg"}
                    alt={barber.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{barber.name}</CardTitle>
                  <CardDescription>{barber.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{barber.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="/booking" className="w-full">
                    <Button className="w-full">Book with {barber.name.split(" ")[0]}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
