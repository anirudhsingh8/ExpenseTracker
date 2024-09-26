import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import { ExpensesContext } from "../providers/ExpenseProvider";
import ExpenseView from "../components/ExpenseView";

const AllExpenses = () => {
  const navigator = useNavigation();
  const { expenses } = useContext(ExpensesContext);

  return (
    <View style={styles.root}>
      <CustomAppBar
        title={"All Expenses"}
        rightAction={
          <Appbar.Action
            animated={false}
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.navigate("Add")}
          />
        }
      />
      <Text style={styles.header}>Showing all expenses</Text>
      <View style={styles.body}>
        <FlatList
          data={expenses}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ExpenseView expense={item} />}
        />
      </View>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingVertical:8,
    paddingLeft: 24,
    fontWeight: '800',
    fontSize: 22,
  },
  body: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
