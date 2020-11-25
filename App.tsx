import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from "./components/HomeScreen";
import Ambiance from "./components/Ambiance";
import Chill from "./components/Chill";
import Game from "./components/Game";

const RootStack = createStackNavigator()

const Nav = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Ambiance" component={Ambiance} />
        <RootStack.Screen name="Chill" component={Chill} />
        <RootStack.Screen name="Game" component={Game} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <Nav/>
  );
}

AppRegistry.registerComponent('App', () => App);