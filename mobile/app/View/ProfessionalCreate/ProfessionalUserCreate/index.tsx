import React,  {useState, useEffect} from 'react';

import { 
    Container,
    ImageView,
    TextMsg,
    TextButton,
    ButtonImageCreate,
    ViewButton,
    ButtonLogin,
    TelView,
    InputData,
    InputDDD,
    ButtonImageView,
    InputNumberTel,
    ImagePhoto
} from './styles';

import {mask} from 'remask';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const frase:any = (value:number)=>{
    return(
        value == 1? 'Cliente' : 'Profissional' 
    );
}

const ProfessionalUserCreate: React.FC = ({navigation, route}:any) => {

  const [name, onChangeName] = useState('');
  const[ddd_number, onChangeNumber] = useState('');
  const[tel_number, onChangeTelNumber] = useState('');
  const[email, onChangeEmail] = useState('');

  const {user_type}:any = route.params;  

  function verify_values(name:string, ddd:string, tel:string, email:string): boolean{
    if (name && ddd && tel && email ) {
        return true;
    }else {
        return false;
    }
  }

  interface ProfessionalPersonalInfo{
      name_prof: string;
      ddd_num: string;
      tel_num: string;
      email: string;
      avatar: string;
  }

  const [avatar, setAvatar] = useState(null);
  
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
        setAvatar(data)
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            setAvatar(result.uri);
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
                {frase(user_type)}, crie seu cadastro! 
            </TextMsg>

            <ButtonImageView>
                <ButtonImageCreate onPress={pickImage}>
                    <ImagePhoto
                        resizeMode={'contain'} 
                        source={avatar ? { uri: avatar } : require('../../../Images/iconButtonPhoto.png')}
                    />
                    {/* <MaterialIcons name="account-box" size={140} color="#7e7e7f" /> */}
                </ButtonImageCreate>
            </ButtonImageView>

        </ImageView>
        <ViewButton>

            <ButtonLogin
                onPress={()=>{
                    console.log(avatar);
                    let professionalPersonalInfo: ProfessionalPersonalInfo = {
                        name_prof:name,
                        ddd_num: ddd_number,
                        tel_num: tel_number,
                        email: email,
                        avatar: avatar

                    };
                    console.log(professionalPersonalInfo);
                    let professional_obj = {
                        professionalPersonalInfo
                    };
                    const values = verify_values(name, ddd_number, tel_number, email) == true ?
                    
                        navigation.navigate('CodeValidation', 
                            {  professional_obj }
                        )
                    :
                        Alert.alert('Erro', 'Para prosseguir com cadastro, preencha todos os campos');
                }}
            >
                <TextButton>
                    Continuar
                </TextButton>
            </ButtonLogin>

            <TelView>
                <InputNumberTel 
                    textAlign={'center'}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeTelNumber(mask(text,['99999-9999']))}
                    value={tel_number}
                    placeholder={'Celular'}
                />

                <InputDDD 
                    textAlign={'center'}
                    keyboardType={'number-pad'}
                    onChangeText={text => onChangeNumber(mask(text, ['99']))}
                    value={ddd_number}
                    placeholder={'DDD'}
                />
            </TelView>

            <InputData 
                textAlign={'center'}
                onChangeText={text => onChangeEmail(text)}
                value={email}
                placeholder={'E-mail'}
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

export default ProfessionalUserCreate;