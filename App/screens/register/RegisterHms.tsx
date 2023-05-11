import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import RadioButtons from "../../../components/RadioButtons";
import DatetimePicker from "../../../components/DatetimePicker";
import { TriangleDown } from "../../../components/TriangleDown";
import RadioButtonImage from "../../../components/RadioButtonImage";
import { useContext, useEffect, useState } from "react";
import Title from "../../../components/Title";
import { colors, fonts } from "../../../src/theme";
import { GlobalStateContext } from "../GlobalState";

const RegisterHmsScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { employeeData, reportData, setReportData } =
    useContext(GlobalStateContext);
  const { navigation, route, nameProp } = props;
  const [descriptionText, setDescriptionText] = useState("");
  console.log("reportData", reportData);
  useEffect(() => {
    navigation.addListener("focus", () => {
      setDescriptionText("");
      setReportData({
        ...reportData,
        projectDescription: descriptionText,
        dateOfEvent: new Date().toLocaleDateString("nb-NO", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        immediateActionTaken: "nei",
      });
    });
  }, [navigation]);

  const handleTextInput = (text: string) => {
    setDescriptionText(text);
    setReportData({ ...reportData, projectDescription: text });
  };
  return (
    <ScrollView style={styles.container}>
      <TriangleDown />
      <View style={styles.maincontainer}>
        <Title>HMS hendelse</Title>
        <TextInput
          style={styles.textinputContainer}
          placeholder="Beskrive Hendelse"
          multiline
          numberOfLines={4}
          onChangeText={handleTextInput}
          value={descriptionText}
        />
        <DatetimePicker />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.paragraph}>Er det gjennomført strakstiltak?</Text>
        <RadioButtons />
        <Text style={styles.paragraph}>Vil du ta bilde?</Text>
        <RadioButtonImage
          navigation={navigation}
          route={route}
          nameProp={nameProp}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterHmsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    height: "auto",
  },
  paragraph: {
    fontSize: 20,
    fontFamily: fonts.regular,
    marginTop: 15,
    marginBottom: 25,
  },
  textinputContainer: {
    backgroundColor: "white",
    width: "80%",
    height: 100,
    marginBottom: 15,
    padding: 10,
    textAlignVertical: "top",
  },
});
