"use client"

import { useState } from "react"
import { MapPin, Users, DollarSign, Clock, Search, Plus, Edit, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const branches = [
  {
    id: "1",
    name: "Main Branch",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    phone: "+62 21-1111-1111",
    email: "main@clipmaster.com",
    manager: "John Manager",
    barbers: 3,
    revenue: 2100,
    appointments: 84,
    status: "active",
    openHours: "08:00 - 22:00",
    established: "2020-01-15",
  },
  {
    id: "2",
    name: "Downtown Branch",
    address: "Jl. Thamrin No. 456, Jakarta Pusat",
    phone: "+62 21-2222-2222",
    email: "downtown@clipmaster.com",
    manager: "Jane Manager",
    barbers: 2,
    revenue: 1400,
    appointments: 56,
    status: "active",
    openHours: "09:00 - 21:00",
    established: "2021-03-20",
  },
  {
    id: "3",
    name: "Mall Branch",
    address: "Mall Central Park Lt. 2, Jakarta Barat",
    phone: "+62 21-3333-3333",
    email: "mall@clipmaster.com",
    manager: "Bob Manager",
    barbers: 2,
    revenue: 1200,
    appointments: 48,
    status: "active",
    openHours: "10:00 - 22:00",
    established: "2022-06-10",
  },
  {
    id: "4",
    name: "Suburban Branch",
    address: "Jl. Kemang Raya No. 789, Jakarta Selatan",
    phone: "+62 21-4444-4444",
    email: "suburban@clipmaster.com",
    manager: "Alice Manager",
    barbers: 1,
    revenue: 800,
    appointments: 32,
    status: "maintenance",
    openHours: "08:00 - 20:00",
    established: "2023-01-05",
  },
]

export default function BranchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.manager.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || branch.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalRevenue = branches.reduce((sum, branch) => sum + branch.revenue, 0)
  const totalBarbers = branches.reduce((sum, branch) => sum + branch.barbers, 0)
  const totalAppointments = branches.reduce((sum, branch) => sum + branch.appointments, 0)

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Branch Management</h1>
          <p className="text-sm text-muted-foreground">Manage all branch locations and their performance</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add New Branch
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{branches.length}</div>
            <p className="text-xs text-muted-foreground">Across the city</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">All branches combined</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Barbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBarbers}</div>
            <p className="text-xs text-muted-foreground">Across all branches</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAppointments}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Branches</CardTitle>
              <CardDescription>Manage your branch locations</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search branches..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredBranches.map((branch) => (
              <Card key={branch.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {branch.address}
                      </p>
                    </div>
                    <Badge
                      variant={
                        branch.status === "active"
                          ? "default"
                          : branch.status === "maintenance"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {branch.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span>{branch.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{branch.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{branch.openHours}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Manager:</span>
                          <span>{branch.manager}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Barbers:</span>
                          <span>{branch.barbers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Revenue:</span>
                          <span className="font-medium">${branch.revenue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Appointments this month:</span>
                        <span className="font-medium">{branch.appointments}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Established:</span>
                        <span>{new Date(branch.established).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Users className="h-3 w-3 mr-1" />
                        Staff
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Reports
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
