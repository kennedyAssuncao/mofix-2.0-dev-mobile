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
  ViewDateArray,
  TextData,
  ViewCheckBox,
  ViewTextData,
  ButtonConfirmService,
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


interface Datas{
  data_1: boolean;
  data_2: boolean;
  data_3: boolean;
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
  return obj.image_service.map((image:any) =>{
      return(
          <ImageService 
              source={{uri:image}}
          />
      );
  })
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

const data_number = (date_obj:Datas, ind:number) =>{
  switch(ind){
    case 0:
      return date_obj.data_1;
    case 1:
      return date_obj.data_2;
    case 2:
      return date_obj.data_3;
  }
}

const set_data_number = (ind:number) =>{
  switch(ind){
    case 0:
      return {data_1: true, data_2:false,data_3:false};
    case 1:
      return {data_1: false, data_2:true,data_3:false};
    case 2:
      return {data_1: false, data_2:false,data_3:true};;
  }
}

const DataScheduler = (obj: any, checkbox:Datas, setCheckBox:any, SetDataSelected: any)=>{
  return(
    obj.client_service.arr_data_requested.map((data:any, index: number) =>{
      console.log(data_number(checkbox, index));
      return(
        <>
        <ViewDate>
          <ViewTextData>
            
          <TextData>
              {data.getDate()} de {NameMonthComplete(data.getMonth())} às {data.getHours()}:{data.getMinutes()}
          </TextData>
          </ViewTextData>
          
          <ViewCheckBox>
          <CheckBox 
            value={data_number(checkbox, index)}
            //disabled={true}//Desativa o click
            onValueChange={ () => {
              setCheckBox(set_data_number(index)),
              SetDataSelected(data) 
            }}
            tintColors={{true: theme.colors['default-yellow'], false:theme.colors['default-yellow']}}
            style={{
              marginTop:'2%'}}
          />
          </ViewCheckBox>
        </ViewDate>
        </>
      )
    })
  );
}


const ServiceDetail: React.FC = ({navigation, route}: any) => {
  
  const obj:any = route.params;

  const [modal, SetModal] = useState(false);
  /* 0 - Sucesso , 1 - Aviso */
  const [typeModal, SetTypeModal] = useState(0);

  const [modalMessage, SetModalMessage] = useState('');

  const [colorMessage, SetColorMessage] = useState();

  /*Array com as três datas permitidas pelo aplicativo...*/
  const[checkbox, setCheckBox ]: [Datas, any] = useState({data_1: true, data_2: false, data_3: false});
  const [dataSelected, SetDataSelected] = useState();

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
                      {textArea(obj.client_service)}
                  </TextArea>
                  <ViewClientDetail>
                      <ClientText>
                          Quantidade: {obj.quantity_items}{'\n'}
                          Cliente: {obj.client_service.name}{'\n'}
                      </ClientText>
                  </ViewClientDetail>
              </ViewText>

            {/*Data do serviço*/}
            <ViewDateService>
                <ViewIcon>
                    <MaterialIcons 
                        name="date-range" 
                        size={24} 
                        color="black" 
                    />
                    <TextName>
                      Data/Horários Disponíveis    
                    </TextName>
                </ViewIcon>
                <ViewDateArray>
                
                {DataScheduler(obj, checkbox, setCheckBox, SetDataSelected)}

              </ViewDateArray>
            </ViewDateService>

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
                          {obj.client_service.address_client.address}, {obj.client_service.address_client.number}{'\n'}
                          {obj.client_service.address_client.district}{'\n'}
                          {obj.client_service.address_client.city} - {obj.client_service.address_client.state}            
                  </TextAddress>

                  {/*Inserir maps aqui...*/}
              </ViewAddressService>


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
                      {ImageClientServices(obj.client_service)}
                  </ArrayImages>
              </ViewCamera>


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

              {/*

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

              
              */}

              <ViewServiceConfirm>
                <VisualizationButton>
                  <TextServiceConfirmName>
                    ACEITAR SERVIÇO
                  </TextServiceConfirmName>
                </VisualizationButton>
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

export default ServiceDetail;