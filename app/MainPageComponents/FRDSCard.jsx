import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function FRDSCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Image
          source={require("../assets/barcode.png")}
          style={styles.barcode}
        ></Image>
      </View>
      <Text style={styles.text2}>FRDS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 206,
    backgroundColor: "blue",
    borderRadius: 69,
  },
  cardItemImagePlace: {
    flex: 1,
  },
  text1: {
    top: "75%",
    position: "absolute",
    paddingLeft: "51%",
  },
  barcode: {
    width: 100,
    height: 40,
  },
  text2: {
    top: "10%",
    color: "#fff",
    paddingLeft: "20%",
    fontSize: 100,
  },
});

export default FRDSCard;
