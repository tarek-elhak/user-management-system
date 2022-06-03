const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const today = new Date();
const month = months[today.getMonth()];
const date = today.getDate();
const year = today.getFullYear();

export const getCurrentDate = () => `${month} ${date}, ${year}`;
