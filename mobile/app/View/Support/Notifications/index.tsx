import React, {useState} from 'react';
import { Container, TextMsg, NavigationButton, ViewIcons, TextButton, ButtonLogin } from './styles';
import { WebView } from 'react-native-webview';


const Notification: React.FC = ({navigation}:any) => {

  return(
    <WebView 
    style={{ marginTop: '5%' }}
    source={{ uri: 'http://www.a6i.com.br/smg-api/?p=gui/bs&q=mofix/notification' }} />
  );
}


export default Notification ;