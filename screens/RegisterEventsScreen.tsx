import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface Props {
  navigation: any;
}

function RegisterEventsScreen({ navigation }: Props): JSX.Element {
  function pressHandler(screenName: string) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => pressHandler("RegisterHms")}>
            <Text>HMS</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterYtreMiljo")}>
            <Text>YTRE MILJØ</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterKvalitet")}>
            <Text>KVALITET</Text>
          </PrimaryButton>
          <PrimaryButton
            onPress={() => pressHandler("RegisterMaskinerOgUtstyr")}
          >
            <Text>MASKINER OG UTSTYR</Text>
          </PrimaryButton>
          <PrimaryButton onPress={() => pressHandler("RegisterAnnet")}>
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
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
