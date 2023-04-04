import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/title";

interface Props {
  navigation: any;
}

function RegisterEventsScreen({ navigation }: Props): JSX.Element {
  function pressHandler(screenName: string) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textContainer}>
        <Title>Hei Morten</Title>
        <Text style={styles.paragraph}>Registrer hendelser og avvik</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => pressHandler("RegisterHms")}>
            <Text>HMS</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterEnvironmental")}>
            <Text>YTRE MILJØ</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterQuality")}>
            <Text>KVALITET</Text>
          </PrimaryButton>
          <PrimaryButton
            onPress={() => pressHandler("RegisterMachinesAndEquipment")}
          >
            <Text>MASKINER OG UTSTYR</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterOther")}>
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
