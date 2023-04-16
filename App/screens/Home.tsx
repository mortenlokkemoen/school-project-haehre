import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import { TriangleDown } from "../../components/TriangleDown";
import Title from "../../components/Title";
import colors from "../../src/constants/colors";
import Map from "../../components/Map";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;
  //console.log({navigation, route, nameProp})
  return (
    <>
      <View style={styles.container}>
        <TriangleDown />
        <Title>Hei "navn"</Title>
        <PrimaryButton onPress={() => navigation.navigate("RegisterEvents")}>
          <Text>Registrer hendelse</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => navigation.navigate("Checklist")}>
          <Text>Sjekklister</Text>
        </PrimaryButton>
        <Text style={styles.dateStyle}>{Date()}</Text>
        <Map />
      </View>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dce0e6",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "colors.primary",
    marginBottom: 50,
  },
  dateStyle: {
    color: "colors.primary",
    fontWeight: "600",
    fontSize: 16,
  },
});
