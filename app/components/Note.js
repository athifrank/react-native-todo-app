import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  
} from 'react-native';


export default class Note extends Component{

  render() {
    const {navigate}=this.props.propsScreen;
    return (
      <View key={this.props.keyVal} style={styles.note}>

        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
         
        <TouchableOpacity  onPress={() => navigate('Noteview',
        {
          value:this.props.val.note,
          dateVal:this.props.val.date
        }
        )} style={styles.noteView}>
        <Text style={styles.noteDeleteText}>view</Text>
        </TouchableOpacity>

        <TouchableOpacity   onPress={this.props.editMethod} style={styles.noteEdit}>
        <Text style={styles.noteDeleteText}>Edit</Text>
        </TouchableOpacity>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles=StyleSheet.create({
    note:{
        position:'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,   
        borderBottomColor: '#ededed',
    },
    noteText:{
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#E91E63',

    },
    noteDelete:{
      position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e57373',
        padding:10,
        top: 10,
        bottom:10,
        right:10,
        borderRadius:2,
        shadowRadius: 10,
    },
    noteView:{
      position:'absolute',
      marginRight: 116,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#26a69a',
      padding:10,
      top: 10,
      bottom:10,
      right:10,
      borderRadius: 2,
      shadowRadius: 20,
  },
   noteEdit:{
    position:'absolute',
    marginRight: 67,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b95e0',
    padding:10,
    top: 10,
    bottom:10,
    right:10,
    borderRadius: 2,
    shadowRadius: 20,
  },
    noteDeleteText:{
        color:'white',
        fontWeight: 'bold',
        fontFamily: 'arial',
        fontSize: 15,
    }
});