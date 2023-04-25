import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';
import { IStackScreenProps } from '../src/library/StackScreenProps';
import { EventType } from '../src/types/EventType';



const EventCard = ({ event }: { event: EventType }) => {
 
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
      <Image source={{ uri: event.img }}
      style={{height: 100, width: 100, borderRadius: 2, marginBottom: 8,}}
      contentFit='cover'
      />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.description}>{event.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    overflow: 'hidden',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontFamily: 'Barlow_600SemiBold',
  },
  imageContainer: {
    marginRight: 10,
  },
  infoContainer: {

  },
  title: {
    color: "#003d6a",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 5,
    fontFamily: 'Barlow_600SemiBold',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});

export default EventCard;