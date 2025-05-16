"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, Edit, MoreHorizontal, Plus, Scissors, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const upcomingAppointments = [
  {
    id: 1,
    service: "Classic Haircut",
    barber: "Alex Johnson",
    date: "May 17, 2024",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    service: "Beard Trim",
    barber: "Jordan Smith",
    date: "June 2, 2024",
    time: "2:30 PM",
    status: "confirmed",
  },
]

const pastAppointments = [
  {
    id: 3,
    service: "Deluxe Package",
    barber: "Sam Rodriguez",
    date: "April 10, 2024",
    time: "11:00 AM",
    status: "completed",
  },
  {
    id: 4,
    service: "Haircut & Beard Trim",
    barber: "Alex Johnson",
    date: "March 22, 2024",
    time: "4:00 PM",
    status: "completed",
  },
  {
    id: 5,
    service: "Hot Towel Shave",
    barber: "Jordan Smith",
    date: "February 15, 2024",
    time: "1:30 PM",
    status: "completed",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your appointments and account</p>
        </div>
        <Link href="/booking">
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New Appointment
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{appointment.service}</h3>
                              <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  <span>{appointment.barber}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{appointment.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>Reschedule</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Cancel Appointment</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Calendar className="mb-2 h-10 w-10 text-muted-foreground" />
                      <h3 className="font-medium">No upcoming appointments</h3>
                      <p className="text-sm text-muted-foreground">You don&apos;t have any scheduled appointments.</p>
                      <Link href="/booking" className="mt-4">
                        <Button>Book an Appointment</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="past" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Past Appointments</CardTitle>
                  <CardDescription>Your appointment history</CardDescription>
                </CardHeader>
                <CardContent>
                  {pastAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {pastAppointments.map((appointment) => (
                        <div key={appointment.id} className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{appointment.service}</h3>
                              <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  <span>{appointment.barber}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{appointment.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Book Similar</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <Scissors className="mb-2 h-10 w-10 text-muted-foreground" />
                      <h3 className="font-medium">No past appointments</h3>
                      <p className="text-sm text-muted-foreground">You don&apos;t have any appointment history yet.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                  <p>John Doe</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p>john.doe@example.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Favorite Services</CardTitle>
              <CardDescription>Your most booked services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Classic Haircut</span>
                  <span className="text-sm text-muted-foreground">5 times</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Beard Trim</span>
                  <span className="text-sm text-muted-foreground">3 times</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Hot Towel Shave</span>
                  <span className="text-sm text-muted-foreground">2 times</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/services" className="w-full">
                <Button variant="outline" className="w-full">
                  View All Services
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
