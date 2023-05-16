import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";
import { colors, fonts } from "../src/theme";
import { PrimaryButtonProps } from "../src/library/PrimaryButtonProps";

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
        android_ripple={{ color: colors.primary }}
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
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
  buttonInnerContainer: {
    textAlign: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 5,
    padding: 20,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
  },
  pressed: {
    backgroundColor: colors.secondary,
  },
});
