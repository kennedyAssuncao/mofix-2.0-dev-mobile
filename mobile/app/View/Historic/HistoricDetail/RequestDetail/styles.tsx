import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ViewInfoProfessional = styled.View`
    flex-direction: column;
    width: 40%;
    height: 60%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;


export const DetailButton = styled.TouchableOpacity`
    width: 80%;
    height: 30%;
    margin-top: 3%;
    background-color: black;
    justify-content: center;
`;

export const ButtonName = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 12px;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: black;
`;

export const AvatarImage = styled.Image`
    height: 60%;
    width: 25%;
`;


export const ContainerInfo = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`

export const ContainerPrincipal = styled.View`
    height:30%;
    flex-direction: column;
    background-color: transparent;
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

export const ViewVisualization = styled.View`
    height: 25%;
    width: 100%;
    margin-top: 3%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const TextVisualization = styled.Text`
    color: ${theme.colors['default-green']};
    font-size: 17px;
    font-weight: bold;
    text-align: center;
`;

export const TextVisualizationButton = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`;


export const VisualizationButton = styled.TouchableOpacity`
    background-color: ${theme.colors['default-green']};
    height: 60%;
    width: 75%;
    margin-bottom:3%;
    align-items: center;
    justify-content: center;
`;

export const ViewText = styled.View`
    height: 20%;
    width: 100%;
    border-bottom-width: 0.2px;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextArea = styled.View`
    margin-top: 0.8%;
    background-color: white;
    border-width: 0.2px;
    width: 70%;
    height: 60%;
    border-color: ${theme.colors['default-border-gray']};
    padding: 1%;
`;

export const TextDescription = styled.Text`
    font-size: 14px;
    font-weight:bold;
`;

export const ViewCamera = styled.View`
    height: 20%;
    background-color: transparent;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom-width: 0.2px;
`;

export const ArrayImages = styled.View`
    height: 70%;
    background-color: transparent;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const ImageService = styled.Image`
    height:70%;
    width: 15%;
    margin: 1%;
`;

export const ViewDateService = styled.View`
    width: 100%;
    height: 5%;
    border-bottom-width: 0.2px;
    margin-top:2%;
`;

export const ViewAddressService = styled.View`
    margin-top: 5%;
    width: 100%;
    height: 7%;
    border-bottom-width: 0.2px;

`;

export const TextAddress = styled.Text`
    margin-left: 2%;
    text-align: left;
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

export const ViewServiceConfirm = styled.View`
    width: 100%;
    height: 4%;
    justify-content: center;
`;

export const TextServiceConfirmName = styled.Text`
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    color: white;
`;


export const CardNumber = styled.View`
    width: 100%;
    height: 4%;
    justify-content: center;
    background-color: transparent;
`;

export const TextCardNumber = styled.Text`
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: black;
`;

export const CreditCardView = styled.View`
    margin-top:5%;
    width: 100%;
    height: 6%;
`;