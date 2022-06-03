const statuses = ["locked", "active", "inactive"];

export const getStatus = () => {
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};
