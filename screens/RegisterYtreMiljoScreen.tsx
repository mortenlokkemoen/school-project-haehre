import { View, StyleSheet, Text } from "react-native";

function RegisterYtreMiljoScreen(): JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Text>YTRE MILJØ</Text>
        </View>
      </View>
    </View>
  );
}

export default RegisterYtreMiljoScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
