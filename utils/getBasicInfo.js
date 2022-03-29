export const convertBirthday = (date) => {
  const [year, month, day] = date.toISOString().substring(0, 10).split("-");
  return `${day}-${month}-${year}`;
};
