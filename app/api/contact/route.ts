import { NextResponse } from 'next/server'
import { contactInfo } from '@/lib/data'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured yet. Please add RESEND_API_KEY.' },
        { status: 500 },
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || contactInfo.email

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Resend's shared sender works without a verified domain.
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: subject ? `Portfolio: ${subject}` : `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none)'}\n\n${message}`,
        html: `
          <div style="font-family:system-ui,sans-serif;line-height:1.6">
            <h2 style="margin:0 0 12px">New portfolio message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${message}</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.log('[v0] Resend error:', detail)
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.log('[v0] Contact route error:', (error as Error).message)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
