import React, { useState } from 'react';
import { 
    Container,
    ContainerProfessionals,
    ViewIcon,
    TextName, 
    ViewProfessional,
    AvatarImage,
    ViewInfoProfessional,
    DetailButton,
    ButtonName,
    ViewButons,
    ButtonsAvatar,
    ViewAvatarColumn,
    TextDataAvatar,
    ViewText,
    TextArea,
    TextDescription,
    ViewDateService,
    DataView,
    TextData,
    ViewAddressService, 
    TextAddress,
    CreditCardView,
    ViewServiceConfirm,
    TextServiceConfirmName,
    ViewModal,
    ViewModalAlert,
    TitleAlertView,
    TextButton,
    DescriptionAlertView,
    TextDescriptionAlert,
    AlertButton,
} from './styles';

import theme from 'root/theme.json';

import{
    Modal
} from 'react-native';

import { 
  MaterialCommunityIcons, 
  MaterialIcons 
} from '@expo/vector-icons'; 


import { 
  Rating, 
  AirbnbRating 
} from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';

import {NameMonthComplete} from 'apk/tools';

const ListProfessionals = (professionals: Array<any>, navigation: any, 
                            modal:boolean, SetModal:any,
                            typeModal: number, SetTypeModal: any ) =>{
  return(
      <ScrollView
          style={{
            height:'80%',
            padding:2,
            flex:1,
          }}
          contentContainerStyle={{
            paddingHorizontal:'1%', 
            paddingBottom:'5%',
            alignItems:"center",
        }}
        showsVerticalScrollIndicator={true}
      >
        {professionals.map((p, index)=>{
          return ContainerAvatarCreate(p, navigation, modal, SetModal,
                                        typeModal, SetTypeModal);
        })}

      </ScrollView>
  );
}

const dataRequests = (obj: any) =>{
  return(
      <ViewDateService>
          <ViewIcon>
              <MaterialIcons 
                  name="date-range" 
                  size={24} 
                  color="black"
                  style={{
                    marginBottom:'12%'
                  }} 
              />
              <DataView>
                  {obj.data_requests.map((data:any) =>{
                  return(<TextData>
                      {data.getDate()} de {NameMonthComplete(data.getMonth())} às {data.getHours()}:{data.getMinutes()}
                    </TextData>)
                })}
              </DataView>
          </ViewIcon>
      </ViewDateService>
  );

}


const ContainerAvatarCreate = (obj: any, navigation: any, 
                                modal:boolean, SetModal:any,
                                typeModal:number, SetTypeModal:any )=>{
  return(
      <ViewAvatarColumn>
      <ViewProfessional>
        <AvatarImage 
            source={{uri: obj.avatar}}
        />
                  <ViewInfoProfessional>
                      <TextName>
                          {obj.name}
                      </TextName>

                      <Rating 
                          type='custom'
                          ratingCount={5}
                          startingValue={obj.rate}
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
                              navigation.navigate('ProfessionalDetail', obj);      
                                
                            }}
                      >
                          <ButtonName>
                              Detalhes
                          </ButtonName>
                      </DetailButton>
                  </ViewInfoProfessional>
                  
                  {/*botoes*/}
                  <ViewButons>
                          <ButtonsAvatar
                            style={{backgroundColor: theme.colors['default-green']}}
                            onPress={()=>{
                                SetTypeModal(0);
                                SetModal(!modal);
                            }}
                          >
                            <ButtonName>
                              Aceitar
                            </ButtonName>
                          </ButtonsAvatar>
                          <ButtonsAvatar
                            style={{backgroundColor: theme.colors['default-red']}}
                            onPress={()=>{
                                SetTypeModal(1);
                                SetModal(!modal);
                            }}
                          >
                            <ButtonName>
                              Recusar
                            </ButtonName>
                          </ButtonsAvatar>
                  </ViewButons>
        </ViewProfessional>
        <TextDataAvatar>
            Data/Horário Solicitado: {obj.data_requested.getDate()}/{obj.data_requested.getMonth()}/{obj.data_requested.getFullYear()} {obj.data_requested.getHours()}:{obj.data_requested.getMinutes()}
        </TextDataAvatar>
    </ViewAvatarColumn>
  );
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


const CreditCardData = (obj: any) =>{
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

const ColorFunction = (typeModal: number) =>{
    return typeModal == 0? theme.colors['default-green']: theme.colors['default-red']
}

const ScheduledDetail: React.FC = ({navigation, route}: any) => {
  
  const obj:any = route.params;

  const [modal, SetModal] = useState(false);
  /* 0 - Sucesso , 1 - Aviso */
  const [typeModal, SetTypeModal] = useState(0);

  return(
    <Container>
      <ContainerProfessionals>
            <ViewIcon>
                <MaterialCommunityIcons 
                        name="hammer" 
                        size={24} 
                        color="black" 
                />
                <TextName>
                    Técnicos que Aceitaram
                </TextName>
            </ViewIcon>

            {/*ScrollView dos profissionas*/}
            {ListProfessionals(obj.professional_array, 
                                navigation, modal, SetModal, 
                                typeModal, SetTypeModal)}
            
      </ContainerProfessionals>

      {/*Descrição do Serviço*/}
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

        {/*Data do serviço*/}
        {dataRequests(obj)}

        {/*Endereço*/}
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

      {/*Dados do cartão de credito*/}
      {CreditCardData(obj)}


      <ViewServiceConfirm
            style={{ backgroundColor: theme.colors['default-yellow'] }}
        >
            <TextServiceConfirmName>
                {obj.type}
            </TextServiceConfirmName>
        </ViewServiceConfirm> 

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
                                backgroundColor:ColorFunction(typeModal)
                            }}
                        >
                            <TextButton>
                                {typeModal==0?'SUCESSO!': 'AVISO!'}
                            </TextButton>
                        </TitleAlertView>
                        <DescriptionAlertView>
                            <TextDescriptionAlert
                                    style={{
                                        color: ColorFunction(typeModal)
                                    }}
                            >
                                {typeModal == 0?
                                    'Técnico aceito com sucesso!':
                                    'Técnico rejeitado!'
                                }
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

export default ScheduledDetail;