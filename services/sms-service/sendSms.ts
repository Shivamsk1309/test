import twilio from 'twilio';

interface sendSmsParams {
  to: string,
  message: string
}

const sendSms = async ({ to, message }: sendSmsParams) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID!;
  const authToken = process.env.TWILIO_AUTH_TOKEN!;
  if (!accountSid || !authToken) {
    throw new Error('Twilio account SID and auth token are required!');
  }
  const twilioClient = twilio(accountSid, authToken);
  try {
    await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

export {
  sendSms,
}