import React, {Component} from "react";
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from "react-native";
import Header from "../sections/Header.js";
import {createStackNavigator} from "react-navigation";

class Contact extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter message",
      name: "Enter name",
      email: "Enter email address"
    }
  }

  clearField = () => {
    this.setState({
      name: '',
      msg: '',
      email: ''
    });
  }

  sendMessage = () => {
    Alert.alert(this.state.name,this.state.msg);
    this.props.navigation.goBack();
  }

  render(){
    return(
      <View style={styles.container}>
        <Header message='Press to login.'/>
        <Text style={styles.heading}>Contact Us.</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text)=> this.setState({name:text})}
          value={this.state.name}
          />

        <TextInput
          style={styles.multiInput}
          onChangeText={(text)=> this.setState({msg:text})}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
          />

        <TextInput
          style={styles.inputs}
          onChangeText={(text)=> this.setState({email:text})}
          value={this.state.email}
          />

        <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            Send Message
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearField} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            Reset
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    paddingBottom: '45%'
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  multiInput: {
    flex: 2,
    width: '98%',
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});

export default Contact;
