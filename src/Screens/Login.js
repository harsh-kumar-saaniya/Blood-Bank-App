import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const SignUp = () => {
        console.log('working');
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={styles.login}>
                <Text style={styles.login__Text}>Sign In</Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    theme={{ colors: { underlineColor: 'white', borderColor: 'red' } }}
                    mode={'outlined'}
                    style={{ marginBottom: 10 }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    mode={'outlined'}
                    autoCompleteType="password"
                    secureTextEntry={true}
                    style={{ marginBottom: 15, }}
                />
                <Button style={{ marginTop: 10, borderRadius: 7 }} contentStyle={{ height: 50, backgroundColor: 'red' }} mode="contained" onPress={SignUp}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>SIGN IN</Text>
                </Button>
                <View style={styles.login__createAccount}>
                    <Text style={{ color: 'gray', fontSize: 20 }}>OR</Text>
                    <Text style={styles.login__account} onPress={() => props.navigation.navigate("Register")}>Create an Account</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    login: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    login__Text: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    TextInput: {
        borderColor: 'red'
    },
    login__createAccount: {
        marginTop: 20,
        borderColor: 'black',
        alignItems: 'center'

    },
    login__account: {
        color: 'gray',
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Courier, Monaco, monospace',
        borderBottomWidth: 0.9,
        borderBottomColor: 'red',
        paddingBottom: 1,
        color: 'red'
    },
});


export default Login;
