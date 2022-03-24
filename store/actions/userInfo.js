export const GET_USER_INFO = "GET_USER_INFO";

export const getUserInfo = (userInfo) => {
  return {
    type: GET_USER_INFO,
    userInfo,
  };
};
