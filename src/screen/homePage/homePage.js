/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlightComponent} from 'react-native';
import styles from './style';
import {Card, Input, Icon} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import DropDown from '../dropDownComponent/dropDown';
import DropDownPicker from 'react-native-dropdown-picker';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const theme = {
  Card: {},
};
const data = [
  {
    imageUrl: '../../images/temperature.png',
    title: 'length',
    backgroundColor: 'red',
  },
  {
    imageUrl: '../../images/temperature.png',
    title: 'temperature',
    backgroundColor: 'violet',
  },
  {
    imageUrl: '../../images/temperature.png',
    title: 'volume',
    backgroundColor: 'blue',
  },
];
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0, enable: true, data: data, open: true, index: ''};
  }
  // handleLengthImageClick = () => {
  //   this.setState({value: 0, enable: false});
  // };
  // handleTemperatureClick = () => {
  //   this.setState({value: 1, enable: false});
  // };
  // handleVolumeClick = () => {
  //   this.setState({value: 2, enable: false});
  // };
  handleToggle = (value) => {
    console.log(value);
    this.setState({
      open: false,
      index: value,
    });
  };
  handleCloseToggle = () => {
    this.setState({
      open: true,
    });
  };
  renderItem = ({item, index}) => {
    return (
      <View>
        {this.state.open ? (
          <Card containerStyle={{padding: 0, width: 280, height: 150}}>
            {/* <Card.Image
                containerStyle={{overflow: 'hidden', height: 150, width: 277}}
                source={{uri: item.imageUrl}}
              /> */}

            <Text
              onPress={this.handleToggle.bind(this, index)}
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
                  backgroundColor: item.backgroundColor,
                }}>
                <Icon name="rowing" />

                <Text style={styles.cardName}>{item.title}</Text>
              </Card>
            ) :  <Card containerStyle={{padding: 0, width: 280, height: 150}}>
            {/* <Card.Image
                containerStyle={{overflow: 'hidden', height: 150, width: 277}}
                source={{uri: item.imageUrl}}
              /> */}
            <Icon name="rowing" />

            <Text
              onPress={this.handleToggle.bind(this, index)}
              style={styles.cardName}>
              {item.title}
            </Text>
          </Card>}
          </View>
        )}
      </View>
      // <View style={styles.imageContainer}>
      //   <Image source={{uri: '../../images/temperature.png'}} />
      //   <View>
      //     <Text>{item.title}</Text>
      //   </View>
      // </View>
    );
  };
  render() {
    return (
      <View style={styles.body}>
        {/* <View style={styles.headerSectionContainer}> */}
        <View style={styles.sectionContainer}>
          <View style={styles.headerTitile}>
            <Text style={styles.sectionTitle}>Quanment</Text>
          </View>
          <View style={styles.headerSideTitle}>
            <Text style={styles.sectionSideTitle}>history</Text>
          </View>
        </View>
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
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  height: '23%',
                }}>
                <FlatList
                  data={this.state.data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index}
                />
              </Card>

              <View>
                <Text style={styles.fromArea}>From</Text>
                <Card>
                  <Input />
                  <DropDownPicker
                    items={[
                      {label: 'UK', value: 'uk'},
                      {label: 'France', value: 'france'},
                    ]}
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
                <Text style={styles.toArea}>To</Text>
                <Card>
                  <Input />
                  <DropDownPicker
                    items={[
                      {label: 'UK', value: 'uk'},
                      {label: 'France', value: 'france'},
                    ]}
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
              </View>
            </View>
          </ScrollView>

          <View />
        </View>
        {/* </View> */}
      </View>
    );
  }
}
export default HomeScreen;
