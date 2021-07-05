import React,{
    useContext,
} from 'react';

import {
    Container,
    BackImage,
    ImageView,
    ButtonLogin,
    TextButton,
    ViewButton,
    CarouselView,
    ViewMsg,
    TextMsg,
} from './styles';
import Carousel from 'simple-carousel-react-native';

import UserContext from 'apk/Contexts/User';


const button:any = (name:string, screen:number, navigation:any)=>{

    const { state, actions } = useContext(UserContext);

    console.log(state);

    return (
        <ButtonLogin
            onPress={
                ()=>{
                    /*cliente = 1 | Profissional = 0*/
                    /*trocar o contexto(typeuser) de acordo com o screen...*/
                    actions.setUser({typeUser: screen});
                    navigation.navigate('Login', {user_type:screen});
                }
            }
        >
            <TextButton>
                {name}
            </TextButton>
        </ButtonLogin>
    );
}

const carousel_mesages = (mesages:Array<string>) =>{
    return(
        <CarouselView>
                <Carousel
                    height={'30%'}
                    backgroundColor='transparent'
                    color='white'
                    dimmedColor='#b8860b'
                    showBubbles={true}
                >
                    {mesages.map( msg =>{
                        return(
                            <ViewMsg>
                                <TextMsg>
                                    {msg}
                                </TextMsg>
                            </ViewMsg>
                        );
                    })}
                </Carousel>
        </CarouselView>
    );
}



const Principal: React.FC = ({navigation}:any) => {

    let msgs:Array<string> = [
            'Ajudamos você a \nencontrar o profissional ideal.\nE o profissional a encontrar você.',
            'Contrate serviços de marcenaria com rapidez,\n simplicidade e segurança.',
            'Escolha o serviço que necessita de forma\nsimples e rápida.',
            'Defina datas e horários para a realização\ndo serviço.',
            'Pague após a aprovação do serviço com toda\na segurança com o seu cartão de crédito.',
            'Profissional: encontre clientes próximos de\n você e receba de forma segura pelo aplicativo.'
    ];




    return (
    <Container>
        <ImageView>
            <BackImage
                source={require('../../Images/login_1920_1080.jpg')}
            >
                {carousel_mesages(msgs)}
                <ViewButton>
                    {button('Sou Profissional', 0,navigation)}
                    {button('Sou Cliente', 1, navigation)}
                </ViewButton>
            </BackImage>
        </ImageView>
    </Container>    
  );
}

export default Principal;




