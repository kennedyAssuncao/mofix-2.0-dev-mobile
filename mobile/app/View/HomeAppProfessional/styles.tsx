import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';

export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ViewItem = styled.TouchableOpacity`
    height: 120px;
    width: 100%;
    background-color:white;
    margin-bottom: 2%;
    flex-direction:row;
    elevation:3;
    justify-content:center;
    padding:3%;
`;


export const ViewTitle = styled.View`
    height:8%;
    width:100%;
    align-items: center;
    justify-content: center;
    margin-bottom:2%;
`;

export const TextTitle = styled.Text`
    font-size: 20px;
    font-weight:bold;
    text-align:center;
    color: black;
`;

export const ViewInfo = styled.View`
    flex-direction:column;
    width:70%;
    padding:2%;
    justify-content:center;
`

export const TitleService = styled.Text`
    color:${theme.colors['default-yellow']};
    font-size:15px;
    font-weight:bold;
`;

export const ViewImage = styled.ImageBackground`
    width:30%;
    justify-content:center;
    overflow: hidden;
    align-items: center;
`;

export const TextInfo = styled.Text`
    font-size:13px;
    font-weight:bold;
`;

export const TextInfoColor = styled.Text`
    font-size:13px;
    font-weight:bold;
    color:${theme.colors['default-green']};
`;

export const TextContainer = styled.View`
    flex-direction:row;
`;