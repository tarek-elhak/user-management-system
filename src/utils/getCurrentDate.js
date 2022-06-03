const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
const day = days[today.getDay()];
const month = months[today.getMonth()];
const date = today.getDate();
const year = today.getFullYear();

export const getCurrentDate = () => `${day} ${month} ${date}, ${year}`;
