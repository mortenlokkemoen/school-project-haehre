import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NavigationOptions from "./navigationOption";
import Login from "./";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={NavigationOptions}
    >
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
