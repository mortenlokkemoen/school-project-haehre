import { StyleSheet, View, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as Location from "expo-location";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStateContext } from "../App/screens/GlobalState";

export default function showGeolocation() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState("");

  const { reportData, setReportData } = useContext(GlobalStateContext);

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setReportData({
        ...reportData,
        projectLocationLongitude: location.coords.longitude,
        projectLocationLatitude: location.coords.latitude,
      });
    };
    getPermission();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const geocode = async () => {
    const geocodeLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address:");
    console.log(geocodeLocation);
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="Adress"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Geocode Adress" onPress={geocode}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecedee",
  },
  textClr: {
    color: "#003d6a",
    fontSize: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
