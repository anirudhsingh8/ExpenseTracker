import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import AddExpense from "./screens/AddExpense";
import Home from "./screens/Home";
import { ExpensesProvider } from "./providers/ExpenseProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <ExpensesProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddExpense}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      </ExpensesProvider>
    </>
  );
}