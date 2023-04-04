import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RegisterEventsScreen from "./screens/RegisterEventsScreen";
import RegisterMachinesAndEquipmentScreen from "./screens/RegisterMachinesAndEquipmentScreen";
import RegisterHmsScreen from "./screens/RegisterHmsScreen";
import RegisterEnvironmentalScreen from "./screens/RegisterEnvironmentalScreen";
import RegisterQualityScreen from "./screens/RegisterQualityScreen";
import RegisterOtherScreen from "./screens/RegisterOtherScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#003D6A" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#DCE0E6" },
          }}
        >
          <Stack.Screen
            name="RegisterEvents"
            component={RegisterEventsScreen}
            options={{ title: "Registrer hendelser" }}
          />
          <Stack.Screen
            name="RegisterHms"
            component={RegisterHmsScreen}
            options={{ title: "HMS" }}
          />
          <Stack.Screen
            name="RegisterEnvironmental"
            component={RegisterEnvironmentalScreen}
            options={{ title: "Ytre miljø" }}
          />
          <Stack.Screen
            name="RegisterQuality"
            component={RegisterQualityScreen}
            options={{ title: "Kvalitet" }}
          />
          <Stack.Screen
            name="RegisterMachinesAndEquipment"
            component={RegisterMachinesAndEquipmentScreen}
            options={{ title: "Maskiner og utstyr" }}
          />
          <Stack.Screen
            name="RegisterOther"
            component={RegisterOtherScreen}
            options={{ title: "Annet" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
