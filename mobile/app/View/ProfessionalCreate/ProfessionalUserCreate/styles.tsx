import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:50%;
    /* background-color:red; */
    margin-top:10%;
`;

//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonLogin = styled.TouchableOpacity`
    background-color: #dbac00;
    width:80%;
    height:15%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 8%;
    margin-bottom:10%;
    justify-content:center;
`;


//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonImageCreate = styled.TouchableOpacity`
    width:60%;
    height:60%;
    border-radius:100px;
    justify-content:center;
    flex-direction:row;
    align-items:center;
`;

export const ButtonImageView = styled.View`
    /* background-color: brown; */
    width:80%;
    height:80%;
    margin-left:10%;
    margin-top: 2%;
    margin-bottom:2%;
    flex:1;
    align-items:center;
    justify-content:center;
`;


export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:40%;
    /* background-color:yellow; */
    margin-top:0%;
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
`;

export const InputData = styled.TextInput`
    height:15%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:80%;
    margin-left:10%;
    margin-top:2%;
    color:#898989;
    font-size:18px;
    border-radius:4px;
`;


export const InputDDD = styled.TextInput`
    height:80%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:20%;
    margin-right:1%;
    margin-top:2%;
    border-radius:4px;
`;

export const InputNumberTel = styled.TextInput`
    height:80%;
    border-color:#898989;
    border-bottom-width:1px;
    background-color:#d8d8d8;
    width:59%;
    margin-right:10%;
    margin-top:2%;
    border-radius:4px;
`;

export const TelView = styled.View`
    flex-direction:row-reverse;
`;

export const ImagePhoto = styled.Image`
  height:100%;
  width: 80%;
  flex:1;
  margin-left:6.5%;
`;