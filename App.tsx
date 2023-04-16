import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./components/DrawerNavigator";
import { View } from 'react-native';

const Stack = createNativeStackNavigator()


export default function App(): JSX.Element {


  {
    /* isAuth comes here */
  }
  return (
    <View>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    </View>
  );
} 
