import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
  },
});

export default BackButton;
