import React,{
 useContext
} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//Importando Rotas das Views
import HomeApp from '../../View/HomeApp';
import Historic from '../../View/Historic';
import Profile from '../../View/Profile';
import Support from '../../View/Support';

//Imports Professional Session
import HistoricProfessional from 'apk/View/HistoricProfessional';
import HomeAppProfessional from 'apk/View/HomeAppProfessional';


import {
  AntDesign,
  FontAwesome,
  Octicons,
} from '@expo/vector-icons'; 
import UserContext from 'root/app/Contexts/User';


const AuthStacks = createStackNavigator();


function HomeAuthStackViews(){
  return(
    <AuthStacks.Navigator>
      <AuthStacks.Screen name="HomeApp" component={HomeApp} />
    </AuthStacks.Navigator>
  );
}



const Tab = createBottomTabNavigator();

function AuthNavigation() {

  //const {typeUser} = useContext(UserContext);
  const { state, actions } = useContext(UserContext);
  const typeUser = state.User.typeUser;

  return (
      <Tab.Navigator
        tabBarOptions={{
            activeTintColor:'#ffcd38',
            inactiveTintColor:'black',
            iconStyle:{
              marginTop:8,
            },
            labelStyle:{
              fontSize:10,
              fontWeight:'bold',
              textAlign:'center',
              margin:2,
            }

        }}
      > 
        <Tab.Screen 
          name="Home"  
          component={
            typeUser === 1 ? HomeApp: HomeAppProfessional
          } 
          options={{
            tabBarLabel:"Novo Serviço",
            tabBarIcon:({color, size})=>(
              <AntDesign name="pluscircle" size={size} color={color} />
            )
          }}
        />

        {/* <Tab.Screen
          name="Home"
          component={HomeAuthStackViews}
          options={{
            tabBarLabel:"Novo Serviço",
            tabBarIcon:({color, size})=>(
              <AntDesign name="pluscircle" size={size} color={color} />
            )
          }}
        /> */}


        <Tab.Screen 
          name="Historic" 
          component={
            typeUser === 1 ? Historic: HistoricProfessional
          }
          options={{
            tabBarLabel:"Meu Histórico",
            tabBarIcon:({color, size})=>(
              <FontAwesome name="file-text" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel:"Meu Perfil",
            tabBarIcon:({color, size})=>(
              <Octicons name="person" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarLabel:"Suporte",
            tabBarIcon:({color, size})=>(
              <FontAwesome name="info-circle" size={size} color={color} />
            )
          }}
        />

        {/* <Tab.Screen name="HomeStack" component={AuthStackViews}/>
         */}
      </Tab.Navigator>
  );
}
export default AuthNavigation;
