
import React from 'react';
import styled from 'styled-components/native';

import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
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

export const TextImage = styled.Text`
    text-align:center;
    font-size:20px;
    position: relative;
    font-weight:bold;
    color:white;
    margin-top:15%;
`;

export const TextValue = styled.Text`
    width:60%;
    background:white;
    font-size:16px;
    text-align:center;
    font-weight:bold;
    color:black;
    border-radius:2px;
`;

export const ImageContainer = styled.TouchableOpacity`
    height:150px;
    width:100%;
    margin:8px;
    background-color:black;
    border-radius:10px;
    elevation:3;
`;

export const BackImage = styled.ImageBackground`
    height:100%;
    /* opacity:0.77; */
    opacity:0.80;
    justify-content:center;
    border-radius:6px;
    overflow: hidden;
    elevation:3;
`;


export const ViewText = styled.View`
    align-items:center;
    margin-top:5%;
`;