import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  
} from 'react-native';

export default class Viewnote extends Component{
    static navigationOptions = {
        title: 'View',
        headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
      };
  render() {
      const {navigation}=this.props;
      const value=navigation.getParam('value');
      const dateVal=navigation.getParam('dateVal');
    return (
      <View style={styles.noteValue}>
        <View style={styles.boxView}>
         <Text style={styles.valueText1}>{JSON.parse(JSON.stringify(dateVal))}</Text>
         <Text style={styles.valueText2}>{JSON.parse(JSON.stringify(value))}</Text>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    boxView:{
        backgroundColor: '#F9AA33',
        width:300,
        height:100,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        borderLeftWidth: 15,

    },
 noteValue:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#00BCD4',
    
 },
 valueText1:{
   fontFamily: 'monospace',
   fontSize: 40,
   fontWeight: 'bold',
   color:'black'
 },
 valueText2:{
   fontFamily: 'monospace',
   fontSize: 20,
   fontWeight: 'bold',
   color:'black'
 }
});