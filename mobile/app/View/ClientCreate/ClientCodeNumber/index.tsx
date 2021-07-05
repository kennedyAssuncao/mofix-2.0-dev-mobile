import React, {useState} from 'react';
import { Alert, View } from 'react-native';

import { 
    Container,
    ImagePrincipal,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    InputData,
    ResetCodeButton,
    TextResetCode,
    TextInfo,
} from './styles';


const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}


const ClientCodeNumber: React.FC = ({navigation, route}:any) => {

  const[code, onChangeCode] = useState('');

  const {user_type, ddd, tel, email}:any = route.params;  

  interface Client{
    email_client: string;
    ddd_num: string;
    tel_num: string;

  }

  //const value:number = user_type;


  return(
    <Container>
        <ImageView>
            <ImagePrincipal
                source={require('../../../Images/icone_branco.jpg')}
                resizeMode={'center'}
            />
            <TextMsg>
                Crie seu cadastro {frase(user_type)}!
            </TextMsg>
            <TextInfo>
                Enviamos um código de confirmação{'\n'}para o número ({ddd}) {tel}.{'\n'}Digite o código no campo abaixo.
            </TextInfo>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}
            <ButtonLogin
                onPress={()=>{
                    let valid_obj: any = {
                        code: code,
                    }
                    let client_obj:Client ={
                        email_client: email,
                        ddd_num:ddd, 
                        tel_num: tel
                    }
                    
                    navigation.navigate('DataClient',{user_type:user_type, client_obj})
                    
                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>


            {/*
                Ao se clicar, deverá ser feita a requisição de reenvio do código e 
                também mostrar um botão de pop-up informando que o novo código 
                já foi reenviado para o cliente/trabalhador.
            */}
            <ResetCodeButton
                onPress={()=>{
                        //Envio de objeto para o recebimento de msg com o código de confirmação.
                        let client_obj:Client ={
                            email_client: email,
                            ddd_num:ddd, 
                            tel_num: tel
                        }
                    
                        console.log('client_obj: ', client_obj)
                        console.log('client_obj: ', client_obj)
                    
                        //enviar objeto para a api e ir para outra tela...
                        //inserir o endpoint da api aqui.
                }}
            >
                <TextResetCode>
                    Reenviar o código
                </TextResetCode>
            </ResetCodeButton>


            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangeCode(text)}
                value={code}
                placeholder={'Código de Confirmação'}


            />

        </ViewButton>

    </Container>
  );
}

export default ClientCodeNumber;