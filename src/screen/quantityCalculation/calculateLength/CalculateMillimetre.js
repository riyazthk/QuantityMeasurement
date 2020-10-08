/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.000001,
  0.001,
  0.1,
  1,
  1000,
  1609,
  0.00328084,
  0.0393701,
];
const CalculateMillimetre = (data, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateMillimetre;
