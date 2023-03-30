import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { IStackScreenProps } from '../../../src/library/StackScreenProps';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen: React.FunctionComponent<IStackScreenProps>  = (props) => {

    const {navigation, route, nameProp} = props;
    console.log({ navigation, route, nameProp})
  return (
    <View style={styles.container}>
      <Text>Register screen here</Text>
      <StatusBar style="auto" />
      </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});