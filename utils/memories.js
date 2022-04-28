import moment from "moment";

import { getLoveDateCount } from "./dateCounter";

export const getCurrentDateInfo = () => {
  const currentDate = moment().format("L");
  const [month, day, year] = currentDate.split("/");
  return { day, month, year };
};

export const getDate = (day, month, year) => {
  const [currentMonth, currentDay, currentYear] = moment()
    .format("l")
    .split("/");

  const dateDifference = getLoveDateCount({
    day,
    month,
    year,
  });

  if (dateDifference === 0) {
    return "Hôm nay";
  }

  if (dateDifference === 1) {
    return "Hôm qua";
  }

  if (dateDifference === 2) {
    return "Hôm kia";
  }

  if (dateDifference <= 6 && dateDifference >= 3) {
    return `${dateDifference} ngày trước`;
  }

  if (dateDifference === 7) {
    return "Tuần trước";
  }

  if (
    day === currentDay &&
    currentMonth === "01" &&
    month === "12" &&
    year === (parseInt(currentYear) - 1).toString()
  ) {
    return "1 tháng trước";
  }

  let transformedMonth = (parseInt(currentMonth) - 1).toString();
  transformedMonth =
    transformedMonth < 10 ? `0${transformedMonth}` : transformedMonth;

  if (
    day === currentDay &&
    month !== "01" &&
    month === transformedMonth &&
    year === year
  ) {
    return "1 tháng trước";
  }

  if (
    day === currentDay &&
    month === currentMonth &&
    year === (parseInt(currentYear) - 1).toString()
  ) {
    return "1 năm trước";
  }

  if (year === currentYear) {
    return `${day}-${month}`;
  }
  return `${day}-${month}-${year}`;
};

export const checkItemSameId = (memories) => {
  const map = {};
  for (let i = 0; i < memories.length; i++) {
    if (map[memories[i].id]) {
      return true;
    }
    map[memories[i].id] = true;
  }
  return false;
};
