// Vercel Serverless Function - Send emails via Resend
// Sends notification to business owner and confirmation to customer

import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Extract form fields
    const firstName = formData.first_name || '';
    const lastName = formData.last_name || '';
    const phone = formData.phone || '';
    const email = formData.email || '';
    const projectType = formData.project_type || 'Not specified';
    const city = formData.city || 'Not specified';
    const message = formData.message || 'No message provided';

    // Get Resend API key from environment
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('Missing Resend API key');
      return res.status(500).json({
        success: false,
        error: 'Email service not configured'
      });
    }

    const resend = new Resend(apiKey);

    // Email 1: Notification to business owner
    const ownerEmailHtml = `
      <h2 style="color: #1e3a5f; font-family: Arial, sans-serif;">🔔 New Lead - Elite Carpenter</h2>

      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
        <p><strong>👤 Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>📱 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>🏗️ Project Type:</strong> ${projectType}</p>
        <p><strong>📍 City:</strong> ${city}</p>
      </div>

      <h3 style="color: #1e3a5f; font-family: Arial, sans-serif;">💬 Message:</h3>
      <div style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">
        <p style="font-family: Arial, sans-serif; line-height: 1.6;">${message}</p>
      </div>

      <p style="color: #64748b; font-size: 14px; font-family: Arial, sans-serif;">
        ⏰ Received: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
      </p>
    `;

    const ownerEmailResult = await resend.emails.send({
      from: 'Elite Carpenter <info@elitecarpenterreno.ca>',
      to: 'elitecarpenterreno@gmail.com',
      subject: `New Lead: ${firstName} ${lastName} - ${projectType}`,
      html: ownerEmailHtml,
    });

    // Email 2: Confirmation to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f;">Thank You for Contacting Elite Carpenter!</h2>

        <p>Hi ${firstName},</p>

        <p>Thank you for reaching out to us about your ${projectType.toLowerCase()} project in ${city}. We've received your message and will get back to you within 24 hours.</p>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e3a5f; margin-top: 0;">What happens next?</h3>
          <ol style="line-height: 1.8;">
            <li>We'll review your project details</li>
            <li>One of our experts will contact you at <strong>${phone}</strong></li>
            <li>We'll schedule a free consultation to discuss your vision</li>
          </ol>
        </div>

        <p>In the meantime, feel free to call us at <strong>(416) 526-4116</strong> if you have any questions.</p>

        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>The Elite Carpenter Team</strong><br>
          <a href="https://elitecarpenterreno.ca" style="color: #2563eb;">elitecarpenterreno.ca</a><br>
          (416) 526-4116
        </p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

        <p style="color: #64748b; font-size: 12px;">
          Elite Carpenter Home Renovation<br>
          Serving Hamilton, Burlington, St. Catharines, and surrounding areas
        </p>
      </div>
    `;

    const customerEmailResult = await resend.emails.send({
      from: 'Elite Carpenter <info@elitecarpenterreno.ca>',
      to: email,
      subject: 'Thank you for contacting Elite Carpenter!',
      html: customerEmailHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully via Resend',
      ownerEmailId: ownerEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Error sending emails via Resend:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send emails',
      details: error.message
    });
  }
}
