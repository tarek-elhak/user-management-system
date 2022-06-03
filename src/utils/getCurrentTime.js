const today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
minutes = minutes < 10 ? `0${minutes}` : minutes;

const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
export const getCurrentTime = () => `${hours}:${minutes} ${ampm}`;
