import moment from "moment";

export const getCurrentDate = () => {
  return moment().format("L").replaceAll("/", "-");
};
