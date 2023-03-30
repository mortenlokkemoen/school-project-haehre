import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = props => {

    const { navigation, route, nameProp } = props;
    console.log({navigation, route, nameProp})
    return (
        <View style={styles.container}>
            <Text>Home! This is where we will add all event pages!</Text>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});