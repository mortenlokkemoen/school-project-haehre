import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Time to get started with our project at Hæhre!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
