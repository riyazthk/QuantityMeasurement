/* eslint-disable prettier/prettier */
const lengthDefaultValues = [1, 32, 273.15];

const CalculateKelvin = (data, fromIndex, toIndex) => {
  if (toIndex === 1) {
    let values = data - lengthDefaultValues[2];
    return values;
  } else if (toIndex === 0) {
    let values = (data - lengthDefaultValues[2]) * 1.8 + lengthDefaultValues[1];
    return values;
  }
};
export default CalculateKelvin;