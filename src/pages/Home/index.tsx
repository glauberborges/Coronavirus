import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
import { BoxContent, BgImage,Header } from './styles';

const Index: React.FC = () => {
    const image = require('./../../../assets/bg.jpg');

    return (
        <>
            <View style={styles.container}>
                <Header>
                    <Text style={styles.text}>Covid 19 - Porto Feliz</Text>
                </Header>

                <BgImage source={image}>
                    <Text style={styles.text}>BgImage</Text>
                </BgImage>

                <BoxContent>
                    <Text style={styles.text}>BoxContent</Text>
                </BoxContent>

            </View>


        </>
    );
}
export default Index;

const width_proportion = '100%';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width:'100%',
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
});
