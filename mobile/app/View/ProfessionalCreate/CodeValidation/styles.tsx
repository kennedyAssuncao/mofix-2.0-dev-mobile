
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:35%;
    /* background-color:red; */
    margin-top:50%;
    margin-bottom:-10%;
`;

//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonLogin = styled.TouchableOpacity`
    background-color: #dbac00;
    width:80%;
    height:15%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 2%;
    margin-bottom:15%;
    justify-content:center;
`;

export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:45%;
    /* background-color:yellow; */
    margin-top:1%;
    margin-bottom:20%;
`;

export const TextInfo = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top:1%;
    margin-bottom:10%;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
`;
export const ResetCodeButton = styled.TouchableOpacity`
    width:80%;
    height:8%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 6%;
    margin-bottom:28%;
    justify-content:center;

`;

export const TextResetCode = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;

export const TextMsg = styled.Text`
    font-size:25px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;


export const InputData = styled.TextInput`
    height:15%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:80%;
    margin-left:10%;
    margin-top:5%;
    color:#898989;
    font-size:18px;
    border-radius:4px;
`;
