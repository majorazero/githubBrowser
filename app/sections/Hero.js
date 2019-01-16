import React,{Component} from "react";
import {StyleSheet,Image} from "react-native";

class Hero extends Component {
  render(){
    return(
      <Image
        style={styles.heroImage}
        source={require('./img/idk.jpg')}
        />
    );
  }
}

const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8
  }
});

export default Hero;
