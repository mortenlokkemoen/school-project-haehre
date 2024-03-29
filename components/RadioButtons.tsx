import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts } from "../src/theme";
import { GlobalStateContext } from "../App/screens/GlobalState";

export default function RadioButtons() {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const navigation = useNavigation();
  const { reportData, setReportData } = useContext(GlobalStateContext);
  useEffect(() => {
    navigation.addListener("focus", () => {
      setIsChecked(false);
      setIsNoChecked(false);
      setValue("");
      setTextInputValue("");
    });
  });
  const handlePress = (newValue: string) => {
    setValue(newValue);
    setIsChecked(newValue === "yes");
    setIsNoChecked(newValue === "no");
  };

  const handleTextInput = (text: string) => {
    setTextInputValue(text);
    setReportData({ ...reportData, immediateActionTaken: text });
  };

  return (
    <>
      <View style={styles.radioButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: !isChecked ? "white" : colors.primary },
          ]}
          onPress={() => handlePress("yes")}
        >
          {isChecked && <View style={styles.radioButtonChecked} />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Ja</Text>

        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: !isNoChecked ? "white" : colors.primary },
          ]}
          onPress={() => handlePress("no")}
        >
          {isNoChecked && <View style={styles.radioButtonChecked} />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Nei</Text>
      </View>
      {value === "yes" && (
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextInput}
          value={textInputValue}
          placeholder="Skriv inn strakstiltak"
        />
      )}
      <View style={styles.horizontalLine} />
    </>
  );
}

const styles = StyleSheet.create({
  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonText: {
    margin: 15,
  },
  radioButton: {
    borderWidth: 2,

    borderColor: colors.primary,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonChecked: {
    borderRadius: 50,
  },
  textInput: {
    fontFamily: fonts.semiBold,
    backgroundColor: "white",
    width: "80%",
    height: 100,
    padding: 10,
    textAlignVertical: "top",
  },
  horizontalLine: {
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
});
