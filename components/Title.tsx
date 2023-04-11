import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  },
});

export default Title;