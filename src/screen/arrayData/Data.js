/* eslint-disable prettier/prettier */
export const data = [
  {
    imageUrl: require('../../images/scale-1.png'),
    image: require('../../images/scale.png'),
    title: 'length',
    backgroundColor: '#EDFDF9',
    color: '#0EC098',
    border: '#0EC098',
    dropDownValueFrom: [
      {value: 'kilometre'},
      {value: 'metre'},
      {value: 'centimetre'},
      {value: 'millimetre'},
      {value: 'micrometre'},
      {value: 'mile'},
      {value: 'foot'},
      {value: 'inch'},
    ],
    dropDownValueTo: [
      {value: 'kilometre'},
      {value: 'metre'},
      {value: 'centimetre'},
      {value: 'millimetre'},
      {value: 'micrometre'},
      {value: 'mile'},
      {value: 'foot'},
      {value: 'inch'},
    ],
  },
  {
    imageUrl: require('../../images/hot.png'),
    image: require('../../images/hot-1.png'),
    title: 'temperature',
    backgroundColor: '#FFEEF0',
    color: '#FD5160',
    border: '#FD5160',
    dropDownValueFrom: [
      {value: 'fahrenheit'},
      {value: 'celsius'},
      {value: 'kelvin'},
    ],
    dropDownValueTo: [
      {value: 'fahrenheit'},
      {value: 'celsius'},
      {value: 'kelvin'},
    ],
  },
  {
    imageUrl: require('../../images/beaker.png'),
    image: require('../../images/beaker-1.png'),
    title: 'volume',
    backgroundColor: '#E8DDFF',
    color: '#7224FF',
    border: '#7224FF',
    dropDownValueFrom: [
      {value: 'litre'},
      {value: 'millilitre'},
      {value: 'gallons'},
    ],
    dropDownValueTo: [
      {value: 'litre'},
      {value: 'millilitre'},
      {value: 'gallons'},
    ],
  },
];
