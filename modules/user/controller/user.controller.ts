import { Response } from "express";
import { errorResponse, successResponse } from "../../../utils/responseHandler/responseHandler";
import { getUserDetailsHelper } from "../helper/user.helper";
import { CustomRequest } from "../../../utils/commonInterfaces";

const getUserDetails = async (req: CustomRequest, res: Response) => {
  try {
    const email = req.email || '';
    const data = await getUserDetailsHelper({
      email,
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

const createUser = async (req: CustomRequest, res: Response) => {
  try {
    const email = req.email || '';
    const data = await getUserDetailsHelper({
      email,
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
}

export {
  getUserDetails,
  createUser,
}
