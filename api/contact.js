import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL || 'enquiry@blutech.io';
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Blutech Website <onboarding@resend.dev>';

const esc = (value='') => String(value).replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const trim = (value, max) => String(value || '').trim().slice(0,max);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed.' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const name = trim(body.name,120);
    const companyName = trim(body.companyName,180);
    const email = trim(body.email,180);
    const phone = trim(body.phone,60);
    const enquiryType = trim(body.enquiryType,120);
    const message = trim(body.message,5000);
    const privacyConsent = trim(body.privacyConsent,10);
    const website = trim(body.website,200);

    if (website) return res.status(200).json({ ok:true });
    if (!name || !companyName || !email || !message || privacyConsent !== 'yes') return res.status(400).json({ ok:false, error:'Please complete the required fields.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok:false, error:'Please enter a valid email address.' });
    if (!process.env.RESEND_API_KEY) return res.status(503).json({ ok:false, error:'Contact service is not configured.' });

    const subject = `[Blutech website] ${enquiryType || 'Enquiry'} — ${companyName}`;
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html:`<div style="font-family:Arial,sans-serif;line-height:1.55"><h2>New Blutech website enquiry</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Company:</b> ${esc(companyName)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone || '—')}</p><p><b>Type:</b> ${esc(enquiryType || '—')}</p><p><b>Message:</b></p><pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${esc(message)}</pre></div>`,
      text:`Name: ${name}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone || '—'}\nType: ${enquiryType || '—'}\n\n${message}`
    });
    return res.status(200).json({ ok:true });
  } catch (error) {
    console.error('Contact form error', error);
    return res.status(500).json({ ok:false, error:'Failed to send enquiry.' });
  }
}
