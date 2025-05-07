"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  Users,
  Scissors,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const appointments = [
  {
    id: "1",
    client: "John Smith",
    service: "Classic Haircut",
    date: "2025-05-06",
    time: "10:00 AM",
    duration: 30,
    price: 25,
    status: "confirmed",
  },
  {
    id: "2",
    client: "Michael Johnson",
    service: "Beard Trim",
    date: "2025-05-06",
    time: "11:00 AM",
    duration: 20,
    price: 15,
    status: "confirmed",
  },
  {
    id: "3",
    client: "David Williams",
    service: "Haircut & Beard Combo",
    date: "2025-05-06",
    time: "1:30 PM",
    duration: 45,
    price: 35,
    status: "confirmed",
  },
  {
    id: "4",
    client: "Robert Brown",
    service: "Hot Towel Shave",
    date: "2025-05-06",
    time: "3:00 PM",
    duration: 45,
    price: 35,
    status: "confirmed",
  },
  {
    id: "5",
    client: "William Davis",
    service: "Classic Haircut",
    date: "2025-05-07",
    time: "9:30 AM",
    duration: 30,
    price: 25,
    status: "confirmed",
  },
  {
    id: "6",
    client: "James Miller",
    service: "Kids Haircut",
    date: "2025-05-07",
    time: "11:00 AM",
    duration: 20,
    price: 18,
    status: "confirmed",
  },
]

const clients = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
    visits: 12,
    lastVisit: "2025-04-20",
    preferredService: "Classic Haircut",
  },
  {
    id: "2",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "(234) 567-8901",
    visits: 8,
    lastVisit: "2025-04-15",
    preferredService: "Beard Trim",
  },
  {
    id: "3",
    name: "David Williams",
    email: "david.williams@example.com",
    phone: "(345) 678-9012",
    visits: 5,
    lastVisit: "2025-04-10",
    preferredService: "Haircut & Beard Combo",
  },
  {
    id: "4",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "(456) 789-0123",
    visits: 3,
    lastVisit: "2025-04-05",
    preferredService: "Hot Towel Shave",
  },
  {
    id: "5",
    name: "William Davis",
    email: "william.davis@example.com",
    phone: "(567) 890-1234",
    visits: 7,
    lastVisit: "2025-04-01",
    preferredService: "Classic Haircut",
  },
]

export default function BarberDashboard() {
  const [date, setDate] = useState(new Date())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const nextDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  const prevDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  const dateString = date.toISOString().split("T")[0]

  const todayAppointments = appointments.filter((appointment) => appointment.date === dateString)

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
        <div className="flex items-center gap-2 mb-8">
          <div className="rounded-full bg-primary/10 p-1">
            <Scissors className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold">ClipMaster</span>
        </div>

        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-20 w-20 mb-2">
            <AvatarImage src="/placeholder.svg?height=80&width=80&text=JW" alt="James Wilson" />
            <AvatarFallback>JW</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-bold">James Wilson</h2>
          <p className="text-sm text-muted-foreground">Master Barber</p>
        </div>

        <nav className="flex flex-col gap-1">
          <Link href="/barber-dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link href="/barber-dashboard/appointments">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-5 w-5" />
              Appointments
            </Button>
          </Link>
          <Link href="/barber-dashboard/clients">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-5 w-5" />
              Clients
            </Button>
          </Link>
          <Link href="/barber-dashboard/messages">
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-5 w-5" />
              Messages
              <Badge className="ml-auto">3</Badge>
            </Button>
          </Link>
          <Link href="/barber-dashboard/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </Link>
        </nav>

        <div className="mt-auto">
          <Separator className="my-4" />
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-5 w-5" />
              Main Website
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="rounded-full bg-primary/10 p-1">
              <Scissors className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold">ClipMaster</span>
          </div>

          <div className="flex flex-col items-center mb-8">
            <Avatar className="h-20 w-20 mb-2">
              <AvatarImage src="/placeholder.svg?height=80&width=80&text=JW" alt="James Wilson" />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-bold">James Wilson</h2>
            <p className="text-sm text-muted-foreground">Master Barber</p>
          </div>

          <nav className="flex flex-col gap-1">
            <Link href="/barber-dashboard" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/barber-dashboard/appointments" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-5 w-5" />
                Appointments
              </Button>
            </Link>
            <Link href="/barber-dashboard/clients" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-5 w-5" />
                Clients
              </Button>
            </Link>
            <Link href="/barber-dashboard/messages" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-5 w-5" />
                Messages
                <Badge className="ml-auto">3</Badge>
              </Button>
            </Link>
            <Link href="/barber-dashboard/settings" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </Link>
          </nav>

          <div className="mt-auto">
            <Separator className="my-4" />
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-5 w-5" />
                Main Website
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="mr-2 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:px-6">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <h1 className="text-lg font-semibold">Barber Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=JW" alt="James Wilson" />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Welcome back, James!</h2>
              <div className="mt-2 md:mt-0">
                <Select defaultValue="today">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today's Schedule</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">+2 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$110</div>
                  <p className="text-xs text-muted-foreground">+$35 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">New Clients</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">First visit today</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="schedule" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-auto">
                <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
                <TabsTrigger value="clients">Recent Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Appointments</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={prevDay}>
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="text-sm font-medium">{formatDate(date)}</div>
                        <Button variant="outline" size="icon" onClick={nextDay}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Manage your appointments for {formatDate(date)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {todayAppointments.length > 0 ? (
                      <div className="space-y-4">
                        {todayAppointments.map((appointment) => (
                          <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Clock className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">{appointment.client}</h3>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm text-muted-foreground">{appointment.service}</p>
                                  <span className="text-sm text-muted-foreground">•</span>
                                  <p className="text-sm text-muted-foreground">{appointment.time}</p>
                                  <span className="text-sm text-muted-foreground">•</span>
                                  <p className="text-sm text-muted-foreground">{appointment.duration} min</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">${appointment.price}</Badge>
                              <Badge className="bg-green-500 hover:bg-green-600">{appointment.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-[200px] flex-col items-center justify-center rounded-lg border border-dashed">
                        <Calendar className="h-10 w-10 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">No appointments</h3>
                        <p className="text-sm text-muted-foreground">
                          There are no appointments scheduled for this day.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clients" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Clients</CardTitle>
                    <CardDescription>View and manage your recent clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {clients.slice(0, 5).map((client) => (
                        <div key={client.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage
                                src={`/placeholder.svg?height=40&width=40&text=${client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`}
                                alt={client.name}
                              />
                              <AvatarFallback>
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{client.name}</h3>
                              <div className="flex items-center gap-2">
                                <p className="text-sm text-muted-foreground">{client.preferredService}</p>
                                <span className="text-sm text-muted-foreground">•</span>
                                <p className="text-sm text-muted-foreground">
                                  Last visit: {new Date(client.lastVisit).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{client.visits} visits</Badge>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
