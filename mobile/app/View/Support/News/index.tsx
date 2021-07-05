import React, {useState} from 'react';
import { Container, TextMsg, NavigationButton, ViewIcons, TextButton, ButtonLogin } from './styles';
import { MaterialIcons, } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const News: React.FC = ({navigation}:any) => {

  return(
    <Container>
    <WebView
      style={{ marginTop: '5%' }} 
      source={{ uri: 'http://www.a6i.com.br/smg-api/?p=gui/bs&q=mofix/news' }} />
</Container>
  );
}


export default News ;