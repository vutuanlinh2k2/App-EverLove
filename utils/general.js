export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export const convertDay = (date) => {
  const [year, month, day] = date.toISOString().substring(0, 10).split("-");
  return `${day}-${month}-${year}`;
};

export const currentDateObj = () => {
  const [year, month, day] = new Date().toISOString().slice(0, 10).split("-");
  return new Date(year, month, day);
};
