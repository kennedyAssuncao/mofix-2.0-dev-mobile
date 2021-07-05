import React from 'react';

import { 
    ImageContainer,
    BackImage,
    TextImage,
    TextValue,
    ViewText,
} from './styles';


import { ScrollView } from 'react-native-gesture-handler';

interface Item{
    id: string | number; 
    titleItem: string;
    img: any;
    value:number;
    type:string;
};

interface ListData{
    items:Item[];
}
interface Navigator{
    nav: any;
}

const ListComponent: React.FC<any> = (props:ListData, nav:any) => {
    const {items} = props;

    
    console.log(nav);
    return(
        <ScrollView 
                style={{
                    height:'100%',
                }} 
                contentContainerStyle={{
                    paddingHorizontal:20, 
                    paddingBottom:380, 
                    alignItems:"center",
                }}
                showsVerticalScrollIndicator={false}
        >
            {items.map((item) =>{
                return(
                <ImageContainer
                    onPress={()=>{
                        console.log('Apertou o component... id: ', item.id,'- Tipo: ', item.type);
                        //nav.navigate('ServicesComponent',{type:});
                    }}
                >
                    <BackImage
                        source={item.img}
                    >
                    <TextImage>
                        {item.titleItem}
                    </TextImage>
                        <ViewText>
                            <TextValue>
                                A partir de R${item.value},00
                            </TextValue>
                        </ViewText>
                    </BackImage>
                </ImageContainer>
                )
            })}
        </ScrollView>
  );
}
export default ListComponent;

