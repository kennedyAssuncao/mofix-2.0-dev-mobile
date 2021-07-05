import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

//export const ButtonLogin = styled.TouchableHighlight`
export const ButtonFilter = styled.TouchableOpacity`
    width:24.85%;
    height:100%;
    background-color: white;
    justify-content: center;
    margin-right:0.2%;
`;

export const ViewButton = styled.View`
    flex-direction:row;
    width: 90%;
    height: 6%;
    margin: 5%;
    background-color: ${theme.colors['default-yellow']};
    align-items: center;
    padding: 0.2%;
`;

export const TextButton = styled.Text`
    font-size:12px;
    font-weight: bold;
    color: black;
    text-align: center;
`;


export const TypeService = styled.Text`
    font-size:15px;
    font-weight: bold;
    color: black;
    text-align: left;
    margin:0.4px;
`;

export const ServiceDisc = styled.Text`
    font-size:14px;
    font-weight: bold;
    color: black;
    text-align:left;
    margin:0.6px;
`;

export const Value = styled.Text` 
    font-size:15px;
    font-weight: bold;
    color: ${theme.colors['default-green']};
    text-align: left;
    margin:0.6px;
`;

export const TextProfessional = styled.Text`
    font-size:14px;
    font-weight: bold;
    color: ${theme.colors['default-yellow']};
    text-align:left;
    margin:0.6px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    height:110px;
    width:100%;
    background-color: white;
    border-radius:4px;
    margin-top:8px;
    elevation:3;
    flex-direction:row;

`;

export const DataContainer = styled.View`
    width: 23%;
    height:100%;
    background-color: transparent;
    flex-direction:column;
    justify-content:center;
`;

export const InfoContainer = styled.View`
    width: 100%;
    height:100%;
    background-color: transparent;
    flex-direction:column;
    justify-content:center;
    margin-top: 5px;
`;

export const ServiceContainer = styled.View`
    flex-direction:row;
`;


export const ColorTypeService = styled.Text`
    font-size:15px;
    font-weight: bold;
    text-align: left;
    margin:0.4px;
`;

export const DayColor = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-top:8px;
`;


export const MonthColor = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin:0.2px;
`;

export const HoursColor = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin:0.2px;
`; 

export const ViewList = styled.SafeAreaView`
    background-color:transparent;
    height:90%;
`;

export const ViewAvatarInfo = styled.View`
    background-color: transparent;
    flex-direction: row;
    width: 70%;
    height: 40%;
`;

export const AvatarImage = styled.Image`
    width: 20%;
    height: 90%;
`;

export const InfoProfessionalContainer = styled.View`
    flex-direction:column;
    background-color: transparent;
    padding-left: 5px;
`;