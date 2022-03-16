const emailHaveBeenUsed =
  "The email address is already in use by another account.";
const wrongPassword =
  "The password is invalid or the user does not have a password.";
const noUser =
  "There is no user record corresponding to this identifier. The user may have been deleted.";

export const convertLogInErrorMessage = (message) => {
  switch (message) {
    case wrongPassword:
      return "Mật khẩu không đúng. Xin vui lòng xem lại.";
    case noUser:
      return "Tài khoản này hiện đang không tồn tại. Xin vui lòng đăng nhập bằng email khác hoặc đăng kí tài khoản mới.";
    default:
      return "Đã xảy ra lỗi. Xin vui lòng xem lại.";
  }
};

export const convertSignUpErrorMessage = (message) => {
  switch (message) {
    case emailHaveBeenUsed:
      return "Email này đã được sử dụng. Bạn hãy dùng một địa chỉ email khác.";
    default:
      return "Đã xảy ra lỗi. Xin vui lòng xem lại.";
  }
};
