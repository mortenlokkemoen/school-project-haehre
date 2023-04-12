import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/Title";

const RegisterEventScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route, nameProp } = props;
  console.log({ navigation, route, nameProp });
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textContainer}>
        <Title>Hei Morten</Title>
        <Text style={styles.paragraph}>Registrer hendelser og avvik</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => navigation.navigate("RegisterHms")}>
            <Text>HMS</Text>
          </PrimaryButton>
          <PrimaryButton
            onPress={() => navigation.navigate("RegisterEnvironment")}
          >
            <Text>YTRE MILJØ</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => navigation.navigate("RegisterQuality")}>
            <Text>KVALITET</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => navigation.navigate("RegMachAndEquip")}>
            <Text>MASKINER OG UTSTYR</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => navigation.navigate("RegisterOther")}>
            <Text>ANNET</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default RegisterEventScreen;

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

  buttonsContainer: {
    // flexDirection: "row",
  },
  buttonContainer: {
    // flex: 1,
  },
});
