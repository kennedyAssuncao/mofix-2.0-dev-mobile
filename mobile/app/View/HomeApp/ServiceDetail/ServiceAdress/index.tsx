import React, {useState} from 'react';
import { 
  Container, 
  TextMsg,
   NavigationButton, 
   ViewIcons, 
   TextButton, 
   ButtonLogin,
   TextButtonConfirm,
 } from './styles';
import { MaterialIcons, } from '@expo/vector-icons';


const ServiceAddress: React.FC = ({navigation}:any) => {

  return(
      <Container>
        <TextMsg>
          Selecione o endereço do serviço
        </TextMsg>


        <NavigationButton
          style={{ marginTop: '20%'}}
          onPress={() =>
            // console.log('click')
            navigation.navigate('')
          }
      >
        <ViewIcons>
          <MaterialIcons
              name= 'notifications' 
                size={24} 
                color="black"
                
          />
          <TextButton>Cadastrar um novo endereço</TextButton>
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="black" 
            style={{ marginRight: '5%' }}
          />
        </ViewIcons>
      </NavigationButton>

      <ButtonLogin>
        <TextButtonConfirm>
          Confirmar
        </TextButtonConfirm>
      </ButtonLogin>
        
      </Container>
  );
}


export default ServiceAddress ;