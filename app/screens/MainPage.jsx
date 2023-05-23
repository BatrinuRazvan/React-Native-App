import React, { Component, useRef } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";

import WDSFCard from "../MainPageComponents/WDSFCard";
import FRDSCard from "../MainPageComponents/FRDSCard";
import TopInfoSection from "../MainPageComponents/TopInfoSection";

function MainPage(props) {
  return (
    <View style={styles.scrollView}>
      <View style={styles.materialCardWithImageAndTitle}>
        <TopInfoSection
          style={styles.materialCardWithImageAndTitle}
        ></TopInfoSection>
      </View>

      <TouchableOpacity
        onPress={console.log("")}
        style={{ backgroundColor: "#fff", top: "5%", paddingLeft: 1 }}
      >
        <WDSFCard />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={console.log("")}
        style={{ backgroundColor: "#fff", top: "10%" }}
      >
        <FRDSCard></FRDSCard>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  materialCardWithImageAndTitle: {
    width: "100%",
    height: 166,
    left: 0,
  },
});

export default MainPage;
