export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, phone, message } = req.body || {};

  if (!name || !phone || !message) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  const text = `Jańa murájat AgroIjara.uz saytınan:\n\nAtı: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

  try {
    const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await tgResponse.json();

    if (!data.ok) {
      res.status(502).json({ error: 'Telegram API error' });
      return;
    }

    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to send message' });
  }
}
