import React, {Component} from "react";
import {Text,StyleSheet, View, Image, Platform} from "react-native";

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
    let display = this.state.isLoggedIn ? (Platform.iOS === "android" ? "Android User" : "iOS User") : this.props.message;
    return(
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={require('./img/wow.gif')}
        />
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
    fontSize: 20,
    flex:1
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
    flex: 1,
    flexDirection: "row"
  },
  logoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});

export default Header;
