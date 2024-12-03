import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../utils/responseHandler/responseHandler";
import { checkLoginHelper, sendVerificationCodeHelper } from "../helper/loginSignUp.helper";
import { CustomRequest } from "../../../utils/commonInterfaces";

const checkLogin = async (req: Request, res: Response) => {
  try {
    const { email, password, mobileNumber } = req.body;
    const data = await checkLoginHelper({
      email, password, mobileNumber,
    });
    successResponse({
      res,
      data,
      message: 'Logged in Successfully',
    });
  } catch (error) {
    errorResponse({
      error,
      res,
    });
  }
};
const sendVerficationCode = async (req: CustomRequest, res: Response) => {
  try {
    const {
      mobileNumber,
    } = req.body;
    const data = await sendVerificationCodeHelper(mobileNumber);
    successResponse({
      res,
      data,
      message: 'Verification code send',
    });
  } catch (error) {
    errorResponse({
      error,
      res,
    });
  }
};
export {
  checkLogin,
  sendVerficationCode,
}
