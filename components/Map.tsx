
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const workSiteLocation = [
    {
        title: "Svea MiljoProsjekt",
        location: {
            latitude: 79.004959,
            longitude:17.666016,
        },
        description: "Gruven i Svea er lagt ned og det skal ryddes opp etter mer enn 100 års gruvedrift"
    },
    {
        title: "E6 Kvithammar - Åsen",
        location: {
            latitude: 63.483331,
            longitude: 10.883330,
        },
        description: "Nye Veier har kontrahert Hæhre Entreprenør for totalentreprisen ny E6 fra Kvithammar i Stjørdal kommune til Åsen i Levanger kommune."
    },
    {
        title: "Svea MiljoProsjekt",
        location: {
            latitude: 66.312781,
            longitude: 14.142781,
        },
        description: "Hæhre Entreprenør AS er tildelt første anleggskontrakt for Freyrs batterifabrikk i Mo Industripark. "
    },
]


export default function showMap () {

    const onRegionChange = (region: any) => {
    console.log(region);

    };

    const showWorkSiteLocation = () => {
        return workSiteLocation.map((item, index) => {
            return(
                <Marker 
                key={index}
                coordinate={item.location}
                title={item.title}
                description={item.description}
                />
            )
        })
    }

    return (
            <View style={styles.container}>
                <Text>Here is our Map</Text>    
                <MapView style={styles.map}
                onRegionChange={onRegionChange}
                initialRegion={{
                    latitude: 59.8105765,
                    latitudeDelta: 4.917978,
                    longitude: 10.4388753,
                    longitudeDelta: 10.98123,
                }}>
                    {showWorkSiteLocation()}
                </MapView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecedee',
    },
    textClr: {
       color: '#003d6a',
       fontSize: 16,
    },
    map: {
        width: 300,
        height: 300,
    }
})