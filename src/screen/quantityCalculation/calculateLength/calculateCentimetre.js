/* eslint-disable prettier/prettier */
const lengthDefaultValues = [
  0.0001,
  0.01,
  1,
  10,
  10000,
  160934,
  0.032,
  0.0394,
  ];
 const CalculateCentimetre = (data,toIndex) => {
 let value = data * lengthDefaultValues[toIndex];
 return value;
};
export default CalculateCentimetre;
