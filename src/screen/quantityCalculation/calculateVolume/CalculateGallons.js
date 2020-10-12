/* eslint-disable prettier/prettier */
const lengthDefaultValues = [3.7854, 3785.411, 1];

const CalculateGallons = (data, quantityTypeToIndex) => {
  let value = data * lengthDefaultValues[quantityTypeToIndex];
  return value;
};
export default CalculateGallons;
