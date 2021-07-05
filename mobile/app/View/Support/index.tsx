import React from 'react';
import { View, Text} from 'react-native';
import { Container } from './styles';

import ServicesComponent from '../../Components/ServicesComponent';

interface Buttons{
  msg:string;
  icon:string;
  icon_pencil:boolean;
  navigateTo: string;
};


const buttons_view:Array<Buttons> = [
  {
      msg:'Notificações', 
      icon:'notifications', 
      icon_pencil:false,
      navigateTo: 'NotificationComponent'
  },
  {
      msg:'Novidades',
      icon:'stars', 
      icon_pencil:false,
      navigateTo: 'NewsComponent'
  },
  {
      msg:'Perguntas Frequentes',
      icon:'live-help',
      icon_pencil:false,
      navigateTo: 'FAQComponent'
  },
  {
      msg:'Termos de Uso', 
      icon:'import-contacts', 
      icon_pencil:false,
      navigateTo: 'TermsOfUsageComponent'
  },
  {
      msg:'Fale Conosco', 
      icon:'import-contacts', 
      icon_pencil:false,
      navigateTo: 'Support'
  }
]


const Support: React.FC = ({navigation}:any) => {
  return(
      <Container>
        <ServicesComponent route={{params:{buttonsArray:buttons_view, titlePage:'' }}} navigation={navigation}/>
      </Container>
  );
}

export default Support;