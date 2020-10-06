/* eslint-disable prettier/prettier */
import CalculateCentimetre from './calculateLength/calculateCentimetre';
import CalculateFoot from './calculateLength/CalculateFoot';
import CalculateInch from './calculateLength/CalculateInch';
import CalculateKilometre from './calculateLength/calculateKilometre';
import CalculateMetre from './calculateLength/calculateMetre';
import CalculateMicrometre from './calculateLength/CalculateMicrometre';
import CalculateMile from './calculateLength/CalculateMile';
import CalculateMillimetre from './calculateLength/CalculateMillimetre';

const CalculateLength = (data, value1, value2, fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      return CalculateKilometre(data, fromIndex, toIndex);
    case 1:
      return CalculateMetre(data, fromIndex, toIndex);
    case 2:
      return CalculateCentimetre(data, fromIndex, toIndex);
    case 3:
      return CalculateMillimetre(data, fromIndex, toIndex);
    case 4:
      return CalculateMicrometre(data, fromIndex, toIndex);
    case 5:
      return CalculateMile(data, fromIndex, toIndex);
    case 6:
      return CalculateFoot(data, fromIndex, toIndex);
    case 7:
      return CalculateInch(data, fromIndex, toIndex);
  }
};
export default CalculateLength;
