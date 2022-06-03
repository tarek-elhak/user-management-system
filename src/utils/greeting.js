const currentHour = new Date().getHours();

export const greeting = () => {
  if (currentHour < 12) return "Good Morning!";
  else if (currentHour < 18) return "Good Afternoon!";
  else return "Good Evening!";
};
