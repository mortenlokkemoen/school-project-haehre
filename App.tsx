
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './src/config/routes';

const Stack = createNativeStackNavigator()

export default function App(): JSX.Element {
{/* isAuth comes here */}
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName={'Login'}>
        {routes.map((r, i) => (
          <Stack.Screen key={i} name={r.name}>
            {(props) => <r.component nameProp={r.name} {...props} />}
            </Stack.Screen>
        ))}
     </Stack.Navigator>
    </NavigationContainer>
  );
}

