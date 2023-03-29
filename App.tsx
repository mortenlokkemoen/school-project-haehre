import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RegisterEventsScreen from "./screens/RegisterEventsScreen";
import RegisterMaskinerOgUtstyrScreen from "./screens/RegisterMaskinerOgUtstyrScreen";
import RegisterHmsScreen from "./screens/RegisterHmsScreen";
import RegisterYtreMiljoScreen from "./screens/RegisterYtreMiljoScreen";
import RegisterRegisterKvalitetScreen from "./screens/RegisterKvalitetScreen";
import RegisterAnnetScreen from "./screens/RegisterAnnetScreen";
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
          />
          <Stack.Screen name="RegisterHms" component={RegisterHmsScreen} />
          <Stack.Screen
            name="RegisterYtreMiljo"
            component={RegisterYtreMiljoScreen}
          />
          <Stack.Screen
            name="RegisterKvalitet"
            component={RegisterRegisterKvalitetScreen}
          />
          <Stack.Screen
            name="RegisterMaskinerOgUtstyr"
            component={RegisterMaskinerOgUtstyrScreen}
          />
          <Stack.Screen name="RegisterAnnet" component={RegisterAnnetScreen} />
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
