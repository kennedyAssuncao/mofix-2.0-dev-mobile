import React from 'react';
import styled from 'styled-components/native';

import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ViewInfoProfessional = styled.View`
    flex-direction: column;
    width: 40%;
    height: 60%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
    width: 80%;
    height: 30%;
    margin-top: 3%;
    background-color: black;
    justify-content: center;
`;

export const ButtonName = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 12px;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: black;
`;

export const AvatarImage = styled.Image`
    height: 60%;
    width: 25%;
`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    width: 100%;
    height: 20%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    padding:2%;
    border-bottom-width:0.2px;
`;

export const ViewServiceInfo = styled.View`
    flex:1;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    margin:4%;
`;

export const TextInfo = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: black;
`;

export const ServiceBlock = styled.View`
    margin: 3px;
    height: 6%;
    width: 90%;
    background-color: ${theme.colors['default-gray']};
    align-items:center;
    justify-content:center;
    margin-bottom: 8%;
    margin-top:3%;
`;

export const ClickView = styled.View`
    margin: 3px;
    height: 6%;
    width: 90%;
    background-color:transparent;
    align-items:center;
    justify-content:center;
    margin-bottom: 6%;
    margin-top:3%;
    flex-direction: row;
`;

