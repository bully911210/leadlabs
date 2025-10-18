import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_cJr8bPSL_KdKW3ya79ZXcPmJFJKHSfds1")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, businessSize, location } = body

    await resend.emails.send({
      from: "LeadLabs <onboarding@resend.dev>",
      to: "franz@sigsolutions.co.za",
      subject: `New Demo Request from ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Size:</strong> ${businessSize}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 })
  }
}
