import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Icon, IconButton } from "react-native-paper";

const ExpenseView = ({ expense }) => {
  return (
    <Card style={{ margin: 10 }}>
      <View style= {{paddingVertical: 12}}>
        <Card.Content>
          <Text>Expense Details</Text>
          <Text>Expense ID: {expense.id}</Text>
          <Text>Title: {expense.title}</Text>
          <Text>
            Amount: {expense.amount} {expense.currency}
          </Text>
          <Text>Date: {expense.date.toLocaleDateString()}</Text>
          <Text>Notes: {expense.notes}</Text>
        </Card.Content>
      </View>
    </Card>
  );
};

export default ExpenseView;

const styles = StyleSheet.create({});
