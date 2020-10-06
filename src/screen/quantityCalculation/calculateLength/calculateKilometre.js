/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  1,
  1000,
  10000,
  1000000,
  1000000000,
  1094,
  3281,
  39370,
];
const CalculateKilometre = (data,fromIndex,toIndex) => {
  if (fromIndex < toIndex) {
    let value = data * lengthDefaultValues[toIndex];
    console.log('result', value);
    console.log('rea', typeof value);
    return value;
  } 
  
};
export default CalculateKilometre;
