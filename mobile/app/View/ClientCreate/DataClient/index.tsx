import React, {useState} from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

import { 
    Container,
    ImagePrincipal,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    InputData,
} from './styles';

interface Client {
    phoneNumber: string;
    email: string;
    fullName: string;
    password: string;
}


const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const verify_values:any = (pass:any, confPass:any) =>{
    return pass === confPass;
}

const verifyEmptyOrNullFields: any = (fullName: string, password: string, confPass: string) => {
    return (!fullName && !password && !confPass);
}


const DataClient: React.FC = ({navigation, route}:any) => {

  const[password, onChangePassword] = useState('');
  const[conf_password, onChangePasswordConf] = useState('');
  const[name, onChangeName] = useState('');

  const {user_type}:any = route.params;  

  return(
    <Container>
        <ImageView>
            <ImagePrincipal
                source={require('../../../Images/icone_branco.jpg')}
                resizeMode={'center'}
            />
            <TextMsg>
                {frase(user_type)}, continue o seu cadastro!
            </TextMsg>
        </ImageView>
        <ViewButton>

            <ButtonLogin
                onPress={()=>{
                    let { client_obj } = route.params;

                    let client: Client = {
                        phoneNumber: client_obj.ddd_num + " " +client_obj.tel_num,
                        fullName: name,
                        email: client_obj.email_client,
                        password: password
                    };

                    if(verifyEmptyOrNullFields(name, password, conf_password) == true){
                        Alert.alert("Erro ao realizar cadastro", "Para realizar o cadastro preencha todos os campos!!");
                    }else {
                        if(verify_values(password, conf_password) == true) {
                            navigation.navigate('SucessCreate', {user_type:user_type, client}) 

                        }else{
                            Alert.alert("Error", "As senhas digitadas devem ser iguais!")
                        }
                    }
                }}
            >
                <TextButton>
                    Criar Cadastro!
                </TextButton>
            </ButtonLogin>
           
            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangePasswordConf(text)}
                value={conf_password}
                placeholder={'Confirmar Senha'}
                secureTextEntry={true}
            />

            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangePassword(text)}
                value={password}
                placeholder={'Senha'}
                secureTextEntry={true}
            />

            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangeName(text)}
                value={name}
                placeholder={'Nome Completo'}
            />
        </ViewButton>

    </Container>
  );
}

export default DataClient;