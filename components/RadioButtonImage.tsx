import { useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

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

  //not resseting the radio buttons
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
  // const showSendButton = () => {
  //   setNoSelected(true);
  // };
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
        <PrimaryButton onPress={() => alert("report has been sent")}>
          <Text>Send</Text>
        </PrimaryButton>
      ) : null}
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
    // margin: 10,
    // alignItems: "center",
    // overflow: "hidden",
    width: "100%",
  },
});
