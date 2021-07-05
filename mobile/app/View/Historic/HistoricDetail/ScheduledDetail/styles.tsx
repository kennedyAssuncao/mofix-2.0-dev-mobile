import React from 'react';
import styled from 'styled-components/native';
import theme from 'root/theme.json';


export const Container = styled.View`
  flex:1;
  background-color: ${theme.colors['default-white']};
`;

export const ContainerProfessionals = styled.View`
  flex-direction:column;
  height: 40%;
  width: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const TextName = styled.Text`
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: black;
`;

export const ViewIcon = styled.View`
    height:15%;
    margin-top: 3%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const ViewProfessional = styled.View`
    height:80%;
    width: 95%;
    flex-direction: row;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const AvatarImage = styled.Image`
    height: 60%;
    width: 25%;
    margin-left: 2%;
`;

export const DetailButton = styled.TouchableOpacity`
    width: 80%;
    height: 45%;
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

export const ViewInfoProfessional = styled.View`
    flex-direction: column;
    width: 40%;
    height: 60%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const ViewButons = styled.View`
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:35%;
`;

export const ButtonsAvatar = styled.TouchableOpacity`
  height: 30%;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-top:10%;
`; 


export const ViewAvatarColumn = styled.View`
  flex-direction: column;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-bottom-width: 0.2px;
  margin-bottom: 2%;
`;

export const TextDataAvatar = styled.Text`
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    color: black;
`;


export const ViewText = styled.View`
    height: 20%;
    width: 100%;
    border-bottom-width: 0.2px;
    background-color: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:1%;
    border-top-width: 0.2px;
    border-bottom-width: 0.2px;
`;

export const TextArea = styled.View`
    margin-top: 0.8%;
    background-color: white;
    border-width: 0.2px;
    width: 70%;
    height: 60%;
    border-color: ${theme.colors['default-border-gray']};
    padding: 1%;
`;

export const TextDescription = styled.Text`
    font-size: 14px;
    font-weight:bold;
`;

export const ViewDateService = styled.View`
    width: 100%;
    height: 12%;
    border-bottom-width: 0.2px;
    margin-top:2%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`;

export const DataView = styled.View`
  justify-content:center;
  flex-direction: column;
  background-color: transparent;
  margin-left: 4%;
`;

export const TextData = styled.Text`
    font-weight: bold;
    font-size: 14px;
    text-align: left;
    color: black;
`;

export const ViewAddressService = styled.View`
    margin-top: 5%;
    width: 100%;
    height: 7%;
    border-bottom-width: 0.2px;

`;

export const TextAddress = styled.Text`
    margin-left: 2%;
    text-align: left;
    font-size: 14px;
    color: black;
    font-weight: bold;
`;
export const CreditCardView = styled.View`
    margin-top:5%;
    width: 100%;
    height: 6%;
`;

export const ViewServiceConfirm = styled.View`
    width: 100%;
    height: 4%;
    justify-content: center;
`;

export const TextServiceConfirmName = styled.Text`
    font-size: 17px;
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
    height: 25%;
    width: 70%;
    background-color: white;
    align-items:center;
`;

export const TitleAlertView = styled.View`
    height: 15%;
    width: 100%;
    margin-top:0%;
    align-items:center;
    justify-content: center;
`; 

export const TextButton = styled.Text`
    font-size:16px;
    text-align: center;
    font-weight: bold;
    color: white;
`;

export const DescriptionAlertView = styled.View`
    height: 15%;
    width: 100%;
    margin: 15%;
    justify-content:center;
    align-items:center;
    background-color: transparent;
`; 

export const TextDescriptionAlert = styled.Text`
    font-size:15px;
    text-align: center;
    font-weight: bold;
    margin-top:3%;
`;

export const AlertButton = styled.TouchableOpacity`
    height: 20%;
    width: 95%;
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
    background-color: ${theme.colors['default-yellow']};
`;