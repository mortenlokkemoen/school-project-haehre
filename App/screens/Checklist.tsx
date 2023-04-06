import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";


const ChecklistScreen: React.FunctionComponent<IStackScreenProps> = props => {

const { navigation, route, nameProp } = props;
console.log({navigation, route, nameProp})
return (
    <View style={styles.container}>
        <Text style={styles.title}>Checklist here</Text>
       
    </View>
)
}

export default ChecklistScreen;
const styles = StyleSheet.create({
container: {
    flex:1,
    alignItems: 'center',
    top: 50,
    marginTop: 50,
    backgroundColor: '#ecedee',
},
title: {
    fontWeight: "bold",
    fontSize: 26,
    color: '#003d6a',
    marginBottom: 50,
},
});