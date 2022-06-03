const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const day = days[today.getDay()];

export const getCurrentDay = () => `${day} `;
