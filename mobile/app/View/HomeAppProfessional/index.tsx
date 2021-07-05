import React,{
    useEffect,
    useState,
} from 'react';
import { View, Text } from 'react-native';
import { 
    Container,
    ViewItem,
    ViewTitle,
    TextTitle,
    ViewImage,
    ViewInfo,
    TitleService,
    TextInfo,
    TextInfoColor,
    TextContainer,
} from './styles';
import * as Location from "expo-location";
import { ScrollView } from 'react-native-gesture-handler';

import {
    ServiceProfessionalData
} from 'apk/tools';
import ServiceDetail from './ServiceDetail';



const date_string_format = (date:any) =>{
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}


const distancia = (latA: number, latB: number, longA: number, longB :number) =>{
    return Math.pow(Math.pow((latB-latA),2) + Math.pow((longB-longA),2), (1/2) ).toFixed(3);
}

const ListComponent = (props: any, localization: any, navigation:any) =>{

    return(
        <ScrollView
            style={{
                height:'100%',
            }} 
            contentContainerStyle={{
                paddingHorizontal:20, 
                //paddingBottom:380, 
                paddingBottom:5,
                alignItems:"center",
            }}
            showsVerticalScrollIndicator={false}
        >
            {props.map(
                (item: any)=>{
                    return(
                        <ViewItem
                            onPress={
                                ()=>{
                                    console.log('item: ',item);
                                    navigation.navigate('ServiceDetail', item);
                                    
                                }
                            }
                        >
                            <ViewImage 
                                source={require('apk/Images/puxador.jpeg')}
                            />
                            <ViewInfo>
                                <TitleService>
                                    {item.name_service}
                                </TitleService>
                                <TextInfo>
                                    Cliente:{item.client_service.name}
                                </TextInfo>
                                <TextContainer>
                                    <TextInfo>
                                        Valor:
                                    </TextInfo>
                                    <TextInfoColor>
                                        {item.value_service}
                                    </TextInfoColor>
                                </TextContainer>
                                <TextInfo>
                                    Distância:{
                                        `${distancia( localization.latitude, item.client_service.address_client.location.latitude,
                                            localization.longitude, item.client_service.address_client.location.longitude)} Km`
                                    }
                                </TextInfo>
                                <TextInfo>
                                    Solicitado em:{date_string_format(item.service_request)}
                                </TextInfo>                                
                            </ViewInfo>
                        </ViewItem>
                    );
                }
            )}
        </ScrollView>
    );
}



const HomeAppProfessional: React.FC = ({navigation}:any) => {

    const [location, setLocation]:any = useState(null);
    const [errorMsg, setErrorMsg]:any = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    const data = ServiceProfessionalData(8);

    console.log(location);

    const localizaton_test = {
        latitude: -23.2498326424279,
        longitude: -45.91236220674641,
    }

    return(
        <Container>
            <ViewTitle>
                <TextTitle>
                    Serviços Disponíveis
                </TextTitle>
            </ViewTitle>
            {ListComponent(data, localizaton_test, navigation)}
        </Container>
    );
}

export default HomeAppProfessional;