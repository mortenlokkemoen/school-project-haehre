import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  DrawerContent,
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import routes from "../src/config/routes";

import BackButton from "../components/BackButton";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const excludedRoutes = [
    "Checklist",
    "Login",
    "ImageScreen",
    "RegisterEnvironment",
    "RegisterHms",
    "RegMachAndEquip",
    "RegisterOther",
    "RegisterQuality",
    "EventDetails",
  ];

  return (
    <Drawer.Navigator
      initialRouteName={"Hjem"}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#003D6A", height: 120 },
        headerTintColor: "#003d6a",
        drawerContentContainerStyle: { backgroundColor: "#DCE0E6" },
        drawerPosition: "right",
        headerLeft: () => <BackButton />,
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image
            source={require("../assets/hæhrelogo-hvit.png")}
            style={styles.logo}
          />
        ),
        drawerItemStyle: { opacity: 1 },
        drawerLabelStyle: { fontWeight: "bold", fontSize: 16 },
      })}
      backBehavior="history"
    >
      {routes.map((r, i) => (
        <Drawer.Screen
          key={i}
          name={r.name}
          options={{
            drawerItemStyle: excludedRoutes.includes(r.name)
              ? { display: "none" }
              : { opacity: 1 },
          }}
        >
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
  // logoContainer: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
