import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import { TriangleDown } from "../../components/TriangleDown";
import Title from "../../components/Title";
import { colors } from "../../src/theme";
import Map from "../../components/Map";
import { useState, useEffect } from "react";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;
  // const [reports, setReports] = useState<Report[]>([]);

  // const employeeId = "navn på ansatt";

  // useEffect(() => {
  //   fetch(`https://school-project-hahre.herokuapp.com/reports/${employeeId}`)
  //     .then((response) => response.json())
  //     .then((data) => setReports(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <View style={styles.container}>
      <TriangleDown />
      <Title>navn her</Title>
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
});
