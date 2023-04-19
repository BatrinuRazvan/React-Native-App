import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Login from './Login';

function TestApp({navigation}) {
    return (
        <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          >
          </TouchableOpacity>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
    width: 329,
    height: 47,
    backgroundColor: "#E6E6E6",
    marginTop: 679
  },
  button: {
    width: 28,
    height: 19,
    backgroundColor: "rgba(232,9,9,1)",
    marginTop: 17,
    marginLeft: 15
  },
  scrollArea: {
    width: 19,
    height: 680,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 680,
    width: 19
  },
  rectRow: {
    height: 726,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 21,
    marginTop: 40
  }
});

export default TestApp;