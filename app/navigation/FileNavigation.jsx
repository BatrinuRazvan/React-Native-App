import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompetitionsPage from "../screens/CompetitionsPage";
import Stats from "../screens/Stats";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MainPage from "../screens/MainPage";

const Tab = createBottomTabNavigator();

const mainPage = "My Page";
const statsPage = "Stats";
const competitionsPage = "Competitions";

export default function FileNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Stats"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let rn = route.name;

            if (rn === mainPage) {
              iconName = "account-circle";
              styling = focused ? styles.icon1 : styles.icon2;
            } else if (rn === statsPage) {
              iconName = "chart-line-stacked";
              styling = focused ? styles.icon1 : styles.icon2;
            } else if (rn === competitionsPage) {
              iconName = "trophy-variant";
              styling = focused ? styles.icon1 : styles.icon2;
            }

            return (
              <MaterialCommunityIconsIcon name={iconName} style={styling} />
            );
          },
          tabBarActiveTintColor: "rgba(82,247,232,1)",
          // headerShown: false,
          headerTitle: () => {
            let iconName;
            let rn = route.name;

            if (rn === mainPage) {
              return <Text>Cards & Info</Text>;
            } else if (rn === statsPage) {
              return <Text>Statistics</Text>;
            } else if (rn === competitionsPage) {
              return <Text>Past Competitions</Text>;
            }
          },
        })}
      >
        <Tab.Screen name={competitionsPage} component={CompetitionsPage} />
        <Tab.Screen name={mainPage} component={MainPage} />
        <Tab.Screen name={statsPage} component={Stats} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    color: "rgba(82,247,232,1)",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(82,247,232,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#111",
    fontSize: 24,
    opacity: 0.8,
  },
});
