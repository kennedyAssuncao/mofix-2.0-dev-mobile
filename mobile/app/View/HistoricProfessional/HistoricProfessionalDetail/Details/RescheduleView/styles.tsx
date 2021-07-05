import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';


export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
  align-items:center;
`;

export const TitleView = styled.Text`
    text-align:center;
    font-weight: bold;
    font-size:20px;
    color: black;
    margin-top:2%;
`;

export const ViewText = styled.View`
    height: 20%;
    width: 80%;
    flex-direction: column;
    margin-top:4%;
    margin-bottom:1%;
    background-color:transparent;
`;

export const LabelText = styled.Text`
    font-weight: bold;
    font-size:16px;
    color: black;
`;


export const Button = styled.TouchableOpacity`
    height: 6%;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
    background-color: ${theme.colors['default-yellow']};
    border-radius:3px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size:14px;
    color: white;
`;

export const ReasonDescription = styled.TextInput`
    elevation:3;
    height:80%;
    background-color:white;
`;

export const ViewData = styled.View`
    height: 25%;
    width: 80%;
    flex-direction: column;
    margin-top:4%;
    margin-bottom:1%;
    background-color:transparent;
`;

export const ButtonData = styled.TouchableOpacity`
    height: 70%;
    width: 45%;
    justify-content: center;
    align-items: center;
    background-color: #e2e2e2;
    border-radius:3px;
`;

export const ButtonHour = styled.TouchableOpacity`
    height: 70%;
    width: 45%;
    justify-content: center;
    align-items: center;
    background-color: #e2e2e2;
    border-radius:3px;
    margin-left:5%;
`;

export const ButtonsDateTimeView = styled.View`
    flex-direction:row;
`;

export const ButtonTextData = styled.Text`
    font-weight: bold;
    font-size:16px;
    color: #999999;
`;

export const LabelTextData = styled.Text`
    font-weight: bold;
    font-size:16px;
    color: black;
`;


export const ViewModal = styled.View`
    flex:1;
    background-color: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
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


