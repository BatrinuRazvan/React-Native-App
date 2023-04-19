import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Password"
          textBreakStrategy="highQuality"
          style={styles.password}
        ></TextInput>
      </View>
      <View style={styles.rect3}>
        <TextInput
          placeholder="Username"
          textBreakStrategy="highQuality"
          clearButtonMode="never"
          style={styles.username2}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect2: {
    width: 215,
    height: 45,
    backgroundColor: "#E6E6E6",
    borderRadius: 56,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopRightRadius: 66,
    borderBottomRightRadius: 66,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 406,
    marginLeft: 80,
  },
  password: {
    fontFamily: "roboto-700italic",
    color: "#121212",
    height: 20,
    width: 188,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginTop: 13,
    marginLeft: 12,
  },
  rect3: {
    width: 215,
    height: 45,
    backgroundColor: "#E6E6E6",
    borderRadius: 56,
    borderWidth: 1,
    borderColor: "#000000",
    borderTopRightRadius: 66,
    borderBottomRightRadius: 66,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -111,
    alignSelf: "center",
  },
  username2: {
    color: "#121212",
    height: 24,
    width: 188,
    marginTop: 10,
    marginLeft: 12,
  },
});

export default Login;
