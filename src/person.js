export const isAdult = (age) => {
  return age > 18 ? true : false;
};

export const canDrink = (age) => {
  return age > 21 ? true : false;
};

export default (age) => {
  return age > 65 ? true : false;
};
