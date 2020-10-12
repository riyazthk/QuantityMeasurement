/* eslint-disable prettier/prettier */
const lengthDefaultValues = [0.001, 1, 0.000264172];

const CalculateMilliLitre = (data, quantityTypeToIndex) => {
  let value = data * lengthDefaultValues[quantityTypeToIndex];
  return value;
};
export default CalculateMilliLitre;
