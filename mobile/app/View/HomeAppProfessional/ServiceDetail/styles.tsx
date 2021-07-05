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
    background-color: ${theme.colors['default-yellow']};
    height: 60%;
    width: 75%;
    margin-bottom:3%;
    align-items: center;
    justify-content: center;
    elevation:3;
    border-radius:4px;
`;

export const ViewText = styled.View`
    height: 180px;
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
    width: 80%;
    height: 40%;
    border-color: ${theme.colors['default-border-gray']};
    padding: 1%;
`;

export const TextDescription = styled.Text`
    font-size: 14px;
    font-weight:bold;
`;

export const TextPrice = styled.Text`
font-size: 22px;
font-weight:bold;
`;

export const ViewCamera = styled.View`
    height: 150px;
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

export const ViewClientDetail = styled.View`
    width: 80%;
    height: 25%;
    margin-top:2%;
    background-color: transparent;
    flex-direction:row;
    align-items:center;
`;

export const ViewAddressService = styled.View`
    margin-top: 1%;
    width: 100%;
    height: 100px;
    border-bottom-width: 0.2px;

`;

export const TextAddress = styled.Text`
    margin-top: 2%;
    text-align: center;
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

export const TextData = styled.Text`
    margin-top: 2%;
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

export const ViewServiceConfirm = styled.View`
    width: 100%;
    height: 80px;
    background-color:transparent;
    align-items:center;
    flex-direction:column-reverse;
    border-width: 0.2px;
    border-color: ${theme.colors['default-border-gray']};
`;

export const ButtonConfirmService = styled.TouchableOpacity`
    background-color:${theme.colors['default-yellow']};
    width:70%;

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
    width: 100%;
    height:70px;
    background-color:transparent;
`;


export const MessageView = styled.View`
    width: 100%;
    height:70px;
    background-color:transparent;
`;

export const TextTitleMessage = styled.Text`
    font-size: 18px;
    font-weight:bold;
    color:red;
    margin-left:10%;

`;


export const TextMessage = styled.Text`
    font-size: 14px;
    font-weight:bold;
    color:red;
    margin-left:10%;
`;


export const ViewDateService = styled.View`
    width: 100%;
    height: 150px;
    border-bottom-width: 0.2px;
    margin-top:1%;
`;

export const ViewScheduledType = styled.View`
    width:100%;
    height: 30px;
    justify-content:center;
    align-items:center;
    margin-bottom:2%;
    margin-top:2%;
`;

export const ViewRequestType = styled.View`
    width:100%;
    height: 100px;
    justify-content:center;
    align-items:center;
    margin-bottom:2%;
    margin-top:2%;
`;

export const ButtonType = styled.TouchableOpacity`
    width: 80%;
    height: 30%;
    justify-content:center;
    align-items: center;
    margin-bottom:2%;

`;
export const TextButtonType = styled.Text`
    font-size: 14px;
    font-weight:bold;
    color:white;
    text-align:center;
`;


export const ViewDate  = styled.View`
    width: 100%;
    background-color: transparent;
    height:25%;
    align-items: center;
    flex-direction:row;
`;

export const ViewCheckBox  = styled.View`
    background-color:transparent;
`;

export const ViewDateArray = styled.View`
    width: 100%;
    background-color:transparent;
    justify-content:center;
    align-items: center;
    flex-direction:column;
`;

export const ViewTextData  = styled.View`
    width: 70%;
    background-color:transparent;
    padding-left:25%;
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