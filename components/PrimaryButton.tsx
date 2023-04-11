import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

function PrimaryButton({ children, onPress }: PrimaryButtonProps): JSX.Element {
  const getButtonInnerContainerStyle = ({
    pressed,
  }: PressableStateCallbackType): ViewStyle => {
    return pressed
      ? ([styles.buttonInnerContainer, styles.pressed] as ViewStyle)
      : styles.buttonInnerContainer;
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={getButtonInnerContainerStyle}
        android_ripple={{ color: "#003D6A" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 6,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#003D6A",
    height: 80,
    paddingVertical: 30,
    // paddingHorizontal: 16,
    // elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "#64c4ae",
  },
});