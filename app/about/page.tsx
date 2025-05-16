import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, MapPin, Phone, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Barbershop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About BarberStyle</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
              Premium barbershop with a tradition of excellence since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">A tradition of excellence in barbering</p>
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Founded in 2010, BarberStyle began with a simple mission: to provide exceptional grooming services in a
              comfortable, welcoming environment. What started as a small shop with two chairs has grown into a premier
              barbershop destination.
            </p>
            <p>
              Our founder, Michael Thompson, brought over 15 years of experience when he opened our doors. His vision
              was to combine traditional barbering techniques with modern styles and premium service.
            </p>
            <p>
              Today, BarberStyle is proud to have a team of skilled professionals who share our commitment to quality,
              style, and customer satisfaction. We've built our reputation on attention to detail and personalized
              service that keeps our clients coming back.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Barbershop early days"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Barbershop today" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Star className="h-10 w-10" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every haircut, every shave, and every interaction with our clients.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Community",
                description:
                  "We're more than a barbershop – we're a community hub where people connect and relationships are built.",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Expertise",
                description:
                  "Our barbers are skilled professionals who continuously refine their craft and stay current with trends.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="mb-2 text-primary">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">Skilled professionals dedicated to their craft</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Alex Johnson",
              role: "Master Barber",
              image: "/placeholder.svg?height=500&width=500",
              description: "With over 10 years of experience, Alex specializes in classic cuts and hot towel shaves.",
            },
            {
              name: "Sam Rodriguez",
              role: "Style Expert",
              image: "/placeholder.svg?height=500&width=500",
              description: "Sam brings creativity and precision to every haircut, known for modern styles and fades.",
            },
            {
              name: "Jordan Smith",
              role: "Beard Specialist",
              image: "/placeholder.svg?height=500&width=500",
              description:
                "Jordan has mastered the art of beard sculpting and maintenance with meticulous attention to detail.",
            },
            {
              name: "Taylor Williams",
              role: "Color Specialist",
              image: "/placeholder.svg?height=500&width=500",
              description:
                "Taylor's expertise in hair coloring helps clients achieve their perfect look with precision.",
            },
            {
              name: "Morgan Lee",
              role: "Junior Barber",
              image: "/placeholder.svg?height=500&width=500",
              description:
                "The newest addition to our team, Morgan brings fresh perspective and enthusiasm to every client.",
            },
            {
              name: "Michael Thompson",
              role: "Founder & Barber",
              image: "/placeholder.svg?height=500&width=500",
              description: "Our founder still works the chair, bringing decades of experience and passion to the shop.",
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
            </Card>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Visit Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">Conveniently located in the heart of the city</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Find us at</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">123 Barber Street</p>
                    <p className="text-muted-foreground">Stylish City, SC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Saturday: 10:00 - 18:00</p>
                    <p className="text-muted-foreground">Sunday: 10:00 - 16:00</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/booking">
                    <Button className="w-full gap-2">
                      Book an Appointment <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt="Map location" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experience the BarberStyle Difference</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join our community of satisfied clients and discover why we're the premier barbershop in the city.
            </p>
            <div className="mt-8">
              <Link href="/booking">
                <Button size="lg" variant="secondary" className="gap-2">
                  Book Your First Visit <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
