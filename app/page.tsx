import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { TestimonialCard } from "@/components/testimonial-card"
import { FeatureCard } from "@/components/feature-card"
import {
  Phone,
  Clock,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  AlertCircle,
  XCircle,
  DollarSign,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/professional-business-person-answering-phone-call-.jpg"
            alt="AI Receptionist"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-balance">
            Never Miss Another Call. Even After Hours.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed">
            LeadLabs' AI receptionist answers every call 24/7, books appointments instantly, and sends quotes while you
            focus on your business. Built for Johannesburg and Pretoria.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
          >
            Book My Free Demo
          </Button>
          <p className="text-sm text-muted-foreground mt-6">Built by Franz Badenhorst for South African businesses</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center text-balance">
            Does This Sound Familiar?
          </h2>
          <div className="content-spacing">
            <Card className="bg-card border-border p-8 flex items-start gap-4 card-hover shadow-md">
              <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Missed Calls During Business Hours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're with a client. Three potential customers call. They hang up and call your competitor instead.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-border p-8 flex items-start gap-4 card-hover shadow-md">
              <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">After Hours Opportunities Lost</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It's 7 PM. Someone needs your service urgently. Your phone goes to voicemail. They find someone else
                  who answers.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-border p-8 flex items-start gap-4 card-hover shadow-md">
              <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Delayed Quotes and Follow Ups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A lead requests a quote. You're swamped and get back to them tomorrow. By then, they've already hired
                  someone else.
                </p>
              </div>
            </Card>
          </div>
          <p className="text-center text-xl text-foreground mt-12 font-semibold">
            How many leads are slipping through your fingers right now?
          </p>
        </div>
      </section>

      {/* Consequence Section */}
      <section className="section-spacing px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center text-balance">
            What Happens When You Keep Missing Calls?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border p-8 text-center card-hover shadow-md">
              <XCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Revenue Leakage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every missed call is R500, R2,000, or R10,000 walking out the door. How much are you losing per month?
              </p>
            </Card>

            <Card className="bg-card border-border p-8 text-center card-hover shadow-md">
              <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Frustrated Customers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customers expect instant responses. Unanswered calls signal unprofessionalism. They go to competitors
                who answer.
              </p>
            </Card>

            <Card className="bg-card border-border p-8 text-center card-hover shadow-md">
              <TrendingUp className="w-16 h-16 text-destructive mx-auto mb-6 rotate-180" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Stunted Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your competitors answer. You don't. They grow. You stay stuck playing catch up while they pull ahead.
              </p>
            </Card>
          </div>
          <p className="text-center text-xl text-foreground mt-12 font-semibold">
            Can you afford to keep bleeding leads?
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center text-balance">
            What If You Never Missed Another Call?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your AI receptionist answers every call. Day or night. Weekends and holidays. No breaks. No sick days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Instant Quotes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leads get pricing immediately via SMS or email. No waiting. No follow up needed. Instant action.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Appointment Booking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Books appointments automatically. Syncs perfectly with your calendar. No back and forth. No double
                  bookings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lead Qualification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI asks the right questions. Filters serious buyers from tire kickers. Saves you time. Delivers
                  quality leads.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors md:col-span-2 md:max-w-md md:mx-auto">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Local Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built for Johannesburg and Pretoria businesses. Understands local needs and accents. Speaks your
                  language.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-xl text-foreground font-semibold mb-4">
            This is how you stop losing leads and start growing.
          </p>
          <p className="text-center text-lg text-muted-foreground">
            Imagine closing 30% more deals without hiring more staff. What would that do for your business?
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center text-balance">
            How Will Your Business Transform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={DollarSign}
              title="Capture Every Lead"
              description="Never lose another potential customer to a missed call. Every inquiry is answered, qualified, and converted. 24/7."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Response Time"
              description="Customers get answers in seconds, not hours. Speed wins deals in today's market. You win more business."
            />
            <FeatureCard
              icon={Shield}
              title="Professional Image"
              description="Every caller experiences consistent, professional service. Builds trust and credibility for your brand. Every single time."
            />
            <FeatureCard
              icon={Users}
              title="Local Support"
              description="Pretoria based team understands Johannesburg and Pretoria businesses. We're here when you need us. Local support matters."
            />
          </div>
          <p className="text-center text-xl text-foreground mt-12 font-semibold">
            What would an extra 20 to 30 qualified leads per month mean for your bottom line?
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center">
            What Local Businesses Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We were losing 15 to 20 calls a week. Since LeadLabs, we've booked 40% more jobs. The AI handles after hours emergencies perfectly."
              name="Pieter van der Merwe"
              business="PVM Plumbing"
              location="Centurion"
            />
            <TestimonialCard
              quote="Our receptionist was overwhelmed. Now the AI handles initial inquiries and appointment booking. We've cut admin time by 60%."
              name="Sarah Naidoo"
              business="Naidoo & Associates Legal"
              location="Sandton"
            />
            <TestimonialCard
              quote="Patients can book appointments at 10 PM if they want. Our no show rate dropped because confirmations are automatic. Game changer."
              name="Dr. James Botha"
              business="Botha Family Practice"
              location="Pretoria East"
            />
            <TestimonialCard
              quote="I'm a one man operation. LeadLabs lets me focus on the work while it handles calls. I've doubled my client base in 4 months."
              name="Thabo Mokoena"
              business="TM Electrical Services"
              location="Johannesburg South"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-balance">
            What's It Worth to Stop Losing Leads?
          </h2>
          <Card className="bg-card border-primary border-2 p-12 shadow-2xl shadow-primary/20">
            <div className="mb-10">
              <p className="text-6xl font-bold text-primary mb-3">R3,990</p>
              <p className="text-xl text-muted-foreground">per month</p>
            </div>
            <div className="space-y-5 text-left mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">Unlimited call handling, 24/7/365</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">Automatic appointment booking</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">Instant quote delivery via SMS and email</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">Lead qualification and CRM integration</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">Local Pretoria based support</p>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <p className="text-sm font-semibold text-primary mb-5 uppercase tracking-wide">Included Free</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      Missed Call Text Back (instant SMS to every missed call)
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      Automated appointment reminders (reduce no shows by 70%)
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground font-medium">Follow up sequences (nurture leads automatically)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      Review request automation (build your reputation on autopilot)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
            >
              Book My Free Demo
            </Button>
            <p className="text-sm text-muted-foreground mt-6">Cancel anytime. See results in week one.</p>
          </Card>
          <p className="text-muted-foreground mt-10 text-lg">
            Compare that to a full time receptionist at R15,000 per month who only works 8 hours a day.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-balance">
            Who's Behind LeadLabs?
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Franz Badenhorst</span>. I built LeadLabs because I
              saw too many great Johannesburg and Pretoria businesses losing customers to missed calls.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a local entrepreneur, I understand the challenges of running a business in South Africa. You're
              juggling operations, clients, and growth while trying to answer every call.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LeadLabs is my solution. An AI receptionist that works as hard as you do so you can focus on what you do
              best. Serving your customers and growing your business.
            </p>
          </div>
          <p className="text-foreground font-semibold text-xl mt-8">
            Based in Pretoria. Built for South African businesses.
          </p>
          <p className="text-primary font-semibold text-lg mt-4">LeadLabs.co.za</p>
        </div>
      </section>

      {/* CTA/Commitment Section */}
      <section className="section-spacing px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground heading-spacing text-center text-balance">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-pretty leading-relaxed">
            Book a free demo. No credit card required. See how LeadLabs transforms your business in real time.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-4 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">LeadLabs</h3>
              <p className="text-muted-foreground">AI receptionist for Johannesburg and Pretoria businesses</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-muted-foreground mb-2">
                <a href="mailto:franz@sigsolutions.co.za" className="hover:text-primary transition-colors">
                  franz@sigsolutions.co.za
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="tel:+27123456789" className="hover:text-primary transition-colors">
                  +27 12 345 6789
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 LeadLabs. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
