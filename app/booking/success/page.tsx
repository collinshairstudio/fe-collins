"use client"

import Link from "next/link"
import { Calendar, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { useSearchParams } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type BookingData = {
  id: number
  user_id: string
  capster_id: number
  schedule: string
  created_at: string
  status: string
  service_id: number
  barbers: {
    id: number
    name: string
  }
  services: {
    id: number
    name: string
    price?: number
    duration?: number
  }
}

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking_id');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (bookingId) {
      fetchBookingData(bookingId);
    } else {
      setIsLoading(false);
      setError('No booking ID found in URL');
    }
  }, [bookingId]);

  const fetchBookingData = async (id: string) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      const response = await fetch(`https://be-collins.vercel.app/api/bookings/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      
      if (data.success && data.data?.data) {
        setBookingData(data.data.data); // Set data from nested structure
      } else {
        throw new Error(data.message || 'Failed to fetch booking data');
      }
    } catch (err) {
      console.error("Failed to fetch booking data:", err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load booking details"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return "Invalid date"
      
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      })
    } catch {
      return "Invalid date format"
    }
  }

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return "Invalid time"
      
      return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: "UTC"
      })
    } catch {
      return "Invalid time format"
    }
  }

  if (isLoading) {
    return <LoadingView />
  }

  if (error) {
    return <ErrorView error={error} />
  }

  if (!bookingData) {
    return <NoBookingView />
  }

  return (
    <div className="container py-12 md:py-16">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription>Your appointment has been successfully scheduled</CardDescription>
        </CardHeader>
        <CardContent>
          <BookingDetails 
            bookingData={bookingData} 
            formatDate={formatDate}
            formatTime={formatTime}
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/dashboard" className="w-full">
            <Button className="w-full gap-2">
              <Calendar className="h-4 w-4" /> View in Dashboard
            </Button>
          </Link>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

// Additional components for modularity
function LoadingView() {
  return (
    <div className="container py-12 md:py-16">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Loading Booking Details...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please wait while we fetch your booking information.</p>
        </CardContent>
      </Card>
    </div>
  )
}

function ErrorView({ error }: { error: string }) {
  return (
    <div className="container py-12 md:py-16">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/" className="w-full">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link href="/dashboard" className="w-full">
            <Button variant="outline" className="w-full">
              View Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

function NoBookingView() {
  return (
    <div className="container py-12 md:py-16">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Booking Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We couldn't find your booking details.</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/dashboard" className="w-full">
            <Button className="w-full">Check Your Dashboard</Button>
          </Link>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

function BookingDetails({ 
  bookingData, 
  formatDate,
  formatTime
}: { 
  bookingData: BookingData,
  formatDate: (date: string) => string,
  formatTime: (time: string) => string
}) {
  return (
    <>
      <div className="rounded-lg border p-4">
        <h3 className="font-medium">Appointment Details</h3>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Barber:</span>
            <span className="font-medium">{bookingData.barbers.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service:</span>
            <span className="font-medium">{bookingData.services.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span className="font-medium">{formatDate(bookingData.schedule)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time:</span>
            <span className="font-medium">{formatTime(bookingData.schedule)}</span>
          </div>
          {bookingData.services.price && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price:</span>
              <span className="font-medium">Rp{bookingData.services.price.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="font-medium capitalize">{bookingData.status}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          A confirmation email has been sent to your registered email address. 
          You can manage your appointment from your dashboard.
        </p>
      </div>
    </>
  )
}