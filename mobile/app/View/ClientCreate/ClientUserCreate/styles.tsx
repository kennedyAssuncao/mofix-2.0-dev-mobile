
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:22%;
    /* background-color:red; */
    margin-top:40%;
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
export const ButtonFaceBook = styled.TouchableOpacity`
    background-color: #3f65a6;
    width:80%;
    height:15%;
    border-radius:4px;
    margin-left:10%;
    margin-top: 2%;
    margin-bottom:2%;
    justify-content:center;
    flex-direction:row;
`;

export const ImageFacebook = styled.Image`
  height:100%;
  width: 20%;
  margin-left:-11%;
`;

export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:40%;
    /* background-color:yellow; */
    margin-top:5%;
`;

export const TextButtonFacebook = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-top:4%;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
`;
export const PasswordButton = styled.TouchableOpacity`
    width:80%;
    height:8%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 0.02%;
    margin-bottom:2%;
    justify-content:center;

`;

export const TextPassword = styled.Text`
    font-size:12px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;

export const TextMsg = styled.Text`
    font-size:22px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;

// export const InputData = styled.TextInput`
//     height:15%;
//     border-width:1;
//     background-color:#eeeeee;
//     width:80%;
//     margin-left:10%;
//     margin-top:3%;
//     border-radius:4;
// `;

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

export const InputDDD = styled.TextInput`
    height:80%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:20%;
    margin-right:1%;
    margin-top:1%;
    border-radius:4px;
    color:#898989;
`;

export const InputNumberTel = styled.TextInput`
    height:80%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:59%;
    margin-right:10%;
    margin-top:1%;
    border-radius:4px;
    color:#898989;
`;

export const TelView = styled.View`
    flex-direction:row-reverse;
`;