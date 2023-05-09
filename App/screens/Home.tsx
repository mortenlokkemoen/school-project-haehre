import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import { TriangleDown } from "../../components/TriangleDown";
import Title from "../../components/Title";
import { colors } from "../../src/theme";
import Map from "../../components/Map";
import { EmployeeType } from "../../src/types/EmployeeType";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [employeeData, setEmployeeData] = useState<EmployeeType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { navigation, route, nameProp } = props;

  let employeeId = 3; // supposed to be coming with props from login page

  useEffect(() => {
    const fetchReportList = async () => {
      try {
        const response = await fetch(
          `https://school-project-hahre.herokuapp.com/employees/${employeeId}`
        );
        const json = await response.json();
        console.log("json response", json);
        setEmployeeData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportList();
  }, [employeeId]);

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
