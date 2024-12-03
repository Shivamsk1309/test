import bcrypt from 'bcrypt';
import twilio from 'twilio';
import { throwValidationError } from '../../../utils/commonUtils/commonUtils';
import { createJwtToken } from '../../../utils/jwt/jwtUtils';
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;

// Ensure these are being loaded properly
if (!accountSid || !authToken) {
  throw new Error("Twilio account SID and auth token are required!");
}

const twilioClient = twilio(accountSid, authToken);

const sendVerificationCodeHelper = async (phoneNumber: any) => {
  console.log(phoneNumber);
  const code = Math.floor(100000 + Math.random() * 900000).toString(); 
  try {
    let twilioData = await twilioClient.messages.create({
      body: `Your verification code is ${code}`,
      from: process.env.TWILIO_PHONE_NUMBER!,  // Ensure the Twilio phone number is set
      to: phoneNumber,
    });
    console.log('Message sent successfully:', twilioData);
  } catch (error) {
    console.error('Error sending message:', error);
  }
  
};

interface checkLoginHelperParams {
  password: string,
  mobileNumber?: string,
  email?: string,
}
const checkLoginHelper = async ({
  mobileNumber, password, email,
}: checkLoginHelperParams) => {
  // get user with email or mobileNumber TODO
  const user: { email: string, password: string } = { email: '', password: '' };
  const { password: hashPassword, email: userEmail } = user;
  const isValidPassword = bcrypt.compareSync(password, hashPassword);
  if (!isValidPassword) {
    throwValidationError({
      message: 'Invalid Password',
    });
  }
  const token = createJwtToken({ tokenParams: { email: userEmail } });
  // save token in db TODO
  return { authToken: token };
}

export {
  checkLoginHelper,
  sendVerificationCodeHelper,
}
