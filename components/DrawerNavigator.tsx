import React, { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  DrawerContent,
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import routes from "../src/config/routes";
import { useFonts, Barlow_600SemiBold } from "@expo-google-fonts/barlow";
import * as SplashScreen from "expo-splash-screen";
import { HeaderBackButton } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();

const DrawerNavigator = () => {
  const excludedRoutes = [""];

  const [fontsLoaded] = useFonts({
    Barlow_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const filteredRoutes = routes.filter(
    (route) => !excludedRoutes.includes(route.name)
  );

  return (
    <Drawer.Navigator
      initialRouteName={"HomeScreen"}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({ route, navigation }) => ({
        headerShown: route.name !== "Login",
        headerStyle: { backgroundColor: "#003D6A", height: 120 },
        headerTintColor: "#003d6a",
        drawerContentContainerStyle: { backgroundColor: "#DCE0E6" },
        drawerPosition: "right",
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerTitle: () => (
          <View style={styles.logoContainer} onLayout={onLayoutRootView}>
            <Image
              source={require("../assets/hæhrelogo-hvit.png")}
              style={styles.logo}
            />
          </View>
        ),
        headerLeft: (props) => (
          <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
        ),
      })}
      backBehavior="history"
    >
      {filteredRoutes.map((r, i) => (
        <Drawer.Screen key={i} name={r.name}>
          {(props) => {
            const route = {
              ...props.route,
              params: {
                event: props.route?.params || undefined,
              },
            };
            return (
              <r.component
                nameProp={r.name}
                navigation={props.navigation}
                route={route}
              />
            );
          }}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

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
