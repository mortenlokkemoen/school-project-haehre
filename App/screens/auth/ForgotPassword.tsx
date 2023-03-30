import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { IStackScreenProps } from '../../../src/library/StackScreenProps';



const ForgotPasswordScreen: React.FunctionComponent<IStackScreenProps> = props => {

  const {navigation, route, nameProp} = props;
  console.log({navigation, route, nameProp});
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Text>Params go here</Text>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});