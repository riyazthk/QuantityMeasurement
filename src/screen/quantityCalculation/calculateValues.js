/* eslint-disable prettier/prettier */

import CalculateLength from './calculateLengthType';
import CalculateTemperature from './calculateTemperature/CalculateTemperature';
import CalculateVolume from './calculateVolume/CalculateVolume';

const CalculateValues = (data, value1, value2, index, fromIndex, toIndex) => {

  if (index === 0) {
    const result = CalculateLength(data, fromIndex, toIndex);
    return result;
  }
  if (index === 1) {
    const result = CalculateTemperature(
      data,
      fromIndex,
      toIndex,
    );
    return result;
  }
  if (index === 2) {
    const result = CalculateVolume(data, fromIndex, toIndex);
    return result;
  }
};
export default CalculateValues;
