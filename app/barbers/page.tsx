import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Scissors, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Branch-specific barbers data
const branchBarbers = {
  downtown: {
    name: "Downtown",
    barbers: [
      {
        id: "james",
        name: "James Wilson",
        specialty: "Classic Cuts",
        experience: 8,
        bio: "James has been cutting hair for over 8 years and specializes in classic, timeless styles. His attention to detail and precision cutting techniques have earned him a loyal following.",
        image: "/placeholder.svg?height=400&width=400&text=James+Wilson",
        rating: 4.9,
        reviews: 124,
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=James+Work+1",
          "/placeholder.svg?height=200&width=200&text=James+Work+2",
          "/placeholder.svg?height=200&width=200&text=James+Work+3",
        ],
      },
      {
        id: "michael",
        name: "Michael Brown",
        specialty: "Fades & Designs",
        experience: 6,
        bio: "Michael is known for his exceptional fades and creative hair designs. With 6 years of experience, he brings a modern touch to traditional barbering and stays current with the latest trends.",
        image: "/placeholder.svg?height=400&width=400&text=Michael+Brown",
        rating: 4.8,
        reviews: 98,
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Michael+Work+1",
          "/placeholder.svg?height=200&width=200&text=Michael+Work+2",
          "/placeholder.svg?height=200&width=200&text=Michael+Work+3",
        ],
      },
      {
        id: "david",
        name: "David Martinez",
        specialty: "Modern Styles",
        experience: 5,
        bio: "David brings fresh, contemporary styles to our shop. With 5 years in the industry, he excels at creating modern looks while respecting traditional barbering techniques.",
        image: "/placeholder.svg?height=400&width=400&text=David+Martinez",
        rating: 4.7,
        reviews: 87,
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=David+Work+1",
          "/placeholder.svg?height=200&width=200&text=David+Work+2",
          "/placeholder.svg?height=200&width=200&text=David+Work+3",
        ],
      },
    ],
  },
  uptown: {
    name: "Uptown",
    barbers: [
      {
        id: "robert",
        name: "Robert Davis",
        specialty: "Beard Styling",
        experience: 10,
        bio: "Robert is our beard specialist with a decade of experience. His expertise in beard shaping, trimming, and maintenance has made him the go-to barber for facial hair styling.",
        image: "/placeholder.svg?height=400&width=400&text=Robert+Davis",
        rating: 4.9,
        reviews: 156,
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Robert+Work+1",
          "/placeholder.svg?height=200&width=200&text=Robert+Work+2",
          "/placeholder.svg?height=200&width=200&text=Robert+Work+3",
        ],
      },
      {
        id: "emily",
        name: "Emily Taylor",
        specialty: "Color & Highlights",
        experience: 7,
        bio: "Emily specializes in hair color, highlights, and creative styling. With 7 years of experience, she provides exceptional service for clients seeking a fresh new look.",
        image: "/placeholder.svg?height=400&width=400&text=Emily+Taylor",
        rating: 4.8,
        reviews: 112,
        gender: "women",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Emily+Work+1",
          "/placeholder.svg?height=200&width=200&text=Emily+Work+2",
          "/placeholder.svg?height=200&width=200&text=Emily+Work+3",
        ],
      },
    ],
  },
  westside: {
    name: "Westside",
    barbers: [
      {
        id: "jennifer",
        name: "Jennifer Lopez",
        specialty: "Precision Cuts",
        experience: 9,
        bio: "Jennifer is known for her precision cutting techniques and attention to detail. With 9 years of experience, she creates stunning styles tailored to each client's unique features.",
        image: "/placeholder.svg?height=400&width=400&text=Jennifer+Lopez",
        rating: 4.9,
        reviews: 134,
        gender: "women",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Jennifer+Work+1",
          "/placeholder.svg?height=200&width=200&text=Jennifer+Work+2",
          "/placeholder.svg?height=200&width=200&text=Jennifer+Work+3",
        ],
      },
      {
        id: "alex",
        name: "Alex Rodriguez",
        specialty: "Textured Cuts",
        experience: 6,
        bio: "Alex specializes in creating texture and movement in hair. With 6 years of experience, he excels at working with all hair types to create dynamic, easy-to-maintain styles.",
        image: "/placeholder.svg?height=400&width=400&text=Alex+Rodriguez",
        rating: 4.7,
        reviews: 92,
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Alex+Work+1",
          "/placeholder.svg?height=200&width=200&text=Alex+Work+2",
          "/placeholder.svg?height=200&width=200&text=Alex+Work+3",
        ],
      },
    ],
  },
}

export default function BarbersPage() {
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
            <Link href="/barbers" className="text-sm font-medium transition-colors text-primary">
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

      <div className="container py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Our Barbers</h1>
          <p className="text-muted-foreground">
            Meet our team of professional barbers and stylists across all branches.
          </p>
        </div>

        <Tabs defaultValue="downtown" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="downtown">Downtown Branch</TabsTrigger>
            <TabsTrigger value="uptown">Uptown Branch</TabsTrigger>
            <TabsTrigger value="westside">Westside Branch</TabsTrigger>
          </TabsList>

          {Object.entries(branchBarbers).map(([branchId, branch]) => (
            <TabsContent key={branchId} value={branchId}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{branch.name} Branch Team</h2>
                <p className="text-muted-foreground">Our talented professionals at the {branch.name} location.</p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {branch.barbers.map((barber) => (
                  <Card key={barber.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-80 w-full">
                        <Image
                          src={barber.image || "/placeholder.svg"}
                          alt={barber.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold">{barber.name}</h2>
                        <p className="text-primary font-medium">{barber.specialty}</p>
                        <p className="text-sm text-muted-foreground">
                          {barber.gender === "men" ? "Men's Hairstylist" : "Women's Hairstylist"}
                        </p>
                        <div className="mt-2 flex items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 font-medium">{barber.rating}</span>
                          </div>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{barber.reviews} reviews</span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{barber.experience} years</span>
                        </div>

                        <h3 className="mt-4 font-medium">Portfolio</h3>
                        <div className="mt-2 grid grid-cols-3 gap-2 mb-4">
                          {barber.portfolio.map((image, index) => (
                            <div key={index} className="relative h-16 w-full rounded overflow-hidden">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${barber.name}'s work ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <p className="mt-2 text-muted-foreground line-clamp-3">{barber.bio}</p>
                        <div className="mt-6">
                          <Link href={`/booking?branch=${branchId}&barber=${barber.id}`}>
                            <Button className="w-full">Book with {barber.name.split(" ")[0]}</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 rounded-lg bg-muted p-8 text-center">
                <h2 className="text-2xl font-bold">Visit Our {branch.name} Branch</h2>
                <p className="mt-2 text-muted-foreground">
                  Meet our talented team in person at our {branch.name.toLowerCase()} location.
                </p>
                <div className="mt-6">
                  <Link href={`/branches/${branchId}`}>
                    <Button variant="outline">View Branch Details</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-12">
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
                  <Link href="/booking" className="text-muted-foreground hover:text-foreground">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  <span className="text-muted-foreground">123 Main Street, New York</span>
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
