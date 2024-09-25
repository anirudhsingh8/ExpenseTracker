import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import BottomAppBar from "../components/BottomAppBar";
import AllExpenses from "./AllExpenses";
import RecentExpenses from "./RecentExpenses";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(data) => BottomAppBar(data)}
    >
      <Tab.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="clock-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="All"
        component={AllExpenses}
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="file-document-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Home