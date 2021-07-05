import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ViewInfoProfessional = styled.View`
    flex-direction: column;
    width: 100%;
    height: 20%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const AvatarImage = styled.Image`
    height: 50%;
    width: 30%;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: black;
    margin-top:3%;
    margin-bottom:3%;
`;

export const ContainerAvatar = styled.View`
    margin-top:10%;
    flex-direction: column;
    width: 100%;
    height: 40%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const ViewExperience = styled.View`
    margin-top:1%;
    flex-direction:column;
    height:20%;
    width: 100%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;
export const TextExperience  = styled.Text`
    text-align:center;
    font-size: 17px;
    font-weight:bold;
    color: black;
`;


export const ViewAddressProfessional = styled.View`
    margin-top:1%;
    flex-direction:column;
    height:20%;
    width: 100%;
    background-color: transparent;
    justify-content:center;
    align-items:center;
`;

export const TextAddress  = styled.Text`
    text-align:center;
    font-size: 17px;
    font-weight:bold;
    color: black;
`;

export const ViewButton = styled.View`
    margin-top:1%;
    flex-direction:column;
    height:8%;
    width: 100%;
    background-color: transparent;
    justify-content:center;
    align-items:center;
`;

export const MessageButton = styled.TouchableOpacity`
    width: 80%;
    height: 60%;
    background-color:${theme.colors['default-yellow']};
    justify-content: center;
    border-radius:3px;
`;

export const TextButton = styled.Text`
    font-size:18px;
    color: white;
    font-weight: bold;
    text-align: center;
`;