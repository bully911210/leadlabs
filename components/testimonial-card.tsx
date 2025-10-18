import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  business: string
  location: string
}

export function TestimonialCard({ quote, name, business, location }: TestimonialCardProps) {
  return (
    <Card className="bg-card border-border p-8 relative card-hover shadow-md">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
      <p className="text-foreground leading-relaxed mb-6 italic text-lg">"{quote}"</p>
      <div className="border-t border-border pt-5">
        <p className="font-semibold text-foreground text-lg">{name}</p>
        <p className="text-sm text-muted-foreground mt-1">{business}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </Card>
  )
}
