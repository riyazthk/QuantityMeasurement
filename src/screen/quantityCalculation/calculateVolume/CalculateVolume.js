/* eslint-disable prettier/prettier */

import CalculateMillimetre from '../calculateLength/CalculateMillimetre';
import CalculateGallons from './CalculateGallons';
import CalculateLitre from './CalculateLitre';

const CalculateVolume = (data, fromIndex, toIndex) => {
  switch (fromIndex) {
    case 0:
      console.log('enter litre');
      return CalculateLitre(data, toIndex);
    case 1:
      return CalculateMillimetre(data, toIndex);
    case 2:
      return CalculateGallons(data, toIndex);
  }
};
export default CalculateVolume;
