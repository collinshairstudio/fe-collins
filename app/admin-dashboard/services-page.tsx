"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  {
    id: "haircut",
    name: "Classic Haircut",
    description: "Traditional men's haircut with styling",
    price: 25,
    duration: 30,
    bookings: 45,
    revenue: 1125,
    category: "haircut",
    status: "active",
    popularity: "high",
  },
  {
    id: "beard",
    name: "Beard Trim",
    description: "Professional beard trimming and shaping",
    price: 15,
    duration: 20,
    bookings: 32,
    revenue: 480,
    category: "beard",
    status: "active",
    popularity: "medium",
  },
  {
    id: "shave",
    name: "Hot Towel Shave",
    description: "Traditional hot towel shave experience",
    price: 35,
    duration: 45,
    bookings: 18,
    revenue: 630,
    category: "shave",
    status: "active",
    popularity: "medium",
  },
  {
    id: "combo",
    name: "Haircut & Beard Combo",
    description: "Complete haircut and beard styling package",
    price: 35,
    duration: 45,
    bookings: 27,
    revenue: 945,
    category: "combo",
    status: "active",
    popularity: "high",
  },
  {
    id: "kids",
    name: "Kids Haircut",
    description: "Special haircut service for children",
    price: 18,
    duration: 20,
    bookings: 15,
    revenue: 270,
    category: "haircut",
    status: "active",
    popularity: "low",
  },
  {
    id: "senior",
    name: "Senior Haircut",
    description: "Discounted haircut for senior citizens",
    price: 20,
    duration: 30,
    bookings: 12,
    revenue: 240,
    category: "haircut",
    status: "active",
    popularity: "low",
  },
  {
    id: "premium",
    name: "Premium Styling",
    description: "Luxury styling with premium products",
    price: 50,
    duration: 60,
    bookings: 8,
    revenue: 400,
    category: "styling",
    status: "inactive",
    popularity: "low",
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || service.category === categoryFilter
    const matchesStatus = statusFilter === "all" || service.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  const totalRevenue = services.reduce((sum, service) => sum + service.revenue, 0)
  const totalBookings = services.reduce((sum, service) => sum + service.bookings, 0)
  const activeServices = services.filter((service) => service.status === "active").length

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "high":
        return "bg-green-500 hover:bg-green-600 text-white"
      case "medium":
        return "bg-yellow-500 hover:bg-yellow-600 text-white"
      case "low":
        return "bg-red-500 hover:bg-red-600 text-white"
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white"
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Services</h1>
          <p className="text-sm text-muted-foreground">Manage your service offerings and pricing</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add New Service
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{services.length}</div>
            <p className="text-xs text-muted-foreground">Available services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeServices}</div>
            <p className="text-xs text-muted-foreground">Currently offered</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Service Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">Total earnings</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Services</CardTitle>
              <CardDescription>Manage your service catalog</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-full md:w-[200px]"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[130px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="haircut">Haircut</SelectItem>
                  <SelectItem value="beard">Beard</SelectItem>
                  <SelectItem value="shave">Shave</SelectItem>
                  <SelectItem value="combo">Combo</SelectItem>
                  <SelectItem value="styling">Styling</SelectItem>
                </SelectContent>
              </Select>
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
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="hidden sm:table-cell">Duration</TableHead>
                  <TableHead className="hidden md:table-cell">Bookings</TableHead>
                  <TableHead className="hidden lg:table-cell">Revenue</TableHead>
                  <TableHead className="hidden sm:table-cell">Popularity</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.description}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">${service.price}</TableCell>
                    <TableCell className="hidden sm:table-cell">{service.duration} min</TableCell>
                    <TableCell className="hidden md:table-cell">{service.bookings}</TableCell>
                    <TableCell className="hidden lg:table-cell font-medium">${service.revenue}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant="outline" className={getPopularityColor(service.popularity)}>
                        {service.popularity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={service.status === "active" ? "default" : "secondary"}>{service.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Services</CardTitle>
            <CardDescription>Top performing services by bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services
                .filter((service) => service.status === "active")
                .sort((a, b) => b.bookings - a.bookings)
                .slice(0, 5)
                .map((service, index) => (
                  <div key={service.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-muted-foreground">${service.price}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{service.bookings}</div>
                      <div className="text-xs text-muted-foreground">bookings</div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue by Service</CardTitle>
            <CardDescription>Top earning services this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services
                .filter((service) => service.status === "active")
                .sort((a, b) => b.revenue - a.revenue)
                .slice(0, 5)
                .map((service, index) => (
                  <div key={service.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-700">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.bookings} bookings</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">${service.revenue}</div>
                      <div className="text-xs text-muted-foreground">revenue</div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
