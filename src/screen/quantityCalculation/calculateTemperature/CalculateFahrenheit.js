/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 32, 273.15];
const CalculateFahrenheit = (data, quantityTypeToIndex) => {
  if (quantityTypeToIndex === 1) {
    let value = (data - lengthDefaultValues[quantityTypeToIndex]) * 0.55;
    return value;
  } else if (quantityTypeToIndex === 2) {
    let value = (data - 32) * 0.55 + lengthDefaultValues[quantityTypeToIndex];
    return value;
  } else if (quantityTypeToIndex === 0) {
    let value = data * lengthDefaultValues[quantityTypeToIndex];
    return value;
  }
};
export default CalculateFahrenheit;
