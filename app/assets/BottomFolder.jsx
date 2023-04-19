import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FileNavigation from "./FileNavigation";

function BottomFolder(props) {
  const navigation = FileNavigation();

  const switchToComp = (user) => {
    navigation.navigate("Login", { user });
  };

  const switchToStats = () => {};

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.buttonWrapper1}
        onPress={() => switchToComp("User")}
      >
        <MaterialCommunityIconsIcon
          name="trophy-variant"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.competitions}>Competitions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.myPage}>My Page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="chart-areaspline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.stats}>Stats</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  competitions: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(82,247,232,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  myPage: {
    fontSize: 14,
    color: "rgba(82,247,232,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  stats: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
});

export default BottomFolder;
