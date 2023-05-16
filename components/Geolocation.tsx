import { View } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as Location from "expo-location";
import { GlobalStateContext } from "../App/screens/GlobalState";

export default function showGeolocation() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

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

  return <View></View>;
}
