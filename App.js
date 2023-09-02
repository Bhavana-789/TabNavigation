import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import AuthNavigator from './src/navigation/AuthNavigation';

const App = () => {
  const isAuthenicated = true;
  return (
    <NavigationContainer>
      {isAuthenicated ? <TabNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
