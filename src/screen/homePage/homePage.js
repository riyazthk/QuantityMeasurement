/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './style';
import {Card, Input, Icon} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import DropDown from '../dropDownComponent/dropDown';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesomeIcon, {
  SolidIcons,
} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
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
    dropDownValue: [
      'kilometre',
      'metre',
      'centimetre',
      'millimetre',
      'metre',
      'cm',
    ],
  },
  {
    imageUrl: require('../../images/hot.png'),
    image: require('../../images/hot-1.png'),
    title: 'temperature',
    backgroundColor: 'FFEEF0',
    color: '#FD5160',
    border: '#FD5160',
    dropDownValue: ['fahrenheit', 'celsius', 'kelvin'],
  },
  {
    imageUrl: require('../../images/beaker.png'),
    image: require('../../images/beaker-1.png'),
    title: 'volume',
    backgroundColor: '#E8DDFF',
    color: '#7224FF',
    border: '#7224FF',
    dropDownValue: ['litre', 'millilitre', 'gallons'],
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
      itemDropDown: [],
    };
  }

  handleToggle = (value, dropDownItem) => {
    console.log(value);
    this.handleCloseToggle();
    this.setState({
      open: false,
      index: value,
      itemDropDown: dropDownItem.dropDownValue,
    });
    console.log(this.state.itemDropDown);
  };
  handleCloseToggle = () => {
    this.setState({
      itemDropDown: [],
    });
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
            <Image source={item.imageUrl} style={{}} />

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
                  backgroundColor:item.backgroundColor,
                  borderColor:item.border
                }}>
                <Image source={item.image}  />
                <Text style={{textAlign:'center',fontSize:20,color:item.color}}>{item.title}</Text>
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
                <Image source={item.imageUrl} />
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
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#1874ed" translucent = {true}/>
      <View style={styles.body}>
        {/* <View style={styles.sectionContainer}>
          <View style={styles.headerTitile}>
            <Text style={styles.sectionTitle}>Quanment</Text>
          </View>
          <View style={styles.headerSideTitle}>
            <Text style={styles.sectionSideTitle}>history</Text>
          </View>
        </View> */}
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
                  // display: 'flex',
                  // flex:1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  height: '27%',
                }}>
                <FlatList
                  data={this.state.data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index}
                  horizontal={true}
                />
              </Card>
              <View>
                <Text style={styles.fromArea}>From</Text>
                <Card>
                  <Input />
                  <DropDownPicker
                    items={this.state.itemDropDown}
                    defaultValue={this.state.country}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: 'black'}}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{
                      backgroundColor: 'white',
                      position: 'absolute',
                    }}
                    onChangeItem={(item) =>
                      this.setState({
                        country: item.value,
                      })
                    }
                  />
                </Card>
                <Text style={styles.toArea}>To</Text>
                <ScrollView>
                  <Card>
                    <Input />
                    <DropDownPicker
                      items={this.state.itemDropDown}
                      defaultValue={this.state.country}
                      containerStyle={{height: 40}}
                      style={{backgroundColor: '#fafafa'}}
                      itemStyle={{
                        justifyContent: 'flex-start',
                      }}
                      dropDownStyle={{backgroundColor: '#fafafa'}}
                      onChangeItem={(item) =>
                        this.setState({
                          country: item.value,
                        })
                      }
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
