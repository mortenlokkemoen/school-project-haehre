import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";
import { TriangleUp } from "../../../components/TriangleUp";

const LoginScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;
  console.log({ navigation, route, nameProp });
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
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

            <TextInput style={styles.input} placeholder="E-post" />
            <TextInput style={styles.input} placeholder="Passord" />
            <View style={styles.checkboxContainer}>
              <Checkbox value={isChecked} onValueChange={setIsChecked} />
              <Text>LA MEG VÆRE INNLOGGET</Text>
            </View>

            <PrimaryButton
              style={{ marginTop: 60 }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text>LOGG INN</Text>
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
      <View style={styles.triangleContainer}>
        <TriangleUp />
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#DCE0E6",
  },

  container: {
    padding: 15,
    width: "100%",
    // position: "relative",
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // gap: 40,
    // backgroundColor: "#DCE0E6",
  },
  triangleContainer: {
    backgroundColor: "#DCE0E6",
    marginBottom: 0,
  },

  input: {
    borderWidth: 1,
    borderColor: "#003d6a",
    backgroundColor: "white",
    width: "80%",

    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },

  wFull: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    marginTop: 60,
  },

  loginTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
