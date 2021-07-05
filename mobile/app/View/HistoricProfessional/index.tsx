import React,{
    useState
} from 'react';

import { 
    Container, 
    ViewButton,
    ButtonFilter,
    TextButton,
    ServiceDisc,
    Value,
    ButtonContainer,
    DataContainer,
    InfoContainer,
    ServiceContainer,
    ColorTypeService,
    DayColor,
    MonthColor,
    HoursColor,
} from './styles';

import{ 
    FilterType, 
    HistoricDataProfessional,
    NameMonth,
    TypeView,
} from 'apk/tools';

import {ScrollView } from 'react-native-gesture-handler';

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



const data_view = (obj:any)=>{
  return(
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

  );
}




const serviceTypeComponent = (obj: any, navigation: any) =>{
    return(
      <ButtonContainer
        onPress={() =>{
          //let view:string = TypeView(obj.type); 
          navigation.navigate('HistoricProfessionalDetail', obj);
        }}
      >
        {
          (obj.type ==='Agendado' && !obj.approved)?
           <DataContainer /> : data_view(obj) 
        }
        <InfoContainer>
          <ServiceContainer>
            <ColorTypeService
              style={{
                color: color_type(obj.type)
              }}
            >
              {obj.type} 
            </ColorTypeService>
            {/*<TypeService>- {obj.number_service}</TypeService>*/}
          </ServiceContainer>
        
          <ServiceDisc>{obj.name_service}</ServiceDisc>
          
          <ServiceDisc>Cliente: {obj.client.name}</ServiceDisc>

          <Value>{obj.value_service}</Value>
          {/* INSERIR O AVATAR JUNTO COM O RATE DO PROFISSIONAL */}
          
  
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
            return serviceTypeComponent(obj, navigation);
          })
        }
      </ScrollView>
    );
}

const HistoricProfessional: React.FC = ({navigation}:any) => {

    let [filterOptions, onChangeFilterOptions] = useState([1,0,0,0]);
    let data_client = HistoricDataProfessional(20);
    let [aux, setAux] = useState(data_client);

    console.log(data_client[6]);
    
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

export default HistoricProfessional;