import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Barlow_600SemiBold } from "@expo-google-fonts/barlow";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "140%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003d6a",
    textAlign: "center",
    padding: 12,
    fontFamily: "Barlow_600SemiBold",
  },
});

export default Title;
