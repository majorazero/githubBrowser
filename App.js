import React, {Component} from 'react';
import Home from "./app/views/Home.js";
import Contact from "./app/views/Contact.js";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    }
  },
  {
    initialRouteName: 'HomeRT'
  });


class App extends Component{
  render() {
    return (
      <MyRoutes />

    );
  }
}

export default createAppContainer(MyRoutes);
