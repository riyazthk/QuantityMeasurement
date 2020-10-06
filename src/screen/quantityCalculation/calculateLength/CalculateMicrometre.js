/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.00000001,
  0.00001,
  0.0001,
  0.001,
  1,
  1609,
  3.2808,
  3.93701,
];
const CalculateMicrometre = (data, fromIndex, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateMicrometre;
