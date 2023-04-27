import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import PrimaryButton from "../../../components/PrimaryButton";

const LoginScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const { navigation, route, nameProp } = props;
  console.log({ navigation, route, nameProp });

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <Image
            source={require("../../../assets/Logo_Haehre_HiRes.png")}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />

          <TextInput style={styles.input} placeholder="E-post" />
          <TextInput style={styles.input} placeholder="Passord" />
          <Text>LA MEG VÆRE INNLOGGET</Text>

          <PrimaryButton onPress={() => navigation.navigate("HomeScreen")}>
            <Text>LOGG INN</Text>
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecedee",
  },
  input: {
    borderWidth: 1,
    borderColor: "#003d6a",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },

  wFull: {
    width: "100%",
  },

  loginTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
