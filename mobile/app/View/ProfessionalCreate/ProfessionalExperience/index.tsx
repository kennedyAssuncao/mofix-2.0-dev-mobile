import React, {useState} from 'react';
import { View } from 'react-native';

import{mask} from 'remask';

import { 
    Container,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    InputData,
    ViewForm,
    TextIndex,

} from './styles';

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const ProfessionalExperience: React.FC = ({navigation, route}:any) => {

  const[experience, onChangeEXP] = useState('');
  const[info, onChangeINFO] = useState('');
  const[work, onChangeWORK] = useState('');

  const {user_type}:any = route.params;
  let { professional_obj } = route.params;


  return(
    <Container>
        <ImageView>
            <TextMsg>
                {frase(user_type)}, preencha com os{'\n'} seus dados profissionais!
            </TextMsg>
        </ImageView>
        <ViewButton>
            <ButtonLogin
                onPress={()=>{
                    let professionalExperience = {
                        work,
                        info,
                        experience
                    };
                    professional_obj = {
                        ...professional_obj,
                        professionalExperience
                    }
                    navigation.navigate('ProfessionalBankAccount',{user_type:user_type, professional_obj});

                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>



            <ViewForm>
                <TextIndex>
                    Meu Trabalho:
                </TextIndex>
                <InputData 
                    textAlignVertical={'top'}
                    multiline={true}
                    onChangeText={text => onChangeWORK(text)}
                    value={work}
                    placeholder={'Em que lugares você já trabalhou?'}
                />
            </ViewForm>

            <ViewForm>
                <TextIndex>
                    Conte-nos um pouco sobre você:
                </TextIndex>
                <InputData 
                    textAlignVertical={'top'}
                    multiline={true}
                    onChangeText={text => onChangeINFO(text)}
                    value={info}
                    placeholder={'Quais os tipos de projeto você executa?'}
                />
            </ViewForm>


            <ViewForm>
                <TextIndex>
                    Experiência:
                </TextIndex>
                <InputData 
                    textAlignVertical={'top'}
                    multiline={true}
                    onChangeText={text => onChangeEXP(text)}
                    value={experience}
                    placeholder={'Quantos anos de experiência?'}
                />
            </ViewForm>

            
        </ViewButton>

    </Container>
  );
}

export default ProfessionalExperience;