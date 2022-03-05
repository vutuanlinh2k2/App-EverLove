import moment from "moment";

export const getCurrentDateInfo = () => {
  const currentDate = moment().format("l");
  const [day, month, year] = currentDate.split("/");
  return { day, month, year };
};
