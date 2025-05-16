import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Scissors, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Barbershop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Premium Barbershop Experience
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
              Expert haircuts, beard trims, and grooming services for the modern gentleman. Book your appointment today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/booking">
                <Button size="lg" className="gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">We offer a range of premium barbering services</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Classic Haircut",
              description: "Precision cut with expert styling and finish",
              price: "$25",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Beard Trim",
              description: "Shape and style your beard for a clean, polished look",
              price: "$15",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Hot Towel Shave",
              description: "Traditional straight razor shave with hot towel treatment",
              price: "$30",
              image: "/placeholder.svg?height=400&width=600",
            },
          ].map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <span className="text-lg font-bold">{service.price}</span>
                <Link href="/booking">
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">Experience the difference at BarberStyle</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Scissors className="h-10 w-10" />,
                title: "Expert Barbers",
                description: "Our team of skilled professionals deliver precision cuts and styles",
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: "Premium Products",
                description: "We use only the highest quality products for all our services",
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Convenient Hours",
                description: "Open 7 days a week with extended evening hours",
              },
              {
                icon: <Calendar className="h-10 w-10" />,
                title: "Easy Booking",
                description: "Book online anytime with our simple appointment system",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="mb-2 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Team */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet Our Barbers</h2>
          <p className="mt-4 text-lg text-muted-foreground">Skilled professionals dedicated to their craft</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Alex Johnson",
              role: "Master Barber",
              image: "/placeholder.svg?height=500&width=500",
              description: "Specializing in classic cuts and hot towel shaves",
            },
            {
              name: "Sam Rodriguez",
              role: "Style Expert",
              image: "/placeholder.svg?height=500&width=500",
              description: "Known for modern styles and precision fades",
            },
            {
              name: "Jordan Smith",
              role: "Beard Specialist",
              image: "/placeholder.svg?height=500&width=500",
              description: "Expert in beard sculpting and maintenance",
            },
          ].map((barber, index) => (
            <Card key={index} className="overflow-hidden">
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
                <Link href="/booking">
                  <Button>Book with {barber.name.split(" ")[0]}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready for a Fresh Look?</h2>
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
