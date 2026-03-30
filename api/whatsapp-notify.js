// Vercel Serverless Function - Send WhatsApp notifications via Twilio
// Sends to existing WhatsApp numbers - no new app needed
// Cost: ~$0.005 per message (3 people = $0.015 per lead)

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

    // Create WhatsApp message with emojis
    const whatsAppMessage = `
🔔 *NEW LEAD - Elite Carpenter*

👤 *Name:* ${firstName} ${lastName}
📱 *Phone:* ${phone}
📧 *Email:* ${email}
🏗️ *Project:* ${projectType}
📍 *City:* ${city}

💬 *Message:*
${message}

⏰ ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}

_Respond ASAP to close this lead!_ 🚀
    `.trim();

    // Phone numbers to notify (WhatsApp format: whatsapp:+1234567890)
    const notifyNumbers = [
      'whatsapp:+14165264116',  // 416-526-4116
      'whatsapp:+14168416057',  // 416-841-6057
      'whatsapp:+16477077884'   // 647-707-7884
    ];

    // Get Twilio credentials
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Format: whatsapp:+14155238886

    if (!accountSid || !authToken || !twilioWhatsAppNumber) {
      console.error('Missing Twilio WhatsApp credentials');
      return res.status(200).json({
        success: true,
        warning: 'WhatsApp not configured - check environment variables'
      });
    }

    // Import Twilio
    const twilio = require('twilio');
    const client = twilio(accountSid, authToken);

    // Send WhatsApp message to all numbers
    const sendPromises = notifyNumbers.map(async (number) => {
      try {
        const messageResult = await client.messages.create({
          body: whatsAppMessage,
          from: twilioWhatsAppNumber,
          to: number
        });
        console.log(`WhatsApp sent to ${number}: ${messageResult.sid}`);
        return { success: true, number, sid: messageResult.sid };
      } catch (error) {
        console.error(`Failed to send WhatsApp to ${number}:`, error.message);
        return { success: false, number, error: error.message };
      }
    });

    const results = await Promise.all(sendPromises);
    const successCount = results.filter(r => r.success).length;

    return res.status(200).json({
      success: true,
      message: `WhatsApp notifications sent to ${successCount}/${notifyNumbers.length} numbers`,
      results: results
    });

  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process WhatsApp notification',
      details: error.message
    });
  }
}
