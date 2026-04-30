import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  class?: string;
  message?: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name || '').trim();
    const phone = (body.phone || '').trim();
    const email = (body.email || '').trim();
    const interestedIn = (body.class || '').trim();
    const message = (body.message || '').trim();

    if (!name || !phone) {
      return NextResponse.json(
        { message: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
      return NextResponse.json(
        { message: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure = (process.env.SMTP_SECURE || 'true') === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'shreemanavclasses@gmail.com';

    if (!smtpUser || !smtpPass || !fromEmail) {
      return NextResponse.json(
        { message: 'Email service is not configured on server.' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const subject = `New enquiry from ${name}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
        <h2 style="margin:0 0 12px">New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || '-')}</p>
        <p><strong>Interested In:</strong> ${escapeHtml(interestedIn || '-')}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || '-').replaceAll('\n', '<br/>')}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
        <p style="font-size:12px;color:#6b7280">Submitted at: ${escapeHtml(submittedAt)}</p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    try {
      await transporter.verify();
    } catch {
      return NextResponse.json(
        { message: 'SMTP authentication failed. Check Gmail and App Password.' },
        { status: 502 }
      );
    }

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid request payload.';
    return NextResponse.json(
      { message },
      { status: 400 }
    );
  }
}
