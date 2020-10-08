/* eslint-disable prettier/prettier */
import CalculateCentimetre from './calculateLength/calculateCentimetre';
import CalculateFoot from './calculateLength/CalculateFoot';
import CalculateInch from './calculateLength/CalculateInch';
import CalculateKilometre from './calculateLength/calculateKilometre';
import CalculateMetre from './calculateLength/calculateMetre';
import CalculateMicrometre from './calculateLength/CalculateMicrometre';
import CalculateMile from './calculateLength/CalculateMile';
import CalculateMillimetre from './calculateLength/CalculateMillimetre';

const CalculateLength = (data,fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      return CalculateKilometre(data, toIndex);
    case 1:
      return CalculateMetre(data, toIndex);
    case 2:
      return CalculateCentimetre(data, toIndex);
    case 3:
      return CalculateMillimetre(data, toIndex);
    case 4:
      return CalculateMicrometre(data, toIndex);
    case 5:
      return CalculateMile(data, toIndex);
    case 6:
      return CalculateFoot(data, toIndex);
    case 7:
      return CalculateInch(data, toIndex);
  }
};
export default CalculateLength;
