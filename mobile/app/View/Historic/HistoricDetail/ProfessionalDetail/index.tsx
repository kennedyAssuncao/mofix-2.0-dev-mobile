import React from 'react';
import { 
    Container,
    ViewInfoProfessional,
    AvatarImage,
    TextName,
    ContainerAvatar,
    ViewExperience,
    ViewAddressProfessional,
    TextExperience,
    TextAddress,
    MessageButton,
    TextButton,
    ViewButton,
} from './styles';

import { 
    Rating, 
    AirbnbRating 
} from 'react-native-ratings';

import { 
    MaterialCommunityIcons, 
    MaterialIcons 
} from '@expo/vector-icons'; 

import theme from 'root/theme.json';

const InfoDescription = (obj: any) =>{
    let arr_desc = obj.experience.split(',');

    return arr_desc.map((e:any) =>{
        return(
            e+'\n'
        );
    })
};

const ProfessionalDetail: React.FC = ({navigation, route}: any) => {
  
    const obj:any = route.params;
    return (
      <Container>
            <ContainerAvatar>
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
                            imageSize={30}
                            fractions={2}
                            readonly={true}
                            tintColor='#F2F3F4'
                            ratingBackgroundColor={theme.colors['default-border-gray']}
                        />
                    </ViewInfoProfessional>
                </ContainerAvatar>
                <ViewExperience>
                        <MaterialCommunityIcons 
                            name="hammer" 
                            size={28} 
                            color="black" 
                        />

                        <TextExperience>
                            {InfoDescription(obj)}
                        </TextExperience>
                </ViewExperience>
                <ViewAddressProfessional>
                    <MaterialIcons 
                                name="location-on" 
                                size={28} 
                                color="black" 
                            />
                    <TextAddress>
                        {obj.address_professional.address}, {obj.address_professional.number}{'\n'}
                        {obj.address_professional.district}{'\n'}
                        {obj.address_professional.city} - {obj.address_professional.state}

                    </TextAddress>
                </ViewAddressProfessional>                
                <ViewButton>    
                    <MessageButton
                        onPress={()=>{
                            console.log('Enviar para a tela de mensagem...');
                        }}
                    >
                        <TextButton>
                            ENVIAR MENSAGEM
                        </TextButton>
                    </MessageButton>
                </ViewButton>

      </Container>
    );
}

export default ProfessionalDetail;