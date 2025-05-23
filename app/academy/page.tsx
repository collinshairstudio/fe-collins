import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Scissors, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlumniCarousel } from "@/components/alumni-carousel"

// Academy alumni data with 10 alumni per batch
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
        image: "/placeholder.svg?height=300&width=300&text=Alex+J",
      },
      {
        name: "Maria Garcia",
        specialty: "Modern Styling",
        currentRole: "Lead Stylist, UpCut Salon",
        image: "/placeholder.svg?height=300&width=300&text=Maria+G",
      },
      {
        name: "David Kim",
        specialty: "Precision Cutting",
        currentRole: "Master Barber, Elite Cuts",
        image: "/placeholder.svg?height=300&width=300&text=David+K",
      },
      {
        name: "Sophia Patel",
        specialty: "Color Techniques",
        currentRole: "Color Specialist, Chroma Studio",
        image: "/placeholder.svg?height=300&width=300&text=Sophia+P",
      },
      {
        name: "Thomas Wright",
        specialty: "Vintage Barbering",
        currentRole: "Head Barber, Old School Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Thomas+W",
      },
      {
        name: "Jasmine Lee",
        specialty: "Hair Design",
        currentRole: "Creative Director, Style Hub",
        image: "/placeholder.svg?height=300&width=300&text=Jasmine+L",
      },
      {
        name: "Robert Chen",
        specialty: "Clipper Work",
        currentRole: "Senior Barber, Precision Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Robert+C",
      },
      {
        name: "Olivia Wilson",
        specialty: "Styling & Finishing",
        currentRole: "Style Consultant, Fashion Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Olivia+W",
      },
      {
        name: "Marcus Johnson",
        specialty: "Afro-Textured Hair",
        currentRole: "Texture Specialist, Curl Masters",
        image: "/placeholder.svg?height=300&width=300&text=Marcus+J",
      },
      {
        name: "Emma Davis",
        specialty: "Bridal Styling",
        currentRole: "Wedding Specialist, Bridal Beauty",
        image: "/placeholder.svg?height=300&width=300&text=Emma+D",
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
        image: "/placeholder.svg?height=300&width=300&text=James+W",
      },
      {
        name: "Emma Rodriguez",
        specialty: "Textured Hair",
        currentRole: "Texture Expert, Curl Studio",
        image: "/placeholder.svg?height=300&width=300&text=Emma+R",
      },
      {
        name: "Michael Chen",
        specialty: "Beard Sculpting",
        currentRole: "Beard Specialist, Gentleman's Grooming",
        image: "/placeholder.svg?height=300&width=300&text=Michael+C",
      },
      {
        name: "Olivia Thompson",
        specialty: "Vintage Techniques",
        currentRole: "Owner, Retro Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Olivia+T",
      },
      {
        name: "Daniel Park",
        specialty: "Avant-Garde Styling",
        currentRole: "Fashion Stylist, Edge Salon",
        image: "/placeholder.svg?height=300&width=300&text=Daniel+P",
      },
      {
        name: "Sophia Martinez",
        specialty: "Color Artistry",
        currentRole: "Color Director, Spectrum Hair",
        image: "/placeholder.svg?height=300&width=300&text=Sophia+M",
      },
      {
        name: "Ethan Brown",
        specialty: "Precision Fades",
        currentRole: "Fade Master, Sharp Edges",
        image: "/placeholder.svg?height=300&width=300&text=Ethan+B",
      },
      {
        name: "Isabella Kim",
        specialty: "Asian Hair Techniques",
        currentRole: "Specialist, East Meets West Salon",
        image: "/placeholder.svg?height=300&width=300&text=Isabella+K",
      },
      {
        name: "Noah Garcia",
        specialty: "Clipper Art",
        currentRole: "Design Specialist, Art of Hair",
        image: "/placeholder.svg?height=300&width=300&text=Noah+G",
      },
      {
        name: "Ava Williams",
        specialty: "Curly Hair",
        currentRole: "Curl Expert, Natural Beauty",
        image: "/placeholder.svg?height=300&width=300&text=Ava+W",
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
        image: "/placeholder.svg?height=300&width=300&text=Daniel+M",
      },
      {
        name: "Ava Williams",
        specialty: "Scissor Work",
        currentRole: "Precision Stylist, Exact Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Ava+W",
      },
      {
        name: "Noah Brown",
        specialty: "Men's Grooming",
        currentRole: "Grooming Expert, The Refined Man",
        image: "/placeholder.svg?height=300&width=300&text=Noah+B",
      },
      {
        name: "Isabella Lee",
        specialty: "Creative Coloring",
        currentRole: "Color Artist, Spectrum Salon",
        image: "/placeholder.svg?height=300&width=300&text=Isabella+L",
      },
      {
        name: "Lucas Taylor",
        specialty: "Classic Barbering",
        currentRole: "Traditional Barber, Heritage Cuts",
        image: "/placeholder.svg?height=300&width=300&text=Lucas+T",
      },
      {
        name: "Mia Johnson",
        specialty: "Styling Innovation",
        currentRole: "Style Innovator, Next Level",
        image: "/placeholder.svg?height=300&width=300&text=Mia+J",
      },
      {
        name: "Ethan Wilson",
        specialty: "Beard Design",
        currentRole: "Beard Artist, Facial Hair Studio",
        image: "/placeholder.svg?height=300&width=300&text=Ethan+W",
      },
      {
        name: "Charlotte Davis",
        specialty: "Short Hair Specialist",
        currentRole: "Pixie Expert, Short & Chic",
        image: "/placeholder.svg?height=300&width=300&text=Charlotte+D",
      },
      {
        name: "Benjamin Moore",
        specialty: "Barber Education",
        currentRole: "Training Director, Barber School",
        image: "/placeholder.svg?height=300&width=300&text=Benjamin+M",
      },
      {
        name: "Sofia Rodriguez",
        specialty: "Texture Management",
        currentRole: "Texture Specialist, Wave Masters",
        image: "/placeholder.svg?height=300&width=300&text=Sofia+R",
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
        <div className="relative h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200&text=ClipMaster+Academy"
            alt="ClipMaster Academy"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-3">
              <ChevronLeft className="mr-1 h-3 w-3" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">ClipMaster Academy</h1>
            <p className="mt-3 max-w-md text-base text-white/90">
              Master the art of barbering with our comprehensive training programs. Learn from industry professionals
              and launch your career in the exciting world of barbering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs">
                <Button size="sm">Explore Programs</Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="sm"
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
      <section className="py-10 px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Our Academy</h2>
            <p className="mb-3 text-sm">
              Founded in 2020, ClipMaster Academy was established to provide world-class education in the art of
              barbering. Our mission is to train the next generation of skilled barbers who will elevate the industry
              standards.
            </p>
            <p className="mb-3 text-sm">
              With a focus on both traditional techniques and modern innovations, our curriculum is designed to prepare
              students for successful careers in a rapidly evolving industry.
            </p>
            <p className="text-sm">
              Our instructors are experienced professionals with years of industry experience, passionate about sharing
              their knowledge and mentoring the next generation of barbers.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
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
      <section id="programs" className="py-10 px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programsData.map((program, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative h-40 w-full">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{program.title}</h3>
                  <p className="text-xs text-primary font-medium">{program.duration}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{program.description}</p>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-1">Key Topics:</h4>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground">
                      {program.topics.slice(0, 3).map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                      {program.topics.length > 3 && <li>And more...</li>}
                    </ul>
                  </div>
                  <a href="#contact">
                    <Button className="w-full mt-4 text-sm" size="sm">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section id="alumni" className="bg-muted py-10 px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Alumni</h2>

          <Tabs defaultValue="batch3" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="batch3">Batch 3 (2022)</TabsTrigger>
              <TabsTrigger value="batch2">Batch 2 (2021)</TabsTrigger>
              <TabsTrigger value="batch1">Batch 1 (2020)</TabsTrigger>
            </TabsList>

            {Object.entries(alumniData).map(([batchId, batch]) => (
              <TabsContent key={batchId} value={batchId}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">
                    {batch.title} - {batch.year}
                  </h3>
                  <p className="text-sm text-muted-foreground">{batch.description}</p>
                </div>

                <AlumniCarousel alumni={batch.alumni} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <CardContent className="pt-4 px-4 pb-4">
                <div className="flex items-center mb-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.batch}</p>
                  </div>
                </div>
                <p className="italic text-sm">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section id="contact" className="py-10 px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="bg-primary rounded-lg p-6 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold mb-3">Tertarik? Hubungi Kami Melalui WhatsApp</h2>
          <p className="mb-6 max-w-2xl mx-auto text-sm">
            Dapatkan informasi lebih lanjut tentang program kami, biaya pendidikan, dan jadwal penerimaan siswa baru.
            Tim kami siap membantu Anda memulai karir di dunia barbering.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20ClipMaster%20Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Hubungi via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-auto">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <Scissors className="h-4 w-4" />
                <span className="text-base font-bold">ClipMaster</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Premium barbershop providing quality haircuts, grooming services, and professional education.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm">Quick Links</h3>
              <ul className="space-y-1 text-xs">
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
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm">Academy</h3>
              <ul className="space-y-1 text-xs">
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
              <h3 className="font-bold mb-2 text-sm">Contact</h3>
              <ul className="space-y-1 text-xs">
                <li className="flex items-center gap-1">
                  <Scissors className="h-3 w-3" />
                  <span className="text-muted-foreground">123 Main Street, Downtown</span>
                </li>
                <li className="flex items-center gap-1">
                  <Scissors className="h-3 w-3" />
                  <span className="text-muted-foreground">academy@clipmaster.com</span>
                </li>
                <li className="flex items-center gap-1">
                  <Scissors className="h-3 w-3" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-6 pt-4 text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} ClipMaster Barbershop & Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
