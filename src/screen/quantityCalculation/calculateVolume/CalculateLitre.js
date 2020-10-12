/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 1000, 0.264172];

const CalculateLitre = (data, quantityTypeToIndex) => {
  let value = data * lengthDefaultValues[quantityTypeToIndex];
  return value;
};
export default CalculateLitre;
