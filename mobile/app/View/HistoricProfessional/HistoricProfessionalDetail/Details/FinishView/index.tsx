import React,{
    useState,
} from 'react';
import { View } from 'react-native';

import { 
    Container,
    TextName,
    ViewTextTitle,
    ContainerPrincipal,
    ViewButtons,
    ImageService,
    ButtonImage,
    ButtonImageView,
    ButtonsOpt,
    TextButtonType,
    ViewModal,
    AlertButton,
    TextDescriptionAlert,
    DescriptionAlertView,
    TextButton,
    TitleAlertView,
    ViewModalAlert,
} from './styles';

import { 
    MaterialCommunityIcons, 
    MaterialIcons 
} from '@expo/vector-icons'; 

import{
    Modal,
} from 'react-native';


import theme from 'root/theme.json';

const button_camera = (photos: any,SetPhotos:any,pos: number, value:String )=>{
 
    const arr:any = photos;
    return(
        <ButtonImage
            onPress={()=>{

                /*
                quanto pressionado -> abre o componente de camera, 
                guarda a string com o endereço de onde está a imagem
                na posição passada do array photos e seta o array de photos...
                */
                //photo_url = compoentePhoto
                arr[pos] = value;
                SetPhotos(arr);
                
            }}
        >
            <MaterialCommunityIcons 
                    name="camera-plus" 
                    size={54} 
                    color="black" 
            />
        </ButtonImage>
    );
}

const FinishView: React.FC = ({navigation}:any) => {

    const[photos, SetPhotos] = useState(['','','','']);

    const [modal, SetModal] = useState(false);
    /* 0 - Sucesso , 1 - Aviso */
    const [typeModal, SetTypeModal] = useState(0);

    const [modalMessage, SetModalMessage] = useState('');

    const [colorMessage, SetColorMessage] = useState('');

  return(
      <Container>
        <ViewTextTitle>
          <TextName>
              {`Envie pelo menos 4 fotos\npara finalizar o serviço!`}
          </TextName>
        </ViewTextTitle>

        {/*container de imagens*/}
        <ContainerPrincipal>
            <ButtonImageView>
                
                {button_camera( photos,SetPhotos, 0,'p1' )}
                {button_camera( photos,SetPhotos, 1,'p2' )}

            </ButtonImageView>

            <ButtonImageView>
                {button_camera( photos,SetPhotos, 2,'p3' )}
                {button_camera( photos,SetPhotos, 3,'p4' )}
            </ButtonImageView>

        </ContainerPrincipal>

        {/*Botoes da tela*/}
        <ViewButtons>
                <ButtonsOpt
                    style={{
                         backgroundColor:theme.colors['default-yellow']
                    }}
                >
                    <TextButtonType>
                        ENVIAR MENSAGEM
                    </TextButtonType>
                </ButtonsOpt>

                <ButtonsOpt
                    style={{
                        backgroundColor:theme.colors['default-green']
                    }}

                    onPress={()=>{

                        /*enviar imagens para o backend*/

                        /*Abrir o pop-up*/
                        SetTypeModal(1);
                        SetModalMessage(`Serviço finalizado, aguarde\navaliação do cliente!`);
                        SetColorMessage(theme.colors['default-green']);
                        SetModal(!modal);
                        console.log('photos: ', photos);
                    }}
                >
                    <TextButtonType>
                        FINALIZAR
                    </TextButtonType>
                </ButtonsOpt>
        </ViewButtons>
        {
            <Modal
                animationType="slide"
                //transparent={false} -> sobe em cima da statusbar mas não fica transparente
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                SetModal(!modal);
                }}
                style={{flex:1}}
            >
                <ViewModal>
                    <ViewModalAlert>
                        <TitleAlertView
                            style={{
                                backgroundColor:colorMessage
                            }}
                        >
                            <TextButton>
                                {typeModal==0?'SUCESSO!': 'ATENÇÃO!'}
                            </TextButton>
                        </TitleAlertView>
                        <DescriptionAlertView>
                            <TextDescriptionAlert
                                    style={{
                                        color: colorMessage
                                    }}
                            >
                                {modalMessage}
                            </TextDescriptionAlert>
                        </DescriptionAlertView>

                        <AlertButton
                            onPress={() =>{
                                console.log('Enviar soliciatação...\nTipo da solicitação[aceito/não aceito]');
                                
                                
                                navigation.navigate('HistoricProfessional');


                                SetModal(!modal);

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

export default FinishView;