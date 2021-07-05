
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:15%;
    /* background-color:red; */
    margin-top:10%;
    margin-bottom:-10%;
`;


//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonLogin = styled.TouchableOpacity`
    background-color: #dbac00;
    width:80%;
    height:7%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 60%;
    margin-bottom:15%;
    justify-content:center;
`;

export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:90%;
    /* background-color:yellow; */
    margin-top:1%;
    margin-bottom:20%;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

export const TextMsg = styled.Text`
    font-size:22px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
    margin-top:5%;
`;

export const InputData = styled.TextInput`
    height:7%;
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


export const TextMessage = styled.Text`
    margin-top:5%;
    font-size:18px;
    color:black;
    font-weight:bold;
    text-align:center;
`;

export const SelectionBank = styled.Picker`
    height:7%;
    width:80%;
    margin-left:10%;
    margin-top:5%;
    background-color:#d8d8d8;
    border-color:#898989;
    border-bottom-width:1px;
    font-size:18px;
    border-radius:4px;
    color:#898989;
    align-items:center;
`;
