
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './components/DrawerNavigator';


const Stack = createNativeStackNavigator()


export default function App(): JSX.Element {

{/* isAuth comes here */}
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
} 