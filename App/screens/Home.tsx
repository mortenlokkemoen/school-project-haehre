import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import { TriangleDown } from "../../components/TriangleDown";
import Title from "../../components/Title";
import { colors } from "../../src/theme";
import Map from "../../components/Map";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;
  return (
    <View style={styles.container}>
      <TriangleDown />
      <Title>Hei "navn"</Title>
      <PrimaryButton onPress={() => navigation.navigate("Registrer Hendelse")}>
        <Text>Registrer hendelse</Text>
      </PrimaryButton>
      <PrimaryButton onPress={() => navigation.navigate("Checklist")}>
        <Text>Sjekklister</Text>
      </PrimaryButton>
      <Map />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },

  // dateStyle: {
  //   color: "#003d6a",
  //   fontWeight: "600",
  //   fontSize: 16,
  // },
});
