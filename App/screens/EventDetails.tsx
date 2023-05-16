import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import Title from "../../components/Title";
import { colors, fonts } from "../../src/theme";

const EventDetailsScreen: React.FC<IStackScreenProps> = ({ route }) => {
  const event = route.params.event.event;
  const isURLValid = (url: string) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };

  const isValidURL = isURLValid(event.imageAddress);

  return (
    <View style={styles.container}>
      {isValidURL ? (
        <Image
          source={{ uri: event.imageAddress }}
          style={{
            height: 250,
            width: 350,
            borderRadius: 2,
            marginBottom: 8,
            marginTop: 20,
          }}
          contentFit="cover"
        />
      ) : null}
      <View style={styles.midContainer}>
        <Text style={styles.dateStyle}>{event.dateOfSubmission}</Text>
      </View>

      <Title>{event.reportType}</Title>

      <Text style={styles.locationStyle}>{event.projectLocationLongitude}</Text>
      <Text style={styles.locationStyle}>{event.projectLocationLatitude}</Text>
      <Text style={styles.descStyle}>{event.projectDescription}</Text>
    </View>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  midContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dateStyle: {
    color: colors.primary,
    fontWeight: "800",
    fontSize: 16,
    alignItems: "center",
    padding: 5,
    marginTop: 3,
  },
  descStyle: {
    fontFamily: fonts.regular,
    fontSize: 20,
    padding: 5,
  },
  locationStyle: {
    fontFamily: fonts.regular,
    fontSize: 18,
    color: "gray",
  },
});
