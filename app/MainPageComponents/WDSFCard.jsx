import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function WDSFCard(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/wdsf-card.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.text1}>
        <Image
          source={require("../assets/barcode.png")}
          style={styles.barcode}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 206,
    backgroundColor: "#fff",
  },
  cardItemImagePlace: {
    flex: 1,
    borderRadius: 69,
  },
  text1: {
    top: "75%",
    position: "absolute",
    paddingLeft: "50%",
  },
  barcode: {
    width: 100,
    height: 40,
  },
});

export default WDSFCard;
