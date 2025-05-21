import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Scissors, GraduationCap, Award, Users, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Academy alumni data
const alumniData = {
  batch1: {
    year: "2020",
    title: "Founding Class",
    description: "Our first batch of graduates who helped establish ClipMaster Academy's reputation for excellence.",
    alumni: [
      {
        name: "Alex Johnson",
        specialty: "Classic Barbering",
        currentRole: "Owner, Johnson's Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Alex+Johnson",
        testimonial:
          "The training I received at ClipMaster Academy gave me the skills and confidence to open my own successful barbershop.",
      },
      {
        name: "Maria Garcia",
        specialty: "Modern Styling",
        currentRole: "Lead Stylist, UpCut Salon",
        image: "/placeholder.svg?height=300&width=300&text=Maria+Garcia",
        testimonial:
          "ClipMaster Academy's hands-on approach to learning prepared me for the real-world challenges of the industry.",
      },
      {
        name: "David Kim",
        specialty: "Precision Cutting",
        currentRole: "Master Barber, Elite Cuts",
        image: "/placeholder.svg?height=300&width=300&text=David+Kim",
        testimonial:
          "The mentorship I received from the instructors was invaluable. They truly care about your success.",
      },
      {
        name: "Sophia Patel",
        specialty: "Color Techniques",
        currentRole: "Color Specialist, Chroma Studio",
        image: "/placeholder.svg?height=300&width=300&text=Sophia+Patel",
        testimonial: "The advanced color techniques I learned at ClipMaster Academy set me apart in the industry.",
      },
    ],
  },
  batch2: {
    year: "2021",
    title: "Innovation Class",
    description: "This group pushed boundaries with innovative techniques and modern approaches to barbering.",
    alumni: [
      {
        name: "James Wilson",
        specialty: "Artistic Designs",
        currentRole: "Creative Director, Design Cuts",
        image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
        testimonial: "ClipMaster Academy encouraged me to develop my own unique style and artistic approach to hair.",
      },
      {
        name: "Emma Rodriguez",
        specialty: "Textured Hair",
        currentRole: "Texture Expert, Curl Studio",
        image: "/placeholder.svg?height=300&width=300&text=Emma+Rodriguez",
        testimonial:
          "The specialized training in textured hair techniques has made me one of the most sought-after stylists in my area.",
      },
      {
        name: "Michael Chen",
        specialty: "Beard Sculpting",
        currentRole: "Beard Specialist, Gentleman's Grooming",
        image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
        testimonial:
          "The focused training on beard care and styling gave me a specialized skill set that clients value.",
      },
      {
        name: "Olivia Thompson",
        specialty: "Vintage Techniques",
        currentRole: "Owner, Retro Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Olivia+Thompson",
        testimonial:
          "Learning both traditional and modern techniques at ClipMaster Academy allowed me to create a unique vintage-inspired barbershop.",
      },
    ],
  },
  batch3: {
    year: "2022",
    title: "Excellence Class",
    description: "Our most recent graduates, already making waves in the industry with their exceptional skills.",
    alumni: [
      {
        name: "Daniel Martinez",
        specialty: "Fades & Tapers",
        currentRole: "Senior Barber, Sharp Edges",
        image: "/placeholder.svg?height=300&width=300&text=Daniel+Martinez",
        testimonial:
          "The technical precision I developed at ClipMaster Academy has clients specifically requesting my services.",
      },
      {
        name: "Ava Williams",
        specialty: "Scissor Work",
        currentRole: "Precision Stylist, Exact Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Ava+Williams",
        testimonial: "The focus on scissor techniques and precision cutting has been fundamental to my success.",
      },
      {
        name: "Noah Brown",
        specialty: "Men's Grooming",
        currentRole: "Grooming Expert, The Refined Man",
        image: "/placeholder.svg?height=300&width=300&text=Noah+Brown",
        testimonial:
          "ClipMaster Academy's comprehensive approach to men's grooming prepared me for every aspect of client care.",
      },
      {
        name: "Isabella Lee",
        specialty: "Creative Coloring",
        currentRole: "Color Artist, Spectrum Salon",
        image: "/placeholder.svg?height=300&width=300&text=Isabella+Lee",
        testimonial:
          "The creative freedom combined with technical training allowed me to develop my own signature coloring techniques.",
      },
    ],
  },
}

// Academy programs data
const programsData = [
  {
    title: "Foundation Barbering",
    duration: "6 months",
    description:
      "Master the fundamentals of barbering, from classic cuts to modern styles. This comprehensive program covers all the essential techniques and theory needed to start your career.",
    topics: [
      "Classic Cutting Techniques",
      "Modern Styling",
      "Razor Work",
      "Client Consultation",
      "Sanitation & Safety",
    ],
    image: "/placeholder.svg?height=300&width=500&text=Foundation+Barbering",
  },
  {
    title: "Advanced Techniques",
    duration: "3 months",
    description:
      "Take your skills to the next level with our advanced program. Learn specialized techniques and develop your unique style under the guidance of master barbers.",
    topics: [
      "Precision Fading",
      "Creative Design",
      "Texture Manipulation",
      "Advanced Razor Techniques",
      "Beard Sculpting",
    ],
    image: "/placeholder.svg?height=300&width=500&text=Advanced+Techniques",
  },
  {
    title: "Business of Barbering",
    duration: "2 months",
    description:
      "Learn how to turn your barbering skills into a successful business. This program covers everything from client retention to shop management and marketing.",
    topics: [
      "Client Building",
      "Shop Management",
      "Marketing & Social Media",
      "Financial Planning",
      "Brand Development",
    ],
    image: "/placeholder.svg?height=300&width=500&text=Business+of+Barbering",
  },
]

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-muted/40">

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200&text=ClipMaster+Academy"
            alt="ClipMaster Academy"
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">ClipMaster Academy</h1>
            <p className="mt-6 max-w-md text-lg">
              Master the art of barbering with our comprehensive training programs. Learn from industry professionals
              and launch your career in the exciting world of barbering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#programs">
                <Button size="lg">Explore Programs</Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Academy */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Academy</h2>
            <p className="mb-4">
              Founded in 2020, ClipMaster Academy was established to provide world-class education in the art of
              barbering. Our mission is to train the next generation of skilled barbers who will elevate the industry
              standards.
            </p>
            <p className="mb-4">
              With a focus on both traditional techniques and modern innovations, our curriculum is designed to prepare
              students for successful careers in a rapidly evolving industry.
            </p>
            <p>
              Our instructors are experienced professionals with years of industry experience, passionate about sharing
              their knowledge and mentoring the next generation of barbers.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Academy+Facilities"
              alt="Academy Facilities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <p className="text-sm text-primary font-medium">{program.duration}</p>
                  <p className="mt-2 text-muted-foreground">{program.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Key Topics:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {program.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="#contact">
                    <Button className="w-full mt-6">Contact Us</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section id="alumni" className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Alumni</h2>

          <Tabs defaultValue="batch3" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="batch3">Batch 3 (2022)</TabsTrigger>
              <TabsTrigger value="batch2">Batch 2 (2021)</TabsTrigger>
              <TabsTrigger value="batch1">Batch 1 (2020)</TabsTrigger>
            </TabsList>

            {Object.entries(alumniData).map(([batchId, batch]) => (
              <TabsContent key={batchId} value={batchId}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">
                    {batch.title} - {batch.year}
                  </h3>
                  <p className="text-muted-foreground">{batch.description}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {batch.alumni.map((alumni, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                      <Image
                        src={alumni.image || "/placeholder.svg"}
                        alt={`${batch.year} Alumni - ${alumni.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 w-full">
                          <h4 className="text-white font-bold truncate">{alumni.name}</h4>
                          <p className="text-white/80 text-sm truncate">{alumni.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendez",
                batch: "Batch 2 Graduate",
                comment:
                  "The instructors at ClipMaster Academy don't just teach techniques; they mentor you to become a true professional in the industry.",
                image: "/placeholder.svg?height=100&width=100&text=CM",
              },
              {
                name: "Aisha Johnson",
                batch: "Current Student",
                comment:
                  "The hands-on approach and personalized attention has helped me develop my skills faster than I ever thought possible.",
                image: "/placeholder.svg?height=100&width=100&text=AJ",
              },
              {
                name: "Ryan Park",
                batch: "Batch 1 Graduate",
                comment:
                  "Three years after graduating, I still use the techniques and business principles I learned at ClipMaster Academy every day in my own shop.",
                image: "/placeholder.svg?height=100&width=100&text=RP",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.batch}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section id="contact" className="container py-16">
        <div className="bg-primary rounded-lg p-8 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Tertarik? Hubungi Kami Melalui WhatsApp</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Dapatkan informasi lebih lanjut tentang program kami, biaya pendidikan, dan jadwal penerimaan siswa baru.
            Tim kami siap membantu Anda memulai karir di dunia barbering.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20ClipMaster%20Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Hubungi via WhatsApp
          </a>
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
                Premium barbershop providing quality haircuts, grooming services, and professional education.
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
                  <Link href="/academy" className="text-muted-foreground hover:text-foreground">
                    Academy
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
              <h3 className="font-bold mb-4">Academy</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#programs" className="text-muted-foreground hover:text-foreground">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#alumni" className="text-muted-foreground hover:text-foreground">
                    Alumni
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground">
                    Enroll Now
                  </a>
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
                  <span className="text-muted-foreground">academy@clipmaster.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Scissors className="h-4 w-4" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} ClipMaster Barbershop & Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
