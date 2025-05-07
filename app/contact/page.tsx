import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Scissors, MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Branch data
const branches = [
  {
    id: "downtown",
    name: "Downtown",
    address: "123 Main Street, Downtown",
    phone: "(123) 456-7890",
    email: "downtown@clipmaster.com",
    image: "/placeholder.svg?height=300&width=600&text=Downtown+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
  },
  {
    id: "uptown",
    name: "Uptown",
    address: "456 Park Avenue, Uptown",
    phone: "(234) 567-8901",
    email: "uptown@clipmaster.com",
    image: "/placeholder.svg?height=300&width=600&text=Uptown+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
  },
  {
    id: "westside",
    name: "Westside",
    address: "789 Ocean Drive, Westside",
    phone: "(345) 678-9012",
    email: "westside@clipmaster.com",
    image: "/placeholder.svg?height=300&width=600&text=Westside+Branch",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
  },
]

export default function ContactPage() {
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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/academy" className="text-sm font-medium transition-colors hover:text-primary">
              Academy
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors text-primary">
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
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">
            Get in touch with us for appointments, inquiries, or feedback. We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <select
                      id="branch"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a branch</option>
                      <option value="downtown">Downtown</option>
                      <option value="uptown">Uptown</option>
                      <option value="westside">Westside</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Appointment Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Branches</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="downtown" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="downtown">Downtown</TabsTrigger>
                    <TabsTrigger value="uptown">Uptown</TabsTrigger>
                    <TabsTrigger value="westside">Westside</TabsTrigger>
                  </TabsList>

                  {branches.map((branch) => (
                    <TabsContent key={branch.id} value={branch.id}>
                      <div className="space-y-4">
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                          <Image
                            src={branch.image || "/placeholder.svg"}
                            alt={branch.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-3">
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
                            <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                            <div>
                              <h3 className="font-medium">Email</h3>
                              <p className="text-muted-foreground">{branch.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                            <div>
                              <h3 className="font-medium">Hours</h3>
                              <div className="text-muted-foreground text-sm">
                                <p>Monday - Friday: {branch.hours.monday}</p>
                                <p>Saturday: {branch.hours.saturday}</p>
                                <p>Sunday: {branch.hours.sunday}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4">
                          <Link href={`/branches/${branch.id}`}>
                            <Button variant="outline" className="w-full">
                              View Branch Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corporate Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">789 Corporate Blvd, Suite 500, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">corporate@clipmaster.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="bg-muted h-[400px] rounded-lg overflow-hidden">
            {/* This would be a map in a real implementation */}
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <MapPin className="h-12 w-12 text-muted-foreground" />
              <span className="ml-2 text-lg text-muted-foreground">Map of All ClipMaster Locations</span>
            </div>
          </div>
        </div>
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
