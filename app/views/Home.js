import React,{Component} from "react";
import {StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header.js";
import Hero from "../sections/Hero.js";

class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Header message={'Press to login'} />
        <Hero />
        <Text style={{flex:8}}>This is a homepage.</Text>
        <Text style={{flex:6}}>Is this working?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
