/* eslint-disable prettier/prettier */

import CalculateKilometre from "./calculateLength/calculateKilometre";
import CalculateMetre from "./calculateLength/calculateMetre";

const CalculateTemperature = (data, value1, value2, fromIndex, toIndex) => {
  
  switch(fromIndex){
    case 0:
     return( CalculateKilometre(data,fromIndex,toIndex))
    case 1:
     return( CalculateMetre(data,fromIndex,toIndex))
    case 2:
      CalculateCentimetre()
      break
    case 3:
      CalculateMillimetre()
      break
    case 4:
      CalculateMicrometre()
      break
    case 5:
      calculateMicroMetre()
      break
    case 6:
      calculateMile()
      break
    case 7:
      calculateFoot()
      break
    case 8:
      calculateInch()
      break
  }
};
export default CalculateTemperature;
