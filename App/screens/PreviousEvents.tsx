import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import EventCard from "../../components/EventCard";
import { Report } from "../../src/types/Report";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import { GlobalStateContext } from "./GlobalState";
import { colors, fonts } from "../../src/theme";

const PrevEventScreen: React.FC<IStackScreenProps> = (props) => {
  const [allReports, setAllReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { navigation, route, nameProp } = props;
  const { employeeData } = useContext(GlobalStateContext);
  const employeeId = employeeData.employee_Id;

  useEffect(() => {
    const fetchReportList = async () => {
      try {
        const response = await fetch(
          `https://school-project-hahre.herokuapp.com/reports/`
        );
        const json = await response.json();
        console.log("json response", json);
        setAllReports(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportList();
  }, [employeeId]);

  useEffect(() => {
    setFilteredReports(
      allReports.filter(
        (report) =>
          (report.projectDescription
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
            report.reportType
              .toLowerCase()
              .includes(searchText.toLowerCase())) &&
          report.submittedBy === employeeId
      )
    );
  }, [allReports, searchText, employeeId]);

  const isURLValid = (url: string) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };
  const renderItem = ({ item }: { item: Report }) => {
    const isValidURL = isURLValid(item.imageAddress);
    return (
      <Pressable onPress={() => navigateToDetailsScreen(item)}>
        {isValidURL ? <EventCard event={item} /> : null}
      </Pressable>
    );
  };
  const navigateToDetailsScreen = (event: Report) => {
    navigation.navigate("EventDetails", { event });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {employeeData.employee_Name}, dine tidlige hendelser
      </Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search reports..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filteredReports}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  paragraph: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 25,
    fontFamily: fonts.regular,
    textAlign: "center",
  },
});

export default PrevEventScreen;
