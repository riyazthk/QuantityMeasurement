/* eslint-disable prettier/prettier */
import CalculateCentimetre from './CalculateCentimetre';
import CalculateFoot from './CalculateFoot';
import CalculateInch from './CalculateInch';
import CalculateKilometre from './CalculateKilometre';
import CalculateMetre from './CalculateMetre';
import CalculateMicrometre from './CalculateMicrometre';
import CalculateMile from './CalculateMile';
import CalculateMillimetre from './CalculateMillimetre';

const CalculateLengthType = (data,fromIndex, toIndex) => {
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
export default CalculateLengthType;
