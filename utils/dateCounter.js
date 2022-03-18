export const getLoveDateCount = (day, month, year) => {
  const formattedLoveDate = `${month}/${day}/${year}`;
  const loveDate = new Date(formattedLoveDate);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - loveDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
};
