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
  // headerSectionContainer:{
  //  display:'flex',
  //  flexDirection:'column'
  // },
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
  },
  bodyContainer: {
    display:"flex",
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#ededed',
  },
  topContainer: {
    height: '7%',
    justifyContent: 'space-around',
    paddingLeft: '2%',
    paddingTop: '11%',
    //  backgroundColor:'violet',
  },
  containerTitle: {
    fontSize: 23,
  },
  cardBox: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  styleCards: {},
  
  align:{
    height:'30%',
  },
  fromArea:{
    paddingLeft: '2%',
    paddingTop: '15%',
    height: '13%',
    fontSize: 20,
  },
  toArea:{
    paddingLeft: '2%',
    paddingTop: '20%',
    height: '18%',
    fontSize: 20,
  
  },
  headerCard:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'baseline'
  },
  cardName:{
    textAlign:'center',
    fontSize:20
    
  },
  imageContainer:{
    height:100,
    width:100
  }
});
export default styles;
