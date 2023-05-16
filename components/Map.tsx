import { Dimensions, StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import MapView, { Marker } from "react-native-maps";
import { GlobalStateContext } from "../App/screens/GlobalState";
import { MarkerData } from "../src/library/MarkerDataProps";

const workSiteLocation = [
  {
    title: "Svea MiljoProsjekt",
    location: {
      latitude: 79.004959,
      longitude: 17.666016,
    },
    description:
      "Gruven i Svea er lagt ned og det skal ryddes opp etter mer enn 100 års gruvedrift",
  },
  {
    title: "E6 Kvithammar - Åsen",
    location: {
      latitude: 63.483331,
      longitude: 10.88333,
    },
    description:
      "Nye Veier har kontrahert Hæhre Entreprenør for totalentreprisen ny E6 fra Kvithammar i Stjørdal kommune til Åsen i Levanger kommune.",
  },
  {
    title: "Svea MiljoProsjekt",
    location: {
      latitude: 66.312781,
      longitude: 14.142781,
    },
    description:
      "Hæhre Entreprenør AS er tildelt første anleggskontrakt for Freyrs batterifabrikk i Mo Industripark. ",
  },
];

export default function Map() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const mapWidth = screenWidth * 0.8;
  const mapHeight = screenHeight * 0.4;
  const { reportData, setReportData } = useContext(GlobalStateContext);

  const [workSiteMarkers, setWorkSiteMarkers] =
    useState<MarkerData[]>(workSiteLocation);
  const [userAddedMarkers, setUserAddedMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    if (userAddedMarkers.length > 0)
      setReportData({
        ...reportData,
        projectLocationLongitude: userAddedMarkers[0].location.longitude,
        projectLocationLatitude: userAddedMarkers[0].location.latitude,
      });
  }, [userAddedMarkers]);

  const onRegionChange = (region: any) => {
    console.log(region);
  };

  const showMarkers = (markers: MarkerData[]) => {
    return markers.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };
  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    console.log("Tapped coordinate:", coordinate);

    const newMarker: MarkerData = {
      title: "Chosen Location",
      location: coordinate,
      description: "This is a new marker added on map tap",
    };

    // Update the user-added markers state with the new marker
    setUserAddedMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={[styles.map, { width: mapWidth, height: mapHeight }]}
        onRegionChange={onRegionChange}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 59.8105765,
          latitudeDelta: 4.917978,
          longitude: 10.4388753,
          longitudeDelta: 10.98123,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {showMarkers(workSiteMarkers)}
        {showMarkers(userAddedMarkers)}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    height: "90%",
  },
});
