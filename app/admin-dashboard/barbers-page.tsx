"use client"

import { useState } from "react"
import { Star, Calendar, Search, Plus, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const barbers = [
  {
    id: "1",
    name: "James Wilson",
    email: "james.wilson@clipmaster.com",
    phone: "+62 812-1111-1111",
    specialty: "Classic Cuts",
    experience: "5 years",
    appointments: 32,
    revenue: 800,
    rating: 4.8,
    status: "active",
    branch: "Main Branch",
    image: "/placeholder.svg?height=100&width=100&text=JW",
  },
  {
    id: "2",
    name: "Michael Brown",
    email: "michael.brown@clipmaster.com",
    phone: "+62 812-2222-2222",
    specialty: "Fades & Designs",
    experience: "4 years",
    appointments: 28,
    revenue: 700,
    rating: 4.7,
    status: "active",
    branch: "Downtown Branch",
    image: "/placeholder.svg?height=100&width=100&text=MB",
  },
  {
    id: "3",
    name: "Robert Davis",
    email: "robert.davis@clipmaster.com",
    phone: "+62 812-3333-3333",
    specialty: "Beard Styling",
    experience: "6 years",
    appointments: 24,
    revenue: 600,
    rating: 4.9,
    status: "active",
    branch: "Main Branch",
    image: "/placeholder.svg?height=100&width=100&text=RD",
  },
  {
    id: "4",
    name: "David Martinez",
    email: "david.martinez@clipmaster.com",
    phone: "+62 812-4444-4444",
    specialty: "Modern Styles",
    experience: "3 years",
    appointments: 20,
    revenue: 500,
    rating: 4.6,
    status: "inactive",
    branch: "Mall Branch",
    image: "/placeholder.svg?height=100&width=100&text=DM",
  },
]

export default function BarbersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [branchFilter, setBranchFilter] = useState("all")

  const filteredBarbers = barbers.filter((barber) => {
    const matchesSearch =
      barber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      barber.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || barber.status === statusFilter
    const matchesBranch = branchFilter === "all" || barber.branch === branchFilter
    return matchesSearch && matchesStatus && matchesBranch
  })

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Barbers</h1>
          <p className="text-sm text-muted-foreground">Manage barber staff and their performance</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add New Barber
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Barbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{barbers.length}</div>
            <p className="text-xs text-muted-foreground">Across all branches</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Barbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{barbers.filter((b) => b.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">Currently working</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">Customer satisfaction</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${barbers.reduce((sum, b) => sum + b.revenue, 0)}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Barbers</CardTitle>
              <CardDescription>Manage your barber staff</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search barbers..."
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
                  <SelectItem value="inactive">Inactive</SelectItem>
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
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBarbers.map((barber) => (
              <Card key={barber.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={barber.image || "/placeholder.svg"} alt={barber.name} />
                        <AvatarFallback>
                          {barber.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{barber.name}</h3>
                        <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{barber.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={barber.status === "active" ? "default" : "secondary"}>{barber.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span>{barber.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Branch:</span>
                      <span>{barber.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Appointments:</span>
                      <span>{barber.appointments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span className="font-medium">${barber.revenue}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Schedule
                    </Button>
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
