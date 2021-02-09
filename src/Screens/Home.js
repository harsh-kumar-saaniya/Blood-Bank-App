import React from 'react'
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <StatusBar barStyle='light-content' hidden={false} backgroundColor="red" />
            <View style={{ flex: 0.40, backgroundColor: 'red' }} >
                <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 3, backgroundColor: 'red', alignItems: 'center' }}>
                        <Text style={styles.bloodRequestheading}>Donor Update</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Log Out</Text>
                    </View>
                </View>
                <View style={{ flex: 6, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.home__updateSection}>
                        <Text style={{ fontSize: 30, color: '#000', fontWeight: 'bold', }}>TOTAL DONOR'S</Text>
                        <Text style={{ fontSize: 40, color: 'red', fontWeight: 'bold' }}> 3</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.60, backgroundColor: '#f0eeeb' }} >
                <View style={styles.home__footerTitle}>
                    <Text>Recent Update</Text>
                    <Text>View All</Text>
                </View>
                <View style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor: '#f0eeeb' }}>

                        <View style={styles.Donor___list}>
                            <View style={{ flex: 0.25 }}>
                                <View style={{
                                    flex: 0.25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Male</Text>
                                </View>
                                <View style={{
                                    flex: 0.75, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4d4c4a',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 35 }}>B+</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.75, justifyContent: 'center', paddingLeft: 10, backgroundColor: '#fff' }}>
                                <View >
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Harish Vithal</Text>
                                </View>
                                <View style={{}}><Text>Karachi • Donor</Text></View>
                            </View>
                        </View>


                        <View style={styles.Donor___list}>
                            <View style={{ flex: 0.25 }}>
                                <View style={{
                                    flex: 0.25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Male</Text>
                                </View>
                                <View style={{
                                    flex: 0.75, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4d4c4a',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 35 }}>B+</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.75, justifyContent: 'center', paddingLeft: 10, backgroundColor: '#fff' }}>
                                <View >
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Harish Vithal</Text>
                                </View>
                                <View style={{}}><Text>Karachi • Donor</Text></View>
                            </View>
                        </View>



                        <View style={styles.Donor___list}>
                            <View style={{ flex: 0.25 }}>
                                <View style={{
                                    flex: 0.25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Male</Text>
                                </View>
                                <View style={{
                                    flex: 0.75, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4d4c4a',
                                }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 35 }}>B+</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.75, justifyContent: 'center', paddingLeft: 10, backgroundColor: '#fff' }}>
                                <View >
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Harish Vithal</Text>
                                </View>
                                <View style={{}}><Text>Karachi • Donor</Text></View>
                            </View>
                        </View>








                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    home__header: {
        flex: 0.40,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    home__footer: {
        flex: 1,
        backgroundColor: 'pink',
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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    home__donorList: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    bloodRequestheading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'

    },
    home__footerTitle: {
        flex: 0,
        backgroundColor: '#f0eeeb',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 7
    },
    Donor___list: {
        width: '90%',
        height: '25%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        backgroundColor: '#00E5FF',
        flexDirection: 'row',
        marginTop: 10
    }
});

export default Home;
