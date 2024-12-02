import { Response } from "express";
import { errorResponse, successResponse } from "../../../utils/responseHandler/responseHandler";
import {
  getUserDetailsHelper,
  updateUserDetailsHelper,
} from "../helper/user.helper";
import { CustomRequest } from "../../../utils/commonInterfaces";

const getUserDetails = async (req: CustomRequest, res: Response) => {
  try {
    const userId: string = String(req.query.userId) || req.userId || '';
    const data = await getUserDetailsHelper({
      userId,
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

const updateUserDetails = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.userId || '';
    const {
      password, mobileNumber, name, email,
    } = req.body;
    const data = await updateUserDetailsHelper({
      userId, password, mobileNumber, name, email,
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
  getUserDetails,
  updateUserDetails,
}
