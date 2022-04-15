export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export const convertDay = (date) => {
  const [year, month, day] = date.toISOString().substring(0, 10).split("-");
  return `${day}-${month}-${year}`;
};

export const currentDateObj = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth();
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return new Date(year, month, day);
};
