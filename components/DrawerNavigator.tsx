import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { DrawerContent, createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import routes from '../src/config/routes';
import { Ionicons } from "@expo/vector-icons";


const Drawer = createDrawerNavigator();

const DrawerNavigator = ( navigation: any ) => {

    const excludedRoutes = ["Login", "Register", "ForgotPassword", "ImageScreen"];

    const filteredRoutes = routes.filter(
        (route) => !excludedRoutes.includes(route.name)
    );

    return (
        <Drawer.Navigator initialRouteName={'HomeScreen'}
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                    headerStyle: { backgroundColor: "#003D6A", height: 120,},
                    headerTintColor: "#003d6a",
                    drawerContentContainerStyle: { backgroundColor: "#DCE0E6"},
                    drawerPosition: "right",
                    headerRight: () => (
                        <DrawerToggleButton tintColor="white"/>
                    ),
                    headerTitle: () => (
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/Logo_Haehre_HiRes.png')} 
                            style={styles.logo}
                            />
                        </View>
                    ),                        
            }}
            backBehavior="history"
            >
           {filteredRoutes.map((r, i) => (
          <Drawer.Screen key={i} name={r.name}>
            {(props) => <r.component nameProp={r.name} {...props} />}
            </Drawer.Screen>
        ))}
        </Drawer.Navigator>
    )

}

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
