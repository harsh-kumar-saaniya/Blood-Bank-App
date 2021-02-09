import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';
import { Provider } from 'react-redux';
import store from '../Store/index';

const Stack = createStackNavigator();


const AppNavigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SplashScreen" component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Login" component={Login} options={{
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerShown: false
                    }} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={Home} options={{
                        headerStyle: {
                            backgroundColor: 'red',
                        },
                        headerShown: false
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default AppNavigation;
