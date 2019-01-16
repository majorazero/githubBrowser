import React, {Component} from "react";
import {Text,StyleSheet} from "react-native";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  toggleUser = () => {
    this.setState(previousState => {
      return ({isLoggedIn: !previousState.isLoggedIn});
    });
  }
  render(){
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    return(
      <Text onPress={this.toggleUser}>
        {display}
      </Text>
    );
  }
}

export default Header;
