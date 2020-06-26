import React from 'react';
import { Feather } from '@expo/vector-icons';
import {StatusBar, Text, Image, Platform} from 'react-native';

// @ts-ignore
import { BoxContent, BgImage,Header, Container,TituloApp,TituloWelcome, DescWelvome,BtnDefault,BtnDefaultText,ButtonAling,Cards,CardsTitle,CardsDescription} from './styles';


const Index: React.FC = () => {

    let widthBoxContent = "100%"
    if (Platform.OS === 'web') widthBoxContent = "800"

    return (
        <>

            <Container>

                <Header style={{marginTop: StatusBar.currentHeight }}>
                    <TituloApp>Covid 19 - Porto Feliz</TituloApp>
                </Header>

                <BgImage source={ require('./../../../assets/bg.jpg')}>
                    <TituloWelcome> Olá! </TituloWelcome>
                    <DescWelvome> Como está se sentindo  </DescWelvome>
                    <DescWelvome> nesse momento?</DescWelvome>

                    <ButtonAling>
                        <BtnDefault
                            onPress={() => alert('Hello, world!')}>
                            <Image source={ require('./../../../assets/smileHappy.png')} />
                            <BtnDefaultText> BEM </BtnDefaultText>
                        </BtnDefault>

                        <BtnDefault
                            onPress={() => alert('Hello, world!')}>
                            <Image source={ require('./../../../assets/smileBad.png')} />
                            <BtnDefaultText> MAL </BtnDefaultText>
                        </BtnDefault>
                    </ButtonAling>
                </BgImage>

                <BoxContent style={{width: widthBoxContent}}>
                    <Cards>
                        <Feather name="heart"  size={20} style={{ fontSize:30, fontWeight:'bold', color:'#590cac'}}/>
                        <CardsTitle> Unidades de Saúde </CardsTitle>
                        <CardsDescription> Encontre as mais próximas de você. </CardsDescription>
                    </Cards>

                    <Cards>
                        <Feather name="book-open"  size={20} style={{ fontSize:30, fontWeight:'bold', color:'#590cac'}}/>
                        <CardsTitle> Nossas Noticías </CardsTitle>
                        <CardsDescription> Fique por dentro das novidades. </CardsDescription>
                    </Cards>
                </BoxContent>

            </Container>
        </>
    );
}
export default Index;
