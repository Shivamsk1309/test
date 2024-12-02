import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../../utils/responseHandler/responseHandler";
import { checkLoginHelper } from "../helper/login.helper";

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

export {
  checkLogin,
}
