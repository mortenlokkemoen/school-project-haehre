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
import { EventType } from "../../src/types/EventType";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import { colors, fonts } from "../../src/theme";

// Apparently type definition seem to be broken with React native elements so you need
// to change the baseprops to unknown.
const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;

const PrevEventScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;

  const [search, setSearch] = useState<string>("");
  const [events, setEvents] = useState<EventType[]>([
    {
      id: 1,
      title: "Event - Bamle Miljoprosjekt",
      img: "https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png",
      date: "05/01/2023",
      description: "Stein falt av dumper",
      location: "Bamle - Telemark",
    },
    {
      id: 2,
      title: "Event - Svea MiljoProsjekt",
      img: "https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png",
      date: "20/01/2023",
      description: "Yre hendelse, tre veltet",
      location: "Svea",
    },
    {
      id: 3,
      title: "Event - Åsen",
      img: "https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png",
      date: "18/02/2023",
      description: "Bensinslange brudd",
      location: "Åsen",
    },
    {
      id: 4,
      title: "Event - Hamar",
      img: "https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png",
      date: "21/03/2023",
      description: "Stein i vegbanen",
      location: "Hamar",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<EventType | undefined>(
    undefined
  );
  const filteredEvents = events.filter((event) => event.title.includes(search));

  const showPreviousEvents = ({ item }: { item: EventType }) => {
    return (
      <Pressable onPress={() => navigateToDetailsScreen(item)}>
        <EventCard event={item} />
      </Pressable>
    );
  };

  const navigateToDetailsScreen = (event: EventType) => {
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
          onChangeText={updateSearch}
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
    backgroundColor: colors.background,
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
    fontFamily: fonts.regular,
    padding: 1,
    borderColor: "gray",
  },
});
