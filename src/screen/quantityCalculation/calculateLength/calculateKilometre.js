/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  1,
  1000,
  10000,
  1000000,
  1000000000,
  1094,
  3281,
  39370,
];
const CalculateKilometre = (data, quantityTypeToIndex) => {
  let value = data * lengthDefaultValues[quantityTypeToIndex];
  return value;
};
export default CalculateKilometre;
