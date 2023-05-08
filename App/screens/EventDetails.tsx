import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import { colors, fonts } from "../../src/theme";

const EventDetailsScreen: React.FC<IStackScreenProps> = ({ route }) => {
  const event = route.params.event.event;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: event.img }}
        style={{
          height: 250,
          width: 350,
          borderRadius: 2,
          marginBottom: 8,
          marginTop: 20,
        }}
        contentFit="cover"
      />
      <View style={styles.midContainer}>
        <Text style={styles.dateStyle}>{event.date}</Text>
      </View>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.locationStyle}>{event.location}</Text>
      <Text style={styles.descStyle}>{event.description}</Text>
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
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 22,
    color: colors.primary,
    marginLeft: 10,
    marginBottom: 10,
    padding: 5,
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
