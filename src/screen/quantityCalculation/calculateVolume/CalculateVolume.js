/* eslint-disable prettier/prettier */

import CalculateMillimetre from '../calculateLength/CalculateMillimetre';
import CalculateGallons from './CalculateGallons';
import CalculateLitre from './CalculateLitre';

const CalculateVolume = (data, quantityTypeFromIndex, quantityTypeToIndex) => {
  switch (quantityTypeFromIndex) {
    case 0:
      console.log('enter litre');
      return CalculateLitre(data,quantityTypeToIndex);
    case 1:
      return CalculateMillimetre(data, quantityTypeToIndex);
    case 2:
      return CalculateGallons(data, quantityTypeToIndex);
  }
};
export default CalculateVolume;
