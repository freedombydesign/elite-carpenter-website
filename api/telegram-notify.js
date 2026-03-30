// Vercel Serverless Function - Send Telegram notifications
// FREE push notifications to all team members instantly

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

    // Create rich formatted Telegram message
    const telegramMessage = `
🔔 <b>NEW LEAD - Elite Carpenter</b>

👤 <b>Name:</b> ${firstName} ${lastName}
📱 <b>Phone:</b> ${phone}
📧 <b>Email:</b> ${email}
🏗️ <b>Project:</b> ${projectType}
📍 <b>City:</b> ${city}

💬 <b>Message:</b>
${message}

⏰ Received: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
    `.trim();

    // Get Telegram credentials from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing Telegram credentials');
      return res.status(200).json({
        success: true,
        warning: 'Telegram not configured - check environment variables'
      });
    }

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', result);
      return res.status(500).json({
        success: false,
        error: 'Failed to send Telegram notification',
        details: result
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Telegram notification sent successfully',
      telegram_message_id: result.result.message_id
    });

  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process notification',
      details: error.message
    });
  }
}
