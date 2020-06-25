import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const News: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>News</Text>
        </View>
    );
}
export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
