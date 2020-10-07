/* eslint-disable prettier/prettier */
const lengthDefaultValues = [32, 1, 273.15];
const CalculateCelsius = (data, fromIndex, toIndex) => {
  if (toIndex === 0) {
    let value = data * 1.8 + lengthDefaultValues[toIndex];
    return value;
  } else if (toIndex === 2) {
    let value = data + lengthDefaultValues[toIndex];
    return value;
  }
};
export default CalculateCelsius;
