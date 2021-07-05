import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native';
import theme from '../../../theme.json';

//Importando Rotas de Views e Componentes

import Principal from 'apk/View/Principal';
import Login from 'apk/View/Login';
import PasswordRecovery from 'apk/View/PasswordRecovery';

//Client Views
import ClientUserCreate from 'apk/View/ClientCreate/ClientUserCreate';
import ClientCodeNumber from 'apk/View/ClientCreate/ClientCodeNumber';
import DataClient from 'apk/View/ClientCreate/DataClient';
import SucessCreate from 'apk/View/ClientCreate/SucessCreate';


//ProfessionalViews
import ProfessionalUserCreate from '../../View/ProfessionalCreate/ProfessionalUserCreate';
import CodeValidation from '../../View/ProfessionalCreate/CodeValidation';
import ProfessionalData from '../../View/ProfessionalCreate/ProfessionalData';
import ProfessionalDataAddress from '../../View/ProfessionalCreate/ProfessionalDataAddress';
import ProfessionalExperience from '../../View/ProfessionalCreate/ProfessionalExperience';
import ProfessionalBankAccount from '../../View/ProfessionalCreate/ProfessionalBankAccount';
import ProfessionalPasswordAcess from '../../View/ProfessionalCreate/ProfessionalPasswordAcess';
import ServiceDescription from '../../View/HomeApp/ServiceDetail/ServiceDescription';
import ServiceImage from '../../View/HomeApp/ServiceDetail/ServiceImage';
import ServiceDateTime from '../../View/HomeApp/ServiceDetail/ServiceDateTime';

import AuthNavigation from 'apk/Routes/AuthNavigation';


import ServicesComponent from '../../Components/ServicesComponent';
import EditProfile from '../../View/EditProfile';
import RedefinePassword from '../../View/RedefinePassword';
import ServiceAddress from '../../View/HomeApp/ServiceDetail/ServiceAdress';
import Notification from '../../View/Support/Notifications';
import News from '../../View/Support/News';
import FAQ from '../../View/Support/FAQ';
import TermsOfUsage from '../../View/Support/TermsOfUsage';


/* Historic Views */
import PaymentDetail from 'apk/View/Historic/HistoricDetail/PaymentDetail';
import RequestDetail from 'apk/View/Historic/HistoricDetail/RequestDetail';
import ProfessionalDetail from 'apk/View/Historic/HistoricDetail/ProfessionalDetail';
import ScheduledDetail from 'apk/View/Historic/HistoricDetail/ScheduledDetail';
import ImagesServiceDetail from 'apk/View/Historic/HistoricDetail/ImagesServiceDetail';

/*Historic  Professional View*/
import HistoricProfessionalDetail from 'apk/View/HistoricProfessional/HistoricProfessionalDetail';
import RescheduleView from 'apk/View/HistoricProfessional/HistoricProfessionalDetail/Details/RescheduleView';
import FinishView from 'apk/View/HistoricProfessional/HistoricProfessionalDetail/Details/FinishView';

import ServiceDetail from 'apk/View/HomeAppProfessional/ServiceDetail';


const Stack = createStackNavigator();

function Logo({value=false}:{value?:boolean}){
  return(
    <Image
      style={{marginLeft:value==true?'30%':'20%',width:140, height:90}}
      source={require('../../Images/iconeMofix.png')}
      resizeMode={'contain'}
    />
  )
}


function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal}  options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{title:'', headerTransparent:true}} />
        <Stack.Screen name="SucessCreate" component={SucessCreate} options={{title:'', headerTransparent:true}} />
        <Stack.Screen name="DataClient" component={DataClient} options={{title:'', headerTransparent:true}} />
        <Stack.Screen name="ClientCodeNumber" component={ClientCodeNumber} options={{title:'', headerTransparent:true}} />
        <Stack.Screen name="ClientUserCreate" component={ClientUserCreate} options={{title:'', headerTransparent:true}} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} options={{title:'', headerTransparent:true}} />

        <Stack.Screen name="ProfessionalUserCreate" component={ProfessionalUserCreate} options={{headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="CodeValidation" component={CodeValidation} options={{headerTitle: () => <Logo /> , headerStyle:{backgroundColor: theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="ProfessionalData" component={ProfessionalData} options={{headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="ProfessionalDataAddress" component={ProfessionalDataAddress} options={{headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="ProfessionalExperience" component={ProfessionalExperience} options={{ headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="ProfessionalBankAccount" component={ProfessionalBankAccount} options={{ headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />
        <Stack.Screen name="ProfessionalPasswordAcess" component={ProfessionalPasswordAcess} options={{ headerTitle: () => <Logo /> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}}} />

        {/*Desabilitando o botão voltar do lado esquerdo...*/}
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} options={{ headerTitle: () => <Logo value={true}/> , headerStyle:{backgroundColor:theme.colors['default-yellow'] ,}, headerLeft:()=>{return null} }}  />

        <Stack.Screen name="EditProfile"
          component={EditProfile}
          options={ ({route}:any)=>({
            title: 'Dados Pessoais',
            headerStyle:{
              backgroundColor:theme.colors['default-yellow'],
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:20,
            },
            })}
        />
        
        
        <Stack.Screen 
          name="RedefinePassword" 
          component={RedefinePassword} 
          options={ ({route}:any)=>({
            title: 'Senha',
            headerStyle:{
              backgroundColor:theme.colors['default-yellow'],
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:20,
            },
            })}
          />
        
        <Stack.Screen 
          name='ServicesComponent' 
          component={ServicesComponent} 
          options={ ({route}:any)=>({
                            title:route.params.type,
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='ServiceDescription' 
          component={ServiceDescription} 
          options={ ({route}:any)=>({
                            title: 'Puxadores',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='ServiceImage' 
          component={ServiceImage} 
          options={ ({route}:any)=>({
                            title: 'Puxadores',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='ServiceDateTime' 
          component={ServiceDateTime} 
          options={ ({route}:any)=>({
                            title: 'Puxadores',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='ServiceAddress' 
          component={ServiceAddress} 
          options={ ({route}:any)=>({
                            title: 'Puxadores',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />

      <Stack.Screen
          name='NotificationComponent'
          component={Notification}
          options={ ({route}:any)=>({
                            title: 'Notificações',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='NewsComponent' 
          component={News} 
          options={ ({route}:any)=>({
                            title: 'Novidades',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen 
          name='FAQComponent' 
          component={FAQ} 
          options={ ({route}:any)=>({
                            title: 'Perguntas Frequentes',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />
        <Stack.Screen
          name='TermsOfUsageComponent'
          component={TermsOfUsage}
          options={ ({route}:any)=>({
                            title: 'Termos de Uso',
                            headerStyle:{
                              backgroundColor:theme.colors['default-yellow'],
                            },
                            headerTitleAlign:"center",
                            headerTitleStyle:{
                              fontSize:20,
                            },
                    })}
        />

        <Stack.Screen
          name="PaymentDetail"
          component={PaymentDetail}
          options={{
              title:'Pagar Serviço',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen
          name="RequestDetail"
          component={RequestDetail}
          options={{
              title:'Detalhes do Pedido',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen
          name="ProfessionalDetail"
          component={ProfessionalDetail}
          options={{
              title:'Perfil Técnico',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen
          name="ScheduledDetail"
          component={ScheduledDetail}
          options={{
              title:'Detalhes do Pedido',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />
        <Stack.Screen
          name="ImagesServiceDetail"
          component={ImagesServiceDetail}
          options={{
              title:'Detalhes do Pedido',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen 
          name="HistoricProfessionalDetail" 
          component={HistoricProfessionalDetail} 
          options={{ 
              title:'Ver Serviço',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen 
          name="RescheduleView" 
          component={RescheduleView} 
          options={{ 
              title:'Reagendamento',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />
        <Stack.Screen 
          name="FinishView" 
          component={FinishView} 
          options={{ 
              title:'Finalizar Serviço',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

        <Stack.Screen 
          name="ServiceDetail" 
          component={ServiceDetail} 
          options={{ 
              title:'Detalhes do Serviço',
              headerStyle:{
                backgroundColor:theme.colors['default-yellow'],
              },
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:20,
              },
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Navigator;
