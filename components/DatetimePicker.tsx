import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Pressable,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatetimePicker: React.FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };
  const getButtonInnerContainerStyle = ({
    pressed,
  }: PressableStateCallbackType): ViewStyle => {
    return pressed
      ? ([styles.buttonInnerContainer, styles.pressed] as ViewStyle)
      : styles.buttonInnerContainer;
  };

  return (
    <View>
      <Pressable
        style={getButtonInnerContainerStyle}
        android_ripple={{ color: "#003D6A" }}
        onPress={showDatePicker}
      >
        <Text style={styles.buttonText}>Hendelsesdato</Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {selectedDate && (
        <Text>You selected: {selectedDate.toLocaleDateString()}</Text>
      )}
    </View>
  );
};

export default DatetimePicker;
const styles = StyleSheet.create({
  datePickerButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonInnerContainer: {
    textAlign: "center",
    alignItems: "center",
    width: "85%",
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#003d6a",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  pressed: {
    backgroundColor: "#64c4ae",
  },
});
