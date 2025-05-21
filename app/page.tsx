import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Scissors, MapPin, Phone, Users, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarberCarousel } from "@/components/barber-carousel"

export default function Home() {
  const barbers = [
    {
      name: "Alex Johnson",
      role: "Master Barber",
      image: "/placeholder.svg?height=500&width=500",
      description: "Specializing in classic cuts and hot towel shaves with over 10 years experience",
    },
    {
      name: "Sam Rodriguez",
      role: "Style Expert",
      image: "/placeholder.svg?height=500&width=500",
      description: "Known for modern styles and precision fades, creating trendsetting looks",
    },
    {
      name: "Jordan Smith",
      role: "Beard Specialist",
      image: "/placeholder.svg?height=500&width=500",
      description: "Expert in beard sculpting and maintenance, helping you achieve the perfect look",
    },
    {
      name: "Taylor Williams",
      role: "Color Specialist",
      image: "/placeholder.svg?height=500&width=500",
      description: "Expert in hair coloring and highlights, bringing your vision to life with vibrant results",
    },
    {
      name: "Morgan Lee",
      role: "Junior Barber",
      image: "/placeholder.svg?height=500&width=500",
      description: "Fresh talent with innovative ideas and techniques for contemporary styles",
    },
  ]
  return (
    <div className="flex flex-col">
      {/* Hero Section - Modernized with Fixed Layout */}
      <section className="relative w-full">
        {/* Main Hero Content - Fixed Height */}
        <div className="relative h-[75vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Barbershop interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Premium <span className="text-primary">Barbershop</span> Experience
                </h1>
                <p className="mt-6 text-lg text-white/90 md:text-xl">
                  Expert haircuts, beard trims, and grooming services for the modern gentleman.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/booking">
                    <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
                      Book Appointment <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modernized Branch Information - Separate Section */}
        <div className="bg-slate-900 py-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: "CABANG 1",
                  address: "Jl. Barber Street No. 123, Jakarta Selatan",
                  phone: "+62 21 1234 5678",
                  hours: "09:00 - 21:00",
                },
                {
                  title: "CABANG 2",
                  address: "Jl. Style Avenue No. 456, Jakarta Barat",
                  phone: "+62 21 2345 6789",
                  hours: "09:00 - 21:00",
                },
                {
                  title: "Academy",
                  address: "Jl. Main Street No. 789, Jakarta Pusat",
                  phone: "+62 21 3456 7890",
                  hours: "09:00 - 21:00",
                }
              ].map((branch, index) => (
                <div 
                  key={index}
                  className="group overflow-hidden rounded-lg bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex flex-col space-y-3 p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-primary">{branch.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-white">
                        <div className="rounded-full bg-primary/20 p-2">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="rounded-full bg-primary/20 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{branch.hours}</span>
                      </div>
                    </div>
                    <div className="mt-2 border-t border-white/10 pt-3">
                      <Link href="/contact">
                        <Button variant="link" className="px-0 text-primary hover:text-primary/80">
                          Get Directions <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Slightly Enhanced */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Our Expertise
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Premium Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover our range of professional barbering services designed for the modern gentleman
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            <Card key={index} className="group overflow-hidden border-none shadow-lg transition-transform duration-300 hover:shadow-xl">
              <div className="relative h-56">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-sm font-bold text-white">
                  {service.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/booking" className="w-full">
                  <Button variant="outline" className="w-full gap-2 hover:bg-primary hover:text-white">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg" className="gap-2">
              View All Services <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us - Enhanced with Redesigned Cards */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Our Promise
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experience the difference at BarberStyle with our commitment to excellence
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Expert Barbers",
                description: "Our team of skilled professionals deliver precision cuts and styles with years of experience",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Convenient Hours",
                description: "Open 7 days a week with extended evening hours to fit your busy schedule",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Easy Booking",
                description: "Book online anytime with our simple appointment system, no waiting in lines",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Team - Enhanced */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center">
            <Users className="mr-2 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-primary">Our Team</h3>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Meet Our Barbers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Skilled professionals dedicated to their craft and your satisfaction
          </p>
        </div>

        <BarberCarousel barbers={barbers} />

        <div className="mt-12 text-center">
          <Link href="/about">
            <Button variant="outline" size="lg" className="gap-2">
              View All Barbers <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Barbershop atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
              Book Now
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready for a Fresh Look?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Book your appointment today and experience the BarberStyle difference. Join our community of satisfied clients.
            </p>
            <div className="mt-10">
              <Link href="/booking">
                <Button size="lg" variant="secondary" className="gap-2 text-primary">
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