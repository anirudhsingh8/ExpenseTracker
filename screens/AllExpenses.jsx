import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AllExpenses = () => {
  const navigator = useNavigation();

  return (
    <View>
      <CustomAppBar
        title={"All Expenses"}
        rightAction={
          <Appbar.Action
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.navigate("Add")}
          />
        }
      />
      <Text>AllExpenses</Text>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
