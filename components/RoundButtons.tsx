import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

type RoundButtonProps = {
  onPress: () => void;
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  label,
  backgroundColor = "#fff",
  borderColor = "#003d6a",
  textColor = "#003d6a",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.roundButtons, { backgroundColor, borderColor }]}
    >
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, { color: textColor }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;

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
  labelContainer: {
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
