import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  DrawerContent,
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import routes from "../src/config/routes";
import BackButton from "../components/BackButton";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const excludedRoutes = [
    "Checklist",
    "Login",
    "ImageScreen",
    "Register",
    "EventDetails",
  ];

  return (
    <Drawer.Navigator
      initialRouteName={"Hjem"}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: "#003D6A", height: 120 },
        headerTintColor: "#003d6a",
        drawerContentContainerStyle: { backgroundColor: "#DCE0E6" },
        drawerPosition: "right",
        headerLeft: () => <BackButton />,
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerTitleAlign: "center",
        headerTitle: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Hjem")}>
            <Image
              source={require("../assets/hæhrelogo-hvit.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
