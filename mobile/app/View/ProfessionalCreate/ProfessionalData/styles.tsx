
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
    margin-top: 40%;
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

export const TextImageClick = styled.Text`
    color:#898989;
    text-align:center;
    font-size: 16px;
    margin-left:10%;
`;

export const ViewImageClick = styled.View`
    margin-left:10%;
    flex-direction:row;
    align-items:center;
`;

export const ImageButtonClick = styled.TouchableOpacity`
    background-color:#d8d8d8;
    width:80%;
    height:16%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 6%;
    justify-content:center;

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
