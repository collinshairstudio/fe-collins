"use client"

import { useState } from "react"
import { BarChart3, TrendingUp, DollarSign, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const monthlyData = [
  { month: "Jan", revenue: 2200, appointments: 88, newClients: 12 },
  { month: "Feb", revenue: 2400, appointments: 96, newClients: 15 },
  { month: "Mar", revenue: 2600, appointments: 104, newClients: 18 },
  { month: "Apr", revenue: 2800, appointments: 112, newClients: 20 },
  { month: "May", revenue: 3200, appointments: 128, newClients: 25 },
  { month: "Jun", revenue: 3400, appointments: 136, newClients: 22 },
]

const branchPerformance = [
  { branch: "Main Branch", revenue: 2100, appointments: 84, efficiency: 95 },
  { branch: "Downtown Branch", revenue: 1400, appointments: 56, efficiency: 88 },
  { branch: "Mall Branch", revenue: 1200, appointments: 48, efficiency: 82 },
  { branch: "Suburban Branch", revenue: 800, appointments: 32, efficiency: 75 },
]

const barberPerformance = [
  { name: "James Wilson", appointments: 32, revenue: 800, rating: 4.8, efficiency: 96 },
  { name: "Michael Brown", appointments: 28, revenue: 700, rating: 4.7, efficiency: 92 },
  { name: "Robert Davis", appointments: 24, revenue: 600, rating: 4.9, efficiency: 89 },
  { name: "David Martinez", appointments: 20, revenue: 500, rating: 4.6, efficiency: 85 },
]

export default function ReportsPage() {
  const [timeFilter, setTimeFilter] = useState("month")
  const [branchFilter, setBranchFilter] = useState("all")

  const totalRevenue = branchPerformance.reduce((sum, branch) => sum + branch.revenue, 0)
  const totalAppointments = branchPerformance.reduce((sum, branch) => sum + branch.appointments, 0)
  const avgEfficiency = Math.round(
    branchPerformance.reduce((sum, branch) => sum + branch.efficiency, 0) / branchPerformance.length,
  )

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-sm text-muted-foreground">Business performance insights and analytics</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAppointments}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEfficiency}%</div>
            <p className="text-xs text-muted-foreground">Across all branches</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">Monthly growth</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-dashed">
                <BarChart3 className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Revenue Chart</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Monthly revenue trend visualization would appear here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Branch Performance</CardTitle>
            <CardDescription>Performance metrics by branch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {branchPerformance.map((branch) => (
                <div key={branch.branch} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{branch.branch}</span>
                    <Badge variant="outline">{branch.efficiency}% efficiency</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span className="font-medium">${branch.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Appointments:</span>
                      <span className="font-medium">{branch.appointments}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${branch.efficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Barber Performance</CardTitle>
            <CardDescription>Individual barber metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {barberPerformance.map((barber) => (
                <div key={barber.name} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <h4 className="font-medium">{barber.name}</h4>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span>{barber.appointments} appointments</span>
                      <span>${barber.revenue} revenue</span>
                      <span>⭐ {barber.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{barber.efficiency}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
            <CardDescription>Key metrics for the selected period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.slice(-3).map((data) => (
                <div key={data.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <h4 className="font-medium">{data.month} 2025</h4>
                    <div className="text-sm text-muted-foreground">
                      {data.appointments} appointments • {data.newClients} new clients
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${data.revenue}</div>
                    <div className="text-xs text-muted-foreground">revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Insights</CardTitle>
          <CardDescription>Key business insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800">Growth Opportunity</span>
              </div>
              <p className="text-sm text-green-700">
                Main Branch shows highest efficiency. Consider expanding services there.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-800">Peak Hours</span>
              </div>
              <p className="text-sm text-blue-700">
                Most appointments occur between 2-6 PM. Optimize staffing accordingly.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-yellow-600" />
                <span className="font-medium text-yellow-800">Revenue Focus</span>
              </div>
              <p className="text-sm text-yellow-700">
                Premium services have low bookings. Consider promotional campaigns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
