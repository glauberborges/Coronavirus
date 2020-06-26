import styled from 'styled-components/native'

export const Container = styled.View`
  	flex: auto;
  	align-items: center;
  	background-color: #fff;
`

export const Header = styled.View`
  	flex: auto;
  	position: absolute;
  	z-index: 1;
  	top: 0;
	background-color: rgba(0,0,0,0.4);
	padding: 25px 15px;

	width: 100%;
`

export const BgImage = styled.ImageBackground`
	flex: auto;
	width: 100%;
	justify-content: flex-end;
	padding-bottom: 60px;
	align-items: center;
`

export const TituloWelcome = styled.Text`
	color: #ffffff;
	font-size: 24px;
	font-weight: bold;
`

export const DescWelvome = styled.Text`
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
`

export const TituloApp = styled.Text`
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
`

export const ButtonAling = styled.TouchableOpacity`
	flex-direction: row;
`

export const BtnDefault = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	border: 1px solid #fff;
	border-radius: 10px;
	padding: 10px 15px;
	background-color: rgba(255,255,255,0.3);
	margin: 10px;
`

export const BtnDefaultText = styled.Text`
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
`

export const BoxContent = styled.View`
	flex-direction: row;
	flex: auto;
	width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	align-items: center;
	justify-content: center;
	marginTop: -50px;
	background-color: #fff;
	box-shadow: 0px 0px 72px rgba(0,0,0,0.3);
`

export const Cards = styled.View`
	border: 1px solid #590cac;
	box-shadow: 0px 0px 10px rgba(89,12,172,0.16);
	padding: 30px 20px;
	margin: 10px;
	width: 45%;
	align-items: center;
	border-radius: 20px;
	height: 200px;
`

export const CardsTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
`

export const CardsDescription = styled.Text`
	font-size: 14px;
	color: #590cac;
	text-align: center;

`