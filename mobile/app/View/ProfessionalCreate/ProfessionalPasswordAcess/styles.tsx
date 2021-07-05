
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:30%;
    /* background-color:red; */
    margin-top:35%;
`;

export const ImagePrincipal = styled.Image`
  flex:1;
  height:null;
  width: null;
  margin:10%;
`;
//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonLogin = styled.TouchableOpacity`
    background-color: #dbac00;
    width:80%;
    height:15%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 50%;
    margin-bottom:2%;
    justify-content:center;
`;

export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:50%;
    /* background:red; */
    margin-top:0%;
`;


export const TextButton = styled.Text`
    font-size:20px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

export const TextInfo = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top:1%;
    margin-bottom:10%;
`;


export const TextInfoCheckbox = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top:6%;
    margin-bottom:6%;
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
    margin-top:5%;
    color:#898989;
    font-size:18px;
    border-radius:4px;
`;
export const ViewCheckBox = styled.View`
    flex-direction:row;
    width:100%;
    height:20%;
    /* background-color:green; */
    margin-top:3%;
`;


export const TermsConfirmButton = styled.TouchableOpacity`
    width:32%;
    height:8%;
    border-radius:6px;
    margin-left:1%;
    margin-top:7.9%;
    margin-bottom:28%;
    justify-content:center;
`;

export const TermsConfirmText = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;