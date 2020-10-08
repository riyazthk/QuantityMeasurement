/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 32, 273.15];
const CalculateFahrenheit = (data, toIndex) => {
  if (toIndex === 1) {
    let value = (data - lengthDefaultValues[toIndex]) * 0.55;
    return value;
  } else if (toIndex === 2) {
    let value = (data - 32) * 0.55 + lengthDefaultValues[toIndex];
    return value;
  } else if (toIndex === 0) {
    let value = data * lengthDefaultValues[toIndex];
    return value;
  }
};
export default CalculateFahrenheit;
