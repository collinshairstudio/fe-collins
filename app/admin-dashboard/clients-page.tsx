"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const clients = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+62 812-3456-7890",
    lastVisit: "2025-01-10",
    totalVisits: 15,
    totalSpent: 375,
    preferredBarber: "James Wilson",
    preferredBranch: "Main Branch",
    status: "active",
    joinDate: "2023-06-15",
    image: "/placeholder.svg?height=40&width=40&text=JS",
  },
  {
    id: "2",
    name: "Michael Johnson",
    email: "michael.johnson@email.com",
    phone: "+62 813-4567-8901",
    lastVisit: "2025-01-08",
    totalVisits: 22,
    totalSpent: 550,
    preferredBarber: "Robert Davis",
    preferredBranch: "Downtown Branch",
    status: "active",
    joinDate: "2023-03-20",
    image: "/placeholder.svg?height=40&width=40&text=MJ",
  },
  {
    id: "3",
    name: "David Williams",
    email: "david.williams@email.com",
    phone: "+62 814-5678-9012",
    lastVisit: "2025-01-05",
    totalVisits: 8,
    totalSpent: 280,
    preferredBarber: "Michael Brown",
    preferredBranch: "Main Branch",
    status: "active",
    joinDate: "2024-01-10",
    image: "/placeholder.svg?height=40&width=40&text=DW",
  },
  {
    id: "4",
    name: "Robert Brown",
    email: "robert.brown@email.com",
    phone: "+62 815-6789-0123",
    lastVisit: "2024-12-20",
    totalVisits: 5,
    totalSpent: 175,
    preferredBarber: "David Martinez",
    preferredBranch: "Mall Branch",
    status: "inactive",
    joinDate: "2024-08-05",
    image: "/placeholder.svg?height=40&width=40&text=RB",
  },
  {
    id: "5",
    name: "William Davis",
    email: "william.davis@email.com",
    phone: "+62 816-7890-1234",
    lastVisit: "2025-01-09",
    totalVisits: 12,
    totalSpent: 300,
    preferredBarber: "James Wilson",
    preferredBranch: "Main Branch",
    status: "active",
    joinDate: "2023-11-12",
    image: "/placeholder.svg?height=40&width=40&text=WD",
  },
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [branchFilter, setBranchFilter] = useState("all")

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesBranch = branchFilter === "all" || client.preferredBranch === branchFilter
    return matchesSearch && matchesStatus && matchesBranch
  })

  const totalRevenue = clients.reduce((sum, client) => sum + client.totalSpent, 0)
  const activeClients = clients.filter((client) => client.status === "active").length

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Clients</h1>
          <p className="text-sm text-muted-foreground">Manage customer information and history</p>
        </div>
        <Button className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clients.length}</div>
            <p className="text-xs text-muted-foreground">Registered customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
            <p className="text-xs text-muted-foreground">Regular customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">From all clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${Math.round(totalRevenue / clients.length)}</div>
            <p className="text-xs text-muted-foreground">Per client</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Clients</CardTitle>
              <CardDescription>View and manage customer information</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients..."
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
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead className="hidden md:table-cell">Contact</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead className="hidden lg:table-cell">Visits</TableHead>
                  <TableHead className="hidden lg:table-cell">Total Spent</TableHead>
                  <TableHead className="hidden sm:table-cell">Preferred Barber</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={client.image || "/placeholder.svg"} alt={client.name} />
                          <AvatarFallback>
                            {client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-xs text-muted-foreground md:hidden">{client.phone}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="space-y-1">
                        <div className="text-sm">{client.phone}</div>
                        <div className="text-xs text-muted-foreground">{client.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{client.lastVisit}</TableCell>
                    <TableCell className="hidden lg:table-cell">{client.totalVisits}</TableCell>
                    <TableCell className="hidden lg:table-cell font-medium">${client.totalSpent}</TableCell>
                    <TableCell className="hidden sm:table-cell text-sm">{client.preferredBarber}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={client.status === "active" ? "default" : "secondary"}>{client.status}</Badge>
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