import React, {useState} from 'react';
import { 
  Container, 
  ViewAddPhotoContainer, 
  TextMsg, 
  ButtonLogin, 
  TextButton, 
  ButtonAddPhoto, 
  ImagePhoto 
} from './styles';

const ServiceImage: React.FC = ({navigation}:any) => {

  return(
      <Container>
        <TextMsg>
          Anexe até 4 fotos para facilitar a visualização do serviço
        </TextMsg>

        <ViewAddPhotoContainer>
          <ButtonAddPhoto>
            <ImagePhoto
              resizeMode={'contain'} 
              source={require('../../../../Images/iconAddPhoto.png')}
            />
          </ButtonAddPhoto>

          <ButtonAddPhoto>
            <ImagePhoto
                resizeMode={'contain'} 
                source={require('../../../../Images/iconAddPhoto.png')}
              />
          </ButtonAddPhoto>
        </ViewAddPhotoContainer>
        
        <ViewAddPhotoContainer>
          <ButtonAddPhoto>
            <ImagePhoto
                resizeMode={'contain'} 
                source={require('../../../../Images/iconAddPhoto.png')}
              />
          </ButtonAddPhoto>
            <ImagePhoto
              resizeMode={'contain'} 
              source={require('../../../../Images/iconAddPhoto.png')}
            />
          <ButtonAddPhoto>
            <ImagePhoto
                resizeMode={'contain'} 
                source={require('../../../../Images/iconAddPhoto.png')}
              />
          </ButtonAddPhoto>
        </ViewAddPhotoContainer>


        <ButtonLogin>
            <TextButton>
              Confirmar
            </TextButton>
          </ButtonLogin>
      </Container>
  );
}


export default ServiceImage ;