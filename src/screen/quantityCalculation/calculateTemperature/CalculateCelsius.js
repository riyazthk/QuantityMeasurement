/* eslint-disable prettier/prettier */
const lengthDefaultValues = [32, 1, 273.15];
const CalculateCelsius = (data, quantityTypeToIndex) => {
  if (quantityTypeToIndex === 0) {
    let value = data * 1.8 + lengthDefaultValues[quantityTypeToIndex];
    return value;
  } else if (quantityTypeToIndex === 2) {
    let value = data + lengthDefaultValues[quantityTypeToIndex];
    return value;
  } else if (quantityTypeToIndex === 1) {
    let value = data * lengthDefaultValues[quantityTypeToIndex];
    return value;
  }
};
export default CalculateCelsius;
