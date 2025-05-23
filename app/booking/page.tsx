"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CalendarIcon, ChevronLeft, Clock, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"

// API Base URLs
const API_BASE_URL = "https://be-collins.vercel.app/api/bookings"
const CREATE_BOOKING_URL = "https://be-collins.vercel.app/api/bookings"

// Types
interface Barber {
  id: number
  name: string
  created_at: string
  image?: string
  specialties?: string[]
}

interface Service {
  id: number
  name: string
  price: number
  duration: number | null
  created_at: string
}

interface TimeSlot {
  time: string
  display: string
}

interface AvailableSchedule {
  date: string
  capster_id: string
  available_slots: TimeSlot[]
}

export default function BookingPage() {
  const router = useRouter()
  
  // State for form data
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  
  // State for API data
  const [barbers, setBarbers] = useState<Barber[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  
  // Loading states
  const [isLoadingBarbers, setIsLoadingBarbers] = useState(true)
  const [isLoadingServices, setIsLoadingServices] = useState(true)
  const [isLoadingSlots, setIsLoadingSlots] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Error states
  const [error, setError] = useState<string | null>(null)

  // Fetch barbers on component mount
  useEffect(() => {
    fetchBarbers()
    fetchServices()
  }, [])

  // Fetch available slots when barber and date are selected
  useEffect(() => {
    if (selectedBarber && selectedDate) {
      fetchAvailableSlots()
    } else {
      setAvailableSlots([])
      setSelectedTime(null)
    }
  }, [selectedBarber, selectedDate])

  const fetchBarbers = async () => {
    try {
      setIsLoadingBarbers(true)
      const response = await fetch(`${API_BASE_URL}/capsters`)
      const data = await response.json()
      
      if (data.success) {
        setBarbers(data.data)
      } else {
        throw new Error('Failed to fetch barbers')
      }
    } catch (error) {
      console.error('Error fetching barbers:', error)
      setError('Failed to load barbers. Please try again.')
    } finally {
      setIsLoadingBarbers(false)
    }
  }

  const fetchServices = async () => {
    try {
      setIsLoadingServices(true)
      const response = await fetch(`${API_BASE_URL}/services`)
      const data = await response.json()
      
      if (data.success) {
        setServices(data.data)
      } else {
        throw new Error('Failed to fetch services')
      }
    } catch (error) {
      console.error('Error fetching services:', error)
      setError('Failed to load services. Please try again.')
    } finally {
      setIsLoadingServices(false)
    }
  }

  const fetchAvailableSlots = async () => {
    if (!selectedBarber || !selectedDate) return
    
    try {
      setIsLoadingSlots(true)
      // Format tanggal ke YYYY-MM-DD dengan memperhatikan timezone lokal
      const dateStr = formatLocalDate(selectedDate)
      const response = await fetch(
        `${API_BASE_URL}/available-schedules?capster_id=${selectedBarber}&date=${dateStr}`
      )
      const data = await response.json()
      
      if (data.success) {
        setAvailableSlots(data.data.available_slots || [])
      } else {
        throw new Error('Failed to fetch available slots')
      }
    } catch (error) {
      console.error('Error fetching available slots:', error)
      setAvailableSlots([])
      toast({
        title: "Error",
        description: "Failed to load available time slots. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoadingSlots(false)
    }
  }

  // Fungsi untuk memformat tanggal ke YYYY-MM-DD sesuai timezone lokal
  const formatLocalDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  // Calculate total price based on selected services
  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return sum + (service?.price || 0)
  }, 0)

  // Calculate total duration
  const totalDuration = selectedServices.reduce((sum, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return sum + (service?.duration || 0)
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

  const handleBarberChange = (barberId: number) => {
    setSelectedBarber(barberId)
    // Reset time selection when barber changes
    setSelectedTime(null)
  }

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date)
    // Reset time selection when date changes
    setSelectedTime(null)
  }

  const handleConfirm = async () => {
    if (!selectedBarber || selectedServices.length === 0 || !selectedDate || !selectedTime) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before confirming your booking.",
        variant: "destructive",
      })
      return
    }

    // Get user_id from localStorage or authentication context
    const userId = localStorage.getItem('user_id') || 'default-user-uuid' // Replace with actual user management

    const bookingData = {
      capster_id: selectedBarber,
      service_ids: selectedServices,
      date: formatLocalDate(selectedDate), // Gunakan formatLocalDate
      time: selectedTime
    }

    try {
      setIsSubmitting(true)
      
      const token = localStorage.getItem('token')
      const response = await fetch(CREATE_BOOKING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` }),
        },
        body: JSON.stringify(bookingData)
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Booking Confirmed!",
          description: "Your appointment has been successfully booked.",
        })
        router.push("/booking/success")
      } else {
        throw new Error(result.error?.message || 'Failed to create booking')
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      toast({
        title: "Booking Failed",
        description: (error instanceof Error ? error.message : "Failed to create booking. Please try again."),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = () => {
    return selectedBarber && selectedServices.length > 0 && selectedDate && selectedTime
  }

  if (error && (isLoadingBarbers || isLoadingServices)) {
    return (
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <div className="mt-4 text-center">
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </div>
      </div>
    )
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
              {isLoadingBarbers ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Loading barbers...</span>
                </div>
              ) : (
                <div className="grid gap-4">
                  {barbers.map((barber) => (
                    <div key={barber.id} className="relative">
                      <input
                        type="radio"
                        id={`barber-${barber.id}`}
                        name="barber"
                        value={barber.id}
                        checked={selectedBarber === barber.id}
                        onChange={() => handleBarberChange(barber.id)}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`barber-${barber.id}`}
                        className="flex cursor-pointer items-start gap-4 rounded-lg border p-4 hover:bg-muted peer-checked:border-primary"
                      >
                        <img
                          src={barber.image || "/placeholder.svg?height=100&width=100"}
                          alt={barber.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{barber.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {barber.specialties ? `Specialties: ${barber.specialties.join(", ")}` : "Professional Barber"}
                          </p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Separator />

            {/* Service Selection */}
            <div>
              <h3 className="mb-4 text-lg font-medium">2. Select Services</h3>
              <p className="mb-4 text-sm text-muted-foreground">Choose one or more services</p>
              {isLoadingServices ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Loading services...</span>
                </div>
              ) : (
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
                            {service.duration && (
                              <p className="text-xs text-muted-foreground">Duration: {service.duration} min</p>
                            )}
                          </div>
                          <span className="font-medium">Rp {service.price.toLocaleString()}</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedServices.length > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                    <span className="font-medium">Total Price:</span>
                    <span className="font-bold">Rp {totalPrice.toLocaleString()}</span>
                  </div>
                  {totalDuration > 0 && (
                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <span className="font-medium">Total Duration:</span>
                      <span className="font-bold">{totalDuration} minutes</span>
                    </div>
                  )}
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
                        onSelect={handleDateChange}
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
                  {!selectedBarber || !selectedDate ? (
                    <p className="text-sm text-muted-foreground">Please select a barber and date first</p>
                  ) : isLoadingSlots ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin" />
                      <span className="ml-2">Loading available times...</span>
                    </div>
                  ) : availableSlots.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No available time slots for the selected date</p>
                  ) : (
                    <ScrollArea className="h-[200px] rounded-md border p-4">
                      <div className="grid grid-cols-3 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot.time}
                            variant={selectedTime === slot.time ? "default" : "outline"}
                            className="flex items-center gap-1"
                            onClick={() => setSelectedTime(slot.time)}
                          >
                            <Clock className="h-3 w-3" />
                            <span>{slot.display}</span>
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  )}
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
                    <span className="font-medium">
                      {selectedTime ? availableSlots.find(slot => slot.time === selectedTime)?.display : "Not selected"}
                    </span>
                  </div>
                  {selectedServices.length > 0 && (
                    <>
                      {totalDuration > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{totalDuration} minutes</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">Total Price:</span>
                        <span className="font-bold">Rp {totalPrice.toLocaleString()}</span>
                      </div>
                    </>
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
            <Button onClick={handleConfirm} disabled={!isFormValid() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}