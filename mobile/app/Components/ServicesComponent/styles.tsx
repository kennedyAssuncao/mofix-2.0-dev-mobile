
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #F2F3F4;
`;

export const InputData = styled.TextInput`
    height:6%;
    border-width:0.4px;
    border-color:#898989;
    background-color:white;
    width:80%;
    margin-left:10%;
    margin-top:5%;
    color:#898989;
    font-size:16px;
    border-radius:4px;
    elevation:4;
    margin-bottom:2%;
`;


//export const ButtonLogin = styled.TouchableHighlight`
export const Buttons = styled.TouchableOpacity`
    background-color: white;
    elevation:5;
    width:80%;
    height:5%;
    border-radius:2px;
    margin-left:10%;
    margin-top: 5%;
    margin-bottom:2%;
    justify-content:center;
`;

export const TextButton = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: black;
    text-align: center;
    width:80%;
`;

export const TextMsg = styled.Text`
    margin-top:10%;
    margin-bottom:4%;
    font-size:18px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

export const ViewIcons = styled.View`
    height:90%;
    align-items:center;
    flex-direction:row;
    margin-left:5%;
`;