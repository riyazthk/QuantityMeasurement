/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.0000254,
  0.0254,
  2.54,
  25.4,
  25400,
  0.000015783,
  0.0833333,
  1,
];
const CalculateInch = (data, fromIndex, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateInch;
