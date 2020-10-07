/* eslint-disable prettier/prettier */
import CalculateCelsius from './CalculateCelsius';
import CalculateFahrenheit from './CalculateFahrenheit';
import CalculateKelvin from './CalculateKelvin';

const CalculateTemperature = (data, value1, value2, fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      return CalculateFahrenheit(data, fromIndex, toIndex);
    case 1:
      return CalculateCelsius(data, fromIndex, toIndex);
    case 2:
      return CalculateKelvin(data,fromIndex,toIndex);
  }
};
export default CalculateTemperature;
