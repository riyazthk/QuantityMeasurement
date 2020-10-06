/* eslint-disable prettier/prettier */

import CalculateLength from "./calculateLengthType"

const CalculateValues = (data, value1, value2,index,fromIndex,toIndex) => {
  console.log(data, value1, value2,index,fromIndex,toIndex);
  
  if(index===0){
   const result= CalculateLength(data,value1,value2,fromIndex,toIndex)
   return result
  }
  if(index===1){
   const result=CalculateTemperature(data,value1,value2,fromIndex,toIndex)
  }
  if(index===2){

  }
};
export default CalculateValues;
