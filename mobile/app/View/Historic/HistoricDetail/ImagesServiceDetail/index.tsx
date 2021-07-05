import React,{useState} from 'react';
import { 
    Container,
    ViewImagesContainer,
    ViewTextContainer,
    TextTitle,
    ImageService,
    ViewButtonsContainer,
    ButtonImagesService,
    TextButton,
    ImageIconView,
    ViewModal,
    ViewModalAlert,
    AlertButton,
    TitleAlertView,
    DescriptionAlertView,
    InfoOperatorAlertView,
    TextDescription,
    AvatarImage,
    NameStatusProfessional,
    TextName,
} from './styles';

import theme from 'root/theme.json';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    Modal,
} from 'react-native';

import { 
    Rating, 
    AirbnbRating 
} from 'react-native-ratings';


const image_verify = (photo_dir:string) =>{
    if(photo_dir && photo_dir !== ''){
        return(
            <ImageService 
                source={{uri:photo_dir}}
            />
        );
    }
    else{
        return(
            <ImageIconView>
                <MaterialCommunityIcons 
                                name="camera-plus" 
                                size={45} 
                                color={theme.colors['default-border-gray']} 
                            />
            </ImageIconView>
        );
    }
}

const ImagesServiceDetail: React.FC = ({navigation, route}: any) => {

    const obj = route.params;
    
    const [openModal, SetModal] = useState(false);
    
    return(
        <Container>
            <ViewTextContainer>
                <TextTitle>
                    Imagens do seu{'\n'}
                    serviço finalizado!
                </TextTitle>
            </ViewTextContainer>

            <ViewImagesContainer>
                {image_verify(obj.image_service[0])}
                {image_verify(obj.image_service[1])}
            </ViewImagesContainer>

            <ViewImagesContainer>
                {image_verify(obj.image_service[2])}
                {image_verify(obj.image_service[3])}
            </ViewImagesContainer>

            <ViewButtonsContainer>
                <ButtonImagesService
                    style={{backgroundColor: theme.colors['default-yellow']}}
                    onPress={() => {
                        console.log('enviar para a tela de mensagens...');
                    }}
                >
                    <TextButton>
                        ENVIAR MENSAGEM
                    </TextButton>
                </ButtonImagesService>

                <ButtonImagesService
                    style={{backgroundColor: theme.colors['default-green']}}
                    onPress={() => {
                        SetModal(true);
                        console.log('Abrir o modal com a mensagem...');
                    }}
                >
                    <TextButton>
                        FINALIZAR
                    </TextButton>
                </ButtonImagesService>
            </ViewButtonsContainer>

            {
                <Modal
                      animationType="slide"
                      //transparent={false} -> sobe em cima da statusbar mas não fica transparente
                      transparent={true}
                      visible={openModal}
                      onRequestClose={() => {
                        SetModal(!openModal);
                      }}
                      style={{flex:1}}
                >
                    <ViewModal>
                      <ViewModalAlert>
                        <TitleAlertView>
                            <TextButton>
                                SUCESSO!
                            </TextButton>
                        </TitleAlertView>

                        <DescriptionAlertView>
                            <TextDescription>
                                Seu serviço foi finalizado,{'\n'}
                                avalie seu técnico!
                            </TextDescription>
                        </DescriptionAlertView>

                        <InfoOperatorAlertView>

                            <AvatarImage 
                                source={{uri: obj.avatar}}
                            />
                            <NameStatusProfessional>
                                <TextName>
                                    {obj.name}
                                </TextName>
                                
                                <Rating 
                                    type='custom'
                                    ratingCount={5}
                                    startingValue={1}
                                    showRating={false}
                                    imageSize={22}
                                    fractions={2}
                                    tintColor='white'
                                    ratingBackgroundColor={theme.colors['default-border-gray']}
                                />

                            </NameStatusProfessional>

                        </InfoOperatorAlertView>

                        <AlertButton
                            onPress={() =>{
                                console.log('Envia avaliação do profissional para o backend.');
                                SetModal(!openModal);
                                navigation.navigate('Historic');
                            }}
                        >
                            <TextButton>
                                OK
                            </TextButton>
                        </AlertButton>
                      </ViewModalAlert>
                    </ViewModal>
                </Modal>
            }
        </Container>
    );
}

export default ImagesServiceDetail;