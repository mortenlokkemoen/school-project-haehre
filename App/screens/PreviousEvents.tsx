import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import EventCard from "../../components/EventCard";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";
// import { EventType } from "../../src/types/EventType";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import { Report } from "../../src/types/Report";

// Apparently type definition seem to be broken with React native elements so you need
// to change the baseprops to unknown.
// const SafeSearchBar = SearchBar as unknown as React.FC<unknown>;

interface SafeSearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (search: string) => void;
  platform: "default" | "ios" | "android";
  containerStyle: {
    width: string;
    borderRadius: number;
    borderColor: string;
    borderWidth: number;
    marginBottom: number;
  };
  inputContainerStyle: {};
  inputStyle: {
    // add any styles you need for the input text
  };
}

const SafeSearchBar = SearchBar as React.FC<SafeSearchBarProps>;

const PrevEventScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;

  const [search, setSearch] = useState<string>("");
  const [events, setEvents] = useState<Report[]>([]);

  // const [selectedEvent, setSelectedEvent] = useState<EventType | undefined>(
  //   undefined
  // );
  const filteredEvents = events.filter(
    (event) => event.reportType && event.reportType.includes(search)
  );

  // const getData = (employeeId: number) => {
  //   fetch(`https://school-project-hahre.herokuapp.com/reports/${employeeId}`)
  //     .then((response) => response.json())
  //     .then((data) => setEvents(data));
  // };
  const getData = async (employeeId: number) => {
    try {
      const response = await fetch(
        `https://school-project-hahre.herokuapp.com/reports/${employeeId}`
      );
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search === "") {
      getData(3);
    }
  }, [search]);
  const showPreviousEvents = ({ item }: { item: Report }) => {
    return (
      <Pressable onPress={() => navigateToDetailsScreen(item)}>
        <EventCard event={item} />
      </Pressable>
    );
  };

  const navigateToDetailsScreen = (event: Report) => {
    navigation.navigate("EventDetails", { event });
  };

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SafeSearchBar
          placeholder="Søk etter hendelser.."
          value={search}
          onChangeText={(text: string) => {
            updateSearch(text);
          }}
          platform="android"
          containerStyle={styles.searchbarContainer}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
        />
        <FlatList
          data={filteredEvents}
          renderItem={showPreviousEvents}
          keyExtractor={(event) => event.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PrevEventScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#ecedee",
  },
  itemStyle: {
    padding: 10,
  },
  searchbarContainer: {
    width: "80%",
    borderRadius: 2,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  inputContainer: {},
  inputStyle: {
    fontFamily: "Barlow_600SemiBold",
    padding: 1,
    borderColor: "gray",
  },
});
