import React,{useState} from 'react';

import { 
    Container,
    ImageView,
    ImagePrincipal,
    TextMsg,
    ViewButton,
    InputData,
    ButtonLogin,
    TextButton,
    TextInfo,
} from './styles';

const PasswordRecovery: React.FC = ({navigation}:any) => {
    const[email, onChangeEmail] = useState('');
  
    return(
      <Container>
          <ImageView>
              <ImagePrincipal
                  source={require('../../Images/icone_branco.jpg')}
                  resizeMode={'center'}
              />
              <TextMsg>
                  Esqueceu sua senha?
              </TextMsg>
              <TextInfo>
                  Informe seu e-mail de cadastro {'\n'} para resgatar sua senha.
              </TextInfo>
              
          </ImageView>
          <ViewButton>
                <InputData 
                  textAlign={'center'}
                  onChangeText={text => onChangeEmail(text)}
                  value={email}
                  placeholder={'Digite o seu e-mail cadastrado.'}
                />

                <ButtonLogin>
                  <TextButton>
                      Entrar
                  </TextButton>
              </ButtonLogin>
          </ViewButton>
  
      </Container>
    );


}

export default PasswordRecovery;