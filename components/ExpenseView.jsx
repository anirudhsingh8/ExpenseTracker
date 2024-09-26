import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const ExpenseView = ({ expense }) => {
  return (
    <Card style={styles.card}>
    <Card.Content>
      <View style={styles.contentContainer}>
        <Text style={styles.detailText}>Title: {expense.title}</Text>
        <Text style={styles.detailText}>
          Amount: {expense.amount} {expense.currency}
        </Text>
        <Text style={styles.detailText}>
          Date: {expense.date.toLocaleDateString()}
        </Text>
        <Text style={styles.detailText}>Notes: {expense.notes}</Text>
      </View>
    </Card.Content>
  </Card>
  );
};

export default ExpenseView;

const styles = StyleSheet.create({
  card: {
    margin: 12,
    borderRadius: 10,
    elevation: 4,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});