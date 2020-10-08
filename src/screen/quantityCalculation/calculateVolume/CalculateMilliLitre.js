/* eslint-disable prettier/prettier */
const lengthDefaultValues = [0.001, 1, 0.000264172];

const CalculateMilliLitre = (data, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateMilliLitre;
