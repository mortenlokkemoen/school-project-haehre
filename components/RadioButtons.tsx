import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RadioButtons() {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  const handlePress = (newValue: string) => {
    setValue(newValue);
    setIsChecked(newValue === "yes");
    setIsNoChecked(newValue === "no");
  };

  const handleTextInput = (text: string) => {
    setTextInputValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.radioButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: !isChecked ? "white" : "#003d6a" },
          ]}
          onPress={() => handlePress("yes")}
        >
          {isChecked && <View style={styles.radioButtonChecked} />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Ja</Text>

        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: !isNoChecked ? "white" : "#003d6a" },
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
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
    borderColor: "#003d6a",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonChecked: {
    backgroundColor: "#003d6a",
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: "white",
    width: "150%",
    height: 100,
    padding: 15,
  },
});