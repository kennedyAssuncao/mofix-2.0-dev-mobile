import React from 'react';
import { 
  Container, 
  ImageAvatar, 
  NavigationButton, 
  ViewIcons, 
  TextButton 
} from './styles';
import { Rating } from 'react-native-ratings';
import { MaterialIcons, } from '@expo/vector-icons';

const Profile: React.FC = ({navigation}:any) => {
  return(
      <Container>
        <ImageAvatar
          resizeMode={'contain'} 
          source={require('apk/Images/avatar.png')}
      />

      <Rating
        type='custom'
        ratingCount={5}
        imageSize={30}
        showRating={false}
        fractions={2}
        readonly={true}
        tintColor='#F2F3F4'
        ratingBackgroundColor='#d3d3d3'
      />
      <NavigationButton
      style={{ marginTop: '20%'}}
      onPress={() =>
        // console.log('click')
        navigation.navigate('EditProfile')
      }
      >
        <ViewIcons>
          <MaterialIcons
              name= 'person' 
                size={24} 
                color="black"
                
          />
          <TextButton>Dados Pessoais</TextButton>
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="black" 
            style={{ marginRight: '5%' }}
          />
        </ViewIcons>
      </NavigationButton>
      <NavigationButton
      onPress={() =>
        // console.log('click')
        navigation.navigate('RedefinePassword')
      }>
        <ViewIcons>
          <MaterialIcons
              name= 'vpn-key' 
                size={24} 
                color="black"
          />
          <TextButton>Senha</TextButton>
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="black"
            style={{ marginRight: '5%' }}
          />
        </ViewIcons>
      </NavigationButton>

      <NavigationButton
      onPress={() =>
        console.log('click')
      }>
        <ViewIcons>
          <MaterialIcons
              name= 'location-on' 
                size={24} 
                color="black"
          />
          <TextButton>Endereço</TextButton>
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="black"
            style={{ marginRight: '5%' }}
          />
        </ViewIcons>
      </NavigationButton>


      
      <NavigationButton>
        <ViewIcons>
          <MaterialIcons
              name= 'credit-card' 
                size={24} 
                color="black"
          />
          <TextButton>Minha carteira</TextButton>
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="black" 
            style={{ marginRight: '5%' }}
          />
        </ViewIcons>
      </NavigationButton>
      
      <NavigationButton
        onPress={()=> {
          navigation.navigate('Principal');
        }}
      >
        <ViewIcons>
          <MaterialIcons
              name= 'exit-to-app' 
                size={24} 
                color="black"
          />
          <TextButton>Sair da conta</TextButton>
          <MaterialIcons 
            name="keyboard-arrow-right" 
            size={26} 
            color="black"
            style={{ marginRight: '5%' }} 
          />
        </ViewIcons>
      </NavigationButton>
      </Container>
  );
}


export default Profile;