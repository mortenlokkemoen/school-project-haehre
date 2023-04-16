import { SafeAreaView, StyleSheet, Text, View, FlatList} from "react-native";
import React, {useState, useEffect } from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import { SearchBar } from 'react-native-elements';
import EventCard from "../../components/EventCard";

type EventType = {
  id: number,
  title: string,
  img: string,
  date: string,
  description: string,
  location: string
}


const PrevEventScreen: React.FunctionComponent<IStackScreenProps> = props => {

const { navigation, route, nameProp } = props;
console.log({navigation, route, nameProp})



const [search, setSearch] = useState<string>('');;
const [events, setEvents] = useState<EventType[]>([
    { id: 1, title: 'Event - Bamle Miljoprosjekt', img: 'https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png', date: '05/01/2023', description: 'Stein falt av dumper', location: 'Bamle - Telemark' },
    { id: 2, title: 'Event - Svea MiljoProsjekt', img: 'https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png', date: '20/01/2023', description: 'Yre hendelse, tre veltet', location: 'Svea' },
    { id: 3, title: 'Event - Åsen', img: 'https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png', date: '18/02/2023', description: 'Bensinslange brudd', location: 'Åsen' },
    { id: 4, title: 'Event - Hamar', img: 'https://res.cloudinary.com/dvfczxum7/image/upload/v1680794099/testimg_fnzfqy.png', date: '21/03/2023', description: 'Stein i vegbanen', location: 'Hamar' },
  ]);

  const filteredEvents = events.filter(event => event.title.includes(search));

  const showPreviousEvents = ({ item }: { item: EventType }) => {
    return <EventCard event={item} />;
  };

const updateSearch = (search: string) => {
  setSearch(search)
}

return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
     <SearchBar
     placeholder="Søk etter hendelser.."
     lightTheme
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
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    </SafeAreaView>
)
}

export default PrevEventScreen;
const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#ecedee',
},
itemStyle: {
    padding: 10,
  },
  searchbarContainer: {
    width: "80%",
    borderRadius: 2, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10, 
  },
  inputContainer: {
  },
  inputStyle:{
    fontFamily:'Barlow_600SemiBold',
    padding: 1,
    borderColor: 'gray',
  }
 
});
