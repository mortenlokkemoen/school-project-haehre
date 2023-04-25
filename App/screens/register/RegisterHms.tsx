import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import RadioButtons from "../../../components/RadioButtons";
import DatetimePicker from "../../../components/DatetimePicker";
import Title from "../../../components/Title";
import { TriangleDown } from "../../../components/TriangleDown";
import PrimaryButton from "../../../components/PrimaryButton";
import RoundButtons from "../../../components/RoundButtons";

type RegisterHmsScreenProps = IStackScreenProps & {
  nameProp: string;
};

const RegisterHmsScreen: React.FC<RegisterHmsScreenProps> = (props) => {
  const [selectedYes, setSelectedYes] = useState(false);
  const [selectedNo, setSelectedNo] = useState(false);
  const [showSendButton, setShowSendButton] = useState(false);
  const { navigation, route, nameProp } = props;

  const handleYesPress = () => {
    setSelectedYes(true);
    setSelectedNo(false);
    navigation.navigate("ImageScreen");
  };

  const handleNoPress = () => {
    setSelectedYes(false);
    setSelectedNo(true);
    setShowSendButton(true);
  };

  const resetButtons = () => {
    setSelectedYes(false);
    setSelectedNo(false);
    setShowSendButton(false);
  };

  return (
    <ScrollView style={styles.container}>
      <TriangleDown />
      <View style={styles.maincontainer}>
        <Text style={styles.dateStyle}>{Date()}</Text>
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

          <View style={styles.radioButtonsContainer}>
            <RoundButtons
              onPress={handleYesPress}
              label=""
              backgroundColor={selectedYes ? "#003d6a" : "#ffffff"}
              borderColor="#003d6a"
              textColor={selectedYes ? "#ffffff" : "#003d6a"}
            />
            <Text>Ja</Text>
            <RoundButtons
              onPress={handleNoPress}
              label=""
              backgroundColor={selectedNo ? "#003d6a" : "#ffffff"}
              borderColor="#003d6a"
              textColor={selectedNo ? "#ffffff" : "#003d6a"}
            />
            <Text>Nei</Text>
          </View>

          {showSendButton ? (
            <PrimaryButton
              onPress={() => {
                alert("report has been sent");
                resetButtons();
              }}
            >
              <Text>Send</Text>
            </PrimaryButton>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterHmsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecedee",
  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecedee",
    height: "auto",
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
    height: 100,
    padding: 15,
  },

  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  dateStyle: {
    fontSize: 16,
  },
});