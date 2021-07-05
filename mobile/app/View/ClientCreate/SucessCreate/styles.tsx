
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
    margin-top:30%;
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
    margin-top: 2%;
    margin-bottom:2%;
    justify-content:center;
`;


//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonPhoto = styled.TouchableOpacity`
    background-color: white;
    width:60%;
    height:50%;
    border-radius:4px;
    margin-left:20%;
    margin-top: 2%;
    margin-bottom:4%;
    justify-content:center;
    flex-direction:row;
`;

export const ImagePhoto = styled.Image`
  height:100%;
  width: 80%;
  flex:1;
  margin-left:6.5%;
`;


export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:50%;
    /* background-color:yellow; */
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
    font-size:15px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin-top:6%;
    margin-bottom:10%;
`;


export const TextMsg = styled.Text`
    font-size:22px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;

export const InputData = styled.TextInput`
    height:15%;
    border-width:1;
    background-color:#eeeeee;
    width:80%;
    margin-left:10%;
    margin-top:3%;
    border-radius:4;
`;

export const ViewCheckBox = styled.View`
    flex-direction:row;
    width:100%;
    height:20%;
    /* background-color:green; */
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
    font-size:16px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;