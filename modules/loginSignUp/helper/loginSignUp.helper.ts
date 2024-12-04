import bcrypt from 'bcrypt';
import { throwValidationError } from '../../../utils/commonUtils/commonUtils';
import { createJwtToken } from '../../../utils/jwt/jwtUtils';
import { sendSms } from '../../../services/sms-service/sendSms';

const sendVerificationCodeHelper = async (phoneNumber: any) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const message = `Your verification code is ${code}`;
  await sendSms({ to: phoneNumber, message });
};

interface checkLoginHelperParams {
  password: string;
  mobileNumber?: string;
  email?: string;
}
const checkLoginHelper = async ({
  mobileNumber,
  password,
  email,
}: checkLoginHelperParams) => {
  // get user with email or mobileNumber TODO
  const user: { email: string; password: string } = { email: '', password: '' };
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
};

export { checkLoginHelper, sendVerificationCodeHelper };
