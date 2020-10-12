/* eslint-disable prettier/prettier */
import CalculateLengthType from './calculateLength/CalculateLengthType';
import CalculateTemperature from './calculateTemperature/CalculateTemperature';
import CalculateVolume from './calculateVolume/CalculateVolume';

const CalculateValues = (data, quantityTypeIndex, quantityTypeFromIndex, quantityTypeToIndex) => {
  if (quantityTypeIndex === 0) {
    const result = CalculateLengthType(data, quantityTypeFromIndex, quantityTypeToIndex);
    return result;
  }
  if (quantityTypeIndex === 1) {
    const result = CalculateTemperature(
      data,
      quantityTypeFromIndex,
      quantityTypeToIndex,
    );
    return result;
  }
  if (quantityTypeIndex === 2) {
    const result = CalculateVolume(data, quantityTypeFromIndex, quantityTypeToIndex);
    return result;
  }
};
export default CalculateValues;
