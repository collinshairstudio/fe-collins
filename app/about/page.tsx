import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Scissors, Star, Users, Award, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">ClipMaster</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/barbers" className="text-sm font-medium transition-colors hover:text-primary">
              Our Barbers
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors text-primary">
              About Us
            </Link>
            <Link href="/academy" className="text-sm font-medium transition-colors hover:text-primary">
              Academy
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/booking">
              <Button>Book Appointment</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=About+ClipMaster"
            alt="About ClipMaster"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
          <div className="max-w-2xl">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About ClipMaster</h1>
            <p className="mt-4 text-lg">
              Discover the story behind our premium barbershop and our commitment to exceptional grooming services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, ClipMaster began as a single chair in a small downtown location with a simple mission: to
              provide exceptional grooming services in a welcoming environment.
            </p>
            <p className="mb-4">
              Over the years, we've grown to three distinct locations across the city, each with its own unique
              character but all sharing the same commitment to quality, craftsmanship, and customer satisfaction.
            </p>
            <p>
              Today, ClipMaster is recognized as one of the premier barbershops in the region, known for our skilled
              barbers, attention to detail, and the perfect blend of traditional techniques with modern styles.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our+Story"
              alt="ClipMaster Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every haircut, every service, and every customer interaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building relationships and creating a welcoming space for everyone in our community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  We're passionate about our craft and dedicated to continuous learning and improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Branches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Downtown"
                  alt="Downtown Branch"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Downtown</h3>
                <p className="text-muted-foreground mb-4">
                  Our flagship location in the heart of downtown, offering a full range of men's grooming services in a
                  classic barbershop atmosphere.
                </p>
                <Link href="/branches/downtown">
                  <Button className="w-full">Visit Branch</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Uptown"
                  alt="Uptown Branch"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Uptown</h3>
                <p className="text-muted-foreground mb-4">
                  Our upscale location in the trendy uptown district, offering premium services for both men and women
                  in a modern, luxurious setting.
                </p>
                <Link href="/branches/uptown">
                  <Button className="w-full">Visit Branch</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Westside"
                  alt="Westside Branch"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Westside</h3>
                <p className="text-muted-foreground mb-4">
                  Our relaxed westside location with ocean views, offering a full range of services for men and women in
                  a laid-back, beachy atmosphere.
                </p>
                <Link href="/branches/westside">
                  <Button className="w-full">Visit Branch</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                comment:
                  "I've been coming to ClipMaster for years and have never been disappointed. The attention to detail and consistent quality keeps me coming back.",
                rating: 5,
              },
              {
                name: "Michael T.",
                comment:
                  "The atmosphere is great, the barbers are skilled, and the service is always top-notch. ClipMaster is the best barbershop in the city.",
                rating: 5,
              },
              {
                name: "Robert S.",
                comment:
                  "From the moment you walk in, you feel welcome. The staff is friendly, professional, and truly cares about giving you the best experience possible.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                  <p className="mb-4">"{testimonial.comment}"</p>
                  <p className="font-bold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-bold">ClipMaster</span>
              </div>
              <p className="text-muted-foreground">
                Premium barbershop providing quality haircuts and grooming services.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/barbers" className="text-muted-foreground hover:text-foreground">
                    Our Barbers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  <span className="text-muted-foreground">123 Main Street, Downtown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  <span className="text-muted-foreground">info@clipmaster.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <p>Monday - Friday</p>
                <p>9:00 AM - 8:00 PM</p>
                <p>Saturday</p>
                <p>8:00 AM - 6:00 PM</p>
                <p>Sunday</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} ClipMaster Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
