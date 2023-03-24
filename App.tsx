// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RegisterEventsScreen from "./screens/RegisterEventsScreen";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <RegisterEventsScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
