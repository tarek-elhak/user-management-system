const someColors = [
  "rgb(254 226 226)",
  "rgb(255 237 213)",
  "rgb(220 252 231)",
  "rgb(209 250 229)",
  "rgb(219 234 254)",
  "rgb(250 232 255)",
  "rgb(255 228 230)",
  "rgb(236 252 203)",
];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * someColors.length);
  return someColors[randomIndex];
};
