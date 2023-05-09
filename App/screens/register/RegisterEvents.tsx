import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/Title";
import { TriangleDown } from "../../../components/TriangleDown";
import { colors, fonts } from "../../../src/theme";
import { GlobalStateContext } from "../GlobalState";

const RegisterEventScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { employeeData } = useContext(GlobalStateContext);
  const { navigation, route, nameProp } = props;
  return (
    <View>
      <TriangleDown />
      <View style={styles.textContainer}>
        <Title>Hei {employeeData && employeeData.employee_Name}</Title>
        <Text style={styles.paragraph}>Registrer hendelser og avvik</Text>
      </View>
      <View style={styles.buttonsContainer}>
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
  );
};

export default RegisterEventScreen;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  paragraph: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 25,
    fontFamily: fonts.regular,
  },
  buttonsContainer: {
    width: "95%",
  },
});
