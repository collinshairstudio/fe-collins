import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample data
const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "A traditional haircut with expert styling and finish. Includes consultation, shampoo, and styling.",
    duration: "30 min",
    price: "$25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Beard Trim",
    description: "Shape and style your beard for a clean, polished look. Includes hot towel and beard oil treatment.",
    duration: "15 min",
    price: "$15",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Hot Towel Shave",
    description:
      "Traditional straight razor shave with hot towel treatment. Includes pre-shave oil and aftershave balm.",
    duration: "45 min",
    price: "$30",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Haircut & Beard Trim",
    description: "Complete grooming package with haircut and beard trim. Perfect for a full refresh.",
    duration: "45 min",
    price: "$35",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Deluxe Package",
    description: "Premium experience including haircut, hot towel shave, and facial massage. Our signature service.",
    duration: "60 min",
    price: "$50",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Kid's Haircut",
    description: "Haircut service for children under 12. Includes styling and a fun experience.",
    duration: "20 min",
    price: "$18",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    name: "Hair Coloring",
    description: "Professional hair coloring service. Consultation required for custom color options.",
    duration: "90 min",
    price: "From $60",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    name: "Facial Treatment",
    description: "Rejuvenating facial treatment to cleanse, exfoliate, and hydrate your skin.",
    duration: "30 min",
    price: "$35",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-[85rem] flex-col items-center px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            Premium barbering services tailored to your style
          </p>
        </div>
        <div className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Barbershop services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services List */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
                <Separator className="my-4" />
                <div className="text-xl font-bold">{service.price}</div>
              </CardContent>
              <CardFooter>
                <Link href="/booking" className="w-full">
                  <Button className="w-full gap-2">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Look Your Best?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Book your appointment today and experience the BarberStyle difference.
            </p>
            <div className="mt-8">
              <Link href="/booking">
                <Button size="lg" variant="secondary" className="gap-2">
                  Book Your Appointment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
