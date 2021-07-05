import React from 'react';
import { 
    Container,
    TextMsg,
    Buttons,
    TextButton,
    ViewIcons,
} from './styles';
import { 
    MaterialIcons,
} from '@expo/vector-icons'; 


interface Buttons{
    msg:string;
    icon:string;
    icon_pencil:boolean;
    navigateTo: string;
};

const ButtonsIcons = (
                        text:string, 
                        iconName:string, 
                        icon_pencil:boolean,
                        navigation:any,
                        navigateTo: string,
                    ) =>{
    return(
        <Buttons
        onPress={()=>{
            // console.log(navigateTo);
            navigation.navigate(navigateTo);
        }}
        >
            <ViewIcons>
                <MaterialIcons
                    name={iconName} 
                    size={24} 
                    color="black"
                />
                <TextButton>
                    {text}
                </TextButton>
                {icon_pencil !== false?
                    <MaterialIcons 
                        name="edit" 
                        size={24} 
                        color="black"
                    />:<></>
                }
            </ViewIcons>
        </Buttons>
    );
}


const ButtonsCreate=(array:Array<Buttons>, navigation:any) =>{
    return(
        
        array.map((item:Buttons) =>{
            // console.log(navigation)
          return ButtonsIcons(item.msg, item.icon, item.icon_pencil, navigation ,item.navigateTo);
        })
    );
}

const ServicesComponent: React.FC = ({navigation, route}: any) => {
    const{buttonsArray, titlePage}:any=route.params;
    return(
        <Container>
            <TextMsg>
                {titlePage}
            </TextMsg>
            {/* {ButtonsCreate(buttons_view)} */}
            
            {ButtonsCreate(buttonsArray, navigation)}

        </Container>
    );
}

export default ServicesComponent;