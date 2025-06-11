"use client"

import { useState } from "react"
import {
  BarChart3,
  Calendar,
  DollarSign,
  LayoutDashboard,
  LineChart,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import AppointmentsPage from "./appointments-page"
import BarbersPage from "./barbers-page"
import BranchPage from "./branch-page"
import ClientsPage from "./clients-page"
import ServicesPage from "./services-page"
import ReportsPage from "./reports-page"
import SettingsPage from "./settings-page"

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

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  // Calculate total revenue
  const totalRevenue = barbers.reduce((sum, barber) => sum + barber.revenue, 0)

  // Calculate total appointments
  const totalAppointments = barbers.reduce((sum, barber) => sum + barber.appointments, 0)

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-56 flex-col border-r bg-background p-4 md:flex">
        <div className="flex items-center gap-2 mb-6">
          <div className="rounded-full bg-primary/10 p-1">
            <Scissors className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold">ClipMaster</span>
        </div>

        <div className="flex flex-col items-center mb-6">
          <Avatar className="h-16 w-16 mb-2">
            <AvatarImage src="/placeholder.svg?height=64&width=64&text=Admin" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <h2 className="text-base font-bold">Admin Panel</h2>
          <p className="text-xs text-muted-foreground">Shop Manager</p>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <Button
            variant={currentPage === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span className="text-sm">Dashboard</span>
          </Button>
          <Button
            variant={currentPage === "appointments" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("appointments")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span className="text-sm">Appointments</span>
          </Button>
          <Button
            variant={currentPage === "barbers" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("barbers")}
          >
            <Users className="mr-2 h-4 w-4" />
            <span className="text-sm">Barbers</span>
          </Button>
          <Button
            variant={currentPage === "branch" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("branch")}
          >
            <Package className="mr-2 h-4 w-4" />
            <span className="text-sm">Branch</span>
          </Button>
          <Button
            variant={currentPage === "clients" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("clients")}
          >
            <User className="mr-2 h-4 w-4" />
            <span className="text-sm">Clients</span>
          </Button>
          <Button
            variant={currentPage === "services" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("services")}
          >
            <Package className="mr-2 h-4 w-4" />
            <span className="text-sm">Services</span>
          </Button>
          <Button
            variant={currentPage === "reports" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("reports")}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            <span className="text-sm">Reports</span>
          </Button>
          <Button
            variant={currentPage === "settings" ? "default" : "ghost"}
            className="w-full justify-start h-9 px-3"
            onClick={() => setCurrentPage("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span className="text-sm">Settings</span>
          </Button>
        </nav>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-56 p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="rounded-full bg-primary/10 p-1">
              <Scissors className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold">ClipMaster</span>
          </div>

          <div className="flex flex-col items-center mb-6">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src="/placeholder.svg?height=64&width=64&text=Admin" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <h2 className="text-base font-bold">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">Shop Manager</p>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            <Button
              variant={currentPage === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("dashboard")
                setSidebarOpen(false)
              }}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Button>
            <Button
              variant={currentPage === "appointments" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("appointments")
                setSidebarOpen(false)
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span className="text-sm">Appointments</span>
            </Button>
            <Button
              variant={currentPage === "barbers" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("barbers")
                setSidebarOpen(false)
              }}
            >
              <Users className="mr-2 h-4 w-4" />
              <span className="text-sm">Barbers</span>
            </Button>
            <Button
              variant={currentPage === "branch" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("branch")
                setSidebarOpen(false)
              }}
            >
              <Package className="mr-2 h-4 w-4" />
              <span className="text-sm">Branch</span>
            </Button>
            <Button
              variant={currentPage === "clients" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("clients")
                setSidebarOpen(false)
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <span className="text-sm">Clients</span>
            </Button>
            <Button
              variant={currentPage === "services" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("services")
                setSidebarOpen(false)
              }}
            >
              <Package className="mr-2 h-4 w-4" />
              <span className="text-sm">Services</span>
            </Button>
            <Button
              variant={currentPage === "reports" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("reports")
                setSidebarOpen(false)
              }}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              <span className="text-sm">Reports</span>
            </Button>
            <Button
              variant={currentPage === "settings" ? "default" : "ghost"}
              className="w-full justify-start h-9 px-3"
              onClick={() => {
                setCurrentPage("settings")
                setSidebarOpen(false)
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span className="text-sm">Settings</span>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1">
        <main className="p-3 md:p-4 lg:p-6">
          {currentPage === "dashboard" && (
            <div className="grid gap-4 md:gap-6">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Business Overview</h2>

              <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
                <Card className="p-3 md:p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                    <CardTitle className="text-xs md:text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <div className="text-lg md:text-2xl font-bold">${totalRevenue}</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card className="p-3 md:p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                    <CardTitle className="text-xs md:text-sm font-medium">Appointments</CardTitle>
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <div className="text-lg md:text-2xl font-bold">{totalAppointments}</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card className="p-3 md:p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                    <CardTitle className="text-xs md:text-sm font-medium">Active Barbers</CardTitle>
                    <Users className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <div className="text-lg md:text-2xl font-bold">{barbers.length}</div>
                    <p className="text-xs text-muted-foreground">All barbers active</p>
                  </CardContent>
                </Card>
                <Card className="p-3 md:p-4">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                    <CardTitle className="text-xs md:text-sm font-medium">Services Offered</CardTitle>
                    <Package className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <div className="text-lg md:text-2xl font-bold">{services.length}</div>
                    <p className="text-xs text-muted-foreground">+2 new services this month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:gap-6 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg">Revenue Overview</CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Monthly revenue for the current year
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] md:h-[300px] w-full">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-dashed">
                        <LineChart className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground" />
                        <h3 className="mt-2 md:mt-4 text-sm md:text-lg font-medium">Revenue Chart</h3>
                        <p className="text-xs md:text-sm text-muted-foreground text-center px-4">
                          Monthly revenue data visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg">Top Barbers</CardTitle>
                    <CardDescription className="text-xs md:text-sm">Barbers ranked by revenue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {barbers
                        .sort((a, b) => b.revenue - a.revenue)
                        .map((barber) => (
                          <div key={barber.id} className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 md:h-10 md:w-10">
                              <AvatarImage
                                src={`/placeholder.svg?height=40&width=40&text=${barber.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}`}
                                alt={barber.name}
                              />
                              <AvatarFallback className="text-xs">
                                {barber.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-sm md:text-base truncate">{barber.name}</h3>
                              <p className="text-xs text-muted-foreground truncate">{barber.specialty}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-sm md:text-base">${barber.revenue}</p>
                              <p className="text-xs text-muted-foreground">{barber.appointments} appts</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg">Popular Services</CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Services ranked by number of bookings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs">Service</TableHead>
                            <TableHead className="text-xs">Price</TableHead>
                            <TableHead className="text-xs hidden sm:table-cell">Duration</TableHead>
                            <TableHead className="text-xs text-right">Bookings</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {services
                            .sort((a, b) => b.bookings - a.bookings)
                            .slice(0, 5)
                            .map((service) => (
                              <TableRow key={service.id}>
                                <TableCell className="font-medium text-xs md:text-sm">{service.name}</TableCell>
                                <TableCell className="text-xs md:text-sm">${service.price}</TableCell>
                                <TableCell className="text-xs md:text-sm hidden sm:table-cell">
                                  {service.duration} min
                                </TableCell>
                                <TableCell className="text-xs md:text-sm text-right">{service.bookings}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Button variant="outline" className="w-full h-8 text-xs">
                      View All Services
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base md:text-lg">Recent Appointments</CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Latest appointments across all barbers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs">Client</TableHead>
                            <TableHead className="text-xs hidden sm:table-cell">Service</TableHead>
                            <TableHead className="text-xs hidden md:table-cell">Barber</TableHead>
                            <TableHead className="text-xs text-right">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentAppointments.slice(0, 5).map((appointment) => (
                            <TableRow key={appointment.id}>
                              <TableCell className="font-medium text-xs md:text-sm">{appointment.client}</TableCell>
                              <TableCell className="text-xs md:text-sm hidden sm:table-cell">
                                {appointment.service}
                              </TableCell>
                              <TableCell className="text-xs md:text-sm hidden md:table-cell">
                                {appointment.barber}
                              </TableCell>
                              <TableCell className="text-right">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${
                                    appointment.status === "completed"
                                      ? "bg-green-500 hover:bg-green-600 text-white"
                                      : "bg-blue-500 hover:bg-blue-600 text-white"
                                  }`}
                                >
                                  {appointment.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Button variant="outline" className="w-full h-8 text-xs">
                      View All Appointments
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg">Quick Actions</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                    <Button className="h-auto flex-col py-3 md:py-4">
                      <Calendar className="mb-1 md:mb-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-xs md:text-sm">New Appointment</span>
                    </Button>
                    <Button className="h-auto flex-col py-3 md:py-4" variant="outline">
                      <User className="mb-1 md:mb-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-xs md:text-sm">Add Client</span>
                    </Button>
                    <Button className="h-auto flex-col py-3 md:py-4" variant="outline">
                      <Users className="mb-1 md:mb-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-xs md:text-sm">Manage Barbers</span>
                    </Button>
                    <Button className="h-auto flex-col py-3 md:py-4" variant="outline">
                      <BarChart3 className="mb-1 md:mb-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-xs md:text-sm">Generate Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          {currentPage === "appointments" && <AppointmentsPage />}
          {currentPage === "barbers" && <BarbersPage />}
          {currentPage === "branch" && <BranchPage />}
          {currentPage === "clients" && <ClientsPage />}
          {currentPage === "services" && <ServicesPage />}
          {currentPage === "reports" && <ReportsPage />}
          {currentPage === "settings" && <SettingsPage />}
        </main>
      </div>
    </div>
  )
}
