// Vercel Serverless Function to send SMS notifications via Twilio
// Handles form submissions and sends alerts to multiple phone numbers

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

    // Create SMS message
    const smsBody = `🔔 New Elite Carpenter Lead!\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nProject: ${projectType}\nCity: ${city}\nMessage: ${message}\n\nRespond ASAP!`;

    // Phone numbers to notify
    const notifyNumbers = [
      '+14165264116',  // 416-526-4116
      '+14168416057',  // 416-841-6057
      '+16477077884'   // 647-707-7884
    ];

    // Check if Twilio credentials are configured
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioNumber) {
      console.error('Missing Twilio credentials in environment variables');
      // Still return success to not block form submission
      return res.status(200).json({
        success: true,
        warning: 'SMS notifications not configured - missing Twilio credentials'
      });
    }

    // Import Twilio
    const twilio = require('twilio');
    const client = twilio(accountSid, authToken);

    // Send SMS to all numbers
    const sendPromises = notifyNumbers.map(async (number) => {
      try {
        const messageResult = await client.messages.create({
          body: smsBody,
          from: twilioNumber,
          to: number
        });
        console.log(`SMS sent to ${number}: ${messageResult.sid}`);
        return { success: true, number, sid: messageResult.sid };
      } catch (error) {
        console.error(`Failed to send SMS to ${number}:`, error.message);
        return { success: false, number, error: error.message };
      }
    });

    const results = await Promise.all(sendPromises);
    const successCount = results.filter(r => r.success).length;

    return res.status(200).json({
      success: true,
      message: `SMS notifications sent to ${successCount}/${notifyNumbers.length} numbers`,
      results: results
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process form submission',
      details: error.message
    });
  }
}
