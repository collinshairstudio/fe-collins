import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Branch-specific services data
const branchServices = {
  downtown: {
    name: "Downtown",
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors. Includes consultation, shampoo, and styling.",
        price: 25,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Classic+Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection. Includes hot towel and beard oil treatment.",
        price: 15,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Beard+Trim",
      },
      {
        id: "shave",
        name: "Hot Towel Shave",
        description:
          "Luxurious straight razor shave with hot towel treatment. Includes pre-shave oil and aftershave balm.",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Hot+Towel+Shave",
      },
      {
        id: "combo",
        name: "Haircut & Beard Combo",
        description: "Complete grooming package with haircut and beard trim. Our most popular service.",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Combo",
      },
    ],
    genderServices: ["men"],
  },
  uptown: {
    name: "Uptown",
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors. Includes consultation, shampoo, and styling.",
        price: 30,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Classic+Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection. Includes hot towel and beard oil treatment.",
        price: 20,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Beard+Trim",
      },
      {
        id: "womens-cut",
        name: "Women's Haircut",
        description: "Precision cut for women of all hair types. Includes consultation, shampoo, and styling.",
        price: 45,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Womens+Cut",
      },
      {
        id: "color",
        name: "Hair Color",
        description: "Professional hair coloring service. Includes consultation and styling.",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=400&width=600&text=Hair+Color",
      },
      {
        id: "perm-short",
        name: "Perm - Short Hair",
        description: "Permanent wave treatment for short hair. Includes consultation and styling.",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=400&width=600&text=Perm+Short",
      },
      {
        id: "perm-long",
        name: "Perm - Long Hair",
        description: "Permanent wave treatment for long hair. Includes consultation and styling.",
        price: 85,
        duration: 120,
        image: "/placeholder.svg?height=400&width=600&text=Perm+Long",
      },
    ],
    genderServices: ["men", "women"],
  },
  westside: {
    name: "Westside",
    services: [
      {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional haircut with clippers and scissors. Includes consultation, shampoo, and styling.",
        price: 25,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Classic+Haircut",
      },
      {
        id: "beard",
        name: "Beard Trim",
        description: "Shape and trim your beard to perfection. Includes hot towel and beard oil treatment.",
        price: 15,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Beard+Trim",
      },
      {
        id: "womens-cut",
        name: "Women's Haircut",
        description: "Precision cut for women of all hair types. Includes consultation, shampoo, and styling.",
        price: 40,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Womens+Cut",
      },
      {
        id: "blowout",
        name: "Blowout & Style",
        description: "Professional blowout and styling. Perfect for special occasions.",
        price: 35,
        duration: 60,
        image: "/placeholder.svg?height=400&width=600&text=Blowout",
      },
      {
        id: "perm-short",
        name: "Perm - Short Hair",
        description: "Permanent wave treatment for short hair. Includes consultation and styling.",
        price: 60,
        duration: 120,
        image: "/placeholder.svg?height=400&width=600&text=Perm+Short",
      },
      {
        id: "perm-long",
        name: "Perm - Long Hair",
        description: "Permanent wave treatment for long hair. Includes consultation and styling.",
        price: 85,
        duration: 120,
        image: "/placeholder.svg?height=400&width=600&text=Perm+Long",
      },
    ],
    genderServices: ["men", "women"],
  },
}

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium transition-colors text-primary">
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

      <div className="container py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Our Services</h1>
          <p className="text-muted-foreground">Professional haircuts and grooming services at all our branches.</p>
        </div>

        <Tabs defaultValue="downtown" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="downtown">Downtown Branch</TabsTrigger>
            <TabsTrigger value="uptown">Uptown Branch</TabsTrigger>
            <TabsTrigger value="westside">Westside Branch</TabsTrigger>
          </TabsList>

          {Object.entries(branchServices).map(([branchId, branch]) => (
            <TabsContent key={branchId} value={branchId}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{branch.name} Branch Services</h2>
                <p className="text-muted-foreground">
                  {branch.genderServices.includes("men") && branch.genderServices.includes("women")
                    ? "We offer a full range of services for both men and women at this location."
                    : branch.genderServices.includes("men")
                      ? "This location specializes in men's grooming services only."
                      : "This location specializes in women's hair services only."}
                </p>
              </div>

              <div className="grid gap-8">
                {branch.services.map((service, index) => (
                  <div key={service.id}>
                    {index > 0 && <Separator className="my-8" />}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold">{service.name}</h2>
                        <div className="mt-2 flex items-center text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>
                            {service.duration / 60} hour{service.duration > 60 ? "s" : ""}
                          </span>
                        </div>
                        <p className="mt-4">{service.description}</p>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-2xl font-bold">${service.price}</span>
                          <Link href={`/booking?branch=${branchId}&service=${service.id}`}>
                            <Button>Book Now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-lg bg-muted p-8 text-center">
                <h2 className="text-2xl font-bold">Visit Our {branch.name} Branch</h2>
                <p className="mt-2 text-muted-foreground">
                  Experience our services in person at our {branch.name.toLowerCase()} location.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <Link href={`/branches/${branchId}`}>
                    <Button variant="outline">View Branch Details</Button>
                  </Link>
                  <Link href={`/booking?branch=${branchId}`}>
                    <Button>Book Appointment</Button>
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
