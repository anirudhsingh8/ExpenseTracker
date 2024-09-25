import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import CustomAppBar from "../components/CustomAppBar";
import Expense from "../models/Expense";
import { ExpensesContext } from "../providers/ExpenseProvider";
import { DatePickerModal } from "react-native-paper-dates";

const AddExpense = () => {
  const navigator = useNavigation();
  const { updateOrCreateExpenses } = useContext(ExpensesContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [open, setOpen] = React.useState(false);

  const onDismissDatePicker = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onDateSelected = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  function handleButtonPress() {
    if (title === "" || amount === "" || date === "") return;

    const expense = new Expense({
      title: title,
      amount: amount,
      date: date,
      notes: notes,
    });

    updateOrCreateExpenses(expense);
    navigator.goBack();
  }

  return (
    <View style={styles.root}>
      <CustomAppBar
        title={"Add expense"}
        backAction={
          <Appbar.BackAction
            icon={() => <MaterialCommunityIcons name="plus" size={24} />}
            onPress={() => navigator.goBack()}
          />
        }
      />
      <View style={styles.body}>
        <TextInput
          style={styles.textfield}
          mode="outlined"
          label={"Title"}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textfield}
          mode="outlined"
          label={"Amount"}
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={styles.textfield}
          mode="outlined"
          label={"Date"}
          value={date.toString()}
          readOnly={true}
          onPress={() => {
            setOpen(true);
          }}
          onChangeText={setDate}
        />
        <DatePickerModal
          mode="single"
          visible={open}
          saveLabel="Save"
          label="Select date"
          onDismiss={onDismissDatePicker}
          date={date}
          onConfirm={onDateSelected}
        />
        <TextInput
          style={styles.textfield}
          mode="outlined"
          label={"Addtional notes"}
          value={notes}
          onChangeText={setNotes}
        />

        <Button
          style={styles.button}
          icon="plus"
          mode="contained"
          onPress={handleButtonPress}
        >
          Add Expense
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 12,
  },
  textfield: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
});

export default AddExpense;
