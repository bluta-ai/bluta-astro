const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });

const esc = (value = '') =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[ch]);

const trim = (value, max) => String(value || '').trim().slice(0, max);

async function handleContact(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed.' }, 405);

  try {
    const body = await request.json().catch(() => ({}));
    const name = trim(body.name, 120);
    const companyName = trim(body.companyName, 180);
    const email = trim(body.email, 180);
    const phone = trim(body.phone, 60);
    const enquiryType = trim(body.enquiryType, 120);
    const message = trim(body.message, 5000);
    const privacyConsent = trim(body.privacyConsent, 10);
    const website = trim(body.website, 200);

    if (website) return json({ ok: true });
    if (!name || !companyName || !email || !message || privacyConsent !== 'yes') {
      return json({ ok: false, error: 'Please complete the required fields.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
    }
    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Contact service is not configured.' }, 503);
    }

    const fromEmail = env.CONTACT_FROM_EMAIL || 'Blutech Website <onboarding@resend.dev>';
    const toEmail = env.CONTACT_TO_EMAIL || 'enquiry@blutech.io';
    const subject = `[Blutech website] ${enquiryType || 'Enquiry'} — ${companyName}`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.55"><h2>New Blutech website enquiry</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Company:</b> ${esc(companyName)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone || '—')}</p><p><b>Type:</b> ${esc(enquiryType || '—')}</p><p><b>Message:</b></p><pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${esc(message)}</pre></div>`,
        text: `Name: ${name}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone || '—'}\nType: ${enquiryType || '—'}\n\n${message}`
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error', errorText);
      return json({ ok: false, error: 'Failed to send enquiry.' }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error('Contact form error', error);
    return json({ ok: false, error: 'Failed to send enquiry.' }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return handleContact(request, env);
    return env.ASSETS.fetch(request);
  }
};
