/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  1.60934,
  1609.34,
  160934,
  1609344,
  1609344000,
  1,
  5280,
  63360,
];
const CalculateMile = (data, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateMile;
