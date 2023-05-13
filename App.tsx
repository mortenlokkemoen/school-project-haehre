import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./components/DrawerNavigator";
import LoginScreen from "./App/screens/auth/Login";
import { fonts } from "./src/theme";

import { GlobalStateProvider } from "./App/screens/GlobalState";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    [fonts.regular]: require("./assets/fonts/BarlowSemiCondensed-Regular.ttf"),
    [fonts.semiBold]: require("./assets/fonts/BarlowSemiCondensed-Bold.ttf"),
    [fonts.light]: require("./assets/fonts/BarlowSemiCondensed-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen as React.ComponentType<any>}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}
