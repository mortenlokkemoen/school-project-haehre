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
        android_ripple={{ color: "#640233" }}
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
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#003D6A",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
