import React from "react";
import { Text, View } from "react-native";
import CustomAppBar from "../components/CustomAppBar";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddExpense = () => {
  const navigator = useNavigation();
  return (
    <View>
      <CustomAppBar
        title={"Add expense"}
        backAction={
          <Appbar.BackAction
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.goBack()}
          />
        }
      />
      <Text>AddExpense</Text>
    </View>
  );
};

export default AddExpense;
