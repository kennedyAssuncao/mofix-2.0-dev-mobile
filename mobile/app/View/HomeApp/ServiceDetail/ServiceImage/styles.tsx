import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: #F2F3F4;
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


export const NavigationButton = styled.TouchableOpacity`
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

//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonLogin = styled.TouchableOpacity`
    background-color: #dbac00;
    width:80%;
    height:6%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 5%;
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
    margin-top:15%;
`;

export const TextButtonFacebook = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-top:4%;
`;

export const TextButton = styled.Text`
    font-size:16px;
    font-weight: bold;
    color: white;
    text-align: center;
`;


export const PasswordButton = styled.TouchableOpacity`
    width:80%;
    height:8%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 0.2%;
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
margin-top:10%;
margin-bottom:4%;
margin-left: 10%
width:80%;
font-size:18px;
font-weight: bold;
color: black;
text-align: center;
`;


export const Teste = styled.Text`
margin-top:10%;
margin-bottom:4%;
margin-left: 10%
font-size:18px;
font-weight: bold;
color: black;
text-align: center;
`;

export const SubTextMsg = styled.Text`
margin-top:3%;
margin-bottom:4%;
font-size:18px;
font-weight: normal;
color: black;
text-align: center;
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

export const MultiLineInputData = styled.TextInput`
    height:15%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:80%;
    margin-left:10%;
    margin-top:5%;
    color:#898989;
    font-size:16px;
    border-radius:4px;
    editable
`;

export const ItemsPicker = styled.Picker`
    height:7%;
    border-bottom-width:1px;
    border-color:#898989;
    background-color:#d8d8d8;
    width:80%;
    margin-left:10%;
    color:#898989;
`;

export const ImageAvatar = styled.Image`
  height:20%;
  width: 30%;
  marginTop:10%;
  margin-left: 35%;
  alignItems: center;
  justifyContent: center;
  background-color: #F2F3F4;
  
`;

export const ViewIcons = styled.View`
    height:90%;
    align-items:center;
    flex-direction:row;
    justify-content: space-between;
    margin-left:5%;
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
    padding-top: 6%;
    flex-direction:row-reverse;
`;

export const ViewCheckBox = styled.View`
    flex-direction:row;
    width:80%;
    height:20%;
    justify-content: center;
    margin-top: -5%
    margin-bottom: -20%;
`;

export const TextInfoCheckbox = styled.Text`
    font-size:16px;
    font-weight: normal;
    color: black;
    text-align: center;
    margin-top:6%;
    margin-bottom:5%;
`;

export const TecVistText = styled.Text`
    font-size:16px;
    font-weight: normal;
    color: black;
    text-align: center;
    margin-top:6%;
    margin-bottom:5%;
    margin-left: 20%
`;

export const TecVisitButton = styled.TouchableOpacity`
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

export const ViewAddPhotoContainer = styled.View`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
`;


export const ButtonAddPhoto = styled.TouchableOpacity`
    background-color: white;
    border-radius:6px;
    margin-left:30%;
    margin-top: 5%;
    margin-bottom:2%;
    width: 40%
    height:70%;
    justify-content:center;
`;


export const ImagePhoto = styled.Image`
  height:100%;
  width: 40%;
  flex:1;
  margin-left:30%;
`;



