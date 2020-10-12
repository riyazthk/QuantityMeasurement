/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 32, 273.15];

const CalculateKelvin = (data, quantityTypeToIndex) => {
  if (quantityTypeToIndex === 1) {
    let values = data - lengthDefaultValues[2];
    return values;
  } else if (quantityTypeToIndex === 0) {
    let values = (data - lengthDefaultValues[2]) * 1.8 + lengthDefaultValues[1];
    return values;
  } else if (quantityTypeToIndex === 2) {
    let values = data * lengthDefaultValues[quantityTypeToIndex];
    return values;
  }
};
export default CalculateKelvin;
