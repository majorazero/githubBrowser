import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Header from "../sections/Header.js";

class Contact extends Component {
  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <View style={styles.container}>
        <Header message='Press to login.'/>
        <Text style={{flex:8}}>Contact will go here.</Text>
        <Text style={{flex:8}}>More Contact will go here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Contact;
