import { STATUS_CODES } from "../responseHandler/responseHandler";

interface throwValidationErrorObj {
  code?: number,
  message: string,
}

const throwValidationError = ({
  message,
  code = STATUS_CODES.STATUS_CODE_VALIDATION_FAILED
}: throwValidationErrorObj) => {
  throw {
    code,
    message,
  };
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const isValidMobileNumber = (mobileNumber: string): boolean => {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobileNumber);
}

export {
  throwValidationError,
  isValidMobileNumber,
  isValidEmail,
}
