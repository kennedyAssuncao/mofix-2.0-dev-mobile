import React, {useState} from 'react';
import { 
  Container, 
  ViewButton,
  ButtonFilter,
  TextButton,
  TypeService,
  ServiceDisc,
  Value,
  TextProfessional,
  ButtonContainer,
  DataContainer,
  InfoContainer,
  ServiceContainer,
  ColorTypeService,
  DayColor,
  MonthColor,
  HoursColor,
  ViewList,
  ViewAvatarInfo,
  AvatarImage,
  InfoProfessionalContainer,
} from './styles';

import { 
  FilterType, 
  HistoricDataClient,
  NameMonth,
  TypeView,
} from 'apk/tools';

import {ScrollView } from 'react-native-gesture-handler';

import { Rating, AirbnbRating } from 'react-native-ratings';


import theme from '../../../theme.json';


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


const agendadoComponent = (obj: any, navigation: any) =>{
  return(
    <ButtonContainer
      onPress={()=>{
        let view:string = TypeView(obj.type); 
        navigation.navigate(view, obj);
      }}
    >
    <DataContainer></DataContainer>
    <InfoContainer>
      <ServiceContainer>
        <ColorTypeService
          style={{
            color:color_type(obj.type)
          }}
        >
          {obj.type}
        </ColorTypeService>
      </ServiceContainer>
      <ServiceDisc>{obj.name_service}</ServiceDisc>
      <Value>{obj.value_service}</Value>
      <TextProfessional>{obj.professional_array.length} técnicos aceitaram o serviço</TextProfessional>
    </InfoContainer>
  </ButtonContainer>
  );
}


const otherTypeComponent = (obj: any, navigation: any) =>{
  return(
    <ButtonContainer
      onPress={() =>{
        let view:string = TypeView(obj.type); 
        navigation.navigate(view, obj);
      }}
    >
      <DataContainer>
        <DayColor
            style={{
              color: color_type(obj.type)
            }}
          >
            {obj.data.getDate()}
          </DayColor>
          <MonthColor
            style={{
              color: color_type(obj.type)
            }}
          >
              {NameMonth(obj.data.getMonth())}
          </MonthColor>
          <HoursColor
            style={{
              color: color_type(obj.type)
            }}
          >
            {obj.data.getHours()}:{obj.data.getMinutes()}
          </HoursColor>
      </DataContainer>
      <InfoContainer>
        <ServiceContainer>
          <ColorTypeService
            style={{
              color: color_type(obj.type)
            }}
          >
            {obj.type} 
          </ColorTypeService>
          <TypeService>- {obj.number_service}</TypeService>
        </ServiceContainer>
      
        <ServiceDisc>{obj.name_service}</ServiceDisc>
        <Value>{obj.value_service}</Value>
        {/* INSERIR O AVATAR JUNTO COM O RATE DO PROFISSIONAL */}
        <ViewAvatarInfo>
          <AvatarImage
                source={ {uri:obj.professional_array[0].avatar} }
          />
          <InfoProfessionalContainer>
              <ServiceDisc>
                {obj.professional_array[0].name}
              </ServiceDisc>

            <Rating 
              type='star'
              ratingCount={5}
              startingValue={obj.professional_array[0].rate}
              showRating={false}
              imageSize={18}
              fractions={2}
              readonly={true}
            />

          </InfoProfessionalContainer>

        </ViewAvatarInfo>

      </InfoContainer>
    </ButtonContainer>
  );
} 

const ListComponent= (props: Array<any>, navigation: any) =>{
  return(
    <ScrollView
        style={{
          height:'20%',
          padding:2,
          flex:1
        }}
        contentContainerStyle={{
          paddingHorizontal:'4%', 
          paddingBottom:'5%', 
          alignItems:"center",
      }}
      showsVerticalScrollIndicator={false}
    >
      {
        props.map((obj, index) =>{
          if(obj.type == 'Agendado'){
            return agendadoComponent(obj, navigation);
            }else{
              return otherTypeComponent(obj, navigation);
            }
        })
      }

    </ScrollView>

  );
}



const Historic: React.FC = ({navigation}: any) => {
  
  let [filterOptions, onChangeFilterOptions] = useState([1,0,0,0]);

  let data_client = HistoricDataClient(20);

  let [aux, setAux] = useState(data_client);

  return(
      <Container>
        <ViewButton>
          <ButtonFilter
            style={{
              backgroundColor: filterOptions[0] == 1? theme.colors['default-yellow'] : "white"
            }}
            onPress={()=>{
              onChangeFilterOptions([1,0,0,0]);
              setAux(data_client);
            }}
          >
            <TextButton>
              Todos
            </TextButton>
          </ButtonFilter>
          <ButtonFilter
            style={{
              backgroundColor: filterOptions[1] == 1? theme.colors['default-yellow'] : "white"
            }}
            onPress={()=>{
              onChangeFilterOptions([0,1,0,0]);
              
              //console.log("\n\n",FilterType(data_client, "Agendado"));
              let value:any = FilterType(data_client, "Agendado");
              setAux(value);
              
            }}
          >
            <TextButton>
              Agendados
            </TextButton>
          </ButtonFilter>
          <ButtonFilter
            style={{
              backgroundColor: filterOptions[2] == 1? theme.colors['default-yellow'] : "white"
            }}
            onPress={()=>{
              onChangeFilterOptions([0,0,1,0]);

              //console.log("\n\n",FilterType(data_client, "Iniciado"));
              let value:any =  FilterType(data_client, "Iniciado");
              setAux(value);
            }}
          >
            <TextButton>
              Iniciados
            </TextButton>
          </ButtonFilter>
          <ButtonFilter
            style={{
              backgroundColor: filterOptions[3] == 1? theme.colors['default-yellow'] : "white"
            }}
            onPress={()=>{
              onChangeFilterOptions([0,0,0,1]);

              //console.log("\n\n",FilterType(data_client, "Finalizado"));
              let value:any = FilterType(data_client, "Finalizado");
              setAux(value);
            }}
          >
            <TextButton>
              Finalizados
            </TextButton>
          </ButtonFilter>
        </ViewButton>

        {/*Chamando a lista de valores*/}
        {ListComponent(aux, navigation)}
      </Container>
  );
}


export default Historic;