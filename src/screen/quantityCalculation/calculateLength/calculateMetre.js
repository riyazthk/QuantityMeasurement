/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.001,
  1,
  100,
  1000,
  1000000,
  1609,
  1.094,
  3.281,
  39.37,
];
const CalculateMetre = (data, quantityTypeToIndex) => {
  let value = data * lengthDefaultValues[quantityTypeToIndex];
  return value;
};
export default CalculateMetre;
