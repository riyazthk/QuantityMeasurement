/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';
import {Card, Input} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-material-dropdown';
import {data} from '../arrayData/Data';
import CalculateValues from '../quantityCalculation/CalculateValues';

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
      currentValueFrom: '',
      currentValueTo: '',
      label: 'select a type',
      indexValueFrom: '',
      indexValueTo: '',
      typeValueFrom: 0,
      typeValueTo: '',
      countFrom: 0,
      countTo: 0,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleDropDownFrom = this.handleDropDownFrom.bind(this);
    this.handleDropDownTo = this.handleDropDownTo.bind(this);
  }

  handleToggle = (value, dropDownItem) => {
    this.handleCloseToggle();
    this.setState({
      open: false,
      index: value,
      itemDropDownFrom: dropDownItem.dropDownValueFrom,
      itemDropDownTo: dropDownItem.dropDownValueTo,
    });
  };
  handleCloseToggle = () => {
    this.setState({
      itemDropDown: [],
    });
  };
  screenChange = (index) => {
    this.setState({currentIndex: index});
  };
  handleDropDownFrom(value, index) {
    this.setState({
      currentValueFrom: value,
      label: '',
      indexValueFrom: index,
      countFrom: this.state.countFrom + 1,
    });
    if (this.state.countFrom > 1) {
      this.handleInputValue(this.state.typeValueFrom);
    }
  }
  handleDropDownTo(value, index) {
    this.setState({
      currentValueTo: value,
      label: '',
      indexValueTo: index,
      countTo: this.state.countTo + 1,
    });
    if (this.state.countTo > 1) {
      this.handleInputValue(this.state.typeValueFrom);
    }
  }
  handleInputValue(e) {
    this.setState({
      typeValueFrom: e,
    });
    const value = CalculateValues(
      e,
      this.state.currentValueFrom,
      this.state.currentValueTo,
      this.state.index,
      this.state.indexValueFrom,
      this.state.indexValueTo,
    );
    this.setState({
      typeValueTo: value.toString(),
    });
  }
  renderItem = ({item, index}) => {
    return (
      <View>
        {this.state.open ? (
          <TouchableOpacity onPress={this.handleToggle.bind(this, index, item)}>
            <Card containerStyle={styles.defaultCard}>
              <View style={styles.defaultStyle}>
                <Image source={item.imageUrl} />
              </View>
              <Text style={styles.cardName}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        ) : (
          <View>
            {this.state.index === index ? (
              <Card
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                  padding: 0,
                  width: 280,
                  height: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item.backgroundColor,
                  borderColor: item.border,
                }}>
                <View style={styles.colorStyle}>
                  <Image source={item.image} />
                </View>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: item.color,
                  }}>
                  {item.title}
                </Text>
              </Card>
            ) : (
              <TouchableOpacity
                onPress={this.handleToggle.bind(this, index, item)}>
                <Card containerStyle={styles.greyCard}>
                  <View style={styles.viewImageCard}>
                    <Image source={item.imageUrl} />
                  </View>
                  <Text style={styles.cardName}>{item.title}</Text>
                </Card>
              </TouchableOpacity>
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
                <Card containerStyle={styles.outerCardImage}>
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
                    <Input
                      value={this.state.typeValueFrom}
                      onChangeText={(value) => this.handleInputValue(value)}
                    />

                    <Dropdown
                      label={this.state.label}
                      data={this.state.itemDropDownFrom}
                      onChangeText={(value, index) =>
                        this.handleDropDownFrom(value, index)
                      }
                      value={this.state.currentValueFrom}
                      useNativeDriver={true}
                    />
                  </Card>
                  <Text style={styles.toArea}>To</Text>
                  <ScrollView>
                    <Card containerStyle={styles.toCard}>
                      <Input value={this.state.typeValueTo} />
                      <Dropdown
                        label={this.state.label}
                        data={this.state.itemDropDownTo}
                        onChangeText={(value, index) =>
                          this.handleDropDownTo(value, index)
                        }
                        value={this.state.currentValueTo}
                        useNativeDriver={true}
                      />
                    </Card>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>

            <View />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
