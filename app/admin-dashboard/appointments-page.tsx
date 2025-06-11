"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const appointments = [
  {
    id: "1",
    client: "John Smith",
    phone: "+62 812-3456-7890",
    service: "Classic Haircut",
    barber: "James Wilson",
    date: "2025-01-11",
    time: "10:00",
    duration: 30,
    price: 25,
    status: "confirmed",
    branch: "Main Branch",
  },
  {
    id: "2",
    client: "Michael Johnson",
    phone: "+62 813-4567-8901",
    service: "Beard Trim",
    barber: "Robert Davis",
    date: "2025-01-11",
    time: "11:00",
    duration: 20,
    price: 15,
    status: "completed",
    branch: "Downtown Branch",
  },
  {
    id: "3",
    client: "David Williams",
    phone: "+62 814-5678-9012",
    service: "Haircut & Beard Combo",
    barber: "Michael Brown",
    date: "2025-01-11",
    time: "13:30",
    duration: 45,
    price: 35,
    status: "in-progress",
    branch: "Main Branch",
  },
  {
    id: "4",
    client: "Robert Brown",
    phone: "+62 815-6789-0123",
    service: "Hot Towel Shave",
    barber: "David Martinez",
    date: "2025-01-11",
    time: "15:00",
    duration: 45,
    price: 35,
    status: "confirmed",
    branch: "Mall Branch",
  },
  {
    id: "5",
    client: "William Davis",
    phone: "+62 816-7890-1234",
    service: "Classic Haircut",
    barber: "James Wilson",
    date: "2025-01-12",
    time: "09:30",
    duration: 30,
    price: 25,
    status: "confirmed",
    branch: "Main Branch",
  },
]

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [branchFilter, setBranchFilter] = useState("all")

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.barber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    const matchesBranch = branchFilter === "all" || appointment.branch === branchFilter
    return matchesSearch && matchesStatus && matchesBranch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 hover:bg-green-600 text-white"
      case "confirmed":
        return "bg-blue-500 hover:bg-blue-600 text-white"
      case "in-progress":
        return "bg-yellow-500 hover:bg-yellow-600 text-white"
      case "cancelled":
        return "bg-red-500 hover:bg-red-600 text-white"
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white"
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Appointments</h1>
          <p className="text-sm text-muted-foreground">Manage all customer appointments</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Ready to serve</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Currently serving</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>View and manage customer appointments</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-full md:w-[200px]"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger className="w-full md:w-[150px]">
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  <SelectItem value="Main Branch">Main Branch</SelectItem>
                  <SelectItem value="Downtown Branch">Downtown Branch</SelectItem>
                  <SelectItem value="Mall Branch">Mall Branch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead className="hidden lg:table-cell">Barber</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead className="hidden sm:table-cell">Branch</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.client}</TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      {appointment.phone}
                    </TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell className="hidden lg:table-cell">{appointment.barber}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">{appointment.date}</span>
                        <span className="text-xs text-muted-foreground">{appointment.time}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-sm">{appointment.branch}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
