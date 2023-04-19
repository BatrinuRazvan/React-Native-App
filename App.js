import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import TestApp from './app/screens/Test';
import { NavigationContainer } from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from './app/screens/WelcomeScreen';
import FileNavigation from './app/assets/FileNavigation';

export default function App() {
  return (
    <SafeAreaView>
      <FileNavigation/>
      <WelcomeScreen style={styles.mainContainer}/>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: '100%',
  },
  container1: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
  }
});
