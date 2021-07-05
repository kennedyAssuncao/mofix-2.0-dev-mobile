import React, {useState, useEffect} from 'react';
import { Alert, Platform } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';



import { 
    Container,
    ImagePrincipal,
    ImageView,
    TextMsg,
    TextButton,
    ViewButton,
    ButtonLogin,
    ButtonPhoto,
    ImagePhoto,
    TextInfo,
    ViewCheckBox,
    TermsConfirmText,
    TermsConfirmButton,
    TextInfoCheckbox,
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

const SucessCreate: React.FC = ({navigation, route}:any) => {
    
    const [image, setImage] = useState();

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
  
  
  interface Client{
      phoneNumber: string;
      email: string;
      fullName: string;
      password: string;
      avatar: string;
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
  
  const[checkbox, setCheckBox] = useState(false);
  
  const { user_type }:any = route.params;  
  
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

    async function registerClient(client: Client) {
        await axios
        .get(`http://www.a6i.com.br/smg-api/?p=api/user/add&username=${client.email}&name=${client.fullName}&email=${client.email}&phone=${client.phoneNumber}&file=@"${client.avatar}"`)
        .then(()=>{
            Alert.alert('Usuário Cadastrado', 'Usuário cadastrado com sucesso !');
            navigation.navigate('AuthNavigation');
        })
        .catch((error)=>{
            Alert.alert('Erro ao realizar cadastro', 'Erro ao realizar cadastro, entre em contato com o suporte !');
        });
    }
      
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

            <TextInfo>
                Adicione uma foto para seu perfil.
            </TextInfo>

        </ImageView>
        <ViewButton>
            <ButtonLogin
                onPress={()=>{
                    if(checkbox == true){
                        let { client } = route.params;
                        let clientUser: Client = {
                            fullName: client.fullName,
                            email: client.email,
                            phoneNumber: client.phoneNumber,
                            password: client.password,
                            avatar: avatar != null ? avatar.substring(avatar.indexOf('/')) : ""
                        };
                        registerClient(clientUser);

                    }else{
                        Alert.alert(
                            "Termos de Uso",
                            "Blablablabla"
                        );
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

            <ButtonPhoto
                onPress={pickImage}
            >
                <ImagePhoto
                    resizeMode={'contain'} 
                    source={image ? { uri: image } : require('../../../Images/iconButtonPhoto.png')}
                />
                
            </ButtonPhoto>

        </ViewButton>

        

    </Container>
  );
}

export default SucessCreate;