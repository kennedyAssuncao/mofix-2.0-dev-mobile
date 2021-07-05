import React,{
    useState
} from 'react';
//import { View } from 'react-native';

import { 
    Container,
    TextName,
    DetailButton,
    ClientText,
    TextMensageButton,
    ViewIcon,
    ViewVisualization,
    TextVisualization,
    VisualizationButton,
    TextVisualizationButton,
    ViewText,
    TextArea,
    TextDescription,
    ViewCamera,
    ImageService,
    ArrayImages,
    ViewClientDetail,
    ViewAddressService,
    TextAddress,
    ViewServiceConfirm,
    TextServiceConfirmName,
    CardNumber,
    TextCardNumber,
    CreditCardView,
    ViewDateService,
    ViewDate,
    TextPrice,
    MessageView,
    TextMessage,
    TextTitleMessage,
    ButtonType,
    TextButtonType,
    ViewScheduledType,
    ViewRequestType,        
    ViewModalAlert,
    TitleAlertView,
    TextButton,
    DescriptionAlertView,
    TextDescriptionAlert,
    AlertButton,
    ViewModal,
} from './styles';


import{
    Modal,
} from 'react-native';


import theme from 'root/theme.json';

import CheckBox from '@react-native-community/checkbox';

import { 
    MaterialCommunityIcons, 
    MaterialIcons 
} from '@expo/vector-icons'; 

import {NameMonthComplete} from 'apk/tools';

import { ScrollView } from 'react-native-gesture-handler';


const ColorFunction = (typeModal: number) =>{
    return typeModal == 0? theme.colors['default-green']: theme.colors['default-red']
}


const typeFinalizationButton = (type: string, navigation:any, obj: any) =>{
    if(type === 'Finalizado'){
        return(
            <ViewVisualization>
                <TextVisualization>
                    Técnico finalizou o serviço!
                </TextVisualization>
                <VisualizationButton
                    onPress={() => { navigation.navigate('ImagesServiceDetail', obj)}}
                >
                    <TextVisualizationButton>
                        VISUALIZAR
                    </TextVisualizationButton>
                </VisualizationButton>
            </ViewVisualization>
        );
    }

}


const color_type = (type: string) =>{
    let color;
    if(type === 'Agendado'){
      color= theme.colors['default-yellow'];
    }
    else if(type === 'Iniciado'){
      color= theme.colors['default-orange']; 
    }
    else{
      color= theme.colors['default-green'];
    }
    return color;
  }

const textArea = (obj: any) =>{
    if(obj.description_service){
        return(
            <TextDescription
                style={{
                    color: 'black'
                }}
            >
                {obj.description_service}
            </TextDescription>
        );
    }
    else{
        return(
            <TextDescription
                style={{color: '#a3a2a2'}}
            >
                Descrição do pedido aqui.
            </TextDescription>
        );
    }
}

const ImageClientServices = (obj: any) =>{
    return obj.arr_image_request.map((image:any) =>{
        return(
            <ImageService 
                source={{uri:image}}
            />
        );
    })
}

const ColorService = (type: string) =>{
    return(
        <ViewServiceConfirm
            style={{ backgroundColor: color_type(type)}}
        >
            <TextServiceConfirmName>
                {type}
            </TextServiceConfirmName>
        </ViewServiceConfirm>
    );
}

const CreditCardData = (obj: any) =>{
    if(obj.type === 'Finalizado'){
        return(
                <CreditCardView>
                    <ViewIcon>
                        <MaterialIcons 
                            name="credit-card" 
                            size={24} color="black" 
                        />
                        <TextAddress>
                            <TextDescription style={{color: theme.colors['default-green']}}>{obj.value_service}</TextDescription>{'\n'}
                        </TextAddress>
                    </ViewIcon>
                </CreditCardView>
        );
    }
}

const typeButtons = (navigation:any, approved: boolean,type: string, 
                    modal:boolean, SetModal:any,typeModal: number, 
                    SetTypeModal: any, SetModalMessage: any,
                    SetColorMessage: any)=>{
    console.log('approved: ', approved)
    if(type === 'Agendado' && !approved){
        return(
            <ViewScheduledType
            >
                <ButtonType
                    style={{
                        backgroundColor: theme.colors['default-red'],
                        height:'90%'
                    }}
                    onPress={()=>{
                        SetTypeModal(0);
                        SetModalMessage('O serviço foi cancelado!');
                        SetColorMessage(theme.colors['default-green']);
                        SetModal(!modal);
                    }}
                >
                    <TextButtonType>
                        CANCELAR
                    </TextButtonType>
                </ButtonType>
            </ViewScheduledType>
        );
    }
    else if(type === 'Agendado' && approved){
        return(
            <ViewRequestType>
                <ButtonType
                    style={{backgroundColor: theme.colors['default-green']}}
                    /*manda para outra tela*/
                    onPress={()=>{
                        SetTypeModal(1);
                        SetModalMessage('O serviço foi iniciado!');
                        SetColorMessage(theme.colors['default-green']);
                        SetModal(!modal);
                    }}

                >
                    <TextButtonType>
                        INICIAR
                    </TextButtonType>
                </ButtonType>

                <ButtonType
                    style={{backgroundColor: theme.colors['default-red']}}

                    /*manda para outra tela*/
                    onPress={()=>{
                        navigation.navigate('RescheduleView');
                    }}
                >
                    <TextButtonType>
                        REAGENDAR
                    </TextButtonType>
                </ButtonType>

                <ButtonType
                    style={{backgroundColor: theme.colors['default-yellow']}}
                    onPress={()=>{
                        SetTypeModal(1);
                        SetModalMessage(`Entre em contato com o \n cliente através de nosso chat!`);
                        SetColorMessage(theme.colors['default-yellow']);
                        SetModal(!modal);
                    }}
                >
                    <TextButtonType>
                        NÃO FUI ATENDIDO
                    </TextButtonType>
                </ButtonType>

            </ViewRequestType>
        );
    }

    else if(type === 'Iniciado'){
        return(
            <ViewRequestType>
                <ButtonType
                    style={{backgroundColor: theme.colors['default-green']}}
                    /*manda para outra tela*/
                    onPress={()=>{
                        console.log('Mandar para tela de envio de imagens do serviço finalizado...');
                        navigation.navigate('FinishView');
                    }}
                >
                    <TextButtonType>
                        FINALIZAR
                    </TextButtonType>
                </ButtonType>

                <ButtonType
                    style={{backgroundColor: theme.colors['default-red']}}

                    /*manda para outra tela*/
                    onPress={()=>{
                        navigation.navigate('RescheduleView');
                    }}
                >
                    <TextButtonType>
                        REAGENDAR
                    </TextButtonType>
                </ButtonType>

                <ButtonType
                    style={{backgroundColor: theme.colors['default-yellow']}}
                    onPress={()=>{
                        SetTypeModal(1);
                        SetModalMessage(`Entre em contato com o \n cliente através de nosso chat!`);
                        SetColorMessage(theme.colors['default-yellow']);
                        SetModal(!modal);
                    }}
                >
                    <TextButtonType>
                        NÃO FUI ATENDIDO
                    </TextButtonType>
                </ButtonType>

            </ViewRequestType>
        );
    }
    else{
        return;
    }
}

const HistoricProfessionalDetail: React.FC = ({navigation, route}: any) => {
    
    const obj:any = route.params;

    const [modal, SetModal] = useState(false);
    /* 0 - Sucesso , 1 - Aviso */
    const [typeModal, SetTypeModal] = useState(0);

    const [modalMessage, SetModalMessage] = useState('');

    const [colorMessage, SetColorMessage] = useState();

    return(
        <Container>
            <ScrollView
                //contentContainerStyle={{flex:1}}
                style={{
                    flex:1,
                    marginBottom:'5%',
                
                }}
                showsVerticalScrollIndicator={false}
            >
            {/*descrição*/}
             <ViewText>
                    <ViewIcon>
                        <MaterialIcons 
                            name="add-circle" 
                            size={24} 
                            color="black" 
                        />
                        <TextName>
                            {obj.name_service}
                        </TextName>
                    </ViewIcon>
                    <TextArea>
                        {textArea(obj)}
                    </TextArea>
                    <ViewClientDetail>
                        <ClientText>
                            Quantidade: {obj.quantity_items}{'\n'}
                            Cliente: {obj.client.name}{'\n'}
                        </ClientText>
                        <DetailButton>
                            <TextMensageButton>Enviar Mensagem</TextMensageButton>
                        </DetailButton>
                    </ViewClientDetail>
                </ViewText>

                {/*Fotos do cliente*/}
                <ViewCamera>
                    <ViewIcon>
                        <MaterialIcons 
                            name="photo-camera" 
                            size={24} 
                            color="black" 
                        />
                        <TextName>
                            Imagens
                        </TextName>
                    </ViewIcon>
                    <ArrayImages>
                        {ImageClientServices(obj)}
                    </ArrayImages>
                </ViewCamera>

                {/* Endereço do Serviço */}
                <ViewAddressService>
                    <ViewIcon>
                        <MaterialIcons 
                            name="location-on" 
                            size={24} 
                            color="black" 
                        />
                        <TextName>
                            Endereço do Serviço
                        </TextName>
                        
                    </ViewIcon>
                    <TextAddress>
                            {obj.address_service.address}, {obj.address_service.number}{'\n'}
                            {obj.address_service.district}{'\n'}
                            {obj.address_service.city} - {obj.address_service.state}            
                    </TextAddress>
                </ViewAddressService>


                {/*Data do serviço*/}
                <ViewDateService>
                    <ViewIcon>
                        <MaterialIcons 
                            name="date-range" 
                            size={24} 
                            color="black" 
                        />
                        <TextName>
                            Data/Hora do Serviço
                        </TextName>
                    </ViewIcon>

                    <ViewDate>
                        <TextAddress>
                                {obj.scheduling_time.getDate()} de {NameMonthComplete(obj.scheduling_time.getMonth())} às {obj.scheduling_time.getHours()}:{obj.scheduling_time.getMinutes()}
                        </TextAddress>
                        <CheckBox
                            value={true}
                            disabled={true}//Desativa o click
                            tintColors={{true: theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
                            style={{alignItems:"center", marginLeft:'2%', marginTop:'2%'}}
                        />

                    </ViewDate>
                </ViewDateService>

                 {/*View de pagamento*/}
                 <CreditCardView>
                        <ViewIcon>
                            <MaterialIcons 
                                name="credit-card" 
                                size={24} color="black" 
                            />
                            <TextName>
                                Valores
                            </TextName>
                        </ViewIcon>
                        <TextAddress>
                                <TextPrice style={{color: theme.colors['default-green']}}>{obj.value_service}</TextPrice>{'\n'}
                        </TextAddress>
                    </CreditCardView>
                {/*Tipo do serviço*/}

                {/*View de aviso*/}
                <MessageView>
                    <TextTitleMessage>
                        ATENÇÃO!
                    </TextTitleMessage>
                    <TextMessage>
                        É necessário realizar 2 visitas no local para realizar o serviço.
                    </TextMessage>
                </MessageView>

                {typeButtons(navigation,obj.approved,obj.type, modal, SetModal,
                            typeModal, SetTypeModal, SetModalMessage,
                            SetColorMessage)}

                <ViewServiceConfirm
                    style={{ backgroundColor: color_type(obj.type)}}
                >
                    <TextServiceConfirmName>
                        {obj.type}
                    </TextServiceConfirmName>
                </ViewServiceConfirm>
            </ScrollView>


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

export default HistoricProfessionalDetail;