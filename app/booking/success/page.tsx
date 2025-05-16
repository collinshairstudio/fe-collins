import Link from "next/link"
import { Calendar, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingSuccessPage() {
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
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Appointment Details</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Barber:</span>
                <span className="font-medium">Alex Johnson</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium">Classic Haircut</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">Friday, May 17, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-medium">10:00 AM</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              A confirmation email has been sent to your registered email address. You can manage your appointment from
              your dashboard.
            </p>
          </div>
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
