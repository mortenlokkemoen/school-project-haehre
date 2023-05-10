import { useContext, useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { GlobalStateContext } from "../App/screens/GlobalState";

export default function RadioButtonImage(props: {
  navigation: any;
  route: any;
  nameProp: any;
}) {
  const [noSelected, setNoSelected] = useState(false);
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const { navigation, route, nameProp } = props;
  const { employeeData, reportData, setReportData } =
    useContext(GlobalStateContext);

  useEffect(() => {
    navigation.addListener("focus", () => {
      setNoSelected(false);
      setIsChecked(false);
      setIsNoChecked(false);
    });
  }, [navigation]);

  const handlePress = (newValue: string) => {
    setValue(newValue);
    if (newValue === "yes") {
      setIsChecked(true);
      setIsNoChecked(false);
      navigation.navigate("ImageScreen");
    } else if (newValue === "no") {
      setIsNoChecked(true);
      setIsChecked(false);
      setNoSelected(true);
    }
  };

  const handleDataInput = () => {
    if (reportData.projectDescription === "") {
      Alert.alert("Skriv inn beskrivelsen!");
    } else {
      handleSendPress;
    }
  };
  const handleSendPress = async () => {
    try {
      const response = await fetch(
        "https://school-project-hahre.herokuapp.com/reports",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reportType: reportData.reportType,
            dateOfEvent: reportData.dateOfEvent,
            submittedTo: reportData.submittedTo,
            submittedBy: reportData.submittedBy,
            immediateActionTaken: reportData.immediateActionTaken,
            imageAddress: "",
            projectId: reportData.projectId,
            projectLocationLongitude: "10.234523",
            projectLocationLatitude: "45.565656",
            projectDescription: reportData.projectDescription,
          }),
        }
      );
      let result = await response.json();
      console.log("response", result);
      if (response.status === 200) {
        Alert.alert("Din rapport har blitt sendt!");
      }
    } catch (error) {
      Alert.alert("Det opsto et feil!");
      console.log("catch error error", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.radioButtonsContainer}>
        <Pressable
          style={[styles.roundButton, isChecked && styles.roundButtonChecked]}
          onPress={() => handlePress("yes")}
        />
        <Text style={styles.radioButtonText}>Ja</Text>
        <Pressable
          style={[styles.roundButton, isNoChecked && styles.roundButtonChecked]}
          onPress={() => handlePress("no")}
        />
        <Text style={styles.radioButtonText}>Nei</Text>
      </View>
      {noSelected ? (
        <PrimaryButton onPress={handleDataInput}>
          <Text>Send</Text>
        </PrimaryButton>
      ) : null}
      <View style={styles.horizontalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  roundButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#003d6a",
  },
  roundButtonChecked: {
    backgroundColor: "#003d6a",
    borderRadius: 50,
  },
  radioButtonText: {
    margin: 15,
  },
  buttonOuterContainer: {
    borderRadius: 5,
    width: "100%",
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#003d6a",
    width: "100%",
    marginVertical: 10,
  },
});
