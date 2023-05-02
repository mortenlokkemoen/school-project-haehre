import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  BarlowSemiCondensed_300Light,
  BarlowSemiCondensed_400Regular,
  BarlowSemiCondensed_600SemiBold,
} from "@expo-google-fonts/barlow-semi-condensed";
import DrawerNavigator from "./components/DrawerNavigator";
import { fonts } from "./src/theme";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  let [loadedFonts] = useFonts({
    [fonts.light]: BarlowSemiCondensed_300Light,
    [fonts.regular]: BarlowSemiCondensed_400Regular,
    [fonts.semiBold]: BarlowSemiCondensed_600SemiBold,
  });

  if (!fontsLoaded) {
    if (loadedFonts) {
      setFontsLoaded(true);
    } else {
      return null;
    }
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
