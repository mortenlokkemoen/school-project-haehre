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
      style={[styles.buttonContainer, { backgroundColor, borderColor }]}
    >
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, { color: textColor }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 80,
    alignItems: "center",
  },
  labelContainer: {
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
