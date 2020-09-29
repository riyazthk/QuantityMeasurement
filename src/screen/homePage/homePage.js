/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './style';
import {Card, Input, Icon} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-material-dropdown';
import Swiper from 'react-native-custom-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
// import temperature from '../../images/temperature'
const theme = {
  Card: {},
};
const data = [
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
    measurementValueFrom: ['1', '1000', '100', '0', '0', '0', '0', '0'],
    measurementValueTo: ['1', '1000', '100', '0', '0', '0', '0', '0'],
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
    measurementValueFrom: ['32', '0', '1000'],
    measurementValueTo: ['32', '0', '1000'],
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
    measurementValueFrom: ['1', '1000', '3.78'],
    measurementValueTo: ['1', '1000', '3.78'],
  },
];
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      enable: true,
      data: data,
      open: true,
      index: '',
      itemDropDownFrom: [],
      itemDropDownTo: [],
      currentIndex: 0,
      mesurementType: '',
      pickerOpenFrom: false,
      pickerOpenTo: false,
      currentValueFrom: '',
      currentValueTo: '',
      label: 'select a type',
      indexValueFrom: '',
      indexValueTo: '',
      typeValueFrom: [],
      typeValueTo: [],
    };
    this.controller;
  }

  handleToggle = (value, dropDownItem) => {
    console.log(value);
    this.handleCloseToggle();
    this.setState({
      open: false,
      index: value,
      itemDropDownFrom: dropDownItem.dropDownValueFrom,
      itemDropDownTo: dropDownItem.dropDownValueTo,
      typeValueFrom: dropDownItem.measurementValueFrom,
      typeValueTo: dropDownItem.measurementValueFrom,
    });
    console.log(this.state.itemDropDown);
  };
  handleCloseToggle = () => {
    this.setState({
      itemDropDown: [],
    });
  };
  screenChange = (index) => {
    this.setState({currentIndex: index});
  };
  renderItem = ({item, index}) => {
    return (
      <View>
        {this.state.open ? (
          <Card
            containerStyle={{
              paddingTop: '10%',
              width: 280,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={item.imageUrl} />
            </View>
            <Text
              onPress={this.handleToggle.bind(this, index, item)}
              style={styles.cardName}>
              {item.title}
            </Text>
          </Card>
        ) : (
          <View>
            {this.state.index === index ? (
              <Card
                containerStyle={{
                  padding: 0,
                  width: 280,
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item.backgroundColor,
                  borderColor: item.border,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={item.image} />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: item.color,
                  }}>
                  {item.title}
                </Text>
              </Card>
            ) : (
              <Card
                containerStyle={{
                  padding: 10,
                  width: 280,
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={item.imageUrl} />
                </View>
                <Text
                  onPress={this.handleToggle.bind(this, index, item)}
                  style={styles.cardName}>
                  {item.title}
                </Text>
              </Card>
            )}
          </View>
        )}
      </View>
    );
  };
  render() {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#1874ed"
          translucent={true}
        />
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to Quantity Measurement</Text>
          </View>
          <View style={styles.bodyContainer}>
            <ScrollView>
              <View style={styles.topContainer}>
                <Text style={styles.containerTitle}>Choose Type</Text>
              </View>
              <View style={styles.cardBox}>
                <Card
                  containerStyle={{
                    // flex:1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '25%',
                  }}>
                  <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                  />
                  {/* <Swiper
                  style={{ flex: 1 }}
                  currentSelectIndex={0}
                  swipeData={this.state.data}
                  renderSwipeItem={this.renderItem}
                  onScreenChange={this.screenChange}
                  // keyExtractor={(item,index)=>index}
                 /> */}
                </Card>
                <View>
                  <Text style={styles.fromArea}>From</Text>
                  <Card>
                    <Input
                      value={
                        this.state.typeValueFrom[this.state.indexValueFrom]
                      }
                    />
                    <Dropdown
                      label={this.state.label}
                      data={this.state.itemDropDownFrom}
                      onChangeText={(value, index) => {
                        this.setState({
                          currentValueFrom: value,
                          label: '',
                          indexValueFrom: index,
                        });
                      }}
                      value={this.state.currentValueFrom}
                    />
                  </Card>
                  <Text style={styles.toArea}>To</Text>
                  <ScrollView>
                    <Card containerStyle={{flex:1,height:'10%'}}>
                      <Input
                        value={this.state.typeValueTo[this.state.indexValueTo]}
                      />
                      <Dropdown
                        label={this.state.label}
                        data={this.state.itemDropDownTo}
                        //containerStyle={{flex:1,height:'10%'}}
                        onChangeText={(value, index) => {
                          this.setState({
                            currentValueTo: value,
                            label: '',
                            indexValueTo: index,
                          });
                        }}
                        value={this.state.currentValueTo}
                      />
                    </Card>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>

            <View />
          </View>
          {/* </View> */}
        </View>
      </View>
    );
  }
}
export default HomeScreen;
