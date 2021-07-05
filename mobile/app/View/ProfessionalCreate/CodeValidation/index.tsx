import React, {useState} from 'react';

import { 
    Container,
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

interface Professional{
    name_prof: string;
    ddd_num: string;
    tel_num: string;
    email: string;
  }


const CodeValidation: React.FC = ({navigation, route}:any) => {

  const[code, onChangeCode] = useState('');

  let { professional_obj } = route.params;
  
  const {user_type} = route.params;

  return(
    <Container>
        <ImageView>
            <TextMsg>
            {frase(user_type)}, crie seu cadastro!
            </TextMsg>
            <TextInfo>
                Enviamos um código de confirmação{'\n'}para o e-mail {professional_obj.professionalPersonalInfo.email}.{'\n'}Digite o código no campo abaixo.
            </TextInfo>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}
            <ButtonLogin
                onPress={()=>{
                    //Objeto de envio de código de confirmação...
                    let valid_code: any = {
                        code: code
                    };
                    navigation.navigate('ProfessionalData',
                        { user_type:user_type, professional_obj  }
                    )
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
                //Criação do Objeto para o recebimento do código...
                let professional_obj: Professional = {
                    name_prof:name,
                    ddd_num: ddd,
                    tel_num: tel,
                    email: email_professional
                };
                
                console.log('professional_obj: ', professional_obj);
                //Objeto criado que será enviado para a api e recebimento do
                //email com o código de validação..
                //Inserir endpoint para envio do objeto...

            }}
            >
                <TextResetCode>
                    Reenviar o código
                </TextResetCode>
            </ResetCodeButton>


            {/* <InputData 
                onChangeText={text => onChangeCode(text)}
                value={code}
            /> */}

            <InputData 
                    textAlign={'center'}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeCode(text)}
                    value={code}
                    placeholder={'Código de Confirmação'}
            />

        </ViewButton>

    </Container>
  );
}

export default CodeValidation;