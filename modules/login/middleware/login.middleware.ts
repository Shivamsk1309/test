import { NextFunction, Request, Response } from "express"
import { errorResponse } from "../../../utils/responseHandler/responseHandler"
import { isValidEmail, isValidMobileNumber, throwValidationError } from "../../../utils/commonUtils/commonUtils";

const validateLoginParams = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      email, mobileNumber, password,
    } = req.body;
    if (!email && !mobileNumber) {
      throwValidationError({ message: 'Enter atleast Email or Number' });
    }
    if (!password) {
      throwValidationError({ message: 'Missing Password' });
    }
    if (email && !isValidEmail(email)) {
      throwValidationError({ message: 'Invalid Email' });
    }
    if (mobileNumber && !isValidMobileNumber(mobileNumber)) {
      throwValidationError({ message: 'Invalid MobileNumber' });
    }
    return next();
  } catch (error) {
    errorResponse({
      res,
      error,
    });
  }
}

export {
  validateLoginParams,
}
