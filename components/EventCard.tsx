import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { IStackScreenProps } from "../src/library/StackScreenProps";
// import { EventType } from "../src/types/EventType";
import { Report } from "../src/types/Report";
import { colors, fonts } from "../src/theme";

const EventCard = ({ event }: { event: Report }) => {
  const isURLValid = (url: string) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };

  const isValidURL = isURLValid(event.imageAddress);
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {isValidURL ? (
          <Image
            source={{ uri: event.imageAddress }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 2,
              marginBottom: 8,
            }}
            contentFit="cover"
          />
        ) : null}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.reportType}</Text>
        <Text style={styles.description}>
          Strakstiltak: {event.immediateActionTaken}
        </Text>
        <Text style={styles.date}>{event.dateOfEvent}</Text>
        <Text style={styles.description}>{event.projectDescription}</Text>
        {/* <Text style={styles.description}>{event.projectLocationLongitude}</Text>
        <Text style={styles.description}>{event.projectLocationLatitude}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    overflow: "hidden",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    fontFamily: fonts.semiBold,
  },
  imageContainer: {
    marginRight: 10,
  },
  infoContainer: {},
  title: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 5,
    fontFamily: fonts.semiBold,
  },
  description: {
    fontSize: 17,
    marginBottom: 5,
    fontFamily: fonts.regular,
  },
  date: {
    fontSize: 15,
    color: "gray",
    fontFamily: fonts.light,
  },
});

export default EventCard;
