import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";

const RecentExpenses = () => {
  const navigator = useNavigation();

  return (
    <View>
      <CustomAppBar
        title={"Recent Expenses"}
        rightAction={
          <Appbar.Action
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.navigate("Add")}
          />
        }
      />
      <Text>RecentExpenses</Text>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
