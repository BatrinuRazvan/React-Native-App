import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import MaterialIconTextButtonsFooter2 from "../assets/BottomFolder";
import MaterialCardWithImageAndTitle from "../assets/MainPageCards";

export default function CompetitionsPage(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollView}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle}
        ></MaterialCardWithImageAndTitle>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle222}
        ></MaterialCardWithImageAndTitle>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  materialCardWithImageAndTitle: {
    width: "100%",
    height: 166,
    position: "absolute",
    left: 0,
  },
  materialCardWithImageAndTitle222: {
    width: "100%",
    height: 166,
    position: "absolute",
    left: 0,
    top: 166,
  },
  scrollView: {
    paddingBottom: MaterialIconTextButtonsFooter2.height,
  },
});
