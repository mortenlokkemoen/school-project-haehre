import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../src/theme";
import { TitleProps } from "../src/library/TitleProps";

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
    fontSize: 26,
    color: colors.primary,
    textAlign: "center",
    padding: 12,
    fontFamily: fonts.semiBold,
  },
});

export default Title;
