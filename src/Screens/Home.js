import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle='dark-content' hidden={false} backgroundColor="red" translucent={true} />
            <View style={styles.home__header}>
                <Text style={{
                    color: '#fff',
                    fontSize: 20,
                    padding: 10,
                    // paddingTop: 10,
                    marginTop: 10,
                    // marginBottom: 13,
                    fontWeight: 'bold'
                }}>Blood Request</Text>
                <View style={styles.home__updateSection}></View>
            </View>
            <View style={styles.home__footer}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10
                }} >
                    <Text>Recent Update</Text>
                    <Text>View All</Text>
                </View>
                <View style={styles.home__donorList}>
                    <View style={styles.outlerLayer}>
                        <View style={{ flex: 1 }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{ color: '#fff' }}>Urgent</Text>
                            </View>
                            <View style={{
                                flex: 3,
                                backgroundColor: '#4C090C',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 30,
                                }}>B+</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 3,
                            marginLeft: 10,
                            // alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>Ronald Dixin</Text>
                            <Text style={{
                                color: '#000'
                            }}>24 Male</Text>
                        </View>
                    </View>
                </View>






                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home__header: {
        flex: 0.40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home__footer: {
        flex: 0.60,
        backgroundColor: '#E6EAEB',
    },
    home__updateSection: {
        width: '85%',
        height: '70%',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        borderRadius: 10
    },
    home__donorList: {
        // justifyContent: 'center'
        alignItems: 'center',
    },
    outlerLayer: {
        backgroundColor: '#fff',
        width: '95%',
        height: '50%',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }


});

export default Home;
