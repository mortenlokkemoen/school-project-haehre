import { View, StyleSheet, Text } from "react-native";

function RegisterMaskinerOgUtstyrScreen(): JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Text>MASKINER OG UTSTYR</Text>
        </View>
      </View>
    </View>
  );
}

export default RegisterMaskinerOgUtstyrScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 100,
    // marginHorizontal: 24,
    // padding: 16,
  },

  buttonsContainer: {
    // flexDirection: "row",
  },
  buttonContainer: {
    // flex: 1,
  },
});
