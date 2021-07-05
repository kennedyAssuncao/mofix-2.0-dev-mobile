import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const BackImage = styled.ImageBackground`
    height:100%;
    justify-content:center;
    overflow: hidden;
    z-index: 0;
`;

export const ImageView = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
`;

export const ImagePrincipal = styled.Image`
  flex:1;
  height:null;
  width: null;
`;
//export const ButtonLogin = styled.TouchableOpacity`
export const ButtonLogin = styled.TouchableHighlight`
    background-color: #dbac00;
    width:80%;
    height:25%;
    border-radius:6px;
    margin-left:10%;
    margin-top: 2%;
    margin-bottom:2%;
    justify-content:center;
`;

export const ViewButton = styled.View`
    flex-direction:column-reverse;
    width:100%;
    height:30%;
    margin-top:10%;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

export const CarouselView = styled.View`
    margin-top:60%;
    justify-content:center;
    align-items:center;
    z-index: 0;
`;

export const ViewMsg = styled.View`
    justify-content:center;
    align-items:center;
`; 

export const TextMsg = styled.Text`
    font-size:14px;
    color:black;
    text-align:center;
    font-weight:bold;
`;


