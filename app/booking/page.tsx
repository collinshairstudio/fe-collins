"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight, Clock, User, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Branch data
const branches = [
  {
    id: "downtown",
    name: "Downtown",
    address: "123 Main Street, Downtown",
    image: "/placeholder.svg?height=300&width=600&text=Downtown+Branch",
    genderServices: ["men"],
  },
  {
    id: "uptown",
    name: "Uptown",
    address: "456 Park Avenue, Uptown",
    image: "/placeholder.svg?height=300&width=600&text=Uptown+Branch",
    genderServices: ["men", "women"],
  },
  {
    id: "westside",
    name: "Westside",
    address: "789 Ocean Drive, Westside",
    image: "/placeholder.svg?height=300&width=600&text=Westside+Branch",
    genderServices: ["men", "women"],
  },
]

// Sample data
const services = [
  {
    id: "haircut",
    name: "Classic Haircut",
    description: "Traditional haircut with clippers and scissors",
    price: 25,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Haircut",
  },
  {
    id: "beard",
    name: "Beard Trim",
    description: "Shape and trim your beard to perfection",
    price: 15,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Beard+Trim",
  },
  {
    id: "shave",
    name: "Hot Towel Shave",
    description: "Luxurious straight razor shave with hot towel treatment",
    price: 35,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Hot+Towel+Shave",
  },
  {
    id: "combo",
    name: "Haircut & Beard Combo",
    description: "Complete grooming package with haircut and beard trim",
    price: 35,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Combo",
  },
  {
    id: "perm-short",
    name: "Perm - Short Hair",
    description: "Permanent wave treatment for short hair",
    price: 60,
    duration: 120, // 2 hours
    image: "/placeholder.svg?height=200&width=400&text=Perm+Short",
  },
  {
    id: "perm-long",
    name: "Perm - Long Hair",
    description: "Permanent wave treatment for long hair",
    price: 85,
    duration: 120, // 2 hours
    image: "/placeholder.svg?height=200&width=400&text=Perm+Long",
  },
]

// Barbers data with branch and gender specialization
const barbers = [
  {
    id: "james",
    name: "James Wilson",
    specialty: "Classic Cuts",
    image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
    branch: "downtown",
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
    branch: "downtown",
    gender: "men",
    portfolio: [
      "/placeholder.svg?height=200&width=200&text=Michael+Work+1",
      "/placeholder.svg?height=200&width=200&text=Michael+Work+2",
      "/placeholder.svg?height=200&width=200&text=Michael+Work+3",
    ],
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    specialty: "Women's Styling",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    branch: "downtown",
    gender: "women",
    portfolio: [
      "/placeholder.svg?height=200&width=200&text=Sarah+Work+1",
      "/placeholder.svg?height=200&width=200&text=Sarah+Work+2",
      "/placeholder.svg?height=200&width=200&text=Sarah+Work+3",
    ],
  },
  {
    id: "robert",
    name: "Robert Davis",
    specialty: "Beard Styling",
    image: "/placeholder.svg?height=300&width=300&text=Robert+Davis",
    branch: "uptown",
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
    branch: "uptown",
    gender: "women",
    portfolio: [
      "/placeholder.svg?height=200&width=200&text=Emily+Work+1",
      "/placeholder.svg?height=200&width=200&text=Emily+Work+2",
      "/placeholder.svg?height=200&width=200&text=Emily+Work+3",
    ],
  },
  {
    id: "david",
    name: "David Martinez",
    specialty: "Modern Styles",
    image: "/placeholder.svg?height=300&width=300&text=David+Martinez",
    branch: "westside",
    gender: "men",
    portfolio: [
      "/placeholder.svg?height=200&width=200&text=David+Work+1",
      "/placeholder.svg?height=200&width=200&text=David+Work+2",
      "/placeholder.svg?height=200&width=200&text=David+Work+3",
    ],
  },
  {
    id: "jennifer",
    name: "Jennifer Lopez",
    specialty: "Precision Cuts",
    image: "/placeholder.svg?height=300&width=300&text=Jennifer+Lopez",
    branch: "westside",
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
    branch: "westside",
    gender: "men",
    portfolio: [
      "/placeholder.svg?height=200&width=200&text=Alex+Work+1",
      "/placeholder.svg?height=200&width=200&text=Alex+Work+2",
      "/placeholder.svg?height=200&width=200&text=Alex+Work+3",
    ],
  },
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialBranch = searchParams.get("branch")

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(initialBranch ? "barber" : "branch")
  const [selectedBranch, setSelectedBranch] = useState<string | null>(initialBranch)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Reset selections when branch changes
  useEffect(() => {
    if (selectedBranch) {
      setSelectedBarber(null)
      setSelectedTime(null)
      
      // Set gender automatically if branch only offers one gender service
      const branch = branches.find(b => b.id === selectedBranch)
      if (branch && branch.genderServices.length === 1) {
        setSelectedGender(branch.genderServices[0])
      } else {
        setSelectedGender(null)
      }
    }
  }, [selectedBranch])

  // Reset time when date changes
  useEffect(() => {
    setSelectedTime(null)
  }, [selectedDate])

  // Generate dates for the selected month
  const generateDatesForMonth = (year: number, month: number) => {
    const dates = []
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day)
      dates.push(date)
    }
    
    return dates
  }

  const dates = generateDatesForMonth(selectedYear, selectedMonth)

  // Generate time slots based on service duration
  const generateTimeSlots = () => {
    const slots = []
    const selectedServiceDetails = services.find(service => service.id === selectedService)
    const serviceDuration = selectedServiceDetails ? selectedServiceDetails.duration : 60 // Default to 1 hour
    
    // Start at 9 AM, end at 6 PM
    for (let hour = 9; hour <= 17; hour++) {
      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12
      const period = hour < 12 ? "AM" : "PM"
      
      // Add slot for the hour
      slots.push(`${hourFormatted}:00 ${period}`)
      
      // If service is 1 hour, add half-hour slots
      if (serviceDuration === 60 && hour < 17) {
        slots.push(`${hourFormatted}:30 ${period}`)
      }
    }
    
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleNextStep = () => {
    if (activeTab === "branch" && selectedBranch) {
      // Skip gender selection if branch only offers one gender service
      const branch = branches.find(b => b.id === selectedBranch)
      if (branch && branch.genderServices.length === 1) {
        setActiveTab("barber")
      } else {
        setActiveTab("gender")
      }
    } else if (activeTab === "gender" && selectedGender) {
      setActiveTab("barber")
    } else if (activeTab === "barber" && selectedBarber) {
      setActiveTab("service")
    } else if (activeTab === "service" && selectedService) {
      setActiveTab("datetime")
    } else if (activeTab === "datetime" && selectedDate && selectedTime) {
      setActiveTab("details")
    } else if (activeTab === "details") {
      setActiveTab("payment")
    }
  }

  const handlePreviousStep = () => {
    if (activeTab === "gender") {
      setActiveTab("branch")
    } else if (activeTab === "barber") {
      // Skip gender selection if branch only offers one gender service
      const branch = branches.find(b => b.id === selectedBranch)
      if (branch && branch.genderServices.length === 1) {
        setActiveTab("branch")
      } else {
        setActiveTab("gender")
      }
    } else if (activeTab === "service") {
      setActiveTab("barber")
    } else if (activeTab === "datetime") {
      setActiveTab("service")
    } else if (activeTab === "details") {
      setActiveTab("datetime")
    } else if (activeTab === "payment") {
      setActiveTab("details")
    }
  }

  const getSelectedBranchDetails = () => {
    return branches.find((branch) => branch.id === selectedBranch)
  }

  const getSelectedServiceDetails = () => {
    return services.find((service) => service.id === selectedService)
  }

  const getSelectedBarberDetails = () => {
    return barbers.find((barber) => barber.id === selectedBarber)
  }

  // Filter barbers by branch and gender
  const filteredBarbers = barbers.filter(
    (barber) => barber.branch === selectedBranch && barber.gender === selectedGender,
  )

  // Handle month navigation
  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
  }

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
  }

  // Get month name
  const getMonthName = (month: number) => {
    return new Date(2000, month, 1).toLocaleString('default', { month: 'long' })
  }

  return (
    <div className="min-h-screen bg-muted/40 py-8">
      <div className="container">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Book Your Appointment</h1>
          <p className="text-muted-foreground">
            Select your branch, stylist, service, and preferred time to schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="branch" disabled={activeTab !== "branch"}>
                  Branch
                </TabsTrigger>
                <TabsTrigger value="gender" disabled={!selectedBranch || activeTab === "branch"}>
                  Gender
                </TabsTrigger>
                <TabsTrigger
                  value="barber"
                  disabled={!selectedGender || activeTab === "branch" || activeTab === "gender"}
                >
                  Stylist
                </TabsTrigger>
                <TabsTrigger
                  value="service"
                  disabled={
                    !selectedBarber || activeTab === "branch" || activeTab === "gender" || activeTab === "barber"
                  }
                >
                  Service
                </TabsTrigger>
                <TabsTrigger
                  value="datetime"
                  disabled={
                    !selectedService ||
                    activeTab === "branch" ||
                    activeTab === "gender" ||
                    activeTab === "barber" ||
                    activeTab === "service"
                  }
                >
                  Date & Time
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  disabled={
                    !selectedTime ||
                    activeTab === "branch" ||
                    activeTab === "gender" ||
                    activeTab === "barber" ||
                    activeTab === "service" ||
                    activeTab === "datetime"
                  }
                >
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="branch" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {branches.map((branch) => (
                    <Card
                      key={branch.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedBranch === branch.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedBranch(branch.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-40 w-full">
                          <Image
                            src={branch.image || "/placeholder.svg"}
                            alt={branch.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{branch.name}</h3>
                          <div className="mt-2 flex items-center text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            <p className="text-sm">{branch.address}</p>
                          </div>
                          <div className="mt-2 text-sm text-muted-foreground">
                            {branch.genderServices.includes("men") && branch.genderServices.includes("women") 
                              ? "Services for men & women" 
                              : branch.genderServices.includes("men") 
                                ? "Men's services only" 
                                : "Women's services only"}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleNextStep} disabled={!selectedBranch}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="gender" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Stylist Type</CardTitle>
                    <CardDescription>Choose whether you need a men's or women's hairstylist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedGender || ""}
                      onValueChange={setSelectedGender}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      {getSelectedBranchDetails()?.genderServices.includes("men") && (
                        <div>
                          <RadioGroupItem value="men" id="men" className="peer sr-only" />
                          <Label
                            htmlFor="men"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <User className="mb-3 h-6 w-6" />
                            <span className="text-lg font-medium">Men's Hairstylist</span>
                          </Label>
                        </div>
                      )}
                      {getSelectedBranchDetails()?.genderServices.includes("women") && (
                        <div>
                          <RadioGroupItem value="women" id="women" className="peer sr-only" />
                          <Label
                            htmlFor="women"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <User className="mb-3 h-6 w-6" />
                            <span className="text-lg font-medium">Women's Hairstylist</span>
                          </Label>
                        </div>
                      )}
                    </RadioGroup>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedGender}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="barber" className="mt-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">Select a Stylist</h2>
                  <p className="text-muted-foreground">
                    Choose your preferred stylist at our {getSelectedBranchDetails()?.name} branch
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBarbers.map((barber) => (
                    <Card
                      key={barber.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedBarber === barber.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedBarber(barber.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full">
                          <Image
                            src={barber.image || "/placeholder.svg"}
                            alt={barber.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{barber.name}</h3>
                          <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                          
                          <h4 className="text-sm font-medium mt-3 mb-1">Portfolio</h4>
                          <div className="grid grid-cols-3 gap-1 mb-2">
                            {barber.portfolio.map((image, index) => (
                              <div key={index} className="relative h-12 w-full rounded overflow-hidden">
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`${barber.name}'s work ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedBarber}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="service" className="mt-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">Select a Service</h2>
                  <p className="text-muted-foreground">
                    Choose the service you'd like to book
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedService === service.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-40 w-full">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-bold">${service.price}</span>
                            <span className="text-sm text-muted-foreground">
                              {service.duration / 60} hour{service.duration > 60 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedService}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="datetime" className="mt-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          Select Date
                        </div>
                        <div className="flex items-center">
                          <Button variant="outline" size="icon" onClick={prevMonth}>
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <span className="mx-2 text-sm font-medium">
                            {getMonthName(selectedMonth)} {selectedYear}
                          </span>
                          <Button variant="outline" size="icon" onClick={nextMonth}>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-1 mb-1">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                          <div key={day} className="text-center text-xs font-medium text-muted-foreground">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {/* Add empty cells for days before the first day of the month */}
                        {Array.from({ length: new Date(selectedYear, selectedMonth, 1).getDay() }).map((_, index) => (
                          <div key={`empty-${index}`} className="h-10" />
                        ))}
                        
                        {dates.map((date) => {
                          const dateString = date.toISOString().split("T")[0]
                          const dayNumber = date.getDate()
                          const isToday = new Date().toISOString().split("T")[0] === dateString
                          const isSelected = selectedDate === dateString
                          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))

                          return (
                            <Button
                              key={dateString}
                              variant={isSelected ? "default" : "outline"}
                              className={`h-10 ${isToday ? "border-primary" : ""} ${isPast ? "opacity-50" : ""}`}
                              onClick={() => setSelectedDate(dateString)}
                              disabled={isPast}
                            >
                              {dayNumber}
                            </Button>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="mr-2 h-5 w-5" />
                        Select Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time, index) => (
                          <Button
                            key={index}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="h-10"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>Note: {getSelectedServiceDetails()?.name} requires {getSelectedServiceDetails()?.duration / 60} hour{getSelectedServiceDetails()?.duration > 60 ? "s" : ""}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedDate || !selectedTime}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Your Information
                    </CardTitle>
                    <CardDescription>Please provide your contact details for your appointment.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
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
                        <Label htmlFor="notes">Special Requests (Optional)</Label>
                        <Textarea id="notes" placeholder="Any special requests or notes for your stylist" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>
                    Continue to Payment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">\
