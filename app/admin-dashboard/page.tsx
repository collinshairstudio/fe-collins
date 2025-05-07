"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  DollarSign,
  Home,
  LayoutDashboard,
  LineChart,
  LogOut,
  Menu,
  Package,
  Scissors,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const barbers = [
  {
    id: "1",
    name: "James Wilson",
    specialty: "Classic Cuts",
    appointments: 32,
    revenue: 800,
    image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
  },
  {
    id: "2",
    name: "Michael Brown",
    specialty: "Fades & Designs",
    appointments: 28,
    revenue: 700,
    image: "/placeholder.svg?height=300&width=300&text=Michael+Brown",
  },
  {
    id: "3",
    name: "Robert Davis",
    specialty: "Beard Styling",
    appointments: 24,
    revenue: 600,
    image: "/placeholder.svg?height=300&width=300&text=Robert+Davis",
  },
  {
    id: "4",
    name: "David Martinez",
    specialty: "Modern Styles",
    appointments: 20,
    revenue: 500,
    image: "/placeholder.svg?height=300&width=300&text=David+Martinez",
  },
]

const services = [
  {
    id: "haircut",
    name: "Classic Haircut",
    price: 25,
    duration: 30,
    bookings: 45,
  },
  {
    id: "beard",
    name: "Beard Trim",
    price: 15,
    duration: 20,
    bookings: 32,
  },
  {
    id: "shave",
    name: "Hot Towel Shave",
    price: 35,
    duration: 45,
    bookings: 18,
  },
  {
    id: "combo",
    name: "Haircut & Beard Combo",
    price: 35,
    duration: 45,
    bookings: 27,
  },
  {
    id: "kids",
    name: "Kids Haircut",
    price: 18,
    duration: 20,
    bookings: 15,
  },
  {
    id: "senior",
    name: "Senior Haircut",
    price: 20,
    duration: 30,
    bookings: 12,
  },
]

const recentAppointments = [
  {
    id: "1",
    client: "John Smith",
    service: "Classic Haircut",
    barber: "James Wilson",
    date: "2025-05-06",
    time: "10:00 AM",
    price: 25,
    status: "completed",
  },
  {
    id: "2",
    client: "Michael Johnson",
    service: "Beard Trim",
    barber: "Robert Davis",
    date: "2025-05-06",
    time: "11:00 AM",
    price: 15,
    status: "completed",
  },
  {
    id: "3",
    client: "David Williams",
    service: "Haircut & Beard Combo",
    barber: "Michael Brown",
    date: "2025-05-06",
    time: "1:30 PM",
    price: 35,
    status: "completed",
  },
  {
    id: "4",
    client: "Robert Brown",
    service: "Hot Towel Shave",
    barber: "David Martinez",
    date: "2025-05-06",
    time: "3:00 PM",
    price: 35,
    status: "completed",
  },
  {
    id: "5",
    client: "William Davis",
    service: "Classic Haircut",
    barber: "James Wilson",
    date: "2025-05-07",
    time: "9:30 AM",
    price: 25,
    status: "confirmed",
  },
]

// Monthly revenue data for chart
const monthlyRevenue = [
  { month: "Jan", revenue: 2200 },
  { month: "Feb", revenue: 2400 },
  { month: "Mar", revenue: 2600 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 3200 },
  { month: "Jun", revenue: 3400 },
  { month: "Jul", revenue: 3600 },
  { month: "Aug", revenue: 3800 },
  { month: "Sep", revenue: 3600 },
  { month: "Oct", revenue: 3400 },
  { month: "Nov", revenue: 3200 },
  { month: "Dec", revenue: 3000 },
]

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Calculate total revenue
  const totalRevenue = barbers.reduce((sum, barber) => sum + barber.revenue, 0)

  // Calculate total appointments
  const totalAppointments = barbers.reduce((sum, barber) => sum + barber.appointments, 0)

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
            <AvatarImage src="/placeholder.svg?height=80&width=80&text=Admin" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-bold">Admin Panel</h2>
          <p className="text-sm text-muted-foreground">Shop Manager</p>
        </div>

        <nav className="flex flex-col gap-1">
          <Link href="/admin-dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin-dashboard/appointments">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-5 w-5" />
              Appointments
            </Button>
          </Link>
          <Link href="/admin-dashboard/barbers">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-5 w-5" />
              Barbers
            </Button>
          </Link>
          <Link href="/admin-dashboard/clients">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-5 w-5" />
              Clients
            </Button>
          </Link>
          <Link href="/admin-dashboard/services">
            <Button variant="ghost" className="w-full justify-start">
              <Package className="mr-2 h-5 w-5" />
              Services
            </Button>
          </Link>
          <Link href="/admin-dashboard/reports">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-5 w-5" />
              Reports
            </Button>
          </Link>
          <Link href="/admin-dashboard/settings">
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
              <AvatarImage src="/placeholder.svg?height=80&width=80&text=Admin" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <p className="text-sm text-muted-foreground">Shop Manager</p>
          </div>

          <nav className="flex flex-col gap-1">
            <Link href="/admin-dashboard" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin-dashboard/appointments" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-5 w-5" />
                Appointments
              </Button>
            </Link>
            <Link href="/admin-dashboard/barbers" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-5 w-5" />
                Barbers
              </Button>
            </Link>
            <Link href="/admin-dashboard/clients" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-5 w-5" />
                Clients
              </Button>
            </Link>
            <Link href="/admin-dashboard/services" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <Package className="mr-2 h-5 w-5" />
                Services
              </Button>
            </Link>
            <Link href="/admin-dashboard/reports" onClick={() => setSidebarOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 h-5 w-5" />
                Reports
              </Button>
            </Link>
            <Link href="/admin-dashboard/settings" onClick={() => setSidebarOpen(false)}>
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
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=Admin" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <div className="grid gap-6">
            <h2 className="text-2xl font-bold tracking-tight">Business Overview</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalRevenue}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalAppointments}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Barbers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{barbers.length}</div>
                  <p className="text-xs text-muted-foreground">All barbers active</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Services Offered</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{services.length}</div>
                  <p className="text-xs text-muted-foreground">+2 new services this month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for the current year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    {/* This would be a chart in a real implementation */}
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-dashed">
                      <LineChart className="h-10 w-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Revenue Chart</h3>
                      <p className="text-sm text-muted-foreground">
                        Monthly revenue data visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Top Barbers</CardTitle>
                  <CardDescription>Barbers ranked by revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {barbers
                      .sort((a, b) => b.revenue - a.revenue)
                      .map((barber) => (
                        <div key={barber.id} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40&text=${barber.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}`}
                              alt={barber.name}
                            />
                            <AvatarFallback>
                              {barber.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-medium">{barber.name}</h3>
                            <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${barber.revenue}</p>
                            <p className="text-sm text-muted-foreground">{barber.appointments} appts</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Services</CardTitle>
                  <CardDescription>Services ranked by number of bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Bookings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services
                        .sort((a, b) => b.bookings - a.bookings)
                        .slice(0, 5)
                        .map((service) => (
                          <TableRow key={service.id}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell>${service.price}</TableCell>
                            <TableCell>{service.duration} min</TableCell>
                            <TableCell className="text-right">{service.bookings}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Services
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Appointments</CardTitle>
                  <CardDescription>Latest appointments across all barbers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Barber</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentAppointments.slice(0, 5).map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.client}</TableCell>
                          <TableCell>{appointment.service}</TableCell>
                          <TableCell>{appointment.barber}</TableCell>
                          <TableCell className="text-right">
                            <Badge
                              variant="outline"
                              className={
                                appointment.status === "completed"
                                  ? "bg-green-500 hover:bg-green-600 text-white"
                                  : "bg-blue-500 hover:bg-blue-600 text-white"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Appointments
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <Button className="h-auto flex-col py-4">
                    <Calendar className="mb-2 h-5 w-5" />
                    <span>New Appointment</span>
                  </Button>
                  <Button className="h-auto flex-col py-4" variant="outline">
                    <User className="mb-2 h-5 w-5" />
                    <span>Add Client</span>
                  </Button>
                  <Button className="h-auto flex-col py-4" variant="outline">
                    <Users className="mb-2 h-5 w-5" />
                    <span>Manage Barbers</span>
                  </Button>
                  <Button className="h-auto flex-col py-4" variant="outline">
                    <BarChart3 className="mb-2 h-5 w-5" />
                    <span>Generate Report</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
