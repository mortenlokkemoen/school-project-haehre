import { View, StyleSheet, Text } from "react-native";
import { IStackScreenProps } from "../../../src/library/StackScreenProps";
import RadioButtons from "../../../components/RadioButtons";


const RegisterOtherScreen: React.FunctionComponent<IStackScreenProps> = props => {

    const { navigation, route, nameProp } = props;
    console.log({navigation, route, nameProp})

    return (
        <View style={styles.inputContainer}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Text>ANNET</Text>
            </View>
            <View>
              <RadioButtons />
            </View>
          </View>
        </View>
      );
}

export default RegisterOtherScreen;

const styles = StyleSheet.create({
    inputContainer: {
      // justifyContent: "center",
      // alignItems: "center",
      // marginTop: 100,
      // marginHorizontal: 24,
      // padding: 16,
    },
  
    buttonsContainer: {
      // flexDirection: "row",
    },
    buttonContainer: {
      // flex: 1,
    },
  });
  