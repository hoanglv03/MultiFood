import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ForgotScreen from './ForgotScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TutorialScreen from '../ScreensWelcome/TutorialScreen';
import VerifyPhoneNumber from './VerifyPhoneNumber';
import ResetPassword from './ResetPassword';
import StackScreens from '../../MainsScreens/StackScreens'
import Restaurants from '../ScreenRestaurants/Restaurants';
const Stack = createStackNavigator();

export default function StackScreenLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={()=>({headerShown:false})} initialRouteName='TutorialScreen'>
         <Stack.Screen  name="LoginScreen" component={LoginScreen} />
         <Stack.Screen  name="SignUpScreen" component={SignUpScreen} />
         <Stack.Screen  name="ForgotScreen" component={ForgotScreen} />
         <Stack.Screen  name="TutorialScreen" component={TutorialScreen} />
         <Stack.Screen  name="VerifyPhoneNumber" component={VerifyPhoneNumber} />
         <Stack.Screen  name="ResetPassword" component={ResetPassword} />
         <Stack.Screen  name="StackScreens" component={StackScreens} />
         <Stack.Screen  name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})