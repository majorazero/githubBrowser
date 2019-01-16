import React, {Component} from "react";
import {Text,StyleSheet, View} from "react-native";

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
      <View style={styles.headStyle}>
        <Text
          onPress={this.toggleUser}
          style={styles.headText}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: "#ffffff",
    fontSize: 20
  },
  headStyle: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: "#35605a"
  }
});

export default Header;
