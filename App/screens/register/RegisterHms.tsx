import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import RadioButtons from "../../../components/RadioButtons";
import DatetimePicker from "../../../components/DatetimePicker";
import Title from "../../../components/Title";
import PrimaryButton from "../../../components/PrimaryButton";

const RegisterHmsScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route, nameProp } = props;
  console.log({ navigation, route, nameProp });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.maincontainer}>
        <Title>Dato kommer her</Title>
        <Text style={styles.paragraph}>HMS hendelse</Text>

        <TextInput
          style={styles.textinputContainer}
          placeholder="Beskrive Hendelse"
          multiline
          numberOfLines={4}
        />

        <DatetimePicker />

        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Er det gjennomført strakstiltak?</Text>
          <RadioButtons />
          <Text style={styles.paragraph}>Vil du ta bilde?</Text>
          <RadioButtons />
          <PrimaryButton onPress={() => alert("report has been sent")}>
            <Text>Send</Text>
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterHmsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecedee",
    height: "100%",
  },
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
    // width: "140%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textinputContainer: {
    backgroundColor: "white",
    width: "70%",
    height: 100,
    padding: 10,
    marginBottom: 15,
  },

  dateContainer: {
    backgroundColor: "white",
    // width: "100%",
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
