import { StyleSheet, Text, View } from "react-native";
import Map from "../../components/Map";
import { GlobalStateContext } from "./GlobalState";
import Geolocation from "../../components/Geolocation";
import React, { useContext } from "react";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import { TriangleDown } from "../../components/TriangleDown";
import Title from "../../components/Title";
import { colors } from "../../src/theme";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { employeeData } = useContext(GlobalStateContext);
  return (
    <View style={styles.container}>
      <TriangleDown />
      <Title>Hei {employeeData && employeeData.employee_Name}</Title>
      <PrimaryButton onPress={() => navigation.navigate("Registrer Hendelse")}>
        <Text>Registrer hendelse</Text>
      </PrimaryButton>
      <PrimaryButton onPress={() => navigation.navigate("Checklist")}>
        <Text>Sjekklister</Text>
      </PrimaryButton>
      <Map />
      <View style={styles.geolocator}>
        <Geolocation />
      </View>
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
  geolocator: {
    display: "none",
  },
});
