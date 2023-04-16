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
    backgroundColor: "#003d6a",
  },
  buttonText: {
    fontFamily:'Barlow_600SemiBold',
    color: "#ffff",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  pressed: {
    backgroundColor: "#64c4ae",
  },
});
