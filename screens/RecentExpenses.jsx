import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import { ExpensesContext } from "../providers/ExpenseProvider";

const RecentExpenses = () => {
  const navigator = useNavigation();
  const { expenses, updateOrCreateExpenses } = useContext(ExpensesContext);

  return (
    <View>
      <CustomAppBar
        title={"Recent Expenses"}
        rightAction={
          <Appbar.Action
            animated={false}
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.navigate("Add")}
          />
        }
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
