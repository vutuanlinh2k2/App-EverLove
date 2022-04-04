import moment from "moment";
import "moment-precise-range-plugin";

export const getLoveDateCount = (dateInput) => {
  const { day, month, year } = dateInput;
  const formattedLoveDate = `${month}/${day}/${year}`;
  const loveDate = new Date(formattedLoveDate);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - loveDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
};

export const getDetailLoveDate = (dateInput) => {
  const { day, month, year } = dateInput;
  const now = moment();
  const formattedLoveDate = `${year}-${month}-${day} 00:00:00`;
  const loveDate = moment(formattedLoveDate, "YYYY-MM-DD HH:mm:ss");
  const diff = moment.preciseDiff(now, loveDate, true);
  const { years, months, days } = diff;
  const daysLove = days % 7;
  const weeksLove = (days - daysLove) / 7;
  return {
    year: years,
    month: months,
    week: weeksLove,
    day: daysLove,
  };
};

export const getZodiac = (day, month) => {
  const zodiac = [
    "",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  const last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
};
