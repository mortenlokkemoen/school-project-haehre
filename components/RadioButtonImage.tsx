import { useEffect, useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function RadioButtonImage(props: {
  navigation: any;
  route: any;
  nameProp: any;
}) {
  const [noSelected, setNoSelected] = useState(false);
  const { navigation, route, nameProp } = props;

  //not resseting the radio buttons
  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("useeffect called");
      setNoSelected(false);
    });
  }, [navigation]);
  const showSendButton = () => {
    setNoSelected(true);
  };
  return (
    <View>
      <View style={styles.radioButtonsContainer}>
        <Pressable
          style={styles.roundButton}
          onPress={() => navigation.navigate("ImageScreen")}
        />
        <Text style={styles.radioButtonText}>Ja</Text>
        <Pressable
          style={styles.roundButton}
          onPress={() => showSendButton()}
        />
        <Text style={styles.radioButtonText}>Nei</Text>
      </View>
      <View style={styles.buttonOuterContainer}>
        {noSelected ? (
          <PrimaryButton onPress={() => alert("report has been sent")}>
            <Text>Send</Text>
          </PrimaryButton>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  radioButtonText: {
    margin: 15,
  },
  buttonOuterContainer: {
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});
