import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from '../src/config/routes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator initialRouteName={'HomeScreen'}>
           {routes.map((r, i) => (
          <Drawer.Screen key={i} name={r.name}>
            {(props) => <r.component nameProp={r.name} {...props} />}
            </Drawer.Screen>
        ))}
        </Drawer.Navigator>
    )

}

export default DrawerNavigator;