import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";
import { TriangleUp } from "../../../components/TriangleUp";
import { GlobalStateContext } from "../GlobalState";
import { colors } from "../../../src/theme";

const LoginScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { setEmployeeData } = useContext(GlobalStateContext);
  const { navigation } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const screenHeight = Dimensions.get("window").height;
  const marginHeight = screenHeight * 0.12;

  const handleLoginPress = async () => {
    try {
      const response = await fetch(
        "https://school-project-hahre.herokuapp.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: username,
            password: password,
          }),
        }
      );
      let result = await response.json();
      if (response.status === 200) {
        setEmployeeData(result);
        navigation.navigate("MainScreen", {
          screen: "Hjem",
        });
      }
    } catch (error) {
      Alert.alert("Feil brukernavn eller passord");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.wFull}>
          <Image
            source={require("../../../assets/Logo_Haehre_HiRes.png")}
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />

          <TextInput
            style={styles.input}
            placeholder="E-post"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Passord"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setIsChecked}
              color={colors.primary}
            />
            <Text>LA MEG VÆRE INNLOGGET</Text>
          </View>

          <PrimaryButton style={{ marginTop: 60 }} onPress={handleLoginPress}>
            <Text>LOGG INN</Text>
          </PrimaryButton>
        </View>
        <View style={[{ marginTop: marginHeight }]}>
          <TriangleUp />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "white",
    width: "80%",

    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
  },

  wFull: {
    alignItems: "center",
    marginTop: 60,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
  },
  checkbox: {
    marginRight: 20,
    width: 25,
    height: 25,
  },
});
