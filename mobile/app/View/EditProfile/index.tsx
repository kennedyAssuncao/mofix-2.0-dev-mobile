import React, {useState} from 'react';
import { TextPassword } from 'apk/View/Login/styles';


import { 
  Container, 
  ImageAvatar, 
  TelView, 
  InputDDD, 
  InputData, 
  InputNumberTel, 
  PasswordButton, 
  TextButton, 
  ButtonLogin 
} from './styles';

const EditProfile: React.FC = ({navigation}:any) => {

  const[ddd_number, onChangeNumber] = useState('');
  const[tel_number, onChangeTelNumber] = useState('');
  const[email, onChangeEmail] = useState('');

  return(
      <Container>
        <ImageAvatar
          resizeMode={'contain'} 
          source={require('apk/Images/avatar.png')}
      />

        <PasswordButton>
          <TextPassword>
            Alterar Imagem
          </TextPassword>
        </PasswordButton>
        
        <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'Nome'}
          />
        <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'E-mail'}
          />
          <TelView>
                <InputNumberTel
                    keyboardType={'number-pad'}
                    textAlign={'center'} 
                    onChangeText={text => onChangeTelNumber(mask(text,['9999-9999', '99999-9999']))}
                    placeholder={'Número'}
                />

                <InputDDD
                    keyboardType={'number-pad'}
                    textAlign={'center'}
                    placeholder={'DDD'} 
                    onChangeText={text => onChangeNumber(mask(text,['99']))}
                />
          </TelView>
          <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'CPF'}
          />
          <InputData 
              textAlign={'center'}
              onChangeText={text => onChangeEmail(text)}
              placeholder={'RG'}
          />

          <ButtonLogin>
            <TextButton>
              Alterar Imagem
            </TextButton>
          </ButtonLogin>

      </Container>
  );
}


export default EditProfile ;