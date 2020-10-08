/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 1000, 0.264172];

const CalculateLitre = (data, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateLitre;
