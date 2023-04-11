import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type EventType = {
    id: number,
    title: string,
    img: string,
    date: string,
    description: string,
    location: string

  }

const EventCard = ({ event }: { event: EventType }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Image source={{ uri: event.img }}
      style={{height: 150, width: 200, borderRadius: 8, marginBottom: 8,}}
      contentFit='cover'
      />
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.description}>{event.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  img: {
    height: 50,
    width: 50,
  }
});

export default EventCard;