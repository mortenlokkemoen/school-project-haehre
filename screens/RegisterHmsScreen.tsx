import { View, StyleSheet, Text, TextInput } from "react-native";
import RadioButtons from "../components/RadioButtons";
import DatetimePicker from "../components/DatetimePicker";
import Title from "../components/title";

function RegisterHmsScreen(): JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Title>Dato kommer her</Title>
            <Text style={styles.paragraph}>HMS hendelse</Text>
            <View style={styles.textinputContainer}>
              <TextInput>Beskriv hendelse</TextInput>
            </View>
            <View style={styles.dateContainer}>
              <DatetimePicker />
            </View>
            <View style={styles.paragraphContainer}>
              <Text style={styles.paragraph}>
                Er det gjennomført strakstiltak?
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.radioButtonsContainer}>
        <RadioButtons />
      </View>
    </View>
  );
}

export default RegisterHmsScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 100,
    // marginHorizontal: 24,
    // padding: 16,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
  },

  paragraph: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 25,
  },
  paragraphContainer: {
    width: "140%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textinputContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 100,
    padding: 15,
  },

  dateContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 100,
    padding: 15,
  },

  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // marginTop: 10,
    // marginBottom: 25,
  },

  buttonsContainer: {
    // flexDirection: "row",
  },
  buttonContainer: {
    // flex: 1,
  },
});
