import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ChestScreen from './workoutscreens/ChestScreen';
import BackScreen from './workoutscreens/BackScreen'
import ShoulderScreen from './workoutscreens/ShouldersScreen'
import LegsScreen from './workoutscreens/LegsScreen'
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
 
export default class App extends React.Component {
  render(){ 
    return (
      <AppNavigator />
    );
  }
}


const AppSwitchNavigator = new createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
  ChestScreen: ChestScreen,
  BackScreen: BackScreen,
  ShouldersScreen: ShoulderScreen,
  LegsScreen: LegsScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
