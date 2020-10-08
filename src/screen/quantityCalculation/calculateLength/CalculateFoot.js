/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.0003048,
  0.3048,
  30.48,
  304.8,
  304800,
  0.000189394,
  1,
  12,
];
const CalculateFoot = (data, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateFoot;
