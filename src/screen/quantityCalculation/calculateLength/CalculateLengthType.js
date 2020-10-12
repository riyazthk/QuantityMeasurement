/* eslint-disable prettier/prettier */
import CalculateCentimetre from './CalculateCentimetre';
import CalculateFoot from './CalculateFoot';
import CalculateInch from './CalculateInch';
import CalculateKilometre from './CalculateKilometre';
import CalculateMetre from './CalculateMetre';
import CalculateMicrometre from './CalculateMicrometre';
import CalculateMile from './CalculateMile';
import CalculateMillimetre from './CalculateMillimetre';

const CalculateLengthType = (data,quantityTypeFromIndex, quantityTypeToIndex) => {
  switch (quantityTypeFromIndex) {
    case 0:
      return CalculateKilometre(data, quantityTypeToIndex);
    case 1:
      return CalculateMetre(data, quantityTypeToIndex);
    case 2:
      return CalculateCentimetre(data, quantityTypeToIndex);
    case 3:
      return CalculateMillimetre(data, quantityTypeToIndex);
    case 4:
      return CalculateMicrometre(data, quantityTypeToIndex);
    case 5:
      return CalculateMile(data, quantityTypeToIndex);
    case 6:
      return CalculateFoot(data, quantityTypeToIndex);
    case 7:
      return CalculateInch(data, quantityTypeToIndex);
  }
};
export default CalculateLengthType;
