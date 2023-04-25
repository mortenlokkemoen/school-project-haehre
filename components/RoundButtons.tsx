import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";

type RoundButtonProps = {
  onPress: () => void;
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  showSendButton?: boolean;
};

const RoundButtons: React.FC<RoundButtonProps> = ({ props }) => {
  const [selectedYes, setSelectedYes] = useState(false);
  const [selectedNo, setSelectedNo] = useState(false);
  const { navigation } = props;
  const handleNoPress = () => {
    setSelectedYes(false);
    setSelectedNo(true);
    setShowSendButton(true);
  };
  const handleYesPress = () => {
    setSelectedYes(true);
    setSelectedNo(false);
    navigation.navigate("ImageScreen");
  };
  return (
    <View style={styles.radioButtonsContainer}>
      <Pressable
        onPress={handleYesPress}
        label=""
        backgroundColor={selectedYes ? "#003d6a" : "#ffffff"}
        borderColor="#003d6a"
        textColor={selectedYes ? "#ffffff" : "#003d6a"}
      />
      <Text>Ja</Text>
      <Pressable
        onPress={handleNoPress}
        label=""
        backgroundColor={selectedNo ? "#003d6a" : "#ffffff"}
        borderColor="#003d6a"
        textColor={selectedNo ? "#ffffff" : "#003d6a"}
        showSendButton={true}
      />
      <Text>Nei</Text>
    </View>
    // <TouchableOpacity
    //   onPress={onPress}
    //   style={[styles.roundButtons, { backgroundColor, borderColor }]}
    // >
    //   <View style={styles.labelContainer}>
    //     <Text style={[styles.labelText, { color: textColor }]}>{label}</Text>
    //   </View>
    // </TouchableOpacity>
  );
};

export default RoundButtons;

const styles = StyleSheet.create({
  roundButtons: {
    borderWidth: 2,
    borderColor: "#003d6a",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  labelContainer: {
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
