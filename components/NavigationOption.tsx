import React, { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import BackButton from "./BackButton";
import * as SplashScreen from "expo-splash-screen";

const NavigationOptions = () => {
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return {
    headerShown: true,
    headerStyle: { backgroundColor: "#003D6A", height: 120 },
    headerTintColor: "#003d6a",
    drawerContentContainerStyle: { backgroundColor: "#DCE0E6" },
    drawerPosition: "right",
    headerLeft: () => <BackButton />,
    headerRight: () => <DrawerToggleButton tintColor="white" />,
    headerTitle: () => (
      <View style={styles.logoContainer} onLayout={onLayoutRootView}>
        <Image
          source={require("../assets/hæhrelogo-hvit.png")}
          style={styles.logo}
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default NavigationOptions;
