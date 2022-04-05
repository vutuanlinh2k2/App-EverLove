import { useSelector } from "react-redux";
import moment from "moment";

import holidays from "../constants/holidays";

const useUpcomingEvents = () => {
  const upcomingEvents = [];
  const { partnerBirthday, loveDate, partnerName } = useSelector(
    (state) => state.userInfo
  );

  const formattedPartnerBirthday = `${partnerBirthday.day}/${partnerBirthday.month}`;
  const formattedLoveDate = `${loveDate.month}/${loveDate.day}/${loveDate.year}`;

  for (let i = 0; i < 31; i++) {
    const dateEvent = [];
    let dateType;
    const date = moment().add(i, "days").format("L");
    const [month, day, year] = date.split("/");
    const formattedDate = `${day}/${month}`;

    const loveDateBasic = new Date(formattedLoveDate);
    const dateBasic = new Date(`${month}/${day}/${year}`);
    const timeDifference = dateBasic.getTime() - loveDateBasic.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference % 50 === 0) {
      dateEvent.push(`${daysDifference} ngày yêu`);
      dateType = "anniversary";
    }

    if (holidays[formattedDate]) {
      dateEvent.push(holidays[formattedDate].dateTitle);
      dateType = holidays[formattedDate].dateType;
    }

    if (formattedDate === formattedPartnerBirthday) {
      dateEvent.push(`Sinh nhật ${partnerName}`);
      dateType = "birthday";
    }

    const dateTitle = dateEvent.join(" và ");

    const daysLeft =
      i > 2
        ? `${i} ngày`
        : i === 1
        ? "Ngày mai"
        : i === 2
        ? "Ngày kia"
        : "Hôm nay";

    if (dateType) {
      upcomingEvents.push({
        dateType,
        dateTitle,
        daysLeft,
      });
    }
  }
  return upcomingEvents;
};

export default useUpcomingEvents;
