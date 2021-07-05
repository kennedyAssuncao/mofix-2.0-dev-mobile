import React, {
    useState,
    useContext
} from 'react';
import { View, Modal, Text, Alert, TouchableHighlight } from 'react-native';
import axios from 'axios';

import { 
    Container,
    ImagePrincipal,
    ImageView,
    TextMsg,
    TextButton,
    ButtonFaceBook,
    ViewButton,
    ButtonLogin,
    TextPassword,
    PasswordButton,
    InputData,
    ImageFacebook,
    TextButtonFacebook,
} from './styles';

import UserContext from 'apk/Contexts/User';

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}
let success: boolean = false;

function login(email: string, password: string){
    axios
    .get(`http://www.a6i.com.br/smg-api/?p=api/user/login&username=${email}&password=${password}`)
    .then((response)=>{
        console.log(response);
        success = true;
    })
    .catch((error)=>{
        console.log(error);
    })

}



const facebook:any = (value:number, modalVisible:any)=>{
    return(
        value == 1?
            // <ViewButtonFaceBook>
                <ButtonFaceBook
                    onPress={()=>{
                        alert('apertou')
                    }}
                >
                    <ImageFacebook 
                    source={require('../../Images/facebook.png')}
                    resizeMode={'center'}
                    />
                    <TextButtonFacebook>
                        Entre com seu Facebook
                    </TextButtonFacebook>
                </ButtonFaceBook>:null
            // </ViewButtonFaceBook>:null
        
    );
}

const optionsButtons: any = (navigation:any, type:any)=>{

    return(
        <>
        <PasswordButton
            onPress={()=>{
                type == 1?
                navigation.navigate('ClientUserCreate',{user_type:type})
                :
                navigation.navigate('ProfessionalUserCreate',{user_type:type})
            }}
        >
            <TextPassword>
                Cadastre-se
            </TextPassword>
        </PasswordButton>

        <PasswordButton
            onPress={()=>{navigation.navigate('PasswordRecovery');}}
        >
            <TextPassword>
                Esqueceu sua Senha?
            </TextPassword>
        </PasswordButton>
        </>
    );
}

function checkEmptyOrNullFields(email: string, password: String){
    if(!email || !password){
        return Alert.alert('Erro ao realizar login', 'Para realizar login, preencha email e senha!')
    }
}

const Login: React.FC = ({navigation, route}:any) => {

  const[password, onChangePassword] = useState('');
  
  const[email, onChangeEmail] = useState('');

  //const {user_type}:any = route.params;  

  const { state, actions } = useContext(UserContext);
  //console.log('tipo...: ', typeUser);

  //const {user_type}:any = useContext(UserContext);
  
  const user_type:number = state.User.typeUser; 

  console.log(user_type);

  //const value:number = user_type;


  return(
    <Container>
        <ImageView>
            <ImagePrincipal
                source={require('../../Images/icone_branco.jpg')}
                resizeMode={'center'}
            />
            <TextMsg>
                {frase(user_type)}, acesse sua conta!
            </TextMsg>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}

            {optionsButtons(navigation, user_type)}
            <ButtonLogin
                onPress={()=>{
                    if(email && password){
                        login(email, password);
                        if(success){
                            navigation.navigate('AuthNavigation');
                        }else {
                            Alert.alert('Erro', 'Usuário ou senha inválidos');
                        }
                    }else {
                        Alert.alert('Erro ao acessar a conta', 'Para realizar o login, email e senha.')
                    }
                }}
            >
                <TextButton>
                    Entrar
                </TextButton>
            </ButtonLogin>
            
            <InputData
                textAlign={'center'} 
                onChangeText={text => onChangePassword(text)}
                value={password}
                placeholder={'Senha'}
                secureTextEntry={true}
            />

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

export default Login;