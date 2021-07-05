import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};

`;


export const DetailButton = styled.TouchableOpacity`
    width: 40%;
    height: 50%;
    background-color: black;
    margin-left:15%;
    justify-content:center;
    align-items: center;
`;

export const TextMensageButton = styled.Text`
    color: white;
    font-size:12px;
    text-align:center;
`;

export const ClientText = styled.Text`
    color: black;
    font-size: 13px;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: black;
`;

export const ViewTextTitle = styled.View`
    margin-top:5%;
    margin-bottom:5%;
`;


export const ContainerPrincipal = styled.View`
    height:60%;
    flex-direction: column;
    background-color: blue;
    justify-content: center;
    align-items: center;
    border-bottom-width: 0.2px;
`;

export const ViewButtons = styled.View`
    height:25%;
    flex-direction: column;
    background-color: red;
    justify-content: center;
    align-items: center;
    border-bottom-width: 0.2px;
`;

export const ViewIcon = styled.View`
    height:15%;
    margin-top: 3%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const ImageService = styled.Image`
    height:70%;
    width: 15%;
    margin: 1%;
`;


export const ButtonImage = styled.TouchableOpacity`
    height:80%;
    width: 30%;
    background-color:green;
    margin:2%;
    align-items:center;
    justify-content:center;
`;

export const ButtonImageView = styled.View`
    flex-direction:row;
    height:50%;
    width:100%;
    align-items:center;
    justify-content:center;
`;


export const ViewImages = styled.View`

`;


export const ButtonsOpt = styled.TouchableOpacity`
    height:25%;
    width: 80%;
    align-items:center;
    justify-content:center;
    margin:2%;
`;

export const TextButtonType = styled.Text`
    font-size: 14px;
    font-weight:bold;
    color:white;
    text-align:center;
`;

export const ViewModalAlert = styled.View`
    height: 25%;
    width: 70%;
    background-color: white;
    align-items:center;
`;


export const TitleAlertView = styled.View`
    height: 15%;
    width: 100%;
    margin-top:0%;
    align-items:center;
    justify-content: center;
`; 

export const TextButton = styled.Text`
    font-size:16px;
    text-align: center;
    font-weight: bold;
    color: white;
`;


export const DescriptionAlertView = styled.View`
    height: 15%;
    width: 100%;
    margin: 15%;
    justify-content:center;
    align-items:center;
    background-color: transparent;
`; 


export const TextDescriptionAlert = styled.Text`
    font-size:15px;
    text-align: center;
    font-weight: bold;
    margin-top:3%;
`;

export const AlertButton = styled.TouchableOpacity`
    height: 20%;
    width: 95%;
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
    background-color: ${theme.colors['default-yellow']};
`;

export const ViewModal = styled.View`
    flex:1;
    background-color: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
`;