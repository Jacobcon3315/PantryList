import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GroceriesListPage from "./src/GroceriesList";
import PantryListPage from "./src/PantryList";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Groceries" component={GroceriesListPage} />
      <Tab.Screen name="Pantry" component={PantryListPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
