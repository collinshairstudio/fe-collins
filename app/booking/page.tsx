"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CalendarIcon, ChevronLeft, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample data - replace with actual API calls in production
const barbers = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Classic Cuts", "Hot Towel Shaves"],
  },
  {
    id: 2,
    name: "Sam Rodriguez",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Modern Styles", "Fades"],
  },
  {
    id: 3,
    name: "Jordan Smith",
    image: "/placeholder.svg?height=100&width=100",
    specialties: ["Beard Styling", "Hair Design"],
  },
]

const services = [
  { id: 1, name: "Classic Haircut", duration: "30 min", price: 250000 },
  { id: 2, name: "Beard Trim", duration: "15 min", price: 150000 },
  { id: 3, name: "Hot Towel Shave", duration: "45 min", price: 300000 },
  { id: 4, name: "Haircut & Beard Trim", duration: "45 min", price: 350000 },
  { id: 5, name: "Deluxe Package", duration: "60 min", price: 500000 },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
]

export default function BookingPage() {
  const router = useRouter()
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Calculate total price based on selected services
  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return sum + (service?.price || 0)
  }, 0)

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }

  const handleConfirm = () => {
    if (!selectedBarber || selectedServices.length === 0 || !selectedDate || !selectedTime) {
      // Show validation errors
      return
    }

    setIsLoading(true)

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/booking/success")
    }, 1500)
  }

  const isFormValid = () => {
    return selectedBarber && selectedServices.length > 0 && selectedDate && selectedTime
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Book Your Appointment</h1>
          <p className="mt-2 text-muted-foreground">Fill out the form below to schedule your next visit</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>Complete all sections to confirm your appointment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Barber Selection */}
            <div>
              <h3 className="mb-4 text-lg font-medium">1. Choose Your Barber</h3>
              <div className="grid gap-4">
                {barbers.map((barber) => (
                  <div key={barber.id} className="relative">
                    <input
                      type="radio"
                      id={`barber-${barber.id}`}
                      name="barber"
                      value={barber.id}
                      checked={selectedBarber === barber.id}
                      onChange={() => setSelectedBarber(barber.id)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`barber-${barber.id}`}
                      className="flex cursor-pointer items-start gap-4 rounded-lg border p-4 hover:bg-muted peer-checked:border-primary"
                    >
                      <img
                        src={barber.image || "/placeholder.svg"}
                        alt={barber.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{barber.name}</h3>
                        <p className="text-sm text-muted-foreground">Specialties: {barber.specialties.join(", ")}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Service Selection */}
            <div>
              <h3 className="mb-4 text-lg font-medium">2. Select Services</h3>
              <p className="mb-4 text-sm text-muted-foreground">Choose one or more services</p>
              <div className="grid gap-3">
                {services.map((service) => (
                  <div key={service.id} className="relative">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={`service-${service.id}`}
                        className="flex w-full cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-muted"
                      >
                        <div>
                          <span className="font-medium">{service.name}</span>
                          <p className="text-xs text-muted-foreground">Duration: {service.duration}</p>
                        </div>
                        <span className="font-medium">Rp {service.price.toLocaleString()}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {selectedServices.length > 0 && (
                <div className="mt-4 flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">Rp {totalPrice.toLocaleString()}</span>
                </div>
              )}
            </div>

            <Separator />

            {/* Date & Time Selection */}
            <div>
              <h3 className="mb-4 text-lg font-medium">3. Pick a Date & Time</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Select Date</h4>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => {
                          // Disable past dates and Sundays
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          return date < today || date.getDay() === 0
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <h4 className="mb-2 font-medium">Select Time</h4>
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="flex items-center gap-1"
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock className="h-3 w-3" />
                          <span>{time}</span>
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>

            <Separator />

            {/* Summary */}
            <div>
              <h3 className="mb-4 text-lg font-medium">4. Booking Summary</h3>
              <div className="rounded-lg border p-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Barber:</span>
                    <span className="font-medium">
                      {selectedBarber ? barbers.find((b) => b.id === selectedBarber)?.name : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Services:</span>
                    <div className="flex flex-col items-end">
                      {selectedServices.length > 0 ? (
                        selectedServices.map((serviceId) => (
                          <span key={serviceId} className="font-medium">
                            {services.find((s) => s.id === serviceId)?.name}
                          </span>
                        ))
                      ) : (
                        <span>Not selected</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">
                      {selectedDate
                        ? selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime || "Not selected"}</span>
                  </div>
                  {selectedServices.length > 0 && (
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Total Price:</span>
                      <span className="font-bold">Rp {totalPrice.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-lg border p-4">
                <h4 className="font-medium">Cancellation Policy</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any
                  charges. Late cancellations or no-shows may incur a fee.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <Button onClick={handleConfirm} disabled={!isFormValid() || isLoading}>
              {isLoading ? "Processing..." : "Confirm Booking"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
