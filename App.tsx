import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./components/DrawerNavigator";
import LoginScreen from "./App/screens/auth/Login";
import { fonts } from "./src/theme";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { GlobalStateProvider } from "./App/screens/GlobalState";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function preventAutoHide() {
      await SplashScreen.preventAutoHideAsync();
    }

    preventAutoHide();
  }, []);

  useEffect(() => {
    async function loadFonts() {
      await Promise.all([
        Font.loadAsync({
          [fonts.regular]: require("./assets/fonts/BarlowSemiCondensed-Regular.ttf"),
          [fonts.semiBold]: require("./assets/fonts/BarlowSemiCondensed-Bold.ttf"),
          [fonts.light]: require("./assets/fonts/BarlowSemiCondensed-Light.ttf"),
        }),
      ]);

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  const [dataLoaded] = useFonts({
    [fonts.regular]: require("./assets/fonts/BarlowSemiCondensed-Regular.ttf"),
    [fonts.semiBold]: require("./assets/fonts/BarlowSemiCondensed-Bold.ttf"),
    [fonts.light]: require("./assets/fonts/BarlowSemiCondensed-Light.ttf"),
  });

  if (!dataLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
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
