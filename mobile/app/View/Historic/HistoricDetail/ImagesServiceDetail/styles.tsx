import React from 'react';
import styled from 'styled-components/native';

import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ViewImagesContainer = styled.View`
    flex-direction:row;
    background-color: transparent;
    height:25%;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`; 

export const ImageService = styled.Image`
    height: 90%;
    width: 30%;
    margin: 3%;
    elevation:2;
`;

export const ImageIconView = styled.View`
    height: 90%;
    width: 30%;
    margin: 3%;
    align-items: center;
    justify-content: center;
    border-width:2px;
    border-color:  ${theme.colors['default-gray']};
    elevation:2;
`;



export const ViewTextContainer = styled.View`
    background-color: transparent;
    height:10%;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-top: 3%;

`; 


export const TextTitle = styled.Text`
    font-size:15px;
    text-align: center;
    font-weight: bold;
    color: black;
`;

export const ViewButtonsContainer = styled.View`
    flex-direction:column;
    background-color: transparent;
    height:25%;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
`; 

export const ButtonImagesService = styled.TouchableOpacity`
    height: 20%;
    width: 80%;
    justify-content: center;
    text-align: center;
    margin-top: 4%;
    border-radius: 4px;
`;

export const TextButton = styled.Text`
    font-size:16px;
    text-align: center;
    font-weight: bold;
    color: white;
`;


export const ViewModal = styled.View`
    flex:1;
    background-color: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
`;

export const ViewModalAlert = styled.View`
    height: 30%;
    width: 70%;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

export const AlertButton = styled.TouchableOpacity`
    height: 20%;
    width: 95%;
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
    background-color: ${theme.colors['default-yellow']};
`;

export const TitleAlertView = styled.View`
    height: 15%;
    width: 100%;
    justify-content:center;
    align-items:center;
    background-color: ${theme.colors['default-green']};
`; 

export const DescriptionAlertView = styled.View`
    height: 15%;
    width: 100%;
    justify-content:center;
    align-items:center;
    background-color: transparent;
`; 

export const TextDescription = styled.Text`
    font-size:15px;
    text-align: center;
    font-weight: bold;
    margin-top:3%;
    color: ${theme.colors['default-green']};
`;

export const InfoOperatorAlertView = styled.View`
    height: 50%;
    width: 100%;
    justify-content:center;
    align-items:center;
    background-color: transparent;
    flex-direction: row;
`;

export const AvatarImage = styled.Image`
    height: 60%;
    width: 25%;
`;

export const NameStatusProfessional = styled.View`
    height:60%;
    width: 60%;
    background-color:transparent;
    align-items: flex-start;
    flex-direction: column;
    padding-left:4%;
`; 

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: black;
`;