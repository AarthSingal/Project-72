import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { Header} from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
 
export default class WriteStoryScreen extends React.Component {
  constructor(){
      super();
      this.state={
        authorName : '',
        storyTitle : '',
        story : ''
      }
  }
   submitStory= async()=>{
    db.collection("Stories").add({
        title : this.state.storyTitle,
        author : this.state.authorName,
        story : this.state.story
    })
    alert("Story Submitted")
  }
  render (){
  return (
    <SafeAreaProvider>
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header backgroundColor = "black"
  centerComponent={{ text: 'Story Hub', style: { color: 'white' } }} />
        <View>
        <TextInput placeholder="Story Title" style={styles.storyTitleInputBox} 
        onChangeText={(text) => {
            this.setState({
              storyTitle: text,
            });
          }}/>
        <TextInput placeholder="Author" style={styles.authorInputBox} 
        onChangeText={(text) => {
            this.setState({
              authorName: text,
            });
          }}/>
        <TextInput placeholder="Write Your Story" style={styles.storyInputBox} multiline= {true} 
        onChangeText={(text) => {
            this.setState({
              story: text,
            });
          }}/>
        </View>
        <View>
            <TouchableOpacity style={styles.submitButton} onPress={()=>{
                this.submitStory()
            }}>
                <Text style={styles.submitButtonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView> 
    </SafeAreaProvider>
  );}
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    storyTitleInputBox: {
        borderWidth : 2,
        marginTop : 35
    },
    authorInputBox: {
        borderWidth : 2,
        marginTop:20
    },
    storyInputBox: {
        borderWidth : 2,
        width:300,
        height : 200,
        marginTop: 20
    },
    submitButton: {
        marginTop : 100,
        backgroundColor:"cyan",
        width:100,
        height:50
    },
    submitButtonText:{
        padding:10,
        textAlign:"center",
        fontSize : 20,
        fontWeight:"bold",
        color : "black"
      }
  });