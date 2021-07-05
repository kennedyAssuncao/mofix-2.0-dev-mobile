import React,{useState} from 'react';

import { 
    Container,
    ViewInfoProfessional,
    ContainerInfo,
    AvatarImage,
    TextName,
    DetailButton,
    ButtonName,
    ViewServiceInfo,
    TextInfo,
    ServiceBlock,
    ClickView,
} from './styles';

import { Rating, AirbnbRating } from 'react-native-ratings';

import CheckBox from '@react-native-community/checkbox';

const PaymentDetail: React.FC = ({navigation, route}:any) => {
  
    const obj:any = route.params;
    const[checkbox, setCheckBox] = useState(true);

    return(
    <Container>

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
                        ratingBackgroundColor='#d3d3d3'
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
        </ContainerInfo>
        <ViewServiceInfo>
            <TextInfo>
                Nome do Serviço
            </TextInfo>
            <ServiceBlock>
                <TextInfo>
                {obj.name_service}
                </TextInfo>
            </ServiceBlock>
        
            <TextInfo>
                O serviço está pronto?
            </TextInfo>
        
            <ClickView>
                <CheckBox
                    value={checkbox}
                    onValueChange={setCheckBox}
                    disabled
                    tintColors={{true:'#dbac00', false:'#dbac00'}}
                    style={{alignItems:"center", marginTop:'0.2%'}}
                />
                <TextInfo>
                    Sim
                </TextInfo>
            </ClickView>
            
            <TextInfo>
                Valor
            </TextInfo>
            <ServiceBlock>
                <TextInfo>
                {obj.value_service}
                </TextInfo>
            </ServiceBlock>
        

            <TextInfo>
                Parcelamento
            </TextInfo>
            <ServiceBlock>
                <TextInfo>
                {obj.installment_service}x
                </TextInfo>
            </ServiceBlock>

            
        </ViewServiceInfo>
    </Container>
  );
}

export default PaymentDetail;