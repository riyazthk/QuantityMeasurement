/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableHighlightBase} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Card, Input} from 'react-native-elements';
import styles from '../homePage/style';
import Styles from './dopDownStyle';

class DropDowns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
         length:['Kilometre', 'Metres'],
         temperature:['Celsius','Fahrenheit','Kelvin'],
        // volume:[{title:'Litres'},{title: 'Millilitres'},{title: 'Gallons'}],
        volume:['Litres','Millilitres','Gallons']
      },
      value:'',
    };
  }
 
  render() {
    return (
      <View style={styles.dropDown}>
        <Text>fgjghjhgj{this.props.value}</Text>
        {Object.keys(this.state.item).map(function(key)  {
          
          return (
            <View>
              <Text>{key}</Text>
              { key === "temperature" ? <Text>{key}</Text> : null}
              

              {/* <Text>{key.title}</Text> */}
              {/* {items===this.props.value ? (
                <View>
                  <Text>sdfdggfgf</Text>
                  <Text style={Styles.fromArea}>From</Text>
                  <Card>
                    <Input />
                    <DropDownPicker
                      items={key}
                        />
                  </Card>
                  <Text style={Styles.toArea}>To</Text>
                  <Card>
                    <Input />
                  </Card>
                </View>
              ) : (
              <Text>{key,items}</Text>
              )} */}
            </View>
          );
        
        })}
      </View>
    );
  }
}
