import CalculateTemperature from "./calculateTemperature";

/* eslint-disable prettier/prettier */
const CalculateValues = (data, value1, value2,index,fromIndex,toIndex) => {
  console.log(data, value1, value2,index,fromIndex,toIndex);
  
  if(index===0){
   const result= CalculateTemperature(data,value1,value2,fromIndex,toIndex)
   return result
  }
  if(index===1){

  }
  if(index===2){

  }
};
export default CalculateValues;
