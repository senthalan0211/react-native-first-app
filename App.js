import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {isTrue ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
