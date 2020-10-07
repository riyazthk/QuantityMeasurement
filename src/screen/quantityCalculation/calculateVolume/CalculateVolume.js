/* eslint-disable prettier/prettier */

import CalculateMillimetre from '../calculateLength/CalculateMillimetre';
import CalculateGallons from './CalculateGallons';
import CalculateLitre from './CalculateLitre';

const CalculateVolume = (data, value1, value2, fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      console.log('enter litre');
      return CalculateLitre(data, fromIndex, toIndex);
    case 1:
      return CalculateMillimetre(data, fromIndex, toIndex);
    case 2:
      return CalculateGallons(data, fromIndex, toIndex);
  }
};
export default CalculateVolume;
