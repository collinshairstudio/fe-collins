import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, MapPin, Phone, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Branch data
const branchesData = {
  downtown: {
    id: "downtown",
    name: "Downtown",
    address: "123 Main Street, Downtown",
    phone: "(123) 456-7890",
    email: "downtown@clipmaster.com",
    description:
      "Our flagship location in the heart of downtown, offering a full range of men's grooming services in a classic barbershop atmosphere.",
    image: "/placeholder.svg?height=500&width=1200&text=Downtown+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors",
        price: 25,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection",
        price: 15,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Beard+Trim",
      },
      {
        id: "shave",
        name: "Hot Towel Shave",
        description: "Luxurious straight razor shave with hot towel treatment",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Hot+Towel+Shave",
      },
      {
        id: "combo",
        name: "Haircut & Beard Combo",
        description: "Complete grooming package with haircut and beard trim",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Combo",
      },
    ],
    barbers: [
      {
        id: "james",
        name: "James Wilson",
        specialty: "Classic Cuts",
        image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
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
        image: "/placeholder.svg?height=300&width=300&text=Michael+Brown",
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
        image: "/placeholder.svg?height=300&width=300&text=David+Martinez",
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=David+Work+1",
          "/placeholder.svg?height=200&width=200&text=David+Work+2",
          "/placeholder.svg?height=200&width=200&text=David+Work+3",
        ],
      },
    ],
    genderServices: ["men"],
  },
  uptown: {
    id: "uptown",
    name: "Uptown",
    address: "456 Park Avenue, Uptown",
    phone: "(234) 567-8901",
    email: "uptown@clipmaster.com",
    description:
      "Our upscale location in the trendy uptown district, offering premium services for both men and women in a modern, luxurious setting.",
    image: "/placeholder.svg?height=500&width=1200&text=Uptown+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors",
        price: 30,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection",
        price: 20,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Beard+Trim",
      },
      {
        id: "womens-cut",
        name: "Women's Haircut",
        description: "Precision cut for women of all hair types",
        price: 45,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Womens+Cut",
      },
      {
        id: "color",
        name: "Hair Color",
        description: "Professional hair coloring service",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=200&width=400&text=Hair+Color",
      },
      {
        id: "perm-short",
        name: "Perm - Short Hair",
        description: "Permanent wave treatment for short hair",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=200&width=400&text=Perm+Short",
      },
      {
        id: "perm-long",
        name: "Perm - Long Hair",
        description: "Permanent wave treatment for long hair",
        price: 85,
        duration: 120,
        image: "/placeholder.svg?height=200&width=400&text=Perm+Long",
      },
    ],
    barbers: [
      {
        id: "robert",
        name: "Robert Davis",
        specialty: "Beard Styling",
        image: "/placeholder.svg?height=300&width=300&text=Robert+Davis",
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
        image: "/placeholder.svg?height=300&width=300&text=Emily+Taylor",
        gender: "women",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Emily+Work+1",
          "/placeholder.svg?height=200&width=200&text=Emily+Work+2",
          "/placeholder.svg?height=200&width=200&text=Emily+Work+3",
        ],
      },
    ],
    genderServices: ["men", "women"],
  },
  westside: {
    id: "westside",
    name: "Westside",
    address: "789 Ocean Drive, Westside",
    phone: "(345) 678-9012",
    email: "westside@clipmaster.com",
    description:
      "Our relaxed westside location with ocean views, offering a full range of services for men and women in a laid-back, beachy atmosphere.",
    image: "/placeholder.svg?height=500&width=1200&text=Westside+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors",
        price: 25,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection",
        price: 15,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Beard+Trim",
      },
      {
        id: "womens-cut",
        name: "Women's Haircut",
        description: "Precision cut for women of all hair types",
        price: 40,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Womens+Cut",
      },
      {
        id: "blowout",
        name: "Blowout & Style",
        description: "Professional blowout and styling",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=200&width=400&text=Blowout",
      },
      {
        id: "perm-short",
        name: "Perm - Short Hair",
        description: "Permanent wave treatment for short hair",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=200&width=400&text=Perm+Short",
      },
      {
        id: "perm-long",
        name: "Perm - Long Hair",
        description: "Permanent wave treatment for long hair",
        price: 85,
        duration: 120,
        image: "/placeholder.svg?height=200&width=400&text=Perm+Long",
      },
    ],
    barbers: [
      {
        id: "jennifer",
        name: "Jennifer Lopez",
        specialty: "Precision Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Jennifer+Lopez",
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
        image: "/placeholder.svg?height=300&width=300&text=Alex+Rodriguez",
        gender: "men",
        portfolio: [
          "/placeholder.svg?height=200&width=200&text=Alex+Work+1",
          "/placeholder.svg?height=200&width=200&text=Alex+Work+2",
          "/placeholder.svg?height=200&width=200&text=Alex+Work+3",
        ],
      },
    ],
    genderServices: ["men", "women"],
  },
}

export default function BranchPage({ params }: { params: { id: string } }) {
  const branchId = params.id
  const branch = branchesData[branchId as keyof typeof branchesData]

  if (!branch) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Branch Not Found</h1>
        <p className="mb-8">The branch you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Branch Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src={branch.image || "/placeholder.svg"} alt={branch.name} fill className="object-cover" priority />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
          <div className="max-w-2xl">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{branch.name} Branch</h1>
            <p className="mt-4 text-lg">{branch.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/booking?branch=${branch.id}`}>
                <Button size="lg">Book Appointment</Button>
              </Link>
              <a href={`tel:${branch.phone}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Content */}
      <section className="container py-12">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="info">Information</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="barbers">Our Team</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">{branch.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">{branch.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Hours of Operation</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>{branch.hours.monday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday</span>
                      <span>{branch.hours.tuesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday</span>
                      <span>{branch.hours.wednesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday</span>
                      <span>{branch.hours.thursday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>{branch.hours.friday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>{branch.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>{branch.hours.sunday}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="bg-muted h-[400px] rounded-lg overflow-hidden">
                {/* This would be a map in a real implementation */}
                <div className="h-full w-full flex items-center justify-center bg-muted">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                  <span className="ml-2 text-lg text-muted-foreground">Map of {branch.name} Branch</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Our Services</h2>
              <p className="text-muted-foreground">
                {branch.genderServices.includes("men") && branch.genderServices.includes("women")
                  ? "We offer a full range of services for both men and women."
                  : branch.genderServices.includes("men")
                    ? "We specialize in men's grooming services."
                    : "We specialize in women's hair services."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {branch.services.map((service) => (
                <Card key={service.id}>
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">${service.price}</span>
                        <span className="text-sm text-muted-foreground">
                          {service.duration / 60} hour{service.duration > 60 ? "s" : ""}
                        </span>
                      </div>
                      <Link href={`/booking?branch=${branch.id}&service=${service.id}`} className="block mt-4">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="barbers">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
              <p className="text-muted-foreground">Our talented team of professionals at the {branch.name} branch.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {branch.barbers.map((barber) => (
                <Card key={barber.id}>
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={barber.image || "/placeholder.svg"}
                        alt={barber.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{barber.name}</h3>
                      <p className="text-primary">{barber.specialty}</p>
                      <p className="text-sm text-muted-foreground mt-1 mb-4">
                        {barber.gender === "men" ? "Men's Hairstylist" : "Women's Hairstylist"}
                      </p>

                      <h4 className="font-medium mb-2">Portfolio</h4>
                      <div className="grid grid-cols-3 gap-2 mb-4">
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

                      <Link href={`/barbers/${barber.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button variant="outline" className="w-full mb-2">
                          View Profile
                        </Button>
                      </Link>
                      <Link href={`/booking?branch=${branch.id}&barber=${barber.id}`}>
                        <Button className="w-full">Book with {barber.name.split(" ")[0]}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
                  <MapPin className="h-4 w-4" />
                  <span className="text-muted-foreground">{branch.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-muted-foreground">{branch.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-muted-foreground">{branch.email}</span>
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
