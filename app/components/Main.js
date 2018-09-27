import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Note from './Note';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
          noteArray:[],
            noteText:''
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
      };
  render() {
      const note=this.state.noteArray.map((val,key)=>{
          return <Note keyVal={key} key={key} val={val}
          propsScreen={this.props.navigation} 
          deleteMethod={()=>this.deleteNote(key)} editMethod={()=>this.editNote(key)}/>
      });
      console.log(this.state.noteArray)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Notes</Text>
        </View>

         <ScrollView style={styles.scrollContainer}>
         {note}
         </ScrollView>
       
        <View style={styles.footer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={note=>this.setState({noteText:note})}
        value={this.state.noteText}
        placeholder='Enter Note'
        placeholderTextColor='white'
        underlineColorAndroid='transparent'
        >
        </TextInput>
        </View>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote(){
      if(this.state.noteText){
          let d=new Date();
          let fullDate=`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
          const val={
            'date':fullDate,
            'note':this.state.noteText
           }
          this.state.noteArray.push(val);
          this.setState({noteArray:this.state.noteArray});
          this.setState({noteText:''})
      }
  }

  editNote(key){
      alert(key)
  }

  deleteNote(key){
      this.state.noteArray.splice(key,1);
      this.setState({noteArray:this.state.noteArray});
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor: '#4A6572',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText:{
        color:'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer:{
        flex:1,
        marginBottom: 100,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
    },
    textInput:{
        alignSelf: 'stretch',
        color:'#fff',
        padding:20,
        backgroundColor:'#344955',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButtonText:{
        color:'black',
        fontSize:24,
    },
    addButton:{
        position:'absolute',
        backgroundColor: '#F9AA33',
        width:90,
        height:90,
        borderRadius: 50,
        zIndex:11,
        right:20,
        bottom:90,
        alignItems: 'center',
        justifyContent:'center',
        elevation:8
    }

});

