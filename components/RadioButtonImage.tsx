import { useContext, useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { colors } from "../src/theme";
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
  const { navigation } = props;
  const { reportData, setReportData } = useContext(GlobalStateContext);

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
      if (reportData.projectDescription === "") {
        Alert.alert("Skriv inn beskrivelsen!");
      } else {
        navigation.navigate("ImageScreen");
      }
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
      handleSendPress();
    }
  };

  // SENDGRID FUNCTION
  // To avoid api error from or to email
  // needs to be valid, in production
  // you would select to: json.stringify(useremail)
  const sendEmail = async () => {
    try {
      const response = await fetch(
        "https://school-project-hahre.herokuapp.com/reports/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "Haehrerepport@gmail.com",
            from: "Haehrerepport@gmail.com",
            subject: "Report Data",
            body: "This is a test",
            text: JSON.stringify(reportData),
          }),
        }
      );
      let result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully!");
      }
    } catch (error) {
      Alert.alert("Something went wrong!");
      console.log("Error sending email:", error);
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
            projectLocationLongitude: reportData.projectLocationLongitude,
            projectLocationLatitude: reportData.projectLocationLatitude,
            projectDescription: reportData.projectDescription,
          }),
        }
      );
      let result = await response.json();
      if (response.status === 200) {
        Alert.alert("Din rapport har blitt sendt!");
        navigation.navigate("Hjem");
        sendEmail();
      }
    } catch (error) {
      Alert.alert("Det opsto et feil!");
      console.log("error creating raport", error);
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
    borderColor: colors.primary,
  },
  roundButtonChecked: {
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  radioButtonText: {
    margin: 15,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
});
