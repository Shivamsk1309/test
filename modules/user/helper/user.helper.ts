import { throwValidationError } from '../../../utils/commonUtils/commonUtils';

interface getUserDetailsHelperParams {
  userId: string,
}
const getUserDetailsHelper = async ({
  userId,
}: getUserDetailsHelperParams) => {
  // get user details TODO
  const user = {};
  if (!user) {
    throwValidationError({
      message: 'Invalid UserId',
    });
  }
  return { user };
}

interface updateUserDetailsHelperParams {
  userId?: string,
  password?: string,
  mobileNumber?: string,
  name?: string,
  email?: string,
}
const updateUserDetailsHelper = async ({
  userId, password, mobileNumber, name, email,
}: updateUserDetailsHelperParams) => {
  // update user details TODO
  return {};
}

export {
  getUserDetailsHelper,
  updateUserDetailsHelper,
}
