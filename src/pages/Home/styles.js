import styled from 'styled-components/native'

export const Header = styled.View`
  	flex: auto;
  	position: absolute;
  	z-index: 1;
  	top: 0;
	background-color: #000;
	opacity: 0.7;
	padding: 15px;
	width: 100%;
`
export const BoxContent = styled.View`
        flex: auto;
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        align-items: center;
        justify-content: center;
        marginTop: -50px;
        background-color: #fff;
        box-shadow: 0px 0px 72px #000;
`
export const BgImage = styled.ImageBackground`
	flex: auto;
	width: 100%;
	justify-content: center;
`
