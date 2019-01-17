import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity, Text, Alert} from "react-native";

class Menu extends Component {
  onPress = () => {
    Alert.alert("You tapped the button!");
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text>LESSONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>{this.props.navigate("ContactRT")}}>
            <Text>CONTACT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text>QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text>ABOUT</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 6,
      backgroundColor: '#35605a'
    },
    buttonRow: {
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#ffffff",
      borderBottomWidth: 1
    },
    buttonStyles: {
      backgroundColor: "#35606a",
      width: '50%',
      height: "50%",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      color:"#ffffff",
      fontSize: 18
    }
});

export default Menu;
