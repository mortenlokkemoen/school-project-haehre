import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import Geolocation from "../../components/Geolocation";
import Map from "../../components/Map";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const ImageScreen: React.FunctionComponent = () => {
  const [image, setImage] = useState("");
  const [imageSelected, setImageSelected] = useState(false);
  const isTablet = false;
  const mapWidth = Dimensions.get("window").width * 0.8;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("focus", () => {
      setImageSelected(false);
    });
  });

  useEffect(() => {
    if (image !== "") {
      setImageSelected(true);
    }
  }, [image]);

  const handleUpload = async (image: any) => {
    const formData = new FormData();
    formData.append(
      "file",
      JSON.parse(
        JSON.stringify({ uri: image.uri, type: image.type, name: image.name })
      )
    );
    formData.append("upload_preset", "haehre-app");
    formData.append("cloud_name", "dvfczxum7");

    fetch("https://api.cloudinary.com/v1_1/dvfczxum7/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("File uploaded to cloudinary", data);
      })
      .catch((error) => {
        console.error("Error uploading file to cloudinary:", error);
      });
  };

  const gallerySelect = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 200, height: 200 } }],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      setImage(result.assets[0].uri);
      const newFile = {
        uri: "",
        type: "image/jpeg",
        name: "image.jpg",
      };
      handleUpload(newFile);
    } else {
      alert("Access to camera roll denied, cant send image");
    }
  };

  const selectCamera = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const { uri } = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: 200, height: 200 } }],
          { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
        );
        setImage(uri);
        const newFile = {
          uri,
          type: "image/jpeg",
          name: "image.jpg",
        };
        handleUpload(newFile);
      } else {
        alert("Permission to access Camera denied!");
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.maincontainer}>
        <Image source={{ uri: image }} style={styles.img} />
        <PrimaryButton onPress={gallerySelect}>
          <Text>Hent fra bildegallery</Text>
        </PrimaryButton>
        <PrimaryButton onPress={selectCamera}>
          <Text>Ta bilde</Text>
        </PrimaryButton>
        {imageSelected ? (
          <PrimaryButton onPress={() => alert("report has been sent")}>
            <Text>Send</Text>
          </PrimaryButton>
        ) : null}
        <Geolocation />
        <Map isTablet={isTablet} mapWidth={mapWidth} />
        {/* <Map /> */}
      </View>
    </ScrollView>
  );
};

export default ImageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecedee",
    height: "100%",
  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 8,
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#fff",
  },
  btnStyle: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#003d6a",
    marginBottom: 10,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
