/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: 'white',
  },
  headerSectionContainer: {
    backgroundColor: 'blue',
  },
  headerTitile: {
    height: 27,
    width: '70%',
    paddingTop: '3%',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '9%',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  headerSideTitle: {
    justifyContent: 'space-around',
  },
  sectionSideTitle: {
    fontSize: 15,
  },
  titleContainer: {
    height: '10%',
    backgroundColor: '#1874ed',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 10,
  },
  bodyContainer: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#ededed',
  },
  topContainer: {
    height: '7%',
    justifyContent: 'space-around',
    paddingLeft: '2%',
    paddingTop: '11%',
  },
  containerTitle: {
    fontSize: 23,
  },
  cardBox: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  styleCards: {},
  align: {
    height: '30%',
  },
  fromArea: {
    paddingLeft: '2%',
    paddingTop: '2%',
    height: '7%',
    fontSize: 20,
  },
  toArea: {
    paddingLeft: '2%',
    paddingTop: '2%',
    height: '7%',
    fontSize: 20,
  },
  headerCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'baseline',
  },
  cardName: {
    textAlign: 'center',
    fontSize: 20,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  viewImageCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toCard: {
    flex: 1,
    height: '10%',
  },
  outerCardImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '25%',
  },
  greyCard: {
    padding: 10,
    width: 280,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultStyle:{
    alignItems: 'center',
  },
  defaultCard:{
    paddingTop: '10%',
    width: 280,
    height: 120,
    alignItems: 'center',
  },
});
export default styles;
// textAlign: 'center',
//                     fontSize: 20,
//                     color: item.color,
