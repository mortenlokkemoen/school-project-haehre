import React, { useState } from "react";
import { Button, Text, View } from "react-native";
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

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
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
