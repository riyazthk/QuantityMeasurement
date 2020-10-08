/* eslint-disable prettier/prettier */
import CalculateCelsius from './CalculateCelsius';
import CalculateFahrenheit from './CalculateFahrenheit';
import CalculateKelvin from './CalculateKelvin';

const CalculateTemperature = (data, fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      return CalculateFahrenheit(data, toIndex);
    case 1:
      return CalculateCelsius(data, toIndex);
    case 2:
      return CalculateKelvin(data, toIndex);
  }
};
export default CalculateTemperature;
