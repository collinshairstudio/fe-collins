"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CalendarIcon, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// Sample data
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
  { id: 1, name: "Classic Haircut", duration: "30 min", price: "$25" },
  { id: 2, name: "Beard Trim", duration: "15 min", price: "$15" },
  { id: 3, name: "Hot Towel Shave", duration: "45 min", price: "$30" },
  { id: 4, name: "Haircut & Beard Trim", duration: "45 min", price: "$35" },
  { id: 5, name: "Deluxe Package", duration: "60 min", price: "$50" },
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
  "6:00 PM",
  "6:30 PM",
]

type BookingStep = "barber" | "service" | "datetime" | "confirmation"

export default function BookingPage() {
  const router = useRouter()
  const [step, setStep] = useState<BookingStep>("barber")
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (step === "barber") setStep("service")
    else if (step === "service") setStep("datetime")
    else if (step === "datetime") setStep("confirmation")
  }

  const handleBack = () => {
    if (step === "service") setStep("barber")
    else if (step === "datetime") setStep("service")
    else if (step === "confirmation") setStep("datetime")
  }

  const handleConfirm = () => {
    setIsLoading(true)

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/booking/success")
    }, 1500)
  }

  const isNextDisabled = () => {
    if (step === "barber" && !selectedBarber) return true
    if (step === "service" && !selectedService) return true
    if (step === "datetime" && (!selectedDate || !selectedTime)) return true
    return false
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Book Your Appointment</h1>
          <p className="mt-2 text-muted-foreground">Follow the steps below to schedule your next visit</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {["barber", "service", "datetime", "confirmation"].map((stepName, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2",
                    step === stepName
                      ? "border-primary bg-primary text-primary-foreground"
                      : ["barber", "service", "datetime", "confirmation"].indexOf(step) >
                          ["barber", "service", "datetime", "confirmation"].indexOf(stepName as BookingStep)
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-muted-foreground/30 text-muted-foreground",
                  )}
                >
                  {["barber", "service", "datetime", "confirmation"].indexOf(step as BookingStep) >
                  ["barber", "service", "datetime", "confirmation"].indexOf(stepName as BookingStep) ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium",
                    step === stepName ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {stepName === "barber"
                    ? "Choose Barber"
                    : stepName === "service"
                      ? "Select Service"
                      : stepName === "datetime"
                        ? "Date & Time"
                        : "Confirm"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <Separator />
            <div
              className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
              style={{
                width:
                  step === "barber" ? "0%" : step === "service" ? "33.33%" : step === "datetime" ? "66.66%" : "100%",
              }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {step === "barber"
                ? "Choose Your Barber"
                : step === "service"
                  ? "Select a Service"
                  : step === "datetime"
                    ? "Pick a Date & Time"
                    : "Confirm Your Booking"}
            </CardTitle>
            <CardDescription>
              {step === "barber"
                ? "Select the barber you'd like for your appointment"
                : step === "service"
                  ? "Choose the service you need"
                  : step === "datetime"
                    ? "Select your preferred date and time"
                    : "Review and confirm your appointment details"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "barber" && (
              <RadioGroup
                value={selectedBarber?.toString()}
                onValueChange={(value) => setSelectedBarber(Number.parseInt(value))}
              >
                <div className="grid gap-4">
                  {barbers.map((barber) => (
                    <div key={barber.id} className="relative">
                      <RadioGroupItem
                        value={barber.id.toString()}
                        id={`barber-${barber.id}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`barber-${barber.id}`}
                        className="flex cursor-pointer items-start gap-4 rounded-lg border p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
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
              </RadioGroup>
            )}

            {step === "service" && (
              <RadioGroup
                value={selectedService?.toString()}
                onValueChange={(value) => setSelectedService(Number.parseInt(value))}
              >
                <div className="grid gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="relative">
                      <RadioGroupItem
                        value={service.id.toString()}
                        id={`service-${service.id}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`service-${service.id}`}
                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">Duration: {service.duration}</p>
                        </div>
                        <span className="font-medium">{service.price}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}

            {step === "datetime" && (
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Select Date</h3>
                  <div className="flex justify-center">
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
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Select Time</h3>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
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
                </div>
              </div>
            )}

            {step === "confirmation" && (
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Appointment Details</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Barber:</span>
                      <span className="font-medium">{barbers.find((b) => b.id === selectedBarber)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{services.find((s) => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">{services.find((s) => s.id === selectedService)?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Cancellation Policy</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any
                    charges. Late cancellations or no-shows may incur a fee.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step !== "barber" ? (
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <Link href="/">
                <Button variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Home
                </Button>
              </Link>
            )}

            {step !== "confirmation" ? (
              <Button onClick={handleNext} disabled={isNextDisabled()}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleConfirm} disabled={isLoading}>
                {isLoading ? "Processing..." : "Confirm Booking"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
