import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';

import Navigator from './app/Routes/Navigator';

import { ThemeProvider } from 'styled-components';

import theme from './theme.json';

//import UserContext from 'apk/Contexts/User';

import {UserProvider} from 'apk/Contexts/index';

export default function App() {

  /* CODE PUSH */
  useEffect(()=>{
    async function updateApp(){
      
      const {isAvailable} = await Updates.checkForUpdateAsync();

      if(isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    updateApp();
  },[]);

  return (
    <>
        <ThemeProvider theme={theme}>
          <StatusBar 
            barStyle="light-content" 
            //backgroundColor="#ffcd38"
            backgroundColor={theme.colors['default-yellow']}
          />
          {/* <Principal /> */}
          {/*<Navigator />*/}

          <UserProvider>
            <Navigator />
          </UserProvider>
        
        </ThemeProvider>
    </>
  );
}