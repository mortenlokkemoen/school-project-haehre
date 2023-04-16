import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = props => {



    const { navigation, route, nameProp } = props;
    //console.log({navigation, route, nameProp})
    return (
        <View style={styles.container}>
            <Title>Hei "navn"</Title>
            <PrimaryButton  onPress={() => navigation.navigate('RegisterEvents')}>
                <Text>Registrer hendelse</Text> 
            </PrimaryButton>
            <PrimaryButton  onPress={() => navigation.navigate('Checklist')}>
                <Text>Sjekklister</Text> 
            </PrimaryButton>
            <Text style={styles.dateStyle}>{Date()}</Text>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#ecedee',
    },
    dateStyle: {
        color: '#003d6a',
        fontWeight: '600',
        fontSize: 16,
    },
});