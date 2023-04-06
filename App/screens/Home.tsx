import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react';
import { IStackScreenProps } from "../../src/library/StackScreenProps";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = props => {



    const { navigation, route, nameProp } = props;
    //console.log({navigation, route, nameProp})
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hei "navn"</Text>
            <Pressable style ={styles.btnStyle} onPress={() => navigation.navigate('Events')}>
                <Text style={styles.btnText}>Registrer hendelse</Text> 
            </Pressable>
            <Pressable style ={styles.btnStyle} onPress={() => navigation.navigate('Checklist')}>
                <Text style={styles.btnText}>Sjekklister</Text> 
            </Pressable>
            <Text style={styles.dateStyle}>{Date()}</Text>
        </View>
    )
}

export default HomeScreen;
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
    btnText: {
        color: '#ffff',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    btnStyle: {
        textAlign: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#003d6a',
        marginBottom: 30,
    },
    dateStyle: {
        color: '#003d6a',
        fontWeight: '600',
        fontSize: 16,
    },
});