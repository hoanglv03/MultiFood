import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import HelloScreen from "./MainsScreens/ScreensWelcome/HelloScreen";
import TutorialScreen from "./MainsScreens/ScreensWelcome/TutorialScreen";
import StackScreenLogin from "./MainsScreens/ScreensLogin/StackScreenLogin";
import Maps from "./MainsScreens/Maps/Maps";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: "HelloScreen" };
    setTimeout(() => {
      this.setState({ currentScreen: "StackScreenLogin" });
    }, 3500);
  }
  render() {
    const { currentScreen } = this.state;
    let tutorialScreen =
      currentScreen === "HelloScreen" ? <HelloScreen /> : <StackScreenLogin />;
    return tutorialScreen;
  
  }
}
