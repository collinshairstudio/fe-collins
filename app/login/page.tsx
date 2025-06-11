"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)
  setError("")

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Login failed")
    }

    if (data.success) {
      // Debug: Log data untuk memastikan struktur response
      console.log("Login response:", data)
      console.log("User role_id:", data.data.user.role_id)
      
      // Simpan token dan user data ke localStorage
      localStorage.setItem("token", data.data.token)
      localStorage.setItem("userId", data.data.user.id)
      localStorage.setItem("userData", JSON.stringify(data.data.user))
      
      // Tentukan redirect URL berdasarkan role_id
      let redirectUrl = "/dashboard" // default
      
      switch (data.data.user.role_id) {
        case 1:
          redirectUrl = "/admin-dashboard"
          break
        case 2:
          redirectUrl = "/barber-dashboard"
          break
        case 3:
          redirectUrl = "/dashboard"
          break
        default:
          redirectUrl = "/dashboard"
      }
      
      console.log("Redirecting to:", redirectUrl)
      
      // Gunakan router.push untuk redirect yang lebih reliable
      router.push(redirectUrl)
      
      // Alternatif: Jika masih menggunakan window.location, tambahkan delay
      // setTimeout(() => {
      //   window.location.href = redirectUrl
      // }, 200)
      
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : "An unknown error occurred")
    setIsLoading(false)
  }
}

  return (
    <div className="container py-12 md:py-16">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Scissors className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}