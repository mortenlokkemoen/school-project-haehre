import { View, StyleSheet, Text, TextInput } from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import RadioButtons from "../../../components/RadioButtons";
import DatetimePicker from "../../../components/DatetimePicker";
import Title from "../../../components/Title";

const RegisterEnvironmentScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route, nameProp } = props;
  console.log({ navigation, route, nameProp });

  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Title>Dato kommer her</Title>
          <Text style={styles.paragraph}>YTRE MILJØ</Text>
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
      <View style={styles.radioButtonsContainer}>
        <RadioButtons />
      </View>
    </View>
  );
};

export default RegisterEnvironmentScreen;

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
