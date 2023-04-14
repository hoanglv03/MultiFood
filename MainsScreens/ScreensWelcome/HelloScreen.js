import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from 'expo-font';

export default function HelloScreen() {
     async function loadFont (){
        await useFonts({'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf')})
     }
     loadFont ();
  return (
    <View style={styles.container} >
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize:32
        }}
      >
        <Text>Multi</Text>
        <Text style={{color:'#D42323'}}>Food</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
