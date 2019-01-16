import React,{Component} from "react";
import {StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header.js";

class Home extends Component {
  render(){
    return(
      <View>
        <Text>This is a homepage.</Text>
        <Text>Is this working?</Text>
        <Header message={'Press to login'} />
      </View>
    );
  }
}

export default Home;
