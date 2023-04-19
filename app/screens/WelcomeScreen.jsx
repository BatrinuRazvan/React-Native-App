import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import MaterialIconTextButtonsFooter2 from "../assets/BottomFolder";
import MaterialCardWithImageAndTitle from "../assets/MainPageCards";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.rect}>
        <Text style={styles.userName}>UserName</Text>
      </View>
      <Image
        source={require("../assets/icon.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialIconTextButtonsFooter2
        style={styles.materialIconTextButtonsFooter2}
      ></MaterialIconTextButtonsFooter2>
      <MaterialCardWithImageAndTitle
        style={styles.materialCardWithImageAndTitle}
      ></MaterialCardWithImageAndTitle>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialIconTextButtonsFooter2: {
    height: 62,
    width: "100%",
    marginTop: 750,
  },
  materialCardWithImageAndTitle: {
    height: 166,
    width: "100%",
    position: "absolute",
    left: 0,
    top: 47,
  },
  image: {
    top: 0,
    left: 0,
    width: 65,
    height: 53,
    position: "absolute",
  },
  materialCardWithImageAndTitleStack: {
    top: 0,
    left: 0,
    width: "100%",
    height: 213,
    position: "absolute",
  },
  rect: {
    top: 2,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(82,247,232,1)",
  },
  userName: {
    color: "#121212",
    marginTop: 16,
    marginLeft: 283,
  },
});

export default WelcomeScreen;
