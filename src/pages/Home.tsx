import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Home: React.FC = () => {

    const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.text}>Inside</Text>
                </ImageBackground>

                <View style={styles.container2}>
                    <Text style={styles.text}>Inside</Text>
                </View>

            </View>


        </>
    );
}
export default Home;

const width_proportion = '100%';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        width: width_proportion,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        flex: 1,
        width:'100%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
});
