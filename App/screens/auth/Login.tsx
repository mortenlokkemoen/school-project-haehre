
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
//import logo from svg file
import { IStackScreenProps } from '../../../src/library/StackScreenProps';


const LoginScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const { navigation, route, nameProp} = props;

    return (
        <SafeAreaView style={styles.main}>
          <View style={styles.container}>
            <View style={styles.wFull}>
            <View style={styles.row}>
            {/*Logo here*/}
            <Text style={styles.compTitle}>Hæhre Entrepeneur</Text>
            </View>

            <Text style={styles.logToContinueTxt}>Login to Continue</Text>
            <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input} placeholder='Password' />
          
          <View style={styles.btnWrapper}>
            {/* LOGIN BUTTON*/}
            <TouchableOpacity
             onPress={() => navigation.navigate('Login')}
             activeOpacity={0.7}
             style={styles.loginBtn}    
            >
            <Text style={styles.loginTxt}>Log in</Text>
            </TouchableOpacity>
          </View>

          {/* FORGOT PW BUTTON */}
          <TouchableOpacity
           onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPWText}> Forgot Password?</Text>
          </TouchableOpacity>
          </View>
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            {/* REGISTER BUTTON*/}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpBtn}>Sign Up!</Text>
            </TouchableOpacity>
          </View>

          </View>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#003d6a',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
    },
    logToContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: '#003d6a',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    wFull: {
        width: '100%',
    },
    compTitle: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#003d6a',
    },
    btnWrapper: {
        height: 55,
        marginTop: 12,
        backgroundColor: '#003d6a',
        shadowColor: '#000',
    },
    loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
        color: '#003d6a',
    },
    loginTxt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    forgotPWText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
    //Footer
    footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: '#003d6a',
        fontWeight: 'bold',
    },
    signUpBtn: {
        color: '#003d6a',
        fontWeight: 'bold',
      },
    //Utility
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

})