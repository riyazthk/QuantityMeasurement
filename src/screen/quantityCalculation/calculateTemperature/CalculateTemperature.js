/* eslint-disable prettier/prettier */
import CalculateCelsius from './CalculateCelsius';
import CalculateFahrenheit from './CalculateFahrenheit';
import CalculateKelvin from './CalculateKelvin';

const CalculateTemperature = (data, quantityTypeFromIndex, quantityTypeToIndex) => {
  switch (quantityTypeFromIndex) {
    case 0:
      return CalculateFahrenheit(data, quantityTypeToIndex);
    case 1:
      return CalculateCelsius(data, quantityTypeToIndex);
    case 2:
      return CalculateKelvin(data, quantityTypeToIndex);
  }
};
export default CalculateTemperature;
