export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const convertDay = (date) => {
  const [year, month, day] = date.toISOString().substring(0, 10).split("-");
  return `${day}-${month}-${year}`;
};

export const currentDateObj = () => {
  const [year, month, day] = new Date().toISOString().slice(0, 10).split("-");
  return new Date(year, month, day, 12);
};

export const arrayEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};
