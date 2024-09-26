import React, { createContext, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import Expense from "../models/Expense";

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const recentDayFactor = 7;
  const [recentExpenses, setRecentExpenses] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const now = new Date();
    const recentDate = new Date(now);
    recentDate.setDate(now.getDate() - recentDayFactor);

    setRecentExpenses(
      expenses.filter((expense) => new Date(expense.date) >= recentDate)
    );
  }, [expenses]);

  useEffect(() => {
    setExpenses([
      new Expense({
        id: 1,
        title: "Grocery Shopping",
        amount: 150,
        date: "2024-09-25",
        notes: "Bought vegetables and snacks",
      }),
    ]);
  }, []);

  function updateOrCreateExpenses(expense) {
    if (expense.id != null) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }
  }

  function updateExpense(updatedExpense) {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  }

  function addExpense(expense) {
    const newId = uuid.v4();
    expense.id = newId;
    setExpenses((old) => [expense, ...old]);
  }

  return (
    <ExpensesContext.Provider value={{ recentExpenses, expenses, updateOrCreateExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};
