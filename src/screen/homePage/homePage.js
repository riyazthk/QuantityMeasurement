/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './style';
import {Card, Input} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-material-dropdown';
import calculateValues from '../quantityCalculation/calculateValues';
import {data} from '../arrayData/Data';

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
    };
    this.handleInputValue = this.handleInputValue.bind(this);
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

  handleInputValue(e) {
    this.setState({
      typeValueFrom: e,
    });
    const value = calculateValues(
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
          <Card containerStyle={styles.defaultCard}>
            <View style={styles.defaultStyle}>
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
              <Card containerStyle={styles.greyCard}>
                <View style={styles.viewImageCard}>
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
                    <Card containerStyle={styles.toCard}>
                      <Input value={this.state.typeValueTo} />
                      <Dropdown
                        label={this.state.label}
                        data={this.state.itemDropDownTo}
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
        </View>
      </View>
    );
  }
}
export default HomeScreen;
