import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/Title";
import { TriangleDown } from "../../../components/TriangleDown";
import { fonts } from "../../../src/theme";
import { GlobalStateContext } from "../GlobalState";

const RegisterEventScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { employeeData, setReportData } =
    useContext(GlobalStateContext);
  const { navigation } = props;
  const [reportText, setReportText] = useState("");

  const handlePress = (text: string) => {
    let submittedBy = employeeData.employee_Id;
    let submittedTo = employeeData.current_Manager;
    let projectId = employeeData.current_Project;
    setReportText(text);
    setReportData({
      reportType: text,
      submittedBy,
      submittedTo,
      projectId,
    });
    navigation.navigate("Register");
  };

  return (
    <View>
      <TriangleDown />
      <View style={styles.textContainer}>
        <Title>Hei {employeeData && employeeData.employee_Name}</Title>
        <Text style={styles.paragraph}>Registrer hendelser og avvik</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => handlePress("Hms")}>
          <Text>HMS</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => handlePress("Ytre Miljø")}>
          <Text>YTRE MILJØ</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => handlePress("Kvalitet")}>
          <Text>KVALITET</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => handlePress("Maskin og Utstyr")}>
          <Text>MASKINER OG UTSTYR</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => handlePress("Annet")}>
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
