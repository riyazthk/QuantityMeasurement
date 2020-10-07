/* eslint-disable prettier/prettier */
const lengthDefaultValues = [3.7854, 3785.411, 1];

const CalculateGallons = (data, fromIndex, toIndex) => {
  let value = data * lengthDefaultValues[toIndex];
  return value;
};
export default CalculateGallons;
