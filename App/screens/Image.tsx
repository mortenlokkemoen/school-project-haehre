import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";

const ImageScreen: React.FunctionComponent<IStackScreenProps> = props => {

    const { navigation, route, nameProp } = props;
    console.log({navigation, route, nameProp})
    return (
        <View style={styles.container}>
            <Text>This is where we will start storing image data</Text>
        </View>
    )
}

export default ImageScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});