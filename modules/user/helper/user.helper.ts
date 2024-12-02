import { throwValidationError } from '../../../utils/commonUtils/commonUtils';

interface getUserDetailsHelperParams {
  email: string,
}
const getUserDetailsHelper = async ({
  email,
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

export {
  getUserDetailsHelper,
}
