import React, {useState} from 'react';
import { TextPassword } from '../Login/styles';


import { Container, InputData, TextButton, ButtonLogin, TextMsg } from './styles';

const RedefinePassword: React.FC = ({navigation}:any) => {

  const[ddd_number, onChangeNumber] = useState('');
  const[tel_number, onChangeTelNumber] = useState('');
  const[email, onChangeEmail] = useState('');

  return(
      <Container>
       <TextMsg>
         Alterar Senha
       </TextMsg>
        <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'Senha Atual'}
          />
        <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'Nova Senha'}
          />
        <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'Confirmar Senha'}
          />


          <ButtonLogin>
            <TextButton>
              Alterar Senha
            </TextButton>
          </ButtonLogin>

      </Container>
  );
}


export default RedefinePassword ;