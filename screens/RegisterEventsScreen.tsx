import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function RegisterEventsScreen(): JSX.Element {
  return (
    <View style={styles.inputContainer}>
      {/* <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>
            <Text>HMS</Text>
          </PrimaryButton>
          <PrimaryButton>
            <Text>YTRE MILJØ</Text>
          </PrimaryButton>
          <PrimaryButton>
            <Text>KVALITET</Text>
          </PrimaryButton>
          <PrimaryButton>
            <Text>MASKINER OG UTSTYR</Text>
          </PrimaryButton>
          <PrimaryButton>
            <Text>ANNET</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default RegisterEventsScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: "#4e0329",
    // borderRadius: 8,
    // elevation: 4,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  // numberInput: {
  //   height: 50,
  //   width: 50,
  //   fontSize: 32,
  //   borderBottomColor: "#ddb52f",
  //   borderBottomWidth: 2,
  //   color: "#ddb52f",
  //   marginVertical: 8,
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
