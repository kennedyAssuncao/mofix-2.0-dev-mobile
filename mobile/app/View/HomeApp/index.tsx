import React,{useState} from 'react';
import { onChange } from 'react-native-reanimated';

import { 
  Container, 
  InputData,

  ImageContainer,
  BackImage,
  TextImage,
  TextValue,
  ViewText,
} from './styles';


import { DataHome } from 'apk/tools';

//import ListComponent from '../../Components/ListComponent';

import { ScrollView } from 'react-native-gesture-handler';


interface Item{
  id: string | number; 
  titleItem: string;
  img: any;
  value:number;
  type:string;
};

interface Buttons{
  msg:string;
  icon:string;
  icon_pencil:boolean;
  navigateTo: string;
};


//Dados para teste da tela...



const buttons_view:Array<Buttons> = [
  {
      msg:'Descreva o serviço aqui', 
      icon:'add-circle', 
      icon_pencil:true,
      navigateTo: 'ServiceDescription'
  },
  {
      msg:'Imagem',
      icon:'camera-alt', 
      icon_pencil:true,
      navigateTo: 'ServiceImage'
  },
  {
      msg:'Data e Hora',
      icon:'date-range',
      icon_pencil:true,
      navigateTo: 'ServiceDateTime'

  },
  {
      msg:'Endereço', 
      icon:'location-on', 
      icon_pencil:true,
      navigateTo: 'ServiceAddress'
  },
  {
      msg:'Pagamento', 
      icon:'payment', 
      icon_pencil:true,
      navigateTo: 'ServiceDescription'
  }
]

const ListComponent=(props:Array<Item>,navigation:any) => {
  return(
      <ScrollView 
              style={{
                  height:'100%',
              }} 
              contentContainerStyle={{
                  paddingHorizontal:20, 
                  //paddingBottom:380, 
                  paddingBottom:5,
                  alignItems:"center",
              }}
              showsVerticalScrollIndicator={false}
      >
          {props.map((item) =>{
              return(
              <ImageContainer
                  onPress={()=>{
                      //  console.log('Apertou o component... id: ', item.id,'- Tipo: ', item.type);
                      navigation.navigate('ServicesComponent',{
                                                                buttonsArray: buttons_view,
                                                                type: item.type,
                                                                titlePage:'Detalhe seu serviço!',
                                                              }
                                          );
                  }}
              >
                  <BackImage
                      source={item.img}
                  >
                  <TextImage>
                      {item.titleItem}
                  </TextImage>
                      <ViewText>
                          <TextValue>
                              A partir de R${item.value},00
                          </TextValue>
                      </ViewText>
                  </BackImage>
              </ImageContainer>
              )
          })}
      </ScrollView>
    );
}


const HomeApp: React.FC = ({navigation}:any) => {
  const[option, onChangeOption] = useState('');
  
  const data = DataHome();

  return(
    <Container>
      <InputData 
        textAlign={'center'}
        onChangeText={text => onChangeOption(text)}
        value={option}
        placeholder={'Qual serviço você precisa?'}
      />

      {/* <ListComponent items={DATA} /> */}
      {ListComponent(data, navigation)}
      
    </Container>
  );
}

export default HomeApp;