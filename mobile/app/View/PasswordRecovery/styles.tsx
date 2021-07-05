
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: white;
`;

export const ImageView = styled.View`
    width:100%;
    height:28%;
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


export const ViewButton = styled.View`
    flex-direction:column;
    width:100%;
    height:30%;
    /* background-color:yellow; */
    margin-top:5%;
`;

export const TextButton = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

export const TextMsg = styled.Text`
    font-size:26px;
    font-weight: bold;
    color: #DAA520;
    text-align: center;
`;

export const InputData = styled.TextInput`
    height:18%;
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


export const TextInfo = styled.Text`
    font-size:14px;
    font-weight: bold;
    color: black;
    text-align: center;
`;