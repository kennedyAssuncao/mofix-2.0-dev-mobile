import React, {useState} from 'react';
import { Alert, View } from 'react-native';

import { 
    Container,
    ImagePrincipal,
    ImageView,
    TextMsg,
    TextButton,
    ButtonFaceBook,
    ViewButton,
    ButtonLogin,
    TelView,
    InputData,
    InputDDD,
    ImageFacebook,
    TextButtonFacebook,
    InputNumberTel,
} from './styles';

import {mask} from 'remask';

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const facebook:any = (value:number)=>{
    return(
        value == 1?
            // <ViewButtonFaceBook>
                <ButtonFaceBook>
                    <ImageFacebook 
                    source={require('../../../Images/facebook.png')}
                    resizeMode={'center'}
                    />
                    <TextButtonFacebook>
                        Entre com seu Facebook
                    </TextButtonFacebook>
                </ButtonFaceBook>:null
            // </ViewButtonFaceBook>:null
        
    );
}


const ClientUserCreate: React.FC = ({navigation, route}:any) => {

  const[ddd_number, onChangeNumber] = useState('');
  const[tel_number, onChangeTelNumber] = useState('');
  const[email, onChangeEmail] = useState('');

  const {user_type}:any = route.params;  

  interface Client{
    email_client: string;
    ddd_num: string;
    tel_num: string;

  }

  return(
    <Container>
        <ImageView>
            <ImagePrincipal
                source={require('../../../Images/icone_branco.jpg')}
                resizeMode={'center'}
            />
            <TextMsg>
                Crie seu cadastro {frase(user_type)}
            </TextMsg>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}
            <ButtonLogin
                onPress={()=>{

                    //Envio de objeto para o recebimento de msg com o código de confirmação.
                    let client_obj:Client ={
                        email_client: email,
                        ddd_num:ddd_number, 
                        tel_num: tel_number
                    }

                    if(!client_obj.email_client && !client_obj.ddd_num && !client_obj.tel_num){
                        Alert.alert('Erro ao cadastrar', 'Para prosseguir com o cadastro, você deve preencher todos os campos')
                    
                    }else {
                        navigation.navigate('ClientCodeNumber', {user_type:user_type, ddd:ddd_number, tel: tel_number, email: email})
                    }

                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>

            <TelView>
                <InputNumberTel
                    keyboardType={'number-pad'}
                    textAlign={'center'} 
                    onChangeText={text => onChangeTelNumber(mask(text,['9999-9999', '99999-9999']))}
                    value={tel_number}
                    placeholder={'Número'}
                />

                <InputDDD
                    keyboardType={'number-pad'}
                    textAlign={'center'}
                    placeholder={'DDD'} 
                    onChangeText={text => onChangeNumber(mask(text,['99']))}
                    value={ddd_number}
                />
            </TelView>

            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangeEmail(text)}
                value={email}
                placeholder={'E-mail'}
            />

            {facebook(user_type)}
        </ViewButton>

    </Container>
  );
}

export default ClientUserCreate;