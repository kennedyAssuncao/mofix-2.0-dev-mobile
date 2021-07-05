import React from 'react';
//import { View } from 'react-native';

import { 
    Container,
    ContainerInfo,
    AvatarImage,
    ViewInfoProfessional,
    TextName,
    DetailButton,
    ButtonName,
    ContainerPrincipal,
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
    ViewDateService,
    ViewAddressService,
    TextAddress,
    ViewServiceConfirm,
    TextServiceConfirmName,
    CardNumber,
    TextCardNumber,
    CreditCardView,
} from './styles';

import theme from 'root/theme.json';

import { 
    Rating, 
    AirbnbRating 
} from 'react-native-ratings';

import { 
    MaterialCommunityIcons, 
    MaterialIcons 
} from '@expo/vector-icons'; 

import {NameMonthComplete} from 'apk/tools';

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

const CardType = (obj: any) =>{
    if(obj.type === 'Iniciado'){
        return(
            <CardNumber>
                <TextCardNumber>
                    xxxx xxxx xxxx {obj.credit_card.number.substring(15, obj.credit_card.number.length)}
                </TextCardNumber>
            </CardNumber>
        );
    }
}

const ColorService = (type: string) =>{
    return(
        <ViewServiceConfirm
            style={{ backgroundColor: type === 'Iniciado'? theme.colors['default-orange'] : theme.colors['default-green'] }}
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
                            Valor <TextDescription style={{color: theme.colors['default-green']}}>{obj.value_service}</TextDescription>{'\n'}
                            xxxx xxxx xxxx {obj.credit_card.number.substring(15, obj.credit_card.number.length)}{'\n'}
                            {obj.credit_card.type}
                        </TextAddress>
                    </ViewIcon>
                </CreditCardView>
        );
    }
}

const RequestDetail: React.FC = ({navigation, route}: any) => {
    
    const obj:any = route.params;

    return(
        <Container>
           <ContainerPrincipal>                
                <ViewIcon>
                    <MaterialCommunityIcons 
                        name="hammer" 
                        size={24} 
                        color="black" 
                    />
                    <TextName>
                        Técnico
                    </TextName>
                </ViewIcon>
                <ContainerInfo>
                    <AvatarImage 
                        source={{uri: obj.professional_array[0].avatar}}
                    />
                    <ViewInfoProfessional>
                        <TextName>
                            {obj.professional_array[0].name}
                        </TextName>

                        <Rating 
                            type='custom'
                            ratingCount={5}
                            startingValue={obj.professional_array[0].rate}
                            showRating={false}
                            imageSize={18}
                            fractions={2}
                            readonly={true}
                            tintColor='#F2F3F4'
                            ratingBackgroundColor={theme.colors['default-border-gray']}
                        />
                        <DetailButton
                            onPress={()=>{
                                console.log(obj);
                                navigation.navigate('ProfessionalDetail', obj.professional_array[0]);      
                            }}
                        >
                            <ButtonName>
                                Detalhes
                            </ButtonName>
                        </DetailButton>
                    </ViewInfoProfessional>
                    <MaterialCommunityIcons 
                        name="message" 
                        size={28} 
                        color={ obj.type === 'Iniciado'? theme.colors['default-green']: theme.colors['default-border-gray'] }
                        onPress={()=>{
                                    
                                    if(obj.type === 'Iniciado'){
                                        /*Inserir o navigation para a tela de mensagens...*/
                                        console.log('Abrir a tela de mensagens...')
                                    }
                                }}
                    />
                </ContainerInfo>
                {typeFinalizationButton(obj.type, navigation, obj.professional_array[0])}
           </ContainerPrincipal>

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

            {/*Data do serviço*/}
            <ViewDateService>
                <ViewIcon>
                    <MaterialIcons 
                        name="date-range" 
                        size={24} 
                        color="black" 
                    />
                    <TextName>
                        {obj.scheduling_time.getDate()} de {NameMonthComplete(obj.scheduling_time.getMonth())} às {obj.scheduling_time.getHours()}:{obj.scheduling_time.getMinutes()}
                    </TextName>
                </ViewIcon>
            </ViewDateService>
            {/* Endereço do Serviço */}
            <ViewAddressService>
                <ViewIcon>
                    <MaterialIcons 
                        name="location-on" 
                        size={24} 
                        color="black" 
                    />
                    <TextAddress>
                        {obj.address_service.address}, {obj.address_service.number}{'\n'}
                        {obj.address_service.district}{'\n'}
                        {obj.address_service.city} - {obj.address_service.state}
                        
                    </TextAddress>
                </ViewIcon>
            </ViewAddressService>
            {/*View de pagamento caso for finalizado*/}
            {CreditCardData(obj)}

            {/*Tipo do serviço*/}
            {ColorService(obj.type)}

            {/*Número final do cartão*/}
            {CardType(obj)}
        </Container>
  );
}

export default RequestDetail;