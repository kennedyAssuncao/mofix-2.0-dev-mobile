import React, {useState} from 'react';
import { Alert } from 'react-native';

import { 
    Container,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    ViewCheckBox,
    TermsConfirmText,
    TermsConfirmButton,
    TextInfoCheckbox,
    InputData,
} from './styles';

import CheckBox from '@react-native-community/checkbox';

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const verify_values:any = (pass:any, confPass:any) =>{
    return pass === confPass;
}



const ProfessionalPasswordAcess: React.FC = ({navigation, route}:any) => {

  const[checkbox, setCheckBox] = useState(false);
  const[password, onChangePassword] = useState('');
  const[conf_password, onChangeConfPassword] = useState('');

  const {user_type}:any = route.params;  
  let {professional_obj} =  route.params;
  return(
    <Container>
        <ImageView>

            <TextMsg>
                {frase(user_type)} insira a sua{'\n'}senha de acesso.
            </TextMsg>
        </ImageView>
        <ViewButton>

            <ButtonLogin
                onPress={()=>{
                    if(checkbox){
                        if(verify_values(password, conf_password)){
                            professional_obj = {
                                ...professional_obj,
                                password
                            };
                        }else{
                            Alert.alert('Erro', 'As senhas não conferem.');    
                        }
                    }else{
                        Alert.alert('Erro', 'Para proseeguir o cadastro é necessário aceitar os termos de uso');
                    }
                }}
            >
                <TextButton>
                    Criar Cadastro!
                </TextButton>
            </ButtonLogin>
            
            <ViewCheckBox>
                <CheckBox
                    value={checkbox}
                    onValueChange={setCheckBox}
                    tintColors={{true:'#dbac00', false:'#dbac00'}}
                    style={{alignItems:"center", marginLeft:'15%', marginTop:'5%'}}
                    

                />
                <TextInfoCheckbox>
                    Concordo com os
                </TextInfoCheckbox>
                <TermsConfirmButton
                    onPress={()=>{
                        Alert.alert(
                            "Termos de Uso",
                            "Blablablabla"
                        );
                    }}
                >
                    <TermsConfirmText>
                        Termos de Uso.
                    </TermsConfirmText>
                </TermsConfirmButton>
            </ViewCheckBox>

            <InputData
                keyboardType={'visible-password'} 
                textAlign={'center'}
                value={conf_password}
                onChangeText={text => onChangeConfPassword(text)}
                placeholder={'Confirmar Senha'}
                secureTextEntry={true}
            />

            <InputData
                keyboardType={'visible-password'} 
                textAlign={'center'}
                value={password}
                onChangeText={text => onChangePassword(text)}
                placeholder={'Senha'}
                secureTextEntry={true}
            />

        </ViewButton>

    </Container>
  );
}

export default ProfessionalPasswordAcess;