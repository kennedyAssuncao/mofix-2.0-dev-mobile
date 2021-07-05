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
    InputDataValueNumberCompl,
    ViewMask,
    InputDataValueCity,
    InputDataValueState,

} from './styles';

import { AntDesign } from '@expo/vector-icons';

const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}


const verify_values = (cep: string, rua: string, number: string, district: string, city: string,state: string) => {
    return (cep && rua && number && district && state) 
}

const ProfessionalDataAddress: React.FC = ({navigation, route}:any) => {

  const[cep, onChangeCEP] = useState('');
  const[rua, onChangeRUA] = useState('');
  const[district, onChangeDIST] = useState('');
  const[number, onChangeNUMBER] = useState('');
  const[complement, onChangeCOMPL] = useState('');
  const[city, onChangeCITY] = useState('');
  const[state, onChangeSTATE] = useState('');
  const [comprovanteEndereco, setComprovanteEndereco] = useState(null);

  const {user_type}:any = route.params;
  const { professional } = route.params;

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
      setComprovanteEndereco(data)
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
        setComprovanteEndereco(result.uri);
    }
};

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
                    if(verify_values(cep, rua, number, district, city, state)){
                        let professionalAddress = {
                            cep,
                            rua,
                            number,
                            complement,
                            district,
                            city,
                            state,
                            comprovanteEndereco
                        };
                        let professional_obj = {
                            ...professional,
                            professionalAddress
                        };
                        // console.log(professional_obj)
                        navigation.navigate('ProfessionalExperience',{user_type:user_type, professional_obj});
                    }else {
                        Alert.alert('Erro', 'Para prosseguir com o cadastro todos os campos devem ser preenchidos.')
                    }
                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>

            <ImageButtonClick
            onPress={pickImage}
        >
            <ViewImageClick>
                <AntDesign name="camera" size={80} color="#898989" style={{marginLeft:10}}/>
                <TextImageClick>
                    Comprovante de Endereço
                </TextImageClick>
            </ViewImageClick>
        </ImageButtonClick>




            <ViewMask>
                <InputDataValueCity 
                    textAlign={'center'}
                    onChangeText={text => onChangeCITY(text)}
                    value={city}
                    placeholder={'Cidade'}
                />

                <InputDataValueState 
                    textAlign={'center'}
                    onChangeText={text => onChangeSTATE(mask(text,['AA']))}
                    value={state}
                    placeholder={'Estado'}
                />
            </ViewMask>


            <InputData 
                    textAlign={'center'}
                    onChangeText={text => onChangeDIST(text)}
                    value={district}
                    placeholder={'Bairro'}
            />

            <ViewMask>
                <InputDataValueNumberCompl 
                    textAlign={'center'}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeNUMBER(text)}
                    value={number}
                    placeholder={'Número'}
                />

                <InputDataValueNumberCompl 
                    textAlign={'center'}
                    onChangeText={text => onChangeCOMPL(text)}
                    value={complement}
                    placeholder={'Complemento'}
                />
            </ViewMask>

            <InputData
                textAlign={'center'}
                onChangeText={text => onChangeRUA(text)}
                value={rua}
                placeholder={'Rua'}
            />

            <InputData 
                    textAlign={'center'}
                    maxLength={10}
                    keyboardType={'name-phone-pad'}
                    onChangeText={text => onChangeCEP( mask(text, ['99.999-999']) )}
                    value={cep}
                    placeholder={'CEP'}
            />


            
        </ViewButton>

    </Container>
  );
}

export default ProfessionalDataAddress;