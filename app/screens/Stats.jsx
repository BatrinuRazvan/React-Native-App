import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import WDSFCard from "../MainPageComponents/WDSFCard";
import FRDSCard from "../MainPageComponents/FRDSCard";
import TopInfoSection from "../MainPageComponents/TopInfoSection";
import Pie from "react-native-pie";
import TestChart from "../charts/TestChart";

function Stats(props) {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 15,
        width: "100%",
      }}
    >
      <Text style={{ paddingLeft: "30%" }}>MM (Movement to Music)</Text>
      <TestChart />
      <Text style={{ paddingLeft: "35%" }}>TQ (Technical Quality)</Text>
      <TestChart />
      <Text style={{ paddingLeft: "25%" }}>
        CP (Coreography and Presentation)
      </Text>
      <TestChart />
      <Text style={{ paddingLeft: "45%" }}>XX</Text>
      <TestChart />
    </ScrollView>
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

export default Stats;
