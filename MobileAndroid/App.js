import React from 'react';
import {
  Text,
  StatusBar,
} from 'react-native';

import AppStack from './src/routes/AppSatck';




const App: () => React$Node = () => {
  return (
    <>
      <AppStack />
      <StatusBar style="light"/>
    </>
  );
};


export default App;
