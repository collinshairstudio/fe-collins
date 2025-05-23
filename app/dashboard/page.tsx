"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Calendar, Clock, Edit, MoreHorizontal, Plus, Scissors, User, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Booking = {
  id: number
  schedule: string
  status: 'confirmed' | 'completed' | 'cancelled'
  barber: {
    id: number
    name: string
    image?: string
  }
  service_id: number[] // Array of service IDs
  services?: { // Optional array of service details
    id: number
    name: string
    price?: number
    duration?: number
  }[]
  total_price: number
  total_duration: number
}

const statusColors = {
  confirmed: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-gray-100 text-gray-800'
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [upcomingAppointments, setUpcomingAppointments] = useState<Booking[]>([])
  const [pastAppointments, setPastAppointments] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        
        if (!token || !userId) {
          router.push('/login')
          return
        }

        const response = await fetch(`https://be-collins.vercel.app/api/bookings/by-user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.status === 401) {
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          router.push('/login')
          return
        }

        if (!response.ok) {
          throw new Error('Failed to fetch bookings')
        }

        const data = await response.json()
        
        if (data.success) {
          const now = new Date()
          
          const processBookings = (bookings: Booking[]) => {
            return bookings.map(booking => ({
              ...booking,
              // Pastikan services selalu berupa array
              services: booking.services || []
            }))
          }

          const upcoming = data.data
            .filter((booking: Booking) => 
              new Date(booking.schedule) >= now && booking.status === 'confirmed'
            )
            .sort((a: Booking, b: Booking) => 
              new Date(a.schedule).getTime() - new Date(b.schedule).getTime()
            )
          
          const past = data.data
            .filter((booking: Booking) => 
              new Date(booking.schedule) < now || booking.status !== 'confirmed'
            )
            .sort((a: Booking, b: Booking) => 
              new Date(b.schedule).getTime() - new Date(a.schedule).getTime()
            )

          setUpcomingAppointments(processBookings(upcoming))
          setPastAppointments(processBookings(past))
        } else {
          throw new Error(data.error?.message || 'Failed to fetch bookings')
        }
      } catch (err) {
        console.error('Fetch bookings error:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load your bookings. Please try again.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookings()
  }, [router])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleReschedule = (bookingId: number) => {
    router.push(`/booking/reschedule/${bookingId}`)
  }

  const handleCancel = async (bookingId: number) => {
    try {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      
      if (!token || !userId) {
        router.push('/login')
        return
      }

      const response = await fetch(`https://be-collins.vercel.app/api/bookings/${bookingId}/cancel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId })
      })

      if (!response.ok) {
        throw new Error('Failed to cancel booking')
      }

      const data = await response.json()
      
      if (data.success) {
        const cancelledBooking = upcomingAppointments.find(b => b.id === bookingId)
        if (cancelledBooking) {
          setUpcomingAppointments(upcomingAppointments.filter(b => b.id !== bookingId))
          setPastAppointments([{
            ...cancelledBooking,
            status: 'cancelled'
          }, ...pastAppointments])
        }
        
        toast({
          title: "Success",
          description: "Your booking has been cancelled.",
        })
      } else {
        throw new Error(data.error?.message || 'Failed to cancel booking')
      }
    } catch (err) {
      console.error('Cancel booking error:', err)
      toast({
        variant: "destructive",
        title: "Error",
        description: err instanceof Error ? err.message : 'Failed to cancel booking',
      })
    }
  }

  const handleBookAgain = (serviceIds: number[], barberId: number) => {
    // Mengambil service pertama sebagai default
    const primaryServiceId = serviceIds[0]
    router.push(`/booking?serviceId=${primaryServiceId}&barberId=${barberId}`)
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Loading your bookings...</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">My Appointments</h1>
          <p className="text-sm text-muted-foreground">
            {upcomingAppointments.length} upcoming • {pastAppointments.length} past
          </p>
        </div>
        <Link href="/booking">
          <Button size="sm" className="gap-1">
            <Plus className="h-3.5 w-3.5" /> New Booking
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              <CardDescription>Your confirmed upcoming bookings</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="rounded-lg border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">
                              {appointment.services.length > 0 
                                ? appointment.services.map(s => s.name).join(', ')
                                : 'No service specified'}
                            </h3>
                            <Badge variant="outline" className={statusColors[appointment.status]}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3.5 w-3.5" />
                              <span>{appointment.barber.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{formatDate(appointment.schedule)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{formatTime(appointment.schedule)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>Rp{appointment.total_price.toLocaleString()}</span>
                            </div>
                            {appointment.total_duration > 0 && (
                              <div className="flex items-center gap-1">
                                <span>{appointment.total_duration} mins</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleReschedule(appointment.id)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-destructive"
                              onClick={() => handleCancel(appointment.id)}
                            >
                              Cancel Appointment
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <Calendar className="mb-2 h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">No upcoming appointments</h3>
                  <p className="text-xs text-muted-foreground">You don't have any scheduled appointments.</p>
                  <Link href="/booking" className="mt-3">
                    <Button size="sm">Book an Appointment</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="past" className="mt-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Past Appointments</CardTitle>
              <CardDescription>Your completed and cancelled bookings</CardDescription>
            </CardHeader>
            <CardContent>
              {pastAppointments.length > 0 ? (
                <div className="space-y-3">
                  {pastAppointments.map((appointment) => (
                    <div key={appointment.id} className="rounded-lg border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">
                              {appointment.services.length > 0 
                                ? appointment.services.map(s => s.name).join(', ')
                                : 'No service specified'}
                            </h3>
                            <Badge variant="outline" className={statusColors[appointment.status]}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3.5 w-3.5" />
                              <span>{appointment.barber.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{formatDate(appointment.schedule)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{formatTime(appointment.schedule)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>Rp{appointment.total_price.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem 
                              onClick={() => handleBookAgain(appointment.service_id, appointment.barber.id)}
                            >
                              Book Again
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <Scissors className="mb-2 h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">No past appointments</h3>
                  <p className="text-xs text-muted-foreground">You don't have any appointment history yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}