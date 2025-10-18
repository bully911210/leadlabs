"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessSize: "",
    location: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your free demo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-card border-border text-foreground"
          placeholder="John Smith"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-card border-border text-foreground"
          placeholder="john@business.co.za"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="bg-card border-border text-foreground"
          placeholder="082 123 4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessSize" className="text-foreground">
          Business Size
        </Label>
        <Select
          value={formData.businessSize}
          onValueChange={(value) => setFormData({ ...formData, businessSize: value })}
          required
        >
          <SelectTrigger className="bg-card border-border text-foreground">
            <SelectValue placeholder="Select business size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small (1-10 employees)</SelectItem>
            <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
            <SelectItem value="large">Large (50+ employees)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-foreground">
          Location
        </Label>
        <Select
          value={formData.location}
          onValueChange={(value) => setFormData({ ...formData, location: value })}
          required
        >
          <SelectTrigger className="bg-card border-border text-foreground">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="johannesburg">Johannesburg</SelectItem>
            <SelectItem value="pretoria">Pretoria</SelectItem>
            <SelectItem value="sandton">Sandton</SelectItem>
            <SelectItem value="centurion">Centurion</SelectItem>
            <SelectItem value="midrand">Midrand</SelectItem>
            <SelectItem value="other">Other Gauteng</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
      >
        {isSubmitting ? "Submitting..." : "Book My Free Demo"}
      </Button>
    </form>
  )
}
