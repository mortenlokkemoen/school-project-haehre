import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import { GlobalStateContext } from "../App/screens/GlobalState";
import { colors } from "../src/theme";

const DatetimePicker: React.FC = () => {
  const { reportData, setReportData } = useContext(GlobalStateContext);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("focus", () => {
      setSelectedDate(new Date());
    });
  }, [navigation]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    setReportData({ ...reportData, dateOfEvent: formattedDate });
    hideDatePicker();
  };
  const formattedDate = selectedDate?.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
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
        android_ripple={{ color: colors.primary }}
        onPress={showDatePicker}
      >
        <Text style={styles.buttonText}>{formattedDate}</Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={{ textAlign: "center" }}>Hendelsesdato</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
};

export default DatetimePicker;
const styles = StyleSheet.create({
  buttonInnerContainer: {
    textAlign: "center",
    alignItems: "center",
    width: "85%",
    borderRadius: 5,
    padding: 20,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  pressed: {
    backgroundColor: colors.secondary,
  },
});
