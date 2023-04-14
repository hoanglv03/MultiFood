import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import SearchScreen from "./SearchScreen";
import OrderScreen from "./OrderScreen";
import AccountScreen from "./AccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-ionicons";
import {Ionicons} from '@expo/vector-icons'
import { useFonts } from "expo-font";
const Tab = createBottomTabNavigator();

export default function StackScreens() {
  async function loadFont (){
    await useFonts({'Product-Sans-Bold': require('../assets/fonts/Product-Sans-Bold.otf')})
  }
 loadFont ();
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          backgroundColor:'#ffffff',
          elevation: 12,
          
        }
        ,
         
          tabBarIcon:({focused,size,colour})=>{
            let iconName;
            if(route.name == "HomeScreen"){
              iconName = focused ? "ios-home" : "ios-home-outline"
              colour = focused ? '#D42323' : '#AAAAAA'
            }else if(route.name == "SearchScreen"){
              iconName = focused ? "ios-search" : "ios-search-outline"
              colour = focused ? '#D42323' : '#AAAAAA'
            }else if(route.name == "OrderScreen"){
              iconName = focused ? "ios-document-text" : "ios-document-text-outline"
              colour = focused ? '#D42323' : '#AAAAAA'
            }else if(route.name == "AccountScreen"){
              iconName = focused ? "ios-person" : "ios-person-outline"
              colour = focused ? '#D42323' : '#AAAAAA'
            }

           return <Ionicons  name={iconName} size={size} color={colour}/>
          },
          tabBarIconStyle: {
           marginTop:18
          }
      })}
    >
      <Tab.Screen  name="HomeScreen" component={Home} 
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}
