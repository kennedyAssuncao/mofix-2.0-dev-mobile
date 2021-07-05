import React, {useState, useEffect} from 'react';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import{mask} from 'remask';

import { 
    Container,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    InputData,
    ImageButtonClick,
    ViewImageClick,
    TextImageClick,
} from './styles';

import { AntDesign } from '@expo/vector-icons';

interface Professional {
    ddd_num: string,
    email: string,
    name_prof: string,
    tel_num: string,
    cpf: string,
    rg: string    
}

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}


const verifyEmptyOrNullFields = ( rg: string, cpf: string ) => (rg && cpf ) ? true : false;  


const ProfessionalData: React.FC = ({navigation, route}:any) => {

  const[rg, onChangeRG] = useState('');//useState('RG');
  const[cpf, onChangeCPF] = useState('');//useState('CPF');
  const {user_type}:any = route.params;
  const { professional_obj } = route.params;

  const [rgFrente, setRgFrente] = useState(null);
  const [rgVerso, setRgVerso] = useState(null);


  function printImages(){
      console.log(rgVerso)
      console.log(rgFrente)
  }
  
  function callback(data:any) {
      if(data.didCancel) {
          return;
        }
        if(data.error) {
            return;
        }
        if(!data.uri) {
            return;
        }
        setRgFrente(data)
    }

    const pickImageRgFrente = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            setRgFrente(result.uri);
        }
    };

    const pickImageRgVerso = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            setRgVerso(result.uri);
        }
    };

  interface Professional{
      personalInfo: ProfessionalPersonalInfo
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  return(
    <Container>
        <ImageView>
            <TextMsg>
            {frase(user_type)}, preencha com seus dados!
            </TextMsg>
        </ImageView>
        <ViewButton>
            {/*inserir dois inputs...*/}
            <ButtonLogin
                onPress={()=>{
                    if(verifyEmptyOrNullFields(rg, cpf)){
                        let personalDataInfo = {
                            ...professional_obj.personalDataInfo,
                            cpf,
                            rg,
                            rgVerso,
                            rgFrente
                        }
                        let professional = {
                            personalDataInfo,
                        };
                        console.log(personalDataInfo);
                        navigation.navigate('ProfessionalDataAddress',{user_type:user_type, professional});
                    } else {
                        Alert.alert('Erro', 'Para prosseguir o cadastro você deve preencher todos os campos.');
                    }
                    
                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>

            <ImageButtonClick
            onPress={pickImageRgFrente}
            >
            <ViewImageClick>
                <AntDesign name="camera" size={80} color="#898989" style={{marginLeft:10}}/>
                <TextImageClick>
                    RG Frente
                </TextImageClick>
            </ViewImageClick>
        </ImageButtonClick>
        <ImageButtonClick
            onPress={pickImageRgVerso}
        >
            <ViewImageClick>
                <AntDesign name="camera" size={80} color="#898989" style={{marginLeft:10}}/>
                <TextImageClick>
                    RG Verso
                </TextImageClick>
            </ViewImageClick>
        </ImageButtonClick>

            <InputData
                textAlign={'center'}
                maxLength={14}
                keyboardType={'number-pad'}
                onChangeText={text => onChangeRG(text)}
                value={rg}
                placeholder={'RG'}
            />

            <InputData 
                    textAlign={'center'}
                    maxLength={14}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeCPF( mask(text, ['999.999.999-99']) )}
                    value={cpf}
                    placeholder={'CPF'}
            />
            
        </ViewButton>

    </Container>
  );
}

export default ProfessionalData;