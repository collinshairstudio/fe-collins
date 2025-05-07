import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Scissors, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
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

      {/* Hero Section with Branch Selection */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Barbershop interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Premium Haircuts & Grooming</h1>
          <p className="mt-6 max-w-md text-lg">
            Experience the art of traditional barbering with modern techniques at ClipMaster.
          </p>
          <div className="mt-8 w-full max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Our Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/branches/downtown">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Downtown+Branch"
                    alt="Downtown Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">Downtown</h3>
                    <p className="text-sm mt-2 text-white/80">123 Main Street, Downtown</p>
                  </div>
                </div>
              </Link>
              <Link href="/branches/uptown">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Uptown+Branch"
                    alt="Uptown Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">Uptown</h3>
                    <p className="text-sm mt-2 text-white/80">456 Park Avenue, Uptown</p>
                  </div>
                </div>
              </Link>
              <Link href="/branches/westside">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Westside+Branch"
                    alt="Westside Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">Westside</h3>
                    <p className="text-sm mt-2 text-white/80">789 Ocean Drive, Westside</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Barbers</h3>
              <p className="text-muted-foreground">
                Our team of skilled barbers are trained in the latest techniques and styles.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Convenient Booking</h3>
              <p className="text-muted-foreground">
                Book your appointment online anytime, anywhere with our easy-to-use system.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Experience</h3>
              <p className="text-muted-foreground">
                Enjoy complimentary beverages and a relaxing atmosphere during your visit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <Link href="/services">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Services
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Haircut"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Classic Haircut</h3>
                  <p className="text-muted-foreground mb-4">Traditional haircut with clippers and scissors.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$25</span>
                    <Link href="/booking?service=haircut">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Beard Trim"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Beard Trim</h3>
                  <p className="text-muted-foreground mb-4">Shape and trim your beard to perfection.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$15</span>
                    <Link href="/booking?service=beard">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Hot Towel Shave"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hot Towel Shave</h3>
                  <p className="text-muted-foreground mb-4">Luxurious straight razor shave with hot towel treatment.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$35</span>
                    <Link href="/booking?service=shave">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
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
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <p>123 Main Street, Downtown</p>
                </div>
                <Link href="/branches/downtown">
                  <Button className="w-full">View Branch</Button>
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
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <p>456 Park Avenue, Uptown</p>
                </div>
                <Link href="/branches/uptown">
                  <Button className="w-full">View Branch</Button>
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
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <p>789 Ocean Drive, Westside</p>
                </div>
                <Link href="/branches/westside">
                  <Button className="w-full">View Branch</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Barbers Preview */}
      <section className="container py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Meet Our Barbers</h2>
          <Link href="/barbers">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Barbers
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "James Wilson", specialty: "Classic Cuts", branch: "Downtown" },
            { name: "Michael Brown", specialty: "Fades & Designs", branch: "Uptown" },
            { name: "Sarah Johnson", specialty: "Women's Styling", branch: "Westside" },
            { name: "David Martinez", specialty: "Modern Styles", branch: "Downtown" },
          ].map((barber, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${encodeURIComponent(barber.name)}`}
                    alt={barber.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{barber.name}</h3>
                  <p className="text-muted-foreground text-sm">{barber.specialty}</p>
                  <p className="text-primary text-sm mb-2">{barber.branch} Branch</p>
                  <Link href={`/barbers/${barber.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
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
                comment: "Best haircut I've ever had. The attention to detail is amazing.",
                rating: 5,
              },
              {
                name: "Michael T.",
                comment: "Great atmosphere and professional service. Will definitely be back!",
                rating: 5,
              },
              {
                name: "Robert S.",
                comment: "Love the online booking system. Makes it so easy to schedule appointments.",
                rating: 4,
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

      {/* Academy Section */}
      <section className="container py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">ClipMaster Academy</h2>
          <Link href="/academy">
            <Button variant="outline" className="mt-4 md:mt-0">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Barbering+Academy"
              alt="ClipMaster Academy"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Master the Art of Barbering</h3>
            <p className="mb-4">
              ClipMaster Academy offers comprehensive training programs for aspiring barbers and stylists. Learn from
              industry professionals and gain hands-on experience in our state-of-the-art facilities.
            </p>
            <p className="mb-6">
              Our graduates are highly sought after in the industry, with many going on to work in top barbershops or
              even opening their own successful businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/academy">
                <Button>Explore Academy</Button>
              </Link>
              <Link href="/academy#alumni">
                <Button variant="outline">Meet Our Alumni</Button>
              </Link>
            </div>
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
                  <MapPin className="h-4 w-4" />
                  <span className="text-muted-foreground">123 Main Street, Downtown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="text-muted-foreground">info@clipmaster.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe to get updates on special offers and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
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
