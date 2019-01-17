import React,{Component} from "react";
import {StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header.js";
import Hero from "../sections/Hero.js";
import Menu from "../sections/Menu.js";
import {createStackNavigator} from "react-navigation";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Header message={'Press to login'} />
        <Hero />
        <Menu navigate={navigate} />
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
