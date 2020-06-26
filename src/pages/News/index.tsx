import React from 'react';
import {Platform, ScrollView, StatusBar, Text} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {Container,BoxNews} from './styles.js';

const Index: React.FC = () => {

    let widthBoxContent = "100%"
    if (Platform.OS === 'web') widthBoxContent = "600"

    function FocusAwareStatusBar(props:any) {
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar {...props} /> : null;
    }

    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#6a51ae" />

            <Container style={{marginTop: StatusBar.currentHeight, width: widthBoxContent}}>
                <ScrollView>

                    <BoxNews>
                        <Text>Covid 19 - Porto Feliz</Text>
                    </BoxNews>

                </ScrollView>
            </Container>
        </>
    );
}
export default Index;

