import moment from "moment";

export const getCurrentDateInfo = () => {
  const currentDate = moment().format("l");
  const [day, month, year] = currentDate.split("/");
  return { day, month, year };
};

export const getDate = (day, month, year) => {
  const currentYear = moment().format("l").split("/")[2];
  if (year === currentYear) {
    return `${day}-${month}`;
  }
  return `${day}-${month}-${year}`;
};
